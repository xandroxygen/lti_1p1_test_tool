export type LtiLaunchParams = {
  // OAuth params
  oauth_nonce: string;
  oauth_signature_method: string;
  oauth_timestamp: string;
  oauth_version: string;
  oauth_callback: string;
  oauth_consumer_key: string;
  oauth_signature: string;
  // Required Params
  lti_message_type: string;
  lti_version: string;
  resource_link_id: string;
  // Recommended Params
  resource_link_title?: string;
  user_id?: string;
  roles?: string;
  context_id?: string;
  context_title?: string;
  context_label?: string;
  lis_person_name_given?: string;
  lis_person_name_family?: string;
  lis_person_name_full?: string;
  lis_person_contact_email_primary?: string;
  launch_presentation_locale?: string;
  launch_presentation_document_target?: string;
  launch_presentation_width?: string;
  launch_presentation_height?: string;
  launch_presentation_return_url?: string;
  tool_consumer_info_product_family_code?: string;
  tool_consumer_info_version?: string;
  tool_consumer_instance_guid?: string;
  tool_consumer_instance_name?: string;
  tool_consumer_instance_contact_email?: string;
  // Optional params
  resource_link_description?: string;
  user_image?: string;
  context_type?: string;
  launch_presentation_css_url?: string;
  tool_consumer_instance_description?: string;
  tool_consumer_instance_url?: string;
  placement?: string;
  data?: string;
  // Optional params present in ContentItemSelectionRequest
  content_item_return_url?: string;
  accept_media_types?: string;
  accept_multiple?: string;
  accept_presentation_document_targets?: string;
  accept_unsigned?: string;
  auto_create?: string;
  ext_lti_assignment_id?: string;
};

export const REQUIRED_PARAMS = [
  "lti_message_type",
  "lti_version",
  "resource_link_id",
];
export const RECOMMENDED_PARAMS = [
  "resource_link_title",
  "user_id",
  "roles",
  "context_id",
  "context_title",
  "context_label",
  "lis_person_name_given",
  "lis_person_name_family",
  "lis_person_name_full",
  "lis_person_contact_email_primary",
  "launch_presentation_locale",
  "launch_presentation_document_target",
  "launch_presentation_width",
  "launch_presentation_height",
  "launch_presentation_return_url",
  "tool_consumer_info_product_family_code",
  "tool_consumer_info_version",
  "tool_consumer_instance_guid",
  "tool_consumer_instance_name",
  "tool_consumer_instance_contact_email",
];
export const OPTIONAL_PARAMS = [
  "resource_link_description",
  "user_image",
  "context_type",
  "launch_presentation_css_url",
  "tool_consumer_instance_description",
  "tool_consumer_instance_url",
];

export const getType = (param: string) => {
  if (param.includes("custom_")) {
    return "Custom";
  }
  if (param.includes("ext_")) {
    return "Extension";
  }
  if (param.includes("oauth_")) {
    return "Authorization";
  }
  if (REQUIRED_PARAMS.includes(param)) {
    return "Required";
  }
  if (RECOMMENDED_PARAMS.includes(param)) {
    return "Recommended";
  }
  if (OPTIONAL_PARAMS.includes(param)) {
    return "Optional";
  }
  return "Unknown";
};
