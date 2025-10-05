import { ActionFunction } from "@remix-run/node";
import { useActionData } from "@remix-run/react";
import invariant from "tiny-invariant";
import { stateCookie } from "~/cookies";
import { verify } from "~/jwt.server";

export const action: ActionFunction = async ({ request }) => {
  const formData = await request.formData();
  const idToken = formData.get("id_token")?.toString();
  const ltiStorageTarget = formData.get("lti_storage_target")?.toString();
  invariant(idToken, "expected id_token");

  const launchData = await verify(idToken);

  const cookieHeader = request.headers.get("Cookie");
  const stateFromCookie = await stateCookie.parse(cookieHeader);
  const stateFromLaunch = formData.get("state")?.toString();
  invariant(
    stateFromCookie === stateFromLaunch,
    "state does not match; do you have cookies disabled?"
  );

  return {
    launchData,
    ltiStorageTarget,
  };
};

export default function Launch() {
  const data = useActionData();
  const launchData = data?.launchData;
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
      <textarea
        readOnly
        rows={50}
        cols={130}
        value={JSON.stringify(launchData, null, 2)}
      />
    </div>
  );
}
