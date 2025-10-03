import {ActionFunction, LoaderFunction} from "@remix-run/node";
import {Form, useActionData, useLoaderData} from "@remix-run/react";
import {Placement, PLACEMENTS} from "~/placements.server";
import {buildXML, PlacementOptions, XMLOptions} from "~/xml.server";
import {buildErrorTracker, SerializedErrorTracker} from "~/xmlBuilder/errorTracker.server";
import {Field} from "~/xmlBuilder/Field";
import {Header, PlacementsList, Visibility, XMLDisplay} from "~/xmlBuilder/misc";
import {PlacementField} from "~/xmlBuilder/PlacementField";
import buildValidators from "~/xmlBuilder/validators.server";

type IndexData = {
  xml: string;
  errorTracker: SerializedErrorTracker;
  placements: Placement[];
};

export const action: ActionFunction = async ({ request }) => {
  const body = await request.formData();
  const getParam = (p: string) => body.get(p) as string;
  const getBooleanParam = (p: string) => Array.from(body.keys()).includes(p);
  const getPlacementParam = (placement: string, p: string) =>
    body.get(`${placement}[${p}]`) as string;

  const placementOptions: PlacementOptions[] = PLACEMENTS.filter(
    (p) => getPlacementParam(p.key, "included") === "on"
  ).map((p) => ({
    key: p.key,
    messageType: getPlacementParam(p.key, "message_type"),
    visibility: getPlacementParam(p.key, "visibility"),
  }));

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
    placements: placementOptions,
  };

  const errorTracker = buildErrorTracker();
  const validators = buildValidators();
  errorTracker.add("custom_fields", validators.customFields(opts.customFields));

  return {
    xml: errorTracker.hasErrors() ? errorTracker.text : buildXML(opts),
    errorTracker: errorTracker.toJSON(),
    placements: PLACEMENTS,
  } as IndexData;
};

/**
 * Loader is only called on initial page load and so only
 * needs to supply empty data
 */
export const loader: LoaderFunction = () => {
  return {
    xml: buildXML({} as XMLOptions),
    errorTracker: buildErrorTracker().toJSON(),
    placements: PLACEMENTS,
  } as IndexData;
};

export default function Index() {
  const actionData = useActionData<IndexData>();
  const loaderData = useLoaderData<IndexData>();
  const data = actionData || loaderData;
  
  const xml = data.xml;
  const placements = data.placements || [];
  const errorTracker = data.errorTracker;

  return (
    <div style={{ fontFamily: "system-ui, sans-serif", lineHeight: "1.4" }}>
      <Header></Header>
      <h3>Configuration</h3>
      <p>
        (See the{" "}
        <a href="https://canvas.instructure.com/doc/api/file.tools_xml.html">
          Canvas API docs
        </a>{" "}
        for information on these options)
      </p>
      {errorTracker?.hasErrors && (
        <p style={{ color: "red" }}>{errorTracker.text}</p>
      )}
      <Form method="post">
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
          <Visibility name="visibility"></Visibility>
          <Field
            name="Custom Fields"
            description="(key=value, one per line)"
            error={errorTracker?.errors?.custom_fields}
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
          <PlacementsList>
            {placements.map((p) => (
              <PlacementField
                key={p.key}
                placement={p}
                active={p.key === "course_navigation"}
              ></PlacementField>
            ))}
          </PlacementsList>
        </table>
        <button style={{ marginTop: "2em" }} type="submit">
          Generate
        </button>
      </Form>
      <XMLDisplay xml={xml} error={errorTracker?.hasErrors || false}></XMLDisplay>
    </div>
  );
}
