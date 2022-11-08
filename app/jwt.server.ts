import jwt from "jsonwebtoken";
import jwksClient from "jwks-rsa";
import config from "./config.server";
import invariant from "tiny-invariant";

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
