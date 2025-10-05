import { Placement } from "~/placements.server";
import { Field } from "./Field";
import { Visibility } from "./misc";

export type PlacementProps = {
  placement: Placement;
  active: boolean;
};

export const PlacementField = ({
  placement,
  active = false,
}: PlacementProps) => {
  const subProp = (k: string) => `${placement.key}[${k}]`;

  return (
    <>
      <Field name="">
        <b>{placement.name}</b>
      </Field>
      <Field name="Included">
        <input
          name={subProp("included")}
          type="checkbox"
          defaultChecked={active}
        ></input>
      </Field>
      <Field name="Message Type">
        <select name={subProp("message_type")}>
          {(placement.types || ["basic_lti_request"]).map((type) => (
            <option key={type} value={type}>
              {type}
            </option>
          ))}
        </select>
      </Field>
      <Visibility name={subProp("visibility")}></Visibility>
    </>
  );
};
