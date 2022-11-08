import { useEffect, useRef } from "react";
import { ActionFunction, useActionData } from "remix";
import invariant from "tiny-invariant";
import config from "~/config.server";
import { v4 as uuid } from "uuid";

type OIDCAuthRequest = {
  url: string;
  params: LoginRequestData;
};

type LoginRequestData = {
  scope: string;
  response_type: string;
  client_id: string;
  redirect_uri: string;
  login_hint: string;
  lti_message_hint: string;
  state: string;
  response_mode: string;
  nonce: string;
  prompt: string;
};

type LoginParams = {
  client_id: string;
  login_hint: string;
  lti_message_hint: string;
};

const requestData = (
  params: LoginParams,
  client_id: string,
  redirect_uri: string,
  state: string,
  nonce: string
): LoginRequestData => ({
  scope: "openid",
  response_type: "id_token",
  response_mode: "form_post",
  prompt: "none",
  ...params,
  redirect_uri,
  client_id,
  state,
  nonce,
});

export const action: ActionFunction = async ({
  request,
}): Promise<OIDCAuthRequest> => {
  const body = await request.formData();
  const params = Object.fromEntries(body) as LoginParams;
  invariant(params.client_id, "expected client_id");
  invariant(params.login_hint, "expected login_hint");
  invariant(params.lti_message_hint, "expected lti_message_hint");

  const env = config();
  const state = uuid();
  const nonce = uuid();
  // todo: store state and nonce for later verification

  return {
    url: env.OIDC_AUTH_REQUEST_URL,
    params: requestData(
      params,
      params.client_id,
      env.LAUNCH_URL_1_3,
      state,
      nonce
    ),
  };
};

export default function Login() {
  const data = useActionData<OIDCAuthRequest>();
  invariant(data, "expected LoginData");

  const ref = useRef<HTMLFormElement>(null);
  useEffect(() => {
    ref.current?.submit();
  });

  return (
    <form ref={ref} action={data.url} method="post">
      {Object.entries(data.params).map(([k, v]) => (
        <input key={k} type="hidden" name={k} value={v} />
      ))}
    </form>
  );
}
