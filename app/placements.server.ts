export const BASIC_LTI_REQUEST = "basic_lti_request";
export const CONTENT_ITEM_SELECTION = "content_item_selection";
export const CONTENT_ITEM_SELECTION_REQUEST = "content_item_selection_request";

export const PLACEMENTS = [
  { key: "account_navigation", name: "Account Navigation" },
  {
    key: "assignment_menu",
    name: "Assignment Menu",
    types: [CONTENT_ITEM_SELECTION, BASIC_LTI_REQUEST],
  },
  {
    key: "assignment_selection",
    name: "Assignment Selection",
    types: [CONTENT_ITEM_SELECTION_REQUEST, BASIC_LTI_REQUEST],
  },
  {
    key: "collaboration",
    name: "Collaboration",
    types: [CONTENT_ITEM_SELECTION_REQUEST, BASIC_LTI_REQUEST],
  },
  {
    key: "course_assignments_menu",
    name: "Course Assignments Menu",
    types: [BASIC_LTI_REQUEST],
  },
  { key: "course_home_sub_navigation", name: "Course Home Sub Navigation" },
  { key: "course_navigation", name: "Course Navigation" },
  {
    key: "course_settings_sub_navigation",
    name: "Course Settings Sub Navigation",
  },
  {
    key: "discussion_topic_menu",
    name: "Discussion Menu",
    types: [CONTENT_ITEM_SELECTION, BASIC_LTI_REQUEST],
  },
  {
    key: "editor_button",
    name: "Editor Button",
    types: [CONTENT_ITEM_SELECTION_REQUEST, BASIC_LTI_REQUEST],
  },
  {
    key: "file_menu",
    name: "File Menu",
    types: [CONTENT_ITEM_SELECTION, BASIC_LTI_REQUEST],
  },
  { key: "global_navigation", name: "Global Navigation" },
  {
    key: "homework_submission",
    name: "Homework Submission",
    types: [CONTENT_ITEM_SELECTION_REQUEST, BASIC_LTI_REQUEST],
  },
  {
    key: "link_selection",
    name: "Link Selection",
    types: [CONTENT_ITEM_SELECTION_REQUEST, BASIC_LTI_REQUEST],
  },
  {
    key: "migration_selection",
    name: "Migration Selection",
    types: [CONTENT_ITEM_SELECTION_REQUEST, BASIC_LTI_REQUEST],
  },
  {
    key: "module_menu",
    name: "Module Menu",
    types: [CONTENT_ITEM_SELECTION, BASIC_LTI_REQUEST],
  },
  { key: "post_grades", name: "Post Grades" },
  {
    key: "quiz_menu",
    name: "Quiz Menu",
    types: [CONTENT_ITEM_SELECTION, BASIC_LTI_REQUEST],
  },
  {
    key: "similarity_detection",
    name: "Similarity Detection",
    types: [BASIC_LTI_REQUEST],
  },
  {
    key: "submission_type_selection",
    name: "Submission Type Selection",
    types: [CONTENT_ITEM_SELECTION_REQUEST, BASIC_LTI_REQUEST],
  },
  { key: "tool_configuration", name: "Tool Configuration" },
  { key: "user_navigation", name: "User Navigation" },
  {
    key: "wiki_page_menu",
    name: "Wiki Page Menu",
    types: [CONTENT_ITEM_SELECTION, BASIC_LTI_REQUEST],
  },
];
