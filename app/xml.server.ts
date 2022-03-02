import getConfig from "./config.server";

const config = getConfig();

export type XMLOptions = {
  title?: string;
  description?: string;
  domain?: string;
  launchUrl?: string;
  privacyLevel?: string;
  placements?: string[];
};

const defaults: XMLOptions = {
  title: "LTI 1.1 Test Tool",
  description: "the most basic 1.1 tool ever",
  domain: config.DOMAIN,
  launchUrl: config.LAUNCH_URL,
  privacyLevel: "public",
  placements: ["course_navigation"],
};

const placementXML = (p: string) => `
<lticm:options name="${p}">
    <lticm:property name="enabled">true</lticm:property>
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
  const finalOpts = { ...defaults, ...opts };

  return `<?xml version="1.0" encoding="UTF-8"?>
        <cartridge_basiclti_link ${headerProps}>
            <blti:launch_url>http://localhost:3000/launch</blti:launch_url>
            <blti:title>${finalOpts.title}</blti:title>
            <blti:description>${finalOpts.description}</blti:description>
            <blti:extensions platform="canvas.instructure.com">
                <lticm:property name="domain">${
                  finalOpts.domain
                }</lticm:property>
                <lticm:property name="text">${finalOpts.title}</lticm:property>
                <lticm:property name="oauth_compliant">true</lticm:property>
                <lticm:property name="privacy_level">${
                  finalOpts.privacyLevel
                }</lticm:property>
                ${finalOpts.placements?.map((p) => placementXML(p))}
            </blti:extensions>
        </cartridge_basiclti_link>
    </xml>`;
};
