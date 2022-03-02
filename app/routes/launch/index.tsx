import { ActionFunction, redirect } from "remix";
import { storeLaunch } from "~/localStorage.server";
import { LtiLaunchParams } from "~/ltiLaunchParams";

export const action: ActionFunction = async ({ request }) => {
  const formData = await request.formData();
  const launchData = Object.fromEntries(formData) as LtiLaunchParams;
  const id = launchData.oauth_nonce;
  storeLaunch(id, launchData);
  return redirect(`/launch/${id}`);
};
