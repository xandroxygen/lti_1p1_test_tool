import { ActionFunction } from "@remix-run/node";
import { Form, useActionData } from "@remix-run/react";
import { LtiLaunchParams } from "~/ltiLaunchParams";
import { useEffect, useRef } from "react";
import invariant from "tiny-invariant";

export const action: ActionFunction = async ({ request }) => {
  const formData = await request.formData();
  return Object.fromEntries(formData) as LtiLaunchParams;
};

/*
 * Provides a different 1.1 launch url for testing overrides.
 * Redirects to the standard 1.1 launch url to display the launch data.
 */
export default function Launch2() {
  const data = useActionData<LtiLaunchParams>();
  invariant(data, "expected LTI launch data");

  const ref = useRef<HTMLFormElement>(null);
  useEffect(() => {
    ref.current?.submit();
  });

  return (
    <Form ref={ref} action="/launch" method="post">
      {Object.entries(data).map(([k, v]) => (
        <input key={k} type="hidden" name={k} value={v} />
      ))}
    </Form>
  );
}
