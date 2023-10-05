import { ActionFunction, useActionData } from "remix";
import invariant from "tiny-invariant";
import { stateCookie } from "~/cookies";
import { verify,create } from "~/jwt.server";
import getConfig from "~/config.server";
import { v4 as uuid } from "uuid";

export const action: ActionFunction = async ({ request }) => {
  const formData = await request.formData();
  const idToken = formData.get("id_token")?.toString();
  const ltiStorageTarget = formData.get("lti_storage_target")?.toString();
  invariant(idToken, "expected id_token");

  const launchData = await verify(idToken);
  invariant(typeof launchData === "object", "expected launchData object")
  const config = getConfig();

  const contentItemUrl = `${config.LAUNCH_URL_1_3}?content_item`
  const isDeepLinkingRequest = launchData["https://purl.imsglobal.org/spec/lti/claim/message_type"] === "LtiDeepLinkingRequest";
  const dlClaim = "https://purl.imsglobal.org/spec/lti-dl/claim/deep_linking_settings"
  const deepLinkingUrl = launchData[dlClaim] && launchData[dlClaim].deep_link_return_url;

  const contentItem = {
    type: "ltiResourceLink",
    title: "1.3 test link item (link)",
    url: contentItemUrl,
    lineItem: {
      scoreMaximum: 5,
      resourceId: "test-resource-id",
      tag: "test-tag",
    }
  }

  const payload = {
    nonce: uuid(),
    "https://purl.imsglobal.org/spec/lti/claim/message_type": "LtiDeepLinkingResponse",
    "https://purl.imsglobal.org/spec/lti/claim/version": "1.3.0",
    "https://purl.imsglobal.org/spec/lti/claim/deployment_id": "deployment_id",
    "https://purl.imsglobal.org/spec/lti-dl/claim/content_items": [contentItem],
  }

  const deepLinkingJwt = await create(payload);

  const cookieHeader = request.headers.get("Cookie");
  const stateFromCookie = await stateCookie.parse(cookieHeader);
  const stateFromLaunch = formData.get("state")?.toString();
  // invariant(
  //   stateFromCookie === stateFromLaunch,
  //   "state does not match; do you have cookies disabled?"
  // );

  return {
    launchData,
    isDeepLinkingRequest,
    deepLinkingJwt,
    deepLinkingUrl,
    ltiStorageTarget,
  };
};

export default function Launch() {
  const data = useActionData();
  const launchData = data?.launchData;
  const deepLinkingJwt: string = data?.deepLinkingJwt;
  const isDeepLinkingRequest: boolean = data?.isDeepLinkingRequest;
  const deepLinkingUrl: string = data?.deepLinkingUrl;
  const ltiStorageTarget = data?.ltiStorageTarget || "Not Present";

  if (!launchData) {
    return (
      <div style={{ fontFamily: "system-ui, sans-serif" }}>
        <h1>LTI 1.3 Launch</h1>
        <p style={{ color: "red" }}>Launch corrupted, reload the page</p>
      </div>
    );
  }

  return (
    <div style={{ fontFamily: "system-ui, sans-serif" }}>
      <h1>LTI 1.3 Launch</h1>
      <div>
        <span>
          <strong>LTI Storage Target:</strong> {ltiStorageTarget}
        </span>
      </div>
      {isDeepLinkingRequest && (
        <form action={deepLinkingUrl} method="post">
          <input type="hidden" name="JWT" value={deepLinkingJwt} />
          <button type="submit">Send Content Item</button>
        </form>
      )}
      <textarea
        readOnly
        rows={50}
        cols={130}
        value={JSON.stringify(launchData, null, 2)}
      />
    </div>
  );
}
