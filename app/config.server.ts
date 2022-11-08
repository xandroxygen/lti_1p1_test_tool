import dotenv from "dotenv";
dotenv.config();

export default function config() {
  const DOMAIN = process.env.LTI_DOMAIN || "";
  const prefix = process.env.NODE_ENV === "production" ? "https://" : "http://";
  const baseUrl = `${prefix}${DOMAIN}`;
  const LAUNCH_URL = `${baseUrl}/launch`;
  const LAUNCH_URL_1_3 = `${baseUrl}/1_3/launch`;
  const JWK_URL = `${baseUrl}/1_3/jwks`;
  const OIDC_INITIATION_URL = `${baseUrl}/1_3/login`;
  const PUBLIC_JWK = JSON.parse(process.env.PUBLIC_JWK || "{}");
  const OIDC_AUTH_REQUEST_URL = process.env.OIDC_AUTH_REQUEST_URL || "";
  const PLATFORM_JWKS_URL = process.env.PLATFORM_JWKS_URL || "";

  return {
    DOMAIN,
    LAUNCH_URL,
    LAUNCH_URL_1_3,
    PUBLIC_JWK,
    OIDC_AUTH_REQUEST_URL,
    JWK_URL,
    OIDC_INITIATION_URL,
    PLATFORM_JWKS_URL,
  };
}
