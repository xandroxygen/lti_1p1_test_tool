import { ActionFunction, useActionData } from "remix";
import { getType, LtiLaunchParams } from "~/ltiLaunchParams";
import {
  CONTENT_ITEM_SELECTION_REQUEST,
  CONTENT_ITEM_SELECTION,
} from "~/placements.server";
import getConfig from "~/config.server";

export const action: ActionFunction = async ({ request }) => {
  const formData = await request.formData();
  const launchData = Object.fromEntries(formData) as LtiLaunchParams;
  const config = getConfig();
  return {
    launchData,
    contentItemUrl: `${config.LAUNCH_URL}?content_item`,
    messageTypes: {
      CONTENT_ITEM_SELECTION_REQUEST,
      CONTENT_ITEM_SELECTION,
    },
  };
};

export default function Launch() {
  const data = useActionData();
  const launchData: LtiLaunchParams = data?.launchData;
  const { CONTENT_ITEM_SELECTION_REQUEST, CONTENT_ITEM_SELECTION } =
    data?.messageTypes || {};
  const contentItemUrl: string = data?.contentItemUrl;

  if (!launchData) {
    return (
      <div style={{ fontFamily: "system-ui, sans-serif" }}>
        <h1>LTI 1.1 Launch</h1>
        <p style={{ color: "red" }}>Launch corrupted, reload the page</p>
      </div>
    );
  }

  const isContentItemRequest =
    launchData.lti_message_type === CONTENT_ITEM_SELECTION_REQUEST;

  const displayParams = Object.entries(launchData || {}).map(
    ([key, value]) => ({
      key,
      value,
      type: getType(key),
    })
  );

  const contentItemResponse = {
    lti_message_type: CONTENT_ITEM_SELECTION,
    lti_version: launchData.lti_version,
    oauth_version: launchData.oauth_version,
    oauth_nonce: launchData.oauth_nonce,
    oauth_timestamp: launchData.oauth_timestamp,
    oauth_consumer_key: launchData.oauth_consumer_key,
    oauth_callback: launchData.oauth_callback,
    oauth_signature_method: launchData.oauth_signature_method,
    oauth_signature: launchData.oauth_signature,
    data: launchData.data,
    content_items: encodeURIComponent(
      JSON.stringify({
        "@context": "http://purl.imsglobal.org/ctx/lti/v1/ContentItem",
        "@graph": [
          {
            "@type": "LtiLinkItem",
            title: "1.1 test content item",
            url: contentItemUrl,
            mediaType: "application/vnd.ims.lti.v1.ltilink",
          },
        ],
      })
    ),
  };

  return (
    <div style={{ fontFamily: "system-ui, sans-serif" }}>
      <h1>LTI 1.1 Launch</h1>
      {isContentItemRequest && (
        <div>
          <h3 style={{ color: "blue" }}>Content Item Selection</h3>
          <form action={launchData.content_item_return_url} method="post">
            {Object.entries(contentItemResponse).map(([k, v]) => (
              <input key={k} type="hidden" name={k} value={v} />
            ))}
            <button type="submit">Return Content Item to Canvas</button>
          </form>
        </div>
      )}
      <h3>Launch Parameters</h3>
      <table>
        <thead>
          <tr>
            <th>Parameter</th>
            <th>Value</th>
            <th>Type</th>
          </tr>
        </thead>
        <tbody>
          {displayParams.map(({ key, value, type }) => (
            <tr key={key}>
              <td>
                <b>{key}:</b>
              </td>
              <td>{value}</td>
              <td>{type}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}
