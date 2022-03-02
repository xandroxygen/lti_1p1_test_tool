import { Form, LoaderFunction, useLoaderData } from "remix";
import { PLACEMENTS } from "~/placements.server";
import { buildXML, XMLOptions } from "~/xml.server";

export const loader: LoaderFunction = async ({ request }) => {
  const url = new URL(request.url);
  const getParam = (p: string) => url.searchParams.get(p) as string;

  const opts: XMLOptions = {
    title: getParam("tool_name"),
    domain: getParam("tool_domain"),
    launchUrl: getParam("launch_url"),
  };
  return {
    xml: buildXML(opts),
    placements: PLACEMENTS,
  };
};

export default function XMLBuilder() {
  const { xml } = useLoaderData();
  return (
    <div>
      <h1>XML Builder</h1>
      <p>
        Configure the tool however you like then copy the XML for tool
        installation. Use `key` and `secret` for the key and secret.
      </p>
      <p>(Fields left blank will have defaults provided)</p>
      <Form method="get">
        <table>
          <tr>
            <td>Tool Name</td>
            <td>
              <input name="tool_name" type="string"></input>
            </td>
          </tr>
          <tr>
            <td>Tool Domain</td>
            <td>
              <input name="tool_domain" type="string"></input>
            </td>
          </tr>
          <tr>
            <td>Launch URL</td>
            <td>
              <input name="launch_url" type="string"></input>
            </td>
          </tr>
          <tr>
            <td>Selection Height</td>
            <td>
              <input
                name="selection_height"
                type="number"
                defaultValue="500"
              ></input>
            </td>
          </tr>
          <tr>
            <td>Selection Width</td>
            <td>
              <input
                name="selection_width"
                type="number"
                defaultValue="500"
              ></input>
            </td>
          </tr>
        </table>
        <button type="submit">Create</button>
      </Form>
      <code>${xml}</code>
    </div>
  );
}
