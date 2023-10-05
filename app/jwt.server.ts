import jwt from "jsonwebtoken";
import jwksClient from "jwks-rsa";
import config from "./config.server";
import invariant from "tiny-invariant";
import jwkToPem from "jwk-to-pem";

export const verify = async (idToken: string) => {
  const env = config();
  const decodedToken = jwt.decode(idToken, { complete: true });
  invariant(decodedToken, "expected id_token to correctly decode");
  const kid = decodedToken.header.kid;

  const publicKey = await jwksClient({
    jwksUri: env.PLATFORM_JWKS_URL,
  }).getSigningKey(kid);

  const payload = jwt.verify(idToken, publicKey.getPublicKey(), {
    algorithms: ["RS256"],
  });
  invariant(payload, "id_token was not signed correctly");

  return payload;
};

export const create = async (payload: any) => {
  const env = config();
  const privateKey = env.PRIVATE_JWK;
  invariant(privateKey, "expected PRIVATE_JWK to be defined");

  const privatePem = jwkToPem(JSON.parse(privateKey), { private: true });
  const idToken = jwt.sign(payload, privatePem, {
    keyid: "inst-lti-test-2022-11-07",
    algorithm: "RS256",
    audience: `https://${env.ISS}`,
    issuer: env.CLIENT_ID,
    expiresIn: "5m",
  });
  return idToken;
}
