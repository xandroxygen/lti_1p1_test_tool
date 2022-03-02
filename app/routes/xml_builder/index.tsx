import { Form, LoaderFunction, useLoaderData } from "remix";
import { PLACEMENTS } from "~/placements.server";
import { buildXML, XMLOptions } from "~/xml.server";

export const loader: LoaderFunction = async ({ request }) => {
  const url = new URL(request.url);
  const getParam = (p: string) => url.searchParams.get(p) as string;

  const opts: XMLOptions = {
    title: getParam("tool_name"),
    description: getParam("description"),
    domain: getParam("tool_domain"),
    launchUrl: getParam("launch_url"),
    privacyLevel: getParam("privacy_level"),
    selectionHeight: getParam("selection_height"),
    selectionWidth: getParam("selection_width"),
  };
  return {
    xml: buildXML(opts),
    placements: PLACEMENTS,
  };
};

type FieldProps = {
  name: string;
  inputName: string;
  type?: string;
  defaultValue?: string;
};
const Field = ({
  name,
  inputName,
  type = "string",
  defaultValue = "",
}: FieldProps) => (
  <tr>
    <td>{name}</td>
    <td>
      <input name={inputName} type={type} defaultValue={defaultValue}></input>
    </td>
  </tr>
);

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
          <Field name="Tool Name" inputName="tool_name"></Field>
          <Field name="Description" inputName="description"></Field>
          <Field name="Tool Domain" inputName="tool_domain"></Field>
          <Field name="Launch URL" inputName="launch_url"></Field>
          <Field name="Privacy Level" inputName="privacy_level"></Field>
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
        </table>
        <button type="submit">Create</button>
      </Form>
      <code>${xml}</code>
    </div>
  );
}
