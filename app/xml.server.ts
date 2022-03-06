import getConfig from "./config.server";
import { BASIC_LTI_REQUEST, PLACEMENTS_BY_KEY } from "./placements.server";

const config = getConfig();

export type XMLOptions = {
  title: string;
  domain: string;
  launchUrl: string;
  description?: string;
  privacyLevel?: string;
  selectionHeight?: string;
  selectionWidth?: string;
  oauthCompliant?: boolean;
  visibility?: string;
  customFields?: string;
  placements?: PlacementOptions[];
};

export type PlacementOptions = {
  key: string;
  messageType: string;
  visibility?: string;
};

const defaults: XMLOptions = {
  title: "LTI 1.1 Test Tool",
  description: "the most basic 1.1 tool ever",
  domain: config.DOMAIN,
  launchUrl: config.LAUNCH_URL,
  privacyLevel: "public",
  placements: [{ key: "course_navigation", messageType: BASIC_LTI_REQUEST }],
};

const property = (name: string, value?: string | boolean) => {
  if (!value) {
    return "";
  }

  return `<lticm:property name="${name}">${value}</lticm:property>`;
};

const placementXML = (
  p: PlacementOptions,
  url: string,
  selectionWidth?: string,
  selectionHeight?: string
) => {
  return `
  <lticm:options name="${p.key}">
      ${property("enabled", "true")}
      ${property("url", `${url}?placement=${p.key}`)}
      ${property("text", `LTI 1.1 ${PLACEMENTS_BY_KEY[p.key].name}`)}
      ${property("selection_width", selectionWidth)}
      ${property("selection_height", selectionHeight)}
      ${property("message_type", p.messageType)}
      ${property("visibility", p.visibility)}
  </lticm:options>
  `;
};

const customFieldXML = (fields: string) => `
  <lticm:options name="custom_fields">
    ${fields
      .split("\n")
      .map((field) => {
        const [key, value] = field.trim().split("=");
        return property(key, value);
      })
      .join("")}
  </lticm:options>
`;

const headerProps = `
xmlns="http://www.imsglobal.org/xsd/imslticc_v1p0"
xmlns:blti = "http://www.imsglobal.org/xsd/imsbasiclti_v1p0"
xmlns:lticm ="http://www.imsglobal.org/xsd/imslticm_v1p0"
xmlns:lticp ="http://www.imsglobal.org/xsd/imslticp_v1p0"
xmlns:xsi = "http://www.w3.org/2001/XMLSchema-instance"
xsi:schemaLocation = "http://www.imsglobal.org/xsd/imslticc_v1p0 http://www.imsglobal.org/xsd/lti/ltiv1p0/imslticc_v1p0.xsd
http://www.imsglobal.org/xsd/imsbasiclti_v1p0 http://www.imsglobal.org/xsd/lti/ltiv1p0/imsbasiclti_v1p0.xsd
http://www.imsglobal.org/xsd/imslticm_v1p0 http://www.imsglobal.org/xsd/lti/ltiv1p0/imslticm_v1p0.xsd
http://www.imsglobal.org/xsd/imslticp_v1p0 http://www.imsglobal.org/xsd/lti/ltiv1p0/imslticp_v1p0.xsd"
`;

// compacts obj by removing null or empty string keys
// hacky and fun
// @ts-ignore
const compact = (obj) => {
  Object.keys(obj).forEach(
    (key) => (obj[key] === undefined || obj[key] === "") && delete obj[key]
  );
};

export const buildXML = (opts: XMLOptions) => {
  compact(opts);
  const {
    launchUrl,
    title,
    description,
    domain,
    privacyLevel,
    placements,
    selectionHeight,
    selectionWidth,
    oauthCompliant,
    visibility,
    customFields,
  } = { ...defaults, ...opts };

  return `<?xml version="1.0" encoding="UTF-8"?>
        <cartridge_basiclti_link ${headerProps}>
            <blti:launch_url>${launchUrl}</blti:launch_url>
            <blti:title>${title}</blti:title>
            <blti:description>${description}</blti:description>
            <blti:extensions platform="canvas.instructure.com">
                ${property("domain", domain)}
                ${property("text", title)}
                ${property("oauth_compliant", oauthCompliant)}
                ${property("privacy_level", privacyLevel)}
                ${property(
                  "visibility",
                  visibility === "none" ? false : visibility
                )}
                ${customFields ? customFieldXML(customFields) : ""}
                ${placements?.map((p) =>
                  placementXML(p, launchUrl, selectionWidth, selectionHeight)
                )}
            </blti:extensions>
        </cartridge_basiclti_link>
    </xml>`;
};
