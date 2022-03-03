import { Form, LoaderFunction, useLoaderData } from "remix";
import { PLACEMENTS, Placement } from "~/placements.server";
import { buildXML, XMLOptions } from "~/xml.server";

export const loader: LoaderFunction = async ({ request }) => {
  const url = new URL(request.url);
  const getParam = (p: string) => url.searchParams.get(p) as string;
  console.log(url.searchParams.keys());

  const opts: XMLOptions = {
    title: getParam("tool_name"),
    description: getParam("description"),
    domain: getParam("tool_domain"),
    launchUrl: getParam("launch_url"),
    privacyLevel: getParam("privacy_level"),
    selectionHeight: getParam("selection_height"),
    selectionWidth: getParam("selection_width"),
    oauthCompliant: Array.from(url.searchParams.keys()).includes(
      "oauth_compliant"
    ),
    placements: url.searchParams.getAll("placements"),
  };
  console.log({ opts });
  return {
    xml: buildXML(opts),
    placements: PLACEMENTS,
  };
};

type FieldProps = {
  name: string;
  inputName?: string;
  type?: string;
  defaultValue?: string;
  children?: React.ReactNode;
};
const Field = ({
  name,
  inputName,
  type = "string",
  defaultValue = "",
  children,
}: FieldProps) => (
  <tr>
    <td>{name}</td>
    <td>
      {children}
      {!children && (
        <input name={inputName} type={type} defaultValue={defaultValue}></input>
      )}
    </td>
  </tr>
);

export default function Index() {
  const { xml, placements }: { xml: string; placements: Placement[] } =
    useLoaderData();

  return (
    <div style={{ fontFamily: "system-ui, sans-serif", lineHeight: "1.4" }}>
      <h1>LTI 1.1 Test Tool</h1>
      <h3>Usage</h3>
      <p>
        Fill out the fields below to your heart's content to configure your
        tool. Fields left blank will use sane defaults.
      </p>
      <p>
        Course Navigation is the only default placement, so add more if you want
        them. Once you're ready, copy the XML from the bottom of the page.
      </p>
      <p>
        In a Canvas course or account, navigate to Settings -&gt; Apps -&gt; +
        App -&gt; Paste XML. Give the tool a name (I prefer LTI 1.1 Test Tool)
        and put `key` for the Consumer Key and `secret` for the Shared Secret,
        and paste the XML in the XML box.
      </p>
      <p>
        Save the tool and then reload the page. `LTI 1.1 Test Tool` should be a
        new option in the course nav sidebar. Launch it and you will be able to
        see all the launch parameters.
      </p>
      <h3>Configuration</h3>
      <Form method="get">
        <table>
          <Field name="Tool Name" inputName="tool_name"></Field>
          <Field name="Description" inputName="description"></Field>
          <Field name="Tool Domain" inputName="tool_domain"></Field>
          <Field name="Launch URL" inputName="launch_url"></Field>
          <Field name="Privacy Level" inputName="privacy_level"></Field>
          <Field
            name="OAuth Compliant (launch URLs with query parameters will not be copied to the POST body when true)"
            inputName="oauth_compliant"
            type="checkbox"
          ></Field>
          <Field
            name="Selection Height"
            inputName="selection_height"
            type="number"
            defaultValue="500"
          ></Field>
          <Field
            name="Selection Width"
            inputName="selection_width"
            type="number"
            defaultValue="500"
          ></Field>
          <Field name="Placements">
            <select name="placements" multiple>
              {placements.map((p) => (
                <option value={p.key}>{p.name}</option>
              ))}
            </select>
          </Field>
        </table>
        <button type="submit">Create</button>
      </Form>
      <h3>Generated XML</h3>
      <code>${xml}</code>
    </div>
  );
}
