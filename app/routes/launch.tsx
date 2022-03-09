import { ActionFunction, useActionData } from "remix";
import { getType, LtiLaunchParams } from "~/ltiLaunchParams";
import { CONTENT_ITEM_SELECTION_REQUEST } from "~/placements.server";

export const action: ActionFunction = async ({ request }) => {
  const formData = await request.formData();
  const launchData = Object.fromEntries(formData) as LtiLaunchParams;
  return {
    launchData,
  };
};

export default function Index() {
  const data = useActionData();
  const launchData: LtiLaunchParams = data?.launchData;

  let error;
  if (!launchData) {
    error = "Launch corrupted, reload the page";
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

  return (
    <div style={{ fontFamily: "system-ui, sans-serif" }}>
      <h1>LTI 1.1 Launch</h1>
      <p style={{ color: "red" }}>{error}</p>
      {isContentItemRequest && (
        <div>
          <h3>Content Item Selection</h3>
          <p style={{ color: "red" }}>(work in progress)</p>
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
        {displayParams.map(({ key, value, type }) => (
          <tr key={key}>
            <td>
              <b>{key}:</b>
            </td>
            <td>{value}</td>
            <td>{type}</td>
          </tr>
        ))}
      </table>
    </div>
  );
}
