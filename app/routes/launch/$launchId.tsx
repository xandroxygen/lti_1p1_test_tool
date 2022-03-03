import { LoaderFunction, useLoaderData } from "remix";
import { retrieveLaunch } from "~/localStorage.server";
import { getType, LtiLaunchParams } from "~/ltiLaunchParams";

export const loader: LoaderFunction = async ({ params }) => {
  return {
    launchData: retrieveLaunch(params.launchId || ""),
  };
};

export default function Launch() {
  const { launchData }: { launchData: LtiLaunchParams } = useLoaderData();
  let error;
  if (!launchData) {
    error = "Launch corrupted, reload the page";
  }
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
