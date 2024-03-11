import { LoaderFunction, json, useLoaderData } from "remix";
import config from "~/config.server";
import invariant from "tiny-invariant";

export const loader: LoaderFunction = async ({ request }) => {
  const url = new URL(request.url);

  const registrationToken = url.searchParams.get("registration_token");
  invariant(registrationToken, "expected registration_token in URL");

  // (GET oidc-config)
  const oidcConfigUrl = url.searchParams.get("openid_configuration");
  invariant(oidcConfigUrl, "expected openid_configuration in URL");
  const oidcResponse = await fetch(oidcConfigUrl, {
    headers: {
      Authorization: `Bearer ${registrationToken}`,
    },
  });
  const oidcConfig = await oidcResponse.json();

  // POST registration
  const registrationsUrl: string = oidcConfig.registration_endpoint;
  invariant(registrationsUrl, "expected registration_endpoint in OIDC config");

  const env = config();
  const registration = {
    response_types: ["id_token"],
    grant_types: ["implicit", "client_credentials"],
    token_endpoint_auth_method: "private_key_jwt",
    application_type: "web",
    scope: "",
    jwks_uri: env.JWK_URL,
    initiate_login_uri: env.OIDC_INITIATION_URL,
    redirect_uris: [env.LAUNCH_URL_1_3, `${env.LAUNCH_URL_1_3}2`],
    client_name: "Vercel Dynamic Registration",
    "https://purl.imsglobal.org/spec/lti-tool-configuration": {
      domain: env.DOMAIN,
      target_link_uri: env.LAUNCH_URL_1_3,
      description: "bare-bones 1.3 tool that kinda supports dynamic reg",
      "https://canvas.instructure.com/lti/privacy_level": "public",
      claims: [
        "sub",
        "iss",
        "name",
        "given_name",
        "family_name",
        "nickname",
        "picture",
        "email",
        "locale",
      ],
      messages: [
        {
          type: "LtiResourceLinkRequest",
          placements: ["course_navigation"],
        },
      ],
    },
  };

  const res = await fetch(registrationsUrl, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      Authorization: `Bearer ${registrationToken}`,
    },
    body: JSON.stringify(registration),
  });

  return json(await res.json());
};

export default function DynamicRegistration() {
  const data = useLoaderData();

  const close = () => {
    window.parent.postMessage({ subject: "org.imsglobal.lti.close" }, "*");
  };

  return (
    <div>
      <h1>Dynamic Registration</h1>
      <button onClick={close}>Confirm and Close</button>
      <pre>{JSON.stringify(data, null, 2)}</pre>
    </div>
  );
}
