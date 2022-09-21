export const BASIC_LTI_REQUEST = "basic_lti_request";
export const CONTENT_ITEM_SELECTION = "ContentItemSelection";
export const CONTENT_ITEM_SELECTION_REQUEST = "ContentItemSelectionRequest";

export type Placement = {
  key: string;
  name: string;
  types?: string[];
};

export const PLACEMENTS: Placement[] = [
  {
    key: "account_navigation",
    name: "Account Navigation",
    types: [BASIC_LTI_REQUEST],
  },
  {
    key: "assignment_edit",
    name: "Assignment Edit",
    types: [BASIC_LTI_REQUEST],
  },
  {
    key: "assignment_menu",
    name: "Assignment Menu",
    types: [CONTENT_ITEM_SELECTION_REQUEST, BASIC_LTI_REQUEST],
  },
  {
    key: "assignment_index_menu",
    name: "Assignment Index Menu (Commons Favorites)",
    types: [BASIC_LTI_REQUEST],
  },
  {
    key: "assignment_group_menu",
    name: "Assignment Group Menu (Commons Favorites)",
    types: [BASIC_LTI_REQUEST],
  },
  {
    key: "assignment_selection",
    name: "Assignment Selection",
    types: [CONTENT_ITEM_SELECTION_REQUEST, BASIC_LTI_REQUEST],
  },
  {
    key: "assignment_view",
    name: "Assignment View",
    types: [BASIC_LTI_REQUEST],
  },
  {
    key: "collaboration",
    name: "Collaboration",
    types: [CONTENT_ITEM_SELECTION_REQUEST, BASIC_LTI_REQUEST],
  },
  {
    key: "conference_selection",
    name: "Conference Selection",
    types: [BASIC_LTI_REQUEST],
  },
  {
    key: "course_assignments_menu",
    name: "Course Assignments Menu",
    types: [CONTENT_ITEM_SELECTION_REQUEST, BASIC_LTI_REQUEST],
  },
  {
    key: "course_home_sub_navigation",
    name: "Course Home Sub Navigation",
    types: [BASIC_LTI_REQUEST],
  },
  {
    key: "course_navigation",
    name: "Course Navigation",
    types: [BASIC_LTI_REQUEST],
  },
  {
    key: "course_settings_sub_navigation",
    name: "Course Settings Sub Navigation",
    types: [BASIC_LTI_REQUEST],
  },
  {
    key: "discussion_topic_menu",
    name: "Discussion Menu",
    types: [CONTENT_ITEM_SELECTION_REQUEST, BASIC_LTI_REQUEST],
  },
  {
    key: "discussion_topic_index_menu",
    name: "Discussion Topic Index Menu (Commons Favorites)",
    types: [BASIC_LTI_REQUEST],
  },
  {
    key: "editor_button",
    name: "Editor Button",
    types: [CONTENT_ITEM_SELECTION_REQUEST, BASIC_LTI_REQUEST],
  },
  {
    key: "file_menu",
    name: "File Menu",
    types: [CONTENT_ITEM_SELECTION_REQUEST, BASIC_LTI_REQUEST],
  },
  {
    key: "file_index_menu",
    name: "File Index Menu (Commons Favorites)",
    types: [BASIC_LTI_REQUEST],
  },
  {
    key: "global_navigation",
    name: "Global Navigation",
    types: [BASIC_LTI_REQUEST],
  },
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
    types: [CONTENT_ITEM_SELECTION_REQUEST, BASIC_LTI_REQUEST],
  },
  {
    key: "module_index_menu",
    name: "Module Index Menu (Commons Favorites)",
    types: [BASIC_LTI_REQUEST],
  },
  {
    key: "module_group_menu",
    name: "Module Group Menu (Commons Favorites)",
    types: [BASIC_LTI_REQUEST],
  },
  {
    key: "module_index_menu_modal",
    name: "Module Index Menu (Modal)",
    types: [BASIC_LTI_REQUEST],
  },
  {
    key: "module_menu_modal",
    name: "Module Menu (Modal)",
    types: [BASIC_LTI_REQUEST],
  },
  { key: "post_grades", name: "Post Grades", types: [BASIC_LTI_REQUEST] },
  {
    key: "quiz_menu",
    name: "Quiz Menu",
    types: [CONTENT_ITEM_SELECTION_REQUEST, BASIC_LTI_REQUEST],
  },
  {
    key: "quiz_index_menu",
    name: "Quiz Index Menu (Commons Favorites)",
    types: [BASIC_LTI_REQUEST],
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
  {
    key: "student_context_card",
    name: "Student Context Card",
    types: [BASIC_LTI_REQUEST],
  },
  {
    key: "tool_configuration",
    name: "Tool Configuration",
    types: [BASIC_LTI_REQUEST],
  },
  {
    key: "user_navigation",
    name: "User Navigation",
    types: [BASIC_LTI_REQUEST],
  },
  {
    key: "wiki_index_menu",
    name: "Wiki Index Menu (Commons Favorites)",
    types: [BASIC_LTI_REQUEST],
  },
  {
    key: "wiki_page_menu",
    name: "Wiki Page Menu",
    types: [CONTENT_ITEM_SELECTION_REQUEST, BASIC_LTI_REQUEST],
  },
];

export type PlacementHash = {
  [key: string]: Placement;
};

export const PLACEMENTS_BY_KEY = PLACEMENTS.reduce((acc: PlacementHash, p) => {
  acc[p.key] = p;
  return acc;
}, {});
