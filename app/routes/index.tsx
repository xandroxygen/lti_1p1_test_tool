import { Form, LoaderFunction, useLoaderData } from "remix";
import { PLACEMENTS, Placement } from "~/placements.server";
import { buildXML, XMLOptions } from "~/xml.server";

const validateCustomFields = (param: string | undefined): string => {
  if (!param) {
    return "";
  }

  const allFieldsValid = param.split("\n").every(
    // allow empty or whitespace-only lines
    // allow spaces before and after, but not in key or value
    // allow only one key=value pair per line
    // allow any characters in value, for example `$Canvas.course.id`
    (field) => /^\s*$|^\s*\w+=[^=\s]+\s*$/.test(field)
  );

  if (allFieldsValid) {
    return "";
  } else {
    return "Custom fields must be in key=value format and only one per line!";
  }
};

export const loader: LoaderFunction = async ({ request }) => {
  const url = new URL(request.url);
  const getParam = (p: string) => url.searchParams.get(p) as string;
  const getBooleanParam = (p: string) =>
    Array.from(url.searchParams.keys()).includes(p);

  const opts: XMLOptions = {
    title: getParam("tool_name"),
    description: getParam("description"),
    domain: getParam("tool_domain"),
    launchUrl: getParam("launch_url"),
    privacyLevel: getParam("privacy_level"),
    selectionHeight: getParam("selection_height"),
    selectionWidth: getParam("selection_width"),
    oauthCompliant: getBooleanParam("oauth_compliant"),
    visibility: getParam("visibility"),
    customFields: getParam("custom_fields"),
    placements: url.searchParams.getAll("placements"),
  };

  const errors: ErrorHash = {};
  const customFieldsError = validateCustomFields(opts.customFields);
  if (customFieldsError) {
    errors.custom_fields = customFieldsError;
  }

  if (hasErrors(errors)) {
    return {
      xml: "Fix errors before regenerating",
      errors,
      placements: PLACEMENTS,
    };
  }

  return {
    xml: buildXML(opts),
    placements: PLACEMENTS,
    errors: {},
  };
};

const hasErrors = (errors: ErrorHash) => Object.keys(errors).length > 0;

type FieldProps = {
  name: string;
  inputName?: string;
  type?: string;
  defaultValue?: string;
  description?: string;
  error?: string;
  children?: React.ReactNode;
};
const Field = ({
  name,
  inputName,
  type = "string",
  defaultValue = "",
  description = "",
  error = "",
  children,
}: FieldProps) => (
  <tr>
    <td>
      <span>{name}</span>
      {description && (
        <div
          style={{ maxWidth: "20em", paddingLeft: "1em", fontStyle: "italic" }}
        >
          {description}
        </div>
      )}
    </td>
    <td>
      {children}
      {!children && (
        <input name={inputName} type={type} defaultValue={defaultValue}></input>
      )}
    </td>
    <td>
      <p style={{ color: "red" }}>{error}</p>
    </td>
  </tr>
);

type ErrorHash = {
  [key: string]: string;
};

export default function Index() {
  const {
    xml,
    placements,
    errors,
  }: { xml: string; placements: Placement[]; errors: ErrorHash } =
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
      <p>
        (See the{" "}
        <a href="https://canvas.instructure.com/doc/api/file.tools_xml.html">
          Canvas API docs
        </a>{" "}
        for information on these options)
      </p>
      {hasErrors(errors) && (
        <p style={{ color: "red" }}>Fix errors before regenerating</p>
      )}
      <Form method="get">
        <table>
          <Field name="Tool Name" inputName="tool_name"></Field>
          <Field name="Description" inputName="description"></Field>
          <Field name="Tool Domain" inputName="tool_domain"></Field>
          <Field name="Launch URL" inputName="launch_url"></Field>
          <Field name="Privacy Level">
            <select name="privacy_level">
              <option value="public">public</option>
              <option value="name_only">name_only</option>
              <option value="anonymous">anonymous</option>
            </select>
          </Field>
          <Field
            name="OAuth Compliant"
            inputName="oauth_compliant"
            type="checkbox"
            description="Does not copy launch URL query parameters to POST body when true"
          ></Field>
          <Field name="Visibility">
            <select name="visibility">
              <option value="none">none</option>
              <option value="public">public</option>
              <option value="members">members</option>
              <option value="admins">admins</option>
            </select>
          </Field>
          <Field
            name="Custom Fields"
            description="(key=value, one per line)"
            error={errors.custom_fields}
          >
            <textarea name="custom_fields" rows={3} cols={24}></textarea>
          </Field>
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
        <button type="submit">Generate</button>
      </Form>
      <h3>Generated XML</h3>
      <code>{xml}</code>
    </div>
  );
}
