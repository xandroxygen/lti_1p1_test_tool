import { json, LoaderFunction } from "remix";
import config from "~/config.server";

export const loader: LoaderFunction = async () => {
  const keys = [config().PUBLIC_JWK];
  return json({ keys });
};
