import { json, LoaderFunction } from "@remix-run/node";
import config from "~/config.server";

export const loader: LoaderFunction = async () => {
  const env = config();
  return json({
    title: "LTI 1.1 to 1.3 Migration Test Tool",
    description:
      "bare-bones 1.3 tool that lives on the same domain as the LTI 1.1 Test Tool for migration testing purposes",
    public_jwk_url: env.JWK_URL,
    target_link_uri: env.LAUNCH_URL_1_3,
    oidc_initiation_url: env.OIDC_INITIATION_URL,
    extensions: [
      {
        platform: "canvas.instructure.com",
        domain: env.DOMAIN,
        tool_id: "lti-1p1-migration-test",
        settings: {
          text: "LTI 1.1->1.3 Migration Test",
          placements: [
            {
              placement: "assignment_selection",
              enabled: true,
              message_type: "LtiDeepLinkingRequest",
              target_link_uri: `${env.LAUNCH_URL_1_3}?placement=assignment_selection`,
            },
            {
              placement: "course_navigation",
              enabled: true,
              message_type: "LtiResourceLinkRequest",
              target_link_uri: `${env.LAUNCH_URL_1_3}?placement=course_navigation`,
            },
          ],
        },
      },
    ],
  });
};
