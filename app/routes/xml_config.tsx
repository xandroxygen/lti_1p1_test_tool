import { LoaderFunction, useLoaderData } from "remix";
import { buildXML } from "~/xml.server";

export const loader: LoaderFunction = async () => ({
  xml: buildXML({}), // use all defaults
});

export default function XMLConfig() {
  const { xml } = useLoaderData();
  return <code>{xml}</code>;
}
