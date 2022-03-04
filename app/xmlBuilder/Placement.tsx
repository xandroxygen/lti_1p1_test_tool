import { Placement } from "~/placements.server";
import { Field } from "./Field";

export type PlacementProps = {
  placement: Placement;
};

export const PlacementField = ({ placement }: PlacementProps) => {
  const subProp = (k: string) => `${placement.key}[${k}]`;

  return (
    <>
      <Field name="">
        <b>{placement.name}</b>
      </Field>
      <Field
        name="Included"
        type="checkbox"
        inputName={subProp("included")}
      ></Field>
    </>
  );
};
