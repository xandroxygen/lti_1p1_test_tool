var __create = Object.create;
var __defProp = Object.defineProperty;
var __getOwnPropDesc = Object.getOwnPropertyDescriptor;
var __getOwnPropNames = Object.getOwnPropertyNames;
var __getOwnPropSymbols = Object.getOwnPropertySymbols;
var __getProtoOf = Object.getPrototypeOf;
var __hasOwnProp = Object.prototype.hasOwnProperty;
var __propIsEnum = Object.prototype.propertyIsEnumerable;
var __defNormalProp = (obj, key, value) => key in obj ? __defProp(obj, key, { enumerable: true, configurable: true, writable: true, value }) : obj[key] = value;
var __spreadValues = (a, b) => {
  for (var prop in b || (b = {}))
    if (__hasOwnProp.call(b, prop))
      __defNormalProp(a, prop, b[prop]);
  if (__getOwnPropSymbols)
    for (var prop of __getOwnPropSymbols(b)) {
      if (__propIsEnum.call(b, prop))
        __defNormalProp(a, prop, b[prop]);
    }
  return a;
};
var __markAsModule = (target) => __defProp(target, "__esModule", { value: true });
var __esm = (fn, res) => function __init() {
  return fn && (res = (0, fn[Object.keys(fn)[0]])(fn = 0)), res;
};
var __commonJS = (cb, mod) => function __require() {
  return mod || (0, cb[Object.keys(cb)[0]])((mod = { exports: {} }).exports, mod), mod.exports;
};
var __export = (target, all) => {
  __markAsModule(target);
  for (var name in all)
    __defProp(target, name, { get: all[name], enumerable: true });
};
var __reExport = (target, module2, desc) => {
  if (module2 && typeof module2 === "object" || typeof module2 === "function") {
    for (let key of __getOwnPropNames(module2))
      if (!__hasOwnProp.call(target, key) && key !== "default")
        __defProp(target, key, { get: () => module2[key], enumerable: !(desc = __getOwnPropDesc(module2, key)) || desc.enumerable });
  }
  return target;
};
var __toModule = (module2) => {
  return __reExport(__markAsModule(__defProp(module2 != null ? __create(__getProtoOf(module2)) : {}, "default", module2 && module2.__esModule && "default" in module2 ? { get: () => module2.default, enumerable: true } : { value: module2, enumerable: true })), module2);
};

// node_modules/@remix-run/dev/compiler/shims/react.ts
var React;
var init_react = __esm({
  "node_modules/@remix-run/dev/compiler/shims/react.ts"() {
    React = __toModule(require("react"));
  }
});

// node_modules/remix/index.js
var require_remix = __commonJS({
  "node_modules/remix/index.js"(exports) {
    init_react();
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    var node = require("@remix-run/node");
    Object.defineProperty(exports, "createFileSessionStorage", {
      enumerable: true,
      get: function() {
        return node.createFileSessionStorage;
      }
    });
    Object.defineProperty(exports, "unstable_createFileUploadHandler", {
      enumerable: true,
      get: function() {
        return node.unstable_createFileUploadHandler;
      }
    });
    Object.defineProperty(exports, "unstable_createMemoryUploadHandler", {
      enumerable: true,
      get: function() {
        return node.unstable_createMemoryUploadHandler;
      }
    });
    Object.defineProperty(exports, "unstable_parseMultipartFormData", {
      enumerable: true,
      get: function() {
        return node.unstable_parseMultipartFormData;
      }
    });
    Object.defineProperty(exports, "__esModule", { value: true });
    var serverRuntime = require("@remix-run/server-runtime");
    Object.defineProperty(exports, "createCookie", {
      enumerable: true,
      get: function() {
        return serverRuntime.createCookie;
      }
    });
    Object.defineProperty(exports, "createCookieSessionStorage", {
      enumerable: true,
      get: function() {
        return serverRuntime.createCookieSessionStorage;
      }
    });
    Object.defineProperty(exports, "createMemorySessionStorage", {
      enumerable: true,
      get: function() {
        return serverRuntime.createMemorySessionStorage;
      }
    });
    Object.defineProperty(exports, "createSession", {
      enumerable: true,
      get: function() {
        return serverRuntime.createSession;
      }
    });
    Object.defineProperty(exports, "createSessionStorage", {
      enumerable: true,
      get: function() {
        return serverRuntime.createSessionStorage;
      }
    });
    Object.defineProperty(exports, "isCookie", {
      enumerable: true,
      get: function() {
        return serverRuntime.isCookie;
      }
    });
    Object.defineProperty(exports, "isSession", {
      enumerable: true,
      get: function() {
        return serverRuntime.isSession;
      }
    });
    Object.defineProperty(exports, "json", {
      enumerable: true,
      get: function() {
        return serverRuntime.json;
      }
    });
    Object.defineProperty(exports, "redirect", {
      enumerable: true,
      get: function() {
        return serverRuntime.redirect;
      }
    });
    Object.defineProperty(exports, "__esModule", { value: true });
    var react = require("@remix-run/react");
    Object.defineProperty(exports, "Form", {
      enumerable: true,
      get: function() {
        return react.Form;
      }
    });
    Object.defineProperty(exports, "Link", {
      enumerable: true,
      get: function() {
        return react.Link;
      }
    });
    Object.defineProperty(exports, "Links", {
      enumerable: true,
      get: function() {
        return react.Links;
      }
    });
    Object.defineProperty(exports, "LiveReload", {
      enumerable: true,
      get: function() {
        return react.LiveReload;
      }
    });
    Object.defineProperty(exports, "Meta", {
      enumerable: true,
      get: function() {
        return react.Meta;
      }
    });
    Object.defineProperty(exports, "NavLink", {
      enumerable: true,
      get: function() {
        return react.NavLink;
      }
    });
    Object.defineProperty(exports, "Outlet", {
      enumerable: true,
      get: function() {
        return react.Outlet;
      }
    });
    Object.defineProperty(exports, "PrefetchPageLinks", {
      enumerable: true,
      get: function() {
        return react.PrefetchPageLinks;
      }
    });
    Object.defineProperty(exports, "RemixBrowser", {
      enumerable: true,
      get: function() {
        return react.RemixBrowser;
      }
    });
    Object.defineProperty(exports, "RemixServer", {
      enumerable: true,
      get: function() {
        return react.RemixServer;
      }
    });
    Object.defineProperty(exports, "Scripts", {
      enumerable: true,
      get: function() {
        return react.Scripts;
      }
    });
    Object.defineProperty(exports, "ScrollRestoration", {
      enumerable: true,
      get: function() {
        return react.ScrollRestoration;
      }
    });
    Object.defineProperty(exports, "useActionData", {
      enumerable: true,
      get: function() {
        return react.useActionData;
      }
    });
    Object.defineProperty(exports, "useBeforeUnload", {
      enumerable: true,
      get: function() {
        return react.useBeforeUnload;
      }
    });
    Object.defineProperty(exports, "useCatch", {
      enumerable: true,
      get: function() {
        return react.useCatch;
      }
    });
    Object.defineProperty(exports, "useFetcher", {
      enumerable: true,
      get: function() {
        return react.useFetcher;
      }
    });
    Object.defineProperty(exports, "useFetchers", {
      enumerable: true,
      get: function() {
        return react.useFetchers;
      }
    });
    Object.defineProperty(exports, "useFormAction", {
      enumerable: true,
      get: function() {
        return react.useFormAction;
      }
    });
    Object.defineProperty(exports, "useHref", {
      enumerable: true,
      get: function() {
        return react.useHref;
      }
    });
    Object.defineProperty(exports, "useLoaderData", {
      enumerable: true,
      get: function() {
        return react.useLoaderData;
      }
    });
    Object.defineProperty(exports, "useLocation", {
      enumerable: true,
      get: function() {
        return react.useLocation;
      }
    });
    Object.defineProperty(exports, "useMatches", {
      enumerable: true,
      get: function() {
        return react.useMatches;
      }
    });
    Object.defineProperty(exports, "useNavigate", {
      enumerable: true,
      get: function() {
        return react.useNavigate;
      }
    });
    Object.defineProperty(exports, "useNavigationType", {
      enumerable: true,
      get: function() {
        return react.useNavigationType;
      }
    });
    Object.defineProperty(exports, "useOutlet", {
      enumerable: true,
      get: function() {
        return react.useOutlet;
      }
    });
    Object.defineProperty(exports, "useOutletContext", {
      enumerable: true,
      get: function() {
        return react.useOutletContext;
      }
    });
    Object.defineProperty(exports, "useParams", {
      enumerable: true,
      get: function() {
        return react.useParams;
      }
    });
    Object.defineProperty(exports, "useResolvedPath", {
      enumerable: true,
      get: function() {
        return react.useResolvedPath;
      }
    });
    Object.defineProperty(exports, "useSearchParams", {
      enumerable: true,
      get: function() {
        return react.useSearchParams;
      }
    });
    Object.defineProperty(exports, "useSubmit", {
      enumerable: true,
      get: function() {
        return react.useSubmit;
      }
    });
    Object.defineProperty(exports, "useTransition", {
      enumerable: true,
      get: function() {
        return react.useTransition;
      }
    });
  }
});

// <stdin>
__export(exports, {
  assets: () => assets_manifest_default,
  entry: () => entry,
  routes: () => routes
});
init_react();

// server-entry-module:@remix-run/dev/server-build
init_react();

// app/entry.server.tsx
var entry_server_exports = {};
__export(entry_server_exports, {
  default: () => handleRequest
});
init_react();
var import_server = __toModule(require("react-dom/server"));
var import_remix = __toModule(require_remix());
function handleRequest(request, responseStatusCode, responseHeaders, remixContext) {
  const markup = (0, import_server.renderToString)(/* @__PURE__ */ React.createElement(import_remix.RemixServer, {
    context: remixContext,
    url: request.url
  }));
  responseHeaders.set("Content-Type", "text/html");
  return new Response("<!DOCTYPE html>" + markup, {
    status: responseStatusCode,
    headers: responseHeaders
  });
}

// route:/Users/xmoffatt/code/lti_1p1_test_tool/app/root.tsx
var root_exports = {};
__export(root_exports, {
  default: () => App,
  meta: () => meta
});
init_react();
var import_remix2 = __toModule(require_remix());
var meta = () => {
  return { title: "LTI 1.1 Test Tool" };
};
function App() {
  return /* @__PURE__ */ React.createElement("html", {
    lang: "en"
  }, /* @__PURE__ */ React.createElement("head", null, /* @__PURE__ */ React.createElement("meta", {
    charSet: "utf-8"
  }), /* @__PURE__ */ React.createElement("meta", {
    name: "viewport",
    content: "width=device-width,initial-scale=1"
  }), /* @__PURE__ */ React.createElement(import_remix2.Meta, null), /* @__PURE__ */ React.createElement(import_remix2.Links, null)), /* @__PURE__ */ React.createElement("body", null, /* @__PURE__ */ React.createElement(import_remix2.Outlet, null), /* @__PURE__ */ React.createElement(import_remix2.ScrollRestoration, null), /* @__PURE__ */ React.createElement(import_remix2.Scripts, null), /* @__PURE__ */ React.createElement(import_remix2.LiveReload, null)));
}

// route:/Users/xmoffatt/code/lti_1p1_test_tool/app/routes/launch/$launchId.tsx
var launchId_exports = {};
__export(launchId_exports, {
  default: () => Launch,
  loader: () => loader
});
init_react();
var import_remix3 = __toModule(require_remix());

// app/localStorage.server.ts
init_react();
var import_node_cache = __toModule(require("node-cache"));
var launchStorage;
var init = () => {
  console.log("init cache");
  return new import_node_cache.default({
    stdTTL: 60,
    checkperiod: 120
  });
};
if (false) {
  launchStorage = init();
} else {
  if (!global.__launchStorage) {
    global.__launchStorage = init();
  }
  launchStorage = global.__launchStorage;
}
var storeLaunch = (key, params) => launchStorage.set(key, params);
var retrieveLaunch = (id) => launchStorage.take(id);

// app/ltiLaunchParams.ts
init_react();
var REQUIRED_PARAMS = [
  "lti_message_type",
  "lti_version",
  "resource_link_id"
];
var RECOMMENDED_PARAMS = [
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
  "tool_consumer_instance_contact_email"
];
var OPTIONAL_PARAMS = [
  "resource_link_description",
  "user_image",
  "context_type",
  "launch_presentation_css_url",
  "tool_consumer_instance_description",
  "tool_consumer_instance_url"
];
var getType = (param) => {
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

// route:/Users/xmoffatt/code/lti_1p1_test_tool/app/routes/launch/$launchId.tsx
var loader = async ({ params }) => {
  return {
    launchData: retrieveLaunch(params.launchId || "")
  };
};
function Launch() {
  const { launchData } = (0, import_remix3.useLoaderData)();
  let error;
  if (!launchData) {
    error = "Launch corrupted, reload the page";
  }
  const displayParams = Object.entries(launchData || {}).map(([key, value]) => ({
    key,
    value,
    type: getType(key)
  }));
  return /* @__PURE__ */ React.createElement("div", {
    style: { fontFamily: "system-ui, sans-serif" }
  }, /* @__PURE__ */ React.createElement("h1", null, "LTI 1.1 Launch"), /* @__PURE__ */ React.createElement("p", {
    style: { color: "red" }
  }, error), /* @__PURE__ */ React.createElement("table", null, /* @__PURE__ */ React.createElement("thead", null, /* @__PURE__ */ React.createElement("tr", null, /* @__PURE__ */ React.createElement("th", null, "Parameter"), /* @__PURE__ */ React.createElement("th", null, "Value"), /* @__PURE__ */ React.createElement("th", null, "Type"))), displayParams.map(({ key, value, type }) => /* @__PURE__ */ React.createElement("tr", {
    key
  }, /* @__PURE__ */ React.createElement("td", null, /* @__PURE__ */ React.createElement("b", null, key, ":")), /* @__PURE__ */ React.createElement("td", null, value), /* @__PURE__ */ React.createElement("td", null, type)))));
}

// route:/Users/xmoffatt/code/lti_1p1_test_tool/app/routes/launch/index.tsx
var launch_exports = {};
__export(launch_exports, {
  action: () => action
});
init_react();
var import_remix4 = __toModule(require_remix());
var action = async ({ request }) => {
  const formData = await request.formData();
  const launchData = Object.fromEntries(formData);
  const id = launchData.oauth_nonce;
  storeLaunch(id, launchData);
  return (0, import_remix4.redirect)(`/launch/${id}`);
};

// route:/Users/xmoffatt/code/lti_1p1_test_tool/app/routes/xml_config.tsx
var xml_config_exports = {};
__export(xml_config_exports, {
  default: () => XMLConfig,
  loader: () => loader2
});
init_react();
var import_remix5 = __toModule(require_remix());

// app/xml.server.ts
init_react();

// app/config.server.ts
init_react();
function config() {
  const domain = process.env.LTI_DOMAIN || "localhost:3000";
  const prefix = false ? "https://" : "http://";
  const launchURL = `${prefix}${domain}/launch`;
  return {
    DOMAIN: domain,
    LAUNCH_URL: launchURL
  };
}

// app/placements.server.ts
init_react();
var BASIC_LTI_REQUEST = "basic_lti_request";
var CONTENT_ITEM_SELECTION = "content_item_selection";
var CONTENT_ITEM_SELECTION_REQUEST = "content_item_selection_request";
var PLACEMENTS = [
  { key: "account_navigation", name: "Account Navigation" },
  {
    key: "assignment_menu",
    name: "Assignment Menu",
    types: [CONTENT_ITEM_SELECTION, BASIC_LTI_REQUEST]
  },
  {
    key: "assignment_selection",
    name: "Assignment Selection",
    types: [CONTENT_ITEM_SELECTION_REQUEST, BASIC_LTI_REQUEST]
  },
  {
    key: "collaboration",
    name: "Collaboration",
    types: [CONTENT_ITEM_SELECTION_REQUEST, BASIC_LTI_REQUEST]
  },
  {
    key: "course_assignments_menu",
    name: "Course Assignments Menu",
    types: [BASIC_LTI_REQUEST]
  },
  { key: "course_home_sub_navigation", name: "Course Home Sub Navigation" },
  { key: "course_navigation", name: "Course Navigation" },
  {
    key: "course_settings_sub_navigation",
    name: "Course Settings Sub Navigation"
  },
  {
    key: "discussion_topic_menu",
    name: "Discussion Menu",
    types: [CONTENT_ITEM_SELECTION, BASIC_LTI_REQUEST]
  },
  {
    key: "editor_button",
    name: "Editor Button",
    types: [CONTENT_ITEM_SELECTION_REQUEST, BASIC_LTI_REQUEST]
  },
  {
    key: "file_menu",
    name: "File Menu",
    types: [CONTENT_ITEM_SELECTION, BASIC_LTI_REQUEST]
  },
  { key: "global_navigation", name: "Global Navigation" },
  {
    key: "homework_submission",
    name: "Homework Submission",
    types: [CONTENT_ITEM_SELECTION_REQUEST, BASIC_LTI_REQUEST]
  },
  {
    key: "link_selection",
    name: "Link Selection",
    types: [CONTENT_ITEM_SELECTION_REQUEST, BASIC_LTI_REQUEST]
  },
  {
    key: "migration_selection",
    name: "Migration Selection",
    types: [CONTENT_ITEM_SELECTION_REQUEST, BASIC_LTI_REQUEST]
  },
  {
    key: "module_menu",
    name: "Module Menu",
    types: [CONTENT_ITEM_SELECTION, BASIC_LTI_REQUEST]
  },
  { key: "post_grades", name: "Post Grades" },
  {
    key: "quiz_menu",
    name: "Quiz Menu",
    types: [CONTENT_ITEM_SELECTION, BASIC_LTI_REQUEST]
  },
  {
    key: "similarity_detection",
    name: "Similarity Detection",
    types: [BASIC_LTI_REQUEST]
  },
  {
    key: "submission_type_selection",
    name: "Submission Type Selection",
    types: [CONTENT_ITEM_SELECTION_REQUEST, BASIC_LTI_REQUEST]
  },
  { key: "tool_configuration", name: "Tool Configuration" },
  { key: "user_navigation", name: "User Navigation" },
  {
    key: "wiki_page_menu",
    name: "Wiki Page Menu",
    types: [CONTENT_ITEM_SELECTION, BASIC_LTI_REQUEST]
  }
];
var PLACEMENTS_BY_KEY = PLACEMENTS.reduce((acc, p) => {
  acc[p.key] = p;
  return acc;
}, {});

// app/xml.server.ts
var config2 = config();
var defaults = {
  title: "LTI 1.1 Test Tool",
  description: "the most basic 1.1 tool ever",
  domain: config2.DOMAIN,
  launchUrl: config2.LAUNCH_URL,
  privacyLevel: "public",
  placements: ["course_navigation"]
};
var property = (name, value) => {
  if (!value) {
    return "";
  }
  return `<lticm:property name="${name}">${value}</lticm:property>`;
};
var placementMessageType = (p) => {
  const placement = PLACEMENTS_BY_KEY[p];
  if (!placement.types) {
    return BASIC_LTI_REQUEST;
  }
  if (placement.types.includes(CONTENT_ITEM_SELECTION_REQUEST)) {
    return CONTENT_ITEM_SELECTION_REQUEST;
  }
  if (placement.types.includes(CONTENT_ITEM_SELECTION)) {
    return CONTENT_ITEM_SELECTION;
  }
  return BASIC_LTI_REQUEST;
};
var placementXML = (p, url, selectionWidth, selectionHeight) => `
<lticm:options name="${p}">
    ${property("enabled", "true")}
    ${property("url", `${url}?placement=${p}`)}
    ${property("text", PLACEMENTS_BY_KEY[p].name)}
    ${property("selection_width", selectionWidth)}
    ${property("selection_height", selectionHeight)}
    ${property("message_type", placementMessageType(p))}
</lticm:options>
`;
var customFieldXML = (fields) => `
  <lticm:options name="custom_fields">
    ${fields.split("\n").map((field) => {
  const [key, value] = field.trim().split("=");
  return property(key, value);
}).join("")}
  </lticm:options>
`;
var headerProps = `
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
var compact = (obj) => {
  Object.keys(obj).forEach((key) => (obj[key] === void 0 || obj[key] === "") && delete obj[key]);
};
var buildXML = (opts) => {
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
    customFields
  } = __spreadValues(__spreadValues({}, defaults), opts);
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
                ${property("visibility", visibility === "none" ? false : visibility)}
                ${customFields ? customFieldXML(customFields) : ""}
                ${placements == null ? void 0 : placements.map((p) => placementXML(p, launchUrl, selectionWidth, selectionHeight))}
            </blti:extensions>
        </cartridge_basiclti_link>
    </xml>`;
};

// route:/Users/xmoffatt/code/lti_1p1_test_tool/app/routes/xml_config.tsx
var loader2 = async () => ({
  xml: buildXML({})
});
function XMLConfig() {
  const { xml } = (0, import_remix5.useLoaderData)();
  return /* @__PURE__ */ React.createElement("code", null, xml);
}

// route:/Users/xmoffatt/code/lti_1p1_test_tool/app/routes/index.tsx
var routes_exports = {};
__export(routes_exports, {
  default: () => Index,
  loader: () => loader3
});
init_react();
var import_remix6 = __toModule(require_remix());

// app/xmlBuilder/errorTracker.server.ts
init_react();
function buildErrorTracker() {
  const errors = {};
  const add = (key, message) => {
    if (message) {
      errors[key] = message;
    }
  };
  const hasErrors = () => Object.keys(errors).length > 0;
  const text = "Fix errors before regenerating";
  return {
    add,
    hasErrors,
    text,
    toJSON: () => ({ text, hasErrors: hasErrors(), errors })
  };
}

// route:/Users/xmoffatt/code/lti_1p1_test_tool/app/routes/index.tsx
var validateCustomFields = (param) => {
  if (!param) {
    return "";
  }
  const allFieldsValid = param.split("\n").every((field) => /^\s*$|^\s*\w+=[^=\s]+\s*$/.test(field));
  if (allFieldsValid) {
    return "";
  } else {
    return "Custom fields must be in key=value format and only one per line!";
  }
};
var loader3 = async ({ request }) => {
  const url = new URL(request.url);
  const getParam = (p) => url.searchParams.get(p);
  const getBooleanParam = (p) => Array.from(url.searchParams.keys()).includes(p);
  const opts = {
    title: getParam("tool_name"),
    description: getParam("description"),
    domain: getParam("tool_domain"),
    launchUrl: getParam("launch_url"),
    privacyLevel: getParam("privacy_level"),
    selectionHeight: getParam("selection_height"),
    selectionWidth: getParam("selection_width"),
    oauthCompliant: getBooleanParam("oauth_compliant"),
    visibility: getParam("visibility"),
    customFields: getParam("custom_fields"),
    placements: url.searchParams.getAll("placements")
  };
  const errorTracker = buildErrorTracker();
  errorTracker.add("custom_fields", validateCustomFields(opts.customFields));
  return {
    xml: errorTracker.hasErrors() ? errorTracker.text : buildXML(opts),
    errorTracker: errorTracker.toJSON(),
    placements: PLACEMENTS
  };
};
var Field = ({
  name,
  inputName,
  type = "string",
  defaultValue = "",
  description = "",
  error = "",
  children
}) => /* @__PURE__ */ React.createElement("tr", null, /* @__PURE__ */ React.createElement("td", null, /* @__PURE__ */ React.createElement("span", null, name), description && /* @__PURE__ */ React.createElement("div", {
  style: { maxWidth: "20em", paddingLeft: "1em", fontStyle: "italic" }
}, description)), /* @__PURE__ */ React.createElement("td", null, children, !children && /* @__PURE__ */ React.createElement("input", {
  name: inputName,
  type,
  defaultValue
})), /* @__PURE__ */ React.createElement("td", null, /* @__PURE__ */ React.createElement("p", {
  style: { color: "red" }
}, error)));
function Index() {
  const {
    xml,
    placements,
    errorTracker
  } = (0, import_remix6.useLoaderData)();
  return /* @__PURE__ */ React.createElement("div", {
    style: { fontFamily: "system-ui, sans-serif", lineHeight: "1.4" }
  }, /* @__PURE__ */ React.createElement("h1", null, "LTI 1.1 Test Tool"), /* @__PURE__ */ React.createElement("h3", null, "Usage"), /* @__PURE__ */ React.createElement("p", null, "Fill out the fields below to your heart's content to configure your tool. Fields left blank will use sane defaults."), /* @__PURE__ */ React.createElement("p", null, "Course Navigation is the only default placement, so add more if you want them. Once you're ready, copy the XML from the bottom of the page."), /* @__PURE__ */ React.createElement("p", null, "In a Canvas course or account, navigate to Settings -> Apps -> + App -> Paste XML. Give the tool a name (I prefer LTI 1.1 Test Tool) and put `key` for the Consumer Key and `secret` for the Shared Secret, and paste the XML in the XML box."), /* @__PURE__ */ React.createElement("p", null, "Save the tool and then reload the page. `LTI 1.1 Test Tool` should be a new option in the course nav sidebar. Launch it and you will be able to see all the launch parameters."), /* @__PURE__ */ React.createElement("h3", null, "Configuration"), /* @__PURE__ */ React.createElement("p", null, "(See the", " ", /* @__PURE__ */ React.createElement("a", {
    href: "https://canvas.instructure.com/doc/api/file.tools_xml.html"
  }, "Canvas API docs"), " ", "for information on these options)"), errorTracker.hasErrors && /* @__PURE__ */ React.createElement("p", {
    style: { color: "red" }
  }, errorTracker.text), /* @__PURE__ */ React.createElement(import_remix6.Form, {
    method: "get"
  }, /* @__PURE__ */ React.createElement("table", null, /* @__PURE__ */ React.createElement(Field, {
    name: "Tool Name",
    inputName: "tool_name"
  }), /* @__PURE__ */ React.createElement(Field, {
    name: "Description",
    inputName: "description"
  }), /* @__PURE__ */ React.createElement(Field, {
    name: "Tool Domain",
    inputName: "tool_domain"
  }), /* @__PURE__ */ React.createElement(Field, {
    name: "Launch URL",
    inputName: "launch_url"
  }), /* @__PURE__ */ React.createElement(Field, {
    name: "Privacy Level"
  }, /* @__PURE__ */ React.createElement("select", {
    name: "privacy_level"
  }, /* @__PURE__ */ React.createElement("option", {
    value: "public"
  }, "public"), /* @__PURE__ */ React.createElement("option", {
    value: "name_only"
  }, "name_only"), /* @__PURE__ */ React.createElement("option", {
    value: "anonymous"
  }, "anonymous"))), /* @__PURE__ */ React.createElement(Field, {
    name: "OAuth Compliant",
    inputName: "oauth_compliant",
    type: "checkbox",
    description: "Does not copy launch URL query parameters to POST body when true"
  }), /* @__PURE__ */ React.createElement(Field, {
    name: "Visibility"
  }, /* @__PURE__ */ React.createElement("select", {
    name: "visibility"
  }, /* @__PURE__ */ React.createElement("option", {
    value: "none"
  }, "none"), /* @__PURE__ */ React.createElement("option", {
    value: "public"
  }, "public"), /* @__PURE__ */ React.createElement("option", {
    value: "members"
  }, "members"), /* @__PURE__ */ React.createElement("option", {
    value: "admins"
  }, "admins"))), /* @__PURE__ */ React.createElement(Field, {
    name: "Custom Fields",
    description: "(key=value, one per line)",
    error: errorTracker.errors.custom_fields
  }, /* @__PURE__ */ React.createElement("textarea", {
    name: "custom_fields",
    rows: 3,
    cols: 24
  })), /* @__PURE__ */ React.createElement(Field, {
    name: "Selection Height",
    inputName: "selection_height",
    type: "number",
    defaultValue: "500"
  }), /* @__PURE__ */ React.createElement(Field, {
    name: "Selection Width",
    inputName: "selection_width",
    type: "number",
    defaultValue: "500"
  }), /* @__PURE__ */ React.createElement(Field, {
    name: "Placements"
  }, /* @__PURE__ */ React.createElement("select", {
    name: "placements",
    multiple: true
  }, placements.map((p) => /* @__PURE__ */ React.createElement("option", {
    value: p.key
  }, p.name))))), /* @__PURE__ */ React.createElement("button", {
    type: "submit"
  }, "Generate")), /* @__PURE__ */ React.createElement("h3", null, "Generated XML"), /* @__PURE__ */ React.createElement("code", null, xml));
}

// server-assets-manifest:@remix-run/dev/assets-manifest
init_react();
var assets_manifest_default = { "version": "bb7226de", "entry": { "module": "/build/entry.client-C4UL2FU2.js", "imports": ["/build/_shared/chunk-UXWMLIHL.js"] }, "routes": { "root": { "id": "root", "parentId": void 0, "path": "", "index": void 0, "caseSensitive": void 0, "module": "/build/root-4MVUCJPU.js", "imports": void 0, "hasAction": false, "hasLoader": false, "hasCatchBoundary": false, "hasErrorBoundary": false }, "routes/index": { "id": "routes/index", "parentId": "root", "path": void 0, "index": true, "caseSensitive": void 0, "module": "/build/routes/index-JQ5YQQQ6.js", "imports": ["/build/_shared/chunk-LGIV6Q47.js"], "hasAction": false, "hasLoader": true, "hasCatchBoundary": false, "hasErrorBoundary": false }, "routes/launch/$launchId": { "id": "routes/launch/$launchId", "parentId": "root", "path": "launch/:launchId", "index": void 0, "caseSensitive": void 0, "module": "/build/routes/launch/$launchId-EK6QJ5EG.js", "imports": ["/build/_shared/chunk-HRZLFHWQ.js"], "hasAction": false, "hasLoader": true, "hasCatchBoundary": false, "hasErrorBoundary": false }, "routes/launch/index": { "id": "routes/launch/index", "parentId": "root", "path": "launch", "index": true, "caseSensitive": void 0, "module": "/build/routes/launch/index-I3OZX3QG.js", "imports": ["/build/_shared/chunk-HRZLFHWQ.js"], "hasAction": true, "hasLoader": false, "hasCatchBoundary": false, "hasErrorBoundary": false }, "routes/xml_config": { "id": "routes/xml_config", "parentId": "root", "path": "xml_config", "index": void 0, "caseSensitive": void 0, "module": "/build/routes/xml_config-HV3UJT7K.js", "imports": ["/build/_shared/chunk-LGIV6Q47.js"], "hasAction": false, "hasLoader": true, "hasCatchBoundary": false, "hasErrorBoundary": false } }, "url": "/build/manifest-BB7226DE.js" };

// server-entry-module:@remix-run/dev/server-build
var entry = { module: entry_server_exports };
var routes = {
  "root": {
    id: "root",
    parentId: void 0,
    path: "",
    index: void 0,
    caseSensitive: void 0,
    module: root_exports
  },
  "routes/launch/$launchId": {
    id: "routes/launch/$launchId",
    parentId: "root",
    path: "launch/:launchId",
    index: void 0,
    caseSensitive: void 0,
    module: launchId_exports
  },
  "routes/launch/index": {
    id: "routes/launch/index",
    parentId: "root",
    path: "launch",
    index: true,
    caseSensitive: void 0,
    module: launch_exports
  },
  "routes/xml_config": {
    id: "routes/xml_config",
    parentId: "root",
    path: "xml_config",
    index: void 0,
    caseSensitive: void 0,
    module: xml_config_exports
  },
  "routes/index": {
    id: "routes/index",
    parentId: "root",
    path: void 0,
    index: true,
    caseSensitive: void 0,
    module: routes_exports
  }
};
// Annotate the CommonJS export names for ESM import in node:
0 && (module.exports = {
  assets,
  entry,
  routes
});
/**
 * @remix-run/node v1.2.1
 *
 * Copyright (c) Remix Software Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.md file in the root directory of this source tree.
 *
 * @license MIT
 */
/**
 * @remix-run/react v1.2.1
 *
 * Copyright (c) Remix Software Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.md file in the root directory of this source tree.
 *
 * @license MIT
 */
/**
 * @remix-run/server-runtime v1.2.1
 *
 * Copyright (c) Remix Software Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.md file in the root directory of this source tree.
 *
 * @license MIT
 */
//# sourceMappingURL=data:application/json;base64,ewogICJ2ZXJzaW9uIjogMywKICAic291cmNlcyI6IFsiLi4vbm9kZV9tb2R1bGVzL0ByZW1peC1ydW4vZGV2L2NvbXBpbGVyL3NoaW1zL3JlYWN0LnRzIiwgIi4uL25vZGVfbW9kdWxlcy9yZW1peC9pbmRleC5qcyIsICI8c3RkaW4+IiwgInNlcnZlci1lbnRyeS1tb2R1bGU6QHJlbWl4LXJ1bi9kZXYvc2VydmVyLWJ1aWxkIiwgIi4uL2FwcC9lbnRyeS5zZXJ2ZXIudHN4IiwgInJvdXRlOi9Vc2Vycy94bW9mZmF0dC9jb2RlL2x0aV8xcDFfdGVzdF90b29sL2FwcC9yb290LnRzeCIsICJyb3V0ZTovVXNlcnMveG1vZmZhdHQvY29kZS9sdGlfMXAxX3Rlc3RfdG9vbC9hcHAvcm91dGVzL2xhdW5jaC8kbGF1bmNoSWQudHN4IiwgIi4uL2FwcC9sb2NhbFN0b3JhZ2Uuc2VydmVyLnRzIiwgIi4uL2FwcC9sdGlMYXVuY2hQYXJhbXMudHMiLCAicm91dGU6L1VzZXJzL3htb2ZmYXR0L2NvZGUvbHRpXzFwMV90ZXN0X3Rvb2wvYXBwL3JvdXRlcy9sYXVuY2gvaW5kZXgudHN4IiwgInJvdXRlOi9Vc2Vycy94bW9mZmF0dC9jb2RlL2x0aV8xcDFfdGVzdF90b29sL2FwcC9yb3V0ZXMveG1sX2NvbmZpZy50c3giLCAiLi4vYXBwL3htbC5zZXJ2ZXIudHMiLCAiLi4vYXBwL2NvbmZpZy5zZXJ2ZXIudHMiLCAiLi4vYXBwL3BsYWNlbWVudHMuc2VydmVyLnRzIiwgInJvdXRlOi9Vc2Vycy94bW9mZmF0dC9jb2RlL2x0aV8xcDFfdGVzdF90b29sL2FwcC9yb3V0ZXMvaW5kZXgudHN4IiwgIi4uL2FwcC94bWxCdWlsZGVyL2Vycm9yVHJhY2tlci5zZXJ2ZXIudHMiLCAic2VydmVyLWFzc2V0cy1tYW5pZmVzdDpAcmVtaXgtcnVuL2Rldi9hc3NldHMtbWFuaWZlc3QiXSwKICAic291cmNlc0NvbnRlbnQiOiBbImltcG9ydCAqIGFzIFJlYWN0IGZyb20gXCJyZWFjdFwiO1xuZXhwb3J0IHsgUmVhY3QgfTtcbiIsICIvKipcbiAqIEByZW1peC1ydW4vbm9kZSB2MS4yLjFcbiAqXG4gKiBDb3B5cmlnaHQgKGMpIFJlbWl4IFNvZnR3YXJlIEluYy5cbiAqXG4gKiBUaGlzIHNvdXJjZSBjb2RlIGlzIGxpY2Vuc2VkIHVuZGVyIHRoZSBNSVQgbGljZW5zZSBmb3VuZCBpbiB0aGVcbiAqIExJQ0VOU0UubWQgZmlsZSBpbiB0aGUgcm9vdCBkaXJlY3Rvcnkgb2YgdGhpcyBzb3VyY2UgdHJlZS5cbiAqXG4gKiBAbGljZW5zZSBNSVRcbiAqL1xuJ3VzZSBzdHJpY3QnO1xuXG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ19fZXNNb2R1bGUnLCB7IHZhbHVlOiB0cnVlIH0pO1xuXG52YXIgbm9kZSA9IHJlcXVpcmUoJ0ByZW1peC1ydW4vbm9kZScpO1xuXG5cblxuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdjcmVhdGVGaWxlU2Vzc2lvblN0b3JhZ2UnLCB7XG4gIGVudW1lcmFibGU6IHRydWUsXG4gIGdldDogZnVuY3Rpb24gKCkgeyByZXR1cm4gbm9kZS5jcmVhdGVGaWxlU2Vzc2lvblN0b3JhZ2U7IH1cbn0pO1xuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICd1bnN0YWJsZV9jcmVhdGVGaWxlVXBsb2FkSGFuZGxlcicsIHtcbiAgZW51bWVyYWJsZTogdHJ1ZSxcbiAgZ2V0OiBmdW5jdGlvbiAoKSB7IHJldHVybiBub2RlLnVuc3RhYmxlX2NyZWF0ZUZpbGVVcGxvYWRIYW5kbGVyOyB9XG59KTtcbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAndW5zdGFibGVfY3JlYXRlTWVtb3J5VXBsb2FkSGFuZGxlcicsIHtcbiAgZW51bWVyYWJsZTogdHJ1ZSxcbiAgZ2V0OiBmdW5jdGlvbiAoKSB7IHJldHVybiBub2RlLnVuc3RhYmxlX2NyZWF0ZU1lbW9yeVVwbG9hZEhhbmRsZXI7IH1cbn0pO1xuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICd1bnN0YWJsZV9wYXJzZU11bHRpcGFydEZvcm1EYXRhJywge1xuICBlbnVtZXJhYmxlOiB0cnVlLFxuICBnZXQ6IGZ1bmN0aW9uICgpIHsgcmV0dXJuIG5vZGUudW5zdGFibGVfcGFyc2VNdWx0aXBhcnRGb3JtRGF0YTsgfVxufSk7XG5cbi8qKlxuICogQHJlbWl4LXJ1bi9zZXJ2ZXItcnVudGltZSB2MS4yLjFcbiAqXG4gKiBDb3B5cmlnaHQgKGMpIFJlbWl4IFNvZnR3YXJlIEluYy5cbiAqXG4gKiBUaGlzIHNvdXJjZSBjb2RlIGlzIGxpY2Vuc2VkIHVuZGVyIHRoZSBNSVQgbGljZW5zZSBmb3VuZCBpbiB0aGVcbiAqIExJQ0VOU0UubWQgZmlsZSBpbiB0aGUgcm9vdCBkaXJlY3Rvcnkgb2YgdGhpcyBzb3VyY2UgdHJlZS5cbiAqXG4gKiBAbGljZW5zZSBNSVRcbiAqL1xuJ3VzZSBzdHJpY3QnO1xuXG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ19fZXNNb2R1bGUnLCB7IHZhbHVlOiB0cnVlIH0pO1xuXG52YXIgc2VydmVyUnVudGltZSA9IHJlcXVpcmUoJ0ByZW1peC1ydW4vc2VydmVyLXJ1bnRpbWUnKTtcblxuXG5cbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAnY3JlYXRlQ29va2llJywge1xuICBlbnVtZXJhYmxlOiB0cnVlLFxuICBnZXQ6IGZ1bmN0aW9uICgpIHsgcmV0dXJuIHNlcnZlclJ1bnRpbWUuY3JlYXRlQ29va2llOyB9XG59KTtcbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAnY3JlYXRlQ29va2llU2Vzc2lvblN0b3JhZ2UnLCB7XG4gIGVudW1lcmFibGU6IHRydWUsXG4gIGdldDogZnVuY3Rpb24gKCkgeyByZXR1cm4gc2VydmVyUnVudGltZS5jcmVhdGVDb29raWVTZXNzaW9uU3RvcmFnZTsgfVxufSk7XG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ2NyZWF0ZU1lbW9yeVNlc3Npb25TdG9yYWdlJywge1xuICBlbnVtZXJhYmxlOiB0cnVlLFxuICBnZXQ6IGZ1bmN0aW9uICgpIHsgcmV0dXJuIHNlcnZlclJ1bnRpbWUuY3JlYXRlTWVtb3J5U2Vzc2lvblN0b3JhZ2U7IH1cbn0pO1xuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdjcmVhdGVTZXNzaW9uJywge1xuICBlbnVtZXJhYmxlOiB0cnVlLFxuICBnZXQ6IGZ1bmN0aW9uICgpIHsgcmV0dXJuIHNlcnZlclJ1bnRpbWUuY3JlYXRlU2Vzc2lvbjsgfVxufSk7XG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ2NyZWF0ZVNlc3Npb25TdG9yYWdlJywge1xuICBlbnVtZXJhYmxlOiB0cnVlLFxuICBnZXQ6IGZ1bmN0aW9uICgpIHsgcmV0dXJuIHNlcnZlclJ1bnRpbWUuY3JlYXRlU2Vzc2lvblN0b3JhZ2U7IH1cbn0pO1xuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdpc0Nvb2tpZScsIHtcbiAgZW51bWVyYWJsZTogdHJ1ZSxcbiAgZ2V0OiBmdW5jdGlvbiAoKSB7IHJldHVybiBzZXJ2ZXJSdW50aW1lLmlzQ29va2llOyB9XG59KTtcbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAnaXNTZXNzaW9uJywge1xuICBlbnVtZXJhYmxlOiB0cnVlLFxuICBnZXQ6IGZ1bmN0aW9uICgpIHsgcmV0dXJuIHNlcnZlclJ1bnRpbWUuaXNTZXNzaW9uOyB9XG59KTtcbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAnanNvbicsIHtcbiAgZW51bWVyYWJsZTogdHJ1ZSxcbiAgZ2V0OiBmdW5jdGlvbiAoKSB7IHJldHVybiBzZXJ2ZXJSdW50aW1lLmpzb247IH1cbn0pO1xuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdyZWRpcmVjdCcsIHtcbiAgZW51bWVyYWJsZTogdHJ1ZSxcbiAgZ2V0OiBmdW5jdGlvbiAoKSB7IHJldHVybiBzZXJ2ZXJSdW50aW1lLnJlZGlyZWN0OyB9XG59KTtcblxuLyoqXG4gKiBAcmVtaXgtcnVuL3JlYWN0IHYxLjIuMVxuICpcbiAqIENvcHlyaWdodCAoYykgUmVtaXggU29mdHdhcmUgSW5jLlxuICpcbiAqIFRoaXMgc291cmNlIGNvZGUgaXMgbGljZW5zZWQgdW5kZXIgdGhlIE1JVCBsaWNlbnNlIGZvdW5kIGluIHRoZVxuICogTElDRU5TRS5tZCBmaWxlIGluIHRoZSByb290IGRpcmVjdG9yeSBvZiB0aGlzIHNvdXJjZSB0cmVlLlxuICpcbiAqIEBsaWNlbnNlIE1JVFxuICovXG4ndXNlIHN0cmljdCc7XG5cbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAnX19lc01vZHVsZScsIHsgdmFsdWU6IHRydWUgfSk7XG5cbnZhciByZWFjdCA9IHJlcXVpcmUoJ0ByZW1peC1ydW4vcmVhY3QnKTtcblxuXG5cbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAnRm9ybScsIHtcbiAgZW51bWVyYWJsZTogdHJ1ZSxcbiAgZ2V0OiBmdW5jdGlvbiAoKSB7IHJldHVybiByZWFjdC5Gb3JtOyB9XG59KTtcbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAnTGluaycsIHtcbiAgZW51bWVyYWJsZTogdHJ1ZSxcbiAgZ2V0OiBmdW5jdGlvbiAoKSB7IHJldHVybiByZWFjdC5MaW5rOyB9XG59KTtcbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAnTGlua3MnLCB7XG4gIGVudW1lcmFibGU6IHRydWUsXG4gIGdldDogZnVuY3Rpb24gKCkgeyByZXR1cm4gcmVhY3QuTGlua3M7IH1cbn0pO1xuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdMaXZlUmVsb2FkJywge1xuICBlbnVtZXJhYmxlOiB0cnVlLFxuICBnZXQ6IGZ1bmN0aW9uICgpIHsgcmV0dXJuIHJlYWN0LkxpdmVSZWxvYWQ7IH1cbn0pO1xuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdNZXRhJywge1xuICBlbnVtZXJhYmxlOiB0cnVlLFxuICBnZXQ6IGZ1bmN0aW9uICgpIHsgcmV0dXJuIHJlYWN0Lk1ldGE7IH1cbn0pO1xuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdOYXZMaW5rJywge1xuICBlbnVtZXJhYmxlOiB0cnVlLFxuICBnZXQ6IGZ1bmN0aW9uICgpIHsgcmV0dXJuIHJlYWN0Lk5hdkxpbms7IH1cbn0pO1xuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdPdXRsZXQnLCB7XG4gIGVudW1lcmFibGU6IHRydWUsXG4gIGdldDogZnVuY3Rpb24gKCkgeyByZXR1cm4gcmVhY3QuT3V0bGV0OyB9XG59KTtcbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAnUHJlZmV0Y2hQYWdlTGlua3MnLCB7XG4gIGVudW1lcmFibGU6IHRydWUsXG4gIGdldDogZnVuY3Rpb24gKCkgeyByZXR1cm4gcmVhY3QuUHJlZmV0Y2hQYWdlTGlua3M7IH1cbn0pO1xuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdSZW1peEJyb3dzZXInLCB7XG4gIGVudW1lcmFibGU6IHRydWUsXG4gIGdldDogZnVuY3Rpb24gKCkgeyByZXR1cm4gcmVhY3QuUmVtaXhCcm93c2VyOyB9XG59KTtcbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAnUmVtaXhTZXJ2ZXInLCB7XG4gIGVudW1lcmFibGU6IHRydWUsXG4gIGdldDogZnVuY3Rpb24gKCkgeyByZXR1cm4gcmVhY3QuUmVtaXhTZXJ2ZXI7IH1cbn0pO1xuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdTY3JpcHRzJywge1xuICBlbnVtZXJhYmxlOiB0cnVlLFxuICBnZXQ6IGZ1bmN0aW9uICgpIHsgcmV0dXJuIHJlYWN0LlNjcmlwdHM7IH1cbn0pO1xuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdTY3JvbGxSZXN0b3JhdGlvbicsIHtcbiAgZW51bWVyYWJsZTogdHJ1ZSxcbiAgZ2V0OiBmdW5jdGlvbiAoKSB7IHJldHVybiByZWFjdC5TY3JvbGxSZXN0b3JhdGlvbjsgfVxufSk7XG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ3VzZUFjdGlvbkRhdGEnLCB7XG4gIGVudW1lcmFibGU6IHRydWUsXG4gIGdldDogZnVuY3Rpb24gKCkgeyByZXR1cm4gcmVhY3QudXNlQWN0aW9uRGF0YTsgfVxufSk7XG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ3VzZUJlZm9yZVVubG9hZCcsIHtcbiAgZW51bWVyYWJsZTogdHJ1ZSxcbiAgZ2V0OiBmdW5jdGlvbiAoKSB7IHJldHVybiByZWFjdC51c2VCZWZvcmVVbmxvYWQ7IH1cbn0pO1xuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICd1c2VDYXRjaCcsIHtcbiAgZW51bWVyYWJsZTogdHJ1ZSxcbiAgZ2V0OiBmdW5jdGlvbiAoKSB7IHJldHVybiByZWFjdC51c2VDYXRjaDsgfVxufSk7XG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ3VzZUZldGNoZXInLCB7XG4gIGVudW1lcmFibGU6IHRydWUsXG4gIGdldDogZnVuY3Rpb24gKCkgeyByZXR1cm4gcmVhY3QudXNlRmV0Y2hlcjsgfVxufSk7XG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ3VzZUZldGNoZXJzJywge1xuICBlbnVtZXJhYmxlOiB0cnVlLFxuICBnZXQ6IGZ1bmN0aW9uICgpIHsgcmV0dXJuIHJlYWN0LnVzZUZldGNoZXJzOyB9XG59KTtcbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAndXNlRm9ybUFjdGlvbicsIHtcbiAgZW51bWVyYWJsZTogdHJ1ZSxcbiAgZ2V0OiBmdW5jdGlvbiAoKSB7IHJldHVybiByZWFjdC51c2VGb3JtQWN0aW9uOyB9XG59KTtcbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAndXNlSHJlZicsIHtcbiAgZW51bWVyYWJsZTogdHJ1ZSxcbiAgZ2V0OiBmdW5jdGlvbiAoKSB7IHJldHVybiByZWFjdC51c2VIcmVmOyB9XG59KTtcbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAndXNlTG9hZGVyRGF0YScsIHtcbiAgZW51bWVyYWJsZTogdHJ1ZSxcbiAgZ2V0OiBmdW5jdGlvbiAoKSB7IHJldHVybiByZWFjdC51c2VMb2FkZXJEYXRhOyB9XG59KTtcbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAndXNlTG9jYXRpb24nLCB7XG4gIGVudW1lcmFibGU6IHRydWUsXG4gIGdldDogZnVuY3Rpb24gKCkgeyByZXR1cm4gcmVhY3QudXNlTG9jYXRpb247IH1cbn0pO1xuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICd1c2VNYXRjaGVzJywge1xuICBlbnVtZXJhYmxlOiB0cnVlLFxuICBnZXQ6IGZ1bmN0aW9uICgpIHsgcmV0dXJuIHJlYWN0LnVzZU1hdGNoZXM7IH1cbn0pO1xuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICd1c2VOYXZpZ2F0ZScsIHtcbiAgZW51bWVyYWJsZTogdHJ1ZSxcbiAgZ2V0OiBmdW5jdGlvbiAoKSB7IHJldHVybiByZWFjdC51c2VOYXZpZ2F0ZTsgfVxufSk7XG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ3VzZU5hdmlnYXRpb25UeXBlJywge1xuICBlbnVtZXJhYmxlOiB0cnVlLFxuICBnZXQ6IGZ1bmN0aW9uICgpIHsgcmV0dXJuIHJlYWN0LnVzZU5hdmlnYXRpb25UeXBlOyB9XG59KTtcbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAndXNlT3V0bGV0Jywge1xuICBlbnVtZXJhYmxlOiB0cnVlLFxuICBnZXQ6IGZ1bmN0aW9uICgpIHsgcmV0dXJuIHJlYWN0LnVzZU91dGxldDsgfVxufSk7XG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ3VzZU91dGxldENvbnRleHQnLCB7XG4gIGVudW1lcmFibGU6IHRydWUsXG4gIGdldDogZnVuY3Rpb24gKCkgeyByZXR1cm4gcmVhY3QudXNlT3V0bGV0Q29udGV4dDsgfVxufSk7XG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ3VzZVBhcmFtcycsIHtcbiAgZW51bWVyYWJsZTogdHJ1ZSxcbiAgZ2V0OiBmdW5jdGlvbiAoKSB7IHJldHVybiByZWFjdC51c2VQYXJhbXM7IH1cbn0pO1xuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICd1c2VSZXNvbHZlZFBhdGgnLCB7XG4gIGVudW1lcmFibGU6IHRydWUsXG4gIGdldDogZnVuY3Rpb24gKCkgeyByZXR1cm4gcmVhY3QudXNlUmVzb2x2ZWRQYXRoOyB9XG59KTtcbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAndXNlU2VhcmNoUGFyYW1zJywge1xuICBlbnVtZXJhYmxlOiB0cnVlLFxuICBnZXQ6IGZ1bmN0aW9uICgpIHsgcmV0dXJuIHJlYWN0LnVzZVNlYXJjaFBhcmFtczsgfVxufSk7XG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ3VzZVN1Ym1pdCcsIHtcbiAgZW51bWVyYWJsZTogdHJ1ZSxcbiAgZ2V0OiBmdW5jdGlvbiAoKSB7IHJldHVybiByZWFjdC51c2VTdWJtaXQ7IH1cbn0pO1xuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICd1c2VUcmFuc2l0aW9uJywge1xuICBlbnVtZXJhYmxlOiB0cnVlLFxuICBnZXQ6IGZ1bmN0aW9uICgpIHsgcmV0dXJuIHJlYWN0LnVzZVRyYW5zaXRpb247IH1cbn0pO1xuXG4iLCAiZXhwb3J0ICogZnJvbSBcIkByZW1peC1ydW4vZGV2L3NlcnZlci1idWlsZFwiOyIsICJcbmltcG9ydCAqIGFzIGVudHJ5U2VydmVyIGZyb20gXCIvVXNlcnMveG1vZmZhdHQvY29kZS9sdGlfMXAxX3Rlc3RfdG9vbC9hcHAvZW50cnkuc2VydmVyLnRzeFwiO1xuaW1wb3J0ICogYXMgcm91dGUwIGZyb20gXCIvVXNlcnMveG1vZmZhdHQvY29kZS9sdGlfMXAxX3Rlc3RfdG9vbC9hcHAvcm9vdC50c3hcIjtcbmltcG9ydCAqIGFzIHJvdXRlMSBmcm9tIFwiL1VzZXJzL3htb2ZmYXR0L2NvZGUvbHRpXzFwMV90ZXN0X3Rvb2wvYXBwL3JvdXRlcy9sYXVuY2gvJGxhdW5jaElkLnRzeFwiO1xuaW1wb3J0ICogYXMgcm91dGUyIGZyb20gXCIvVXNlcnMveG1vZmZhdHQvY29kZS9sdGlfMXAxX3Rlc3RfdG9vbC9hcHAvcm91dGVzL2xhdW5jaC9pbmRleC50c3hcIjtcbmltcG9ydCAqIGFzIHJvdXRlMyBmcm9tIFwiL1VzZXJzL3htb2ZmYXR0L2NvZGUvbHRpXzFwMV90ZXN0X3Rvb2wvYXBwL3JvdXRlcy94bWxfY29uZmlnLnRzeFwiO1xuaW1wb3J0ICogYXMgcm91dGU0IGZyb20gXCIvVXNlcnMveG1vZmZhdHQvY29kZS9sdGlfMXAxX3Rlc3RfdG9vbC9hcHAvcm91dGVzL2luZGV4LnRzeFwiO1xuICBleHBvcnQgeyBkZWZhdWx0IGFzIGFzc2V0cyB9IGZyb20gXCJAcmVtaXgtcnVuL2Rldi9hc3NldHMtbWFuaWZlc3RcIjtcbiAgZXhwb3J0IGNvbnN0IGVudHJ5ID0geyBtb2R1bGU6IGVudHJ5U2VydmVyIH07XG4gIGV4cG9ydCBjb25zdCByb3V0ZXMgPSB7XG4gICAgXCJyb290XCI6IHtcbiAgICAgIGlkOiBcInJvb3RcIixcbiAgICAgIHBhcmVudElkOiB1bmRlZmluZWQsXG4gICAgICBwYXRoOiBcIlwiLFxuICAgICAgaW5kZXg6IHVuZGVmaW5lZCxcbiAgICAgIGNhc2VTZW5zaXRpdmU6IHVuZGVmaW5lZCxcbiAgICAgIG1vZHVsZTogcm91dGUwXG4gICAgfSxcbiAgXCJyb3V0ZXMvbGF1bmNoLyRsYXVuY2hJZFwiOiB7XG4gICAgICBpZDogXCJyb3V0ZXMvbGF1bmNoLyRsYXVuY2hJZFwiLFxuICAgICAgcGFyZW50SWQ6IFwicm9vdFwiLFxuICAgICAgcGF0aDogXCJsYXVuY2gvOmxhdW5jaElkXCIsXG4gICAgICBpbmRleDogdW5kZWZpbmVkLFxuICAgICAgY2FzZVNlbnNpdGl2ZTogdW5kZWZpbmVkLFxuICAgICAgbW9kdWxlOiByb3V0ZTFcbiAgICB9LFxuICBcInJvdXRlcy9sYXVuY2gvaW5kZXhcIjoge1xuICAgICAgaWQ6IFwicm91dGVzL2xhdW5jaC9pbmRleFwiLFxuICAgICAgcGFyZW50SWQ6IFwicm9vdFwiLFxuICAgICAgcGF0aDogXCJsYXVuY2hcIixcbiAgICAgIGluZGV4OiB0cnVlLFxuICAgICAgY2FzZVNlbnNpdGl2ZTogdW5kZWZpbmVkLFxuICAgICAgbW9kdWxlOiByb3V0ZTJcbiAgICB9LFxuICBcInJvdXRlcy94bWxfY29uZmlnXCI6IHtcbiAgICAgIGlkOiBcInJvdXRlcy94bWxfY29uZmlnXCIsXG4gICAgICBwYXJlbnRJZDogXCJyb290XCIsXG4gICAgICBwYXRoOiBcInhtbF9jb25maWdcIixcbiAgICAgIGluZGV4OiB1bmRlZmluZWQsXG4gICAgICBjYXNlU2Vuc2l0aXZlOiB1bmRlZmluZWQsXG4gICAgICBtb2R1bGU6IHJvdXRlM1xuICAgIH0sXG4gIFwicm91dGVzL2luZGV4XCI6IHtcbiAgICAgIGlkOiBcInJvdXRlcy9pbmRleFwiLFxuICAgICAgcGFyZW50SWQ6IFwicm9vdFwiLFxuICAgICAgcGF0aDogdW5kZWZpbmVkLFxuICAgICAgaW5kZXg6IHRydWUsXG4gICAgICBjYXNlU2Vuc2l0aXZlOiB1bmRlZmluZWQsXG4gICAgICBtb2R1bGU6IHJvdXRlNFxuICAgIH1cbiAgfTsiLCAiaW1wb3J0IHsgcmVuZGVyVG9TdHJpbmcgfSBmcm9tIFwicmVhY3QtZG9tL3NlcnZlclwiO1xuaW1wb3J0IHsgUmVtaXhTZXJ2ZXIgfSBmcm9tIFwicmVtaXhcIjtcbmltcG9ydCB0eXBlIHsgRW50cnlDb250ZXh0IH0gZnJvbSBcInJlbWl4XCI7XG5cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIGhhbmRsZVJlcXVlc3QoXG4gIHJlcXVlc3Q6IFJlcXVlc3QsXG4gIHJlc3BvbnNlU3RhdHVzQ29kZTogbnVtYmVyLFxuICByZXNwb25zZUhlYWRlcnM6IEhlYWRlcnMsXG4gIHJlbWl4Q29udGV4dDogRW50cnlDb250ZXh0XG4pIHtcbiAgY29uc3QgbWFya3VwID0gcmVuZGVyVG9TdHJpbmcoXG4gICAgPFJlbWl4U2VydmVyIGNvbnRleHQ9e3JlbWl4Q29udGV4dH0gdXJsPXtyZXF1ZXN0LnVybH0gLz5cbiAgKTtcblxuICByZXNwb25zZUhlYWRlcnMuc2V0KFwiQ29udGVudC1UeXBlXCIsIFwidGV4dC9odG1sXCIpO1xuXG4gIHJldHVybiBuZXcgUmVzcG9uc2UoXCI8IURPQ1RZUEUgaHRtbD5cIiArIG1hcmt1cCwge1xuICAgIHN0YXR1czogcmVzcG9uc2VTdGF0dXNDb2RlLFxuICAgIGhlYWRlcnM6IHJlc3BvbnNlSGVhZGVycyxcbiAgfSk7XG59XG4iLCAiaW1wb3J0IHtcbiAgTGlua3MsXG4gIExpdmVSZWxvYWQsXG4gIE1ldGEsXG4gIE91dGxldCxcbiAgU2NyaXB0cyxcbiAgU2Nyb2xsUmVzdG9yYXRpb24sXG59IGZyb20gXCJyZW1peFwiO1xuaW1wb3J0IHR5cGUgeyBNZXRhRnVuY3Rpb24gfSBmcm9tIFwicmVtaXhcIjtcblxuZXhwb3J0IGNvbnN0IG1ldGE6IE1ldGFGdW5jdGlvbiA9ICgpID0+IHtcbiAgcmV0dXJuIHsgdGl0bGU6IFwiTFRJIDEuMSBUZXN0IFRvb2xcIiB9O1xufTtcblxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gQXBwKCkge1xuICByZXR1cm4gKFxuICAgIDxodG1sIGxhbmc9XCJlblwiPlxuICAgICAgPGhlYWQ+XG4gICAgICAgIDxtZXRhIGNoYXJTZXQ9XCJ1dGYtOFwiIC8+XG4gICAgICAgIDxtZXRhIG5hbWU9XCJ2aWV3cG9ydFwiIGNvbnRlbnQ9XCJ3aWR0aD1kZXZpY2Utd2lkdGgsaW5pdGlhbC1zY2FsZT0xXCIgLz5cbiAgICAgICAgPE1ldGEgLz5cbiAgICAgICAgPExpbmtzIC8+XG4gICAgICA8L2hlYWQ+XG4gICAgICA8Ym9keT5cbiAgICAgICAgPE91dGxldCAvPlxuICAgICAgICA8U2Nyb2xsUmVzdG9yYXRpb24gLz5cbiAgICAgICAgPFNjcmlwdHMgLz5cbiAgICAgICAgPExpdmVSZWxvYWQgLz5cbiAgICAgIDwvYm9keT5cbiAgICA8L2h0bWw+XG4gICk7XG59XG4iLCAiaW1wb3J0IHsgTG9hZGVyRnVuY3Rpb24sIHVzZUxvYWRlckRhdGEgfSBmcm9tIFwicmVtaXhcIjtcbmltcG9ydCB7IHJldHJpZXZlTGF1bmNoIH0gZnJvbSBcIn4vbG9jYWxTdG9yYWdlLnNlcnZlclwiO1xuaW1wb3J0IHsgZ2V0VHlwZSwgTHRpTGF1bmNoUGFyYW1zIH0gZnJvbSBcIn4vbHRpTGF1bmNoUGFyYW1zXCI7XG5cbmV4cG9ydCBjb25zdCBsb2FkZXI6IExvYWRlckZ1bmN0aW9uID0gYXN5bmMgKHsgcGFyYW1zIH0pID0+IHtcbiAgcmV0dXJuIHtcbiAgICBsYXVuY2hEYXRhOiByZXRyaWV2ZUxhdW5jaChwYXJhbXMubGF1bmNoSWQgfHwgXCJcIiksXG4gIH07XG59O1xuXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBMYXVuY2goKSB7XG4gIGNvbnN0IHsgbGF1bmNoRGF0YSB9OiB7IGxhdW5jaERhdGE6IEx0aUxhdW5jaFBhcmFtcyB9ID0gdXNlTG9hZGVyRGF0YSgpO1xuICBsZXQgZXJyb3I7XG4gIGlmICghbGF1bmNoRGF0YSkge1xuICAgIGVycm9yID0gXCJMYXVuY2ggY29ycnVwdGVkLCByZWxvYWQgdGhlIHBhZ2VcIjtcbiAgfVxuICBjb25zdCBkaXNwbGF5UGFyYW1zID0gT2JqZWN0LmVudHJpZXMobGF1bmNoRGF0YSB8fCB7fSkubWFwKFxuICAgIChba2V5LCB2YWx1ZV0pID0+ICh7XG4gICAgICBrZXksXG4gICAgICB2YWx1ZSxcbiAgICAgIHR5cGU6IGdldFR5cGUoa2V5KSxcbiAgICB9KVxuICApO1xuICByZXR1cm4gKFxuICAgIDxkaXYgc3R5bGU9e3sgZm9udEZhbWlseTogXCJzeXN0ZW0tdWksIHNhbnMtc2VyaWZcIiB9fT5cbiAgICAgIDxoMT5MVEkgMS4xIExhdW5jaDwvaDE+XG4gICAgICA8cCBzdHlsZT17eyBjb2xvcjogXCJyZWRcIiB9fT57ZXJyb3J9PC9wPlxuICAgICAgPHRhYmxlPlxuICAgICAgICA8dGhlYWQ+XG4gICAgICAgICAgPHRyPlxuICAgICAgICAgICAgPHRoPlBhcmFtZXRlcjwvdGg+XG4gICAgICAgICAgICA8dGg+VmFsdWU8L3RoPlxuICAgICAgICAgICAgPHRoPlR5cGU8L3RoPlxuICAgICAgICAgIDwvdHI+XG4gICAgICAgIDwvdGhlYWQ+XG4gICAgICAgIHtkaXNwbGF5UGFyYW1zLm1hcCgoeyBrZXksIHZhbHVlLCB0eXBlIH0pID0+IChcbiAgICAgICAgICA8dHIga2V5PXtrZXl9PlxuICAgICAgICAgICAgPHRkPlxuICAgICAgICAgICAgICA8Yj57a2V5fTo8L2I+XG4gICAgICAgICAgICA8L3RkPlxuICAgICAgICAgICAgPHRkPnt2YWx1ZX08L3RkPlxuICAgICAgICAgICAgPHRkPnt0eXBlfTwvdGQ+XG4gICAgICAgICAgPC90cj5cbiAgICAgICAgKSl9XG4gICAgICA8L3RhYmxlPlxuICAgIDwvZGl2PlxuICApO1xufVxuIiwgImltcG9ydCBOb2RlQ2FjaGUgZnJvbSBcIm5vZGUtY2FjaGVcIjtcbmltcG9ydCB7IEx0aUxhdW5jaFBhcmFtcyB9IGZyb20gXCIuL2x0aUxhdW5jaFBhcmFtc1wiO1xuXG5sZXQgbGF1bmNoU3RvcmFnZTogTm9kZUNhY2hlO1xuXG5kZWNsYXJlIGdsb2JhbCB7XG4gIHZhciBfX2xhdW5jaFN0b3JhZ2U6IE5vZGVDYWNoZSB8IHVuZGVmaW5lZDtcbn1cblxuY29uc3QgaW5pdCA9ICgpID0+IHtcbiAgY29uc29sZS5sb2coXCJpbml0IGNhY2hlXCIpO1xuICByZXR1cm4gbmV3IE5vZGVDYWNoZSh7XG4gICAgc3RkVFRMOiA2MCxcbiAgICBjaGVja3BlcmlvZDogMTIwLFxuICB9KTtcbn07XG5cbi8vIGF2b2lkIHJlLWRlZmluaW5nIHRoaXMgaW4gZGV2IGV2ZXJ5IHNpbmdsZSByZXF1ZXN0XG4vLyB0aGFua3MgdG8gbGl2ZSByZWxvYWRcbmlmIChwcm9jZXNzLmVudi5OT0RFX0VOViA9PT0gXCJwcm9kdWN0aW9uXCIpIHtcbiAgbGF1bmNoU3RvcmFnZSA9IGluaXQoKTtcbn0gZWxzZSB7XG4gIGlmICghZ2xvYmFsLl9fbGF1bmNoU3RvcmFnZSkge1xuICAgIGdsb2JhbC5fX2xhdW5jaFN0b3JhZ2UgPSBpbml0KCk7XG4gIH1cbiAgbGF1bmNoU3RvcmFnZSA9IGdsb2JhbC5fX2xhdW5jaFN0b3JhZ2U7XG59XG5cbmV4cG9ydCBjb25zdCBzdG9yZUxhdW5jaCA9IChrZXk6IHN0cmluZywgcGFyYW1zOiBMdGlMYXVuY2hQYXJhbXMpID0+XG4gIGxhdW5jaFN0b3JhZ2Uuc2V0KGtleSwgcGFyYW1zKTtcblxuZXhwb3J0IGNvbnN0IHJldHJpZXZlTGF1bmNoID0gKGlkOiBzdHJpbmcpOiBMdGlMYXVuY2hQYXJhbXMgPT5cbiAgbGF1bmNoU3RvcmFnZS50YWtlKGlkKSBhcyBMdGlMYXVuY2hQYXJhbXM7XG4iLCAiZXhwb3J0IHR5cGUgTHRpTGF1bmNoUGFyYW1zID0ge1xuICAvLyBPQXV0aCBwYXJhbXNcbiAgb2F1dGhfbm9uY2U6IHN0cmluZztcbiAgb2F1dGhfc2lnbmF0dXJlX21ldGhvZDogc3RyaW5nO1xuICBvYXV0aF90aW1lc3RhbXA6IHN0cmluZztcbiAgb2F1dGhfdmVyc2lvbjogc3RyaW5nO1xuICBvYXV0aF9jYWxsYmFjazogc3RyaW5nO1xuICBvYXV0aF9jb25zdW1lcl9rZXk6IHN0cmluZztcbiAgb2F1dGhfc2lnbmF0dXJlOiBzdHJpbmc7XG4gIC8vIFJlcXVpcmVkIFBhcmFtc1xuICBsdGlfbWVzc2FnZV90eXBlOiBzdHJpbmc7XG4gIGx0aV92ZXJzaW9uOiBzdHJpbmc7XG4gIHJlc291cmNlX2xpbmtfaWQ6IHN0cmluZztcbiAgLy8gUmVjb21tZW5kZWQgUGFyYW1zXG4gIHJlc291cmNlX2xpbmtfdGl0bGU/OiBzdHJpbmc7XG4gIHVzZXJfaWQ/OiBzdHJpbmc7XG4gIHJvbGVzPzogc3RyaW5nO1xuICBjb250ZXh0X2lkPzogc3RyaW5nO1xuICBjb250ZXh0X3RpdGxlPzogc3RyaW5nO1xuICBjb250ZXh0X2xhYmVsPzogc3RyaW5nO1xuICBsaXNfcGVyc29uX25hbWVfZ2l2ZW4/OiBzdHJpbmc7XG4gIGxpc19wZXJzb25fbmFtZV9mYW1pbHk/OiBzdHJpbmc7XG4gIGxpc19wZXJzb25fbmFtZV9mdWxsPzogc3RyaW5nO1xuICBsaXNfcGVyc29uX2NvbnRhY3RfZW1haWxfcHJpbWFyeT86IHN0cmluZztcbiAgbGF1bmNoX3ByZXNlbnRhdGlvbl9sb2NhbGU/OiBzdHJpbmc7XG4gIGxhdW5jaF9wcmVzZW50YXRpb25fZG9jdW1lbnRfdGFyZ2V0Pzogc3RyaW5nO1xuICBsYXVuY2hfcHJlc2VudGF0aW9uX3dpZHRoPzogc3RyaW5nO1xuICBsYXVuY2hfcHJlc2VudGF0aW9uX2hlaWdodD86IHN0cmluZztcbiAgbGF1bmNoX3ByZXNlbnRhdGlvbl9yZXR1cm5fdXJsPzogc3RyaW5nO1xuICB0b29sX2NvbnN1bWVyX2luZm9fcHJvZHVjdF9mYW1pbHlfY29kZT86IHN0cmluZztcbiAgdG9vbF9jb25zdW1lcl9pbmZvX3ZlcnNpb24/OiBzdHJpbmc7XG4gIHRvb2xfY29uc3VtZXJfaW5zdGFuY2VfZ3VpZD86IHN0cmluZztcbiAgdG9vbF9jb25zdW1lcl9pbnN0YW5jZV9uYW1lPzogc3RyaW5nO1xuICB0b29sX2NvbnN1bWVyX2luc3RhbmNlX2NvbnRhY3RfZW1haWw/OiBzdHJpbmc7XG4gIC8vIE9wdGlvbmFsIHBhcmFtc1xuICByZXNvdXJjZV9saW5rX2Rlc2NyaXB0aW9uPzogc3RyaW5nO1xuICB1c2VyX2ltYWdlPzogc3RyaW5nO1xuICBjb250ZXh0X3R5cGU/OiBzdHJpbmc7XG4gIGxhdW5jaF9wcmVzZW50YXRpb25fY3NzX3VybD86IHN0cmluZztcbiAgdG9vbF9jb25zdW1lcl9pbnN0YW5jZV9kZXNjcmlwdGlvbj86IHN0cmluZztcbiAgdG9vbF9jb25zdW1lcl9pbnN0YW5jZV91cmw/OiBzdHJpbmc7XG59O1xuXG5leHBvcnQgY29uc3QgUkVRVUlSRURfUEFSQU1TID0gW1xuICBcImx0aV9tZXNzYWdlX3R5cGVcIixcbiAgXCJsdGlfdmVyc2lvblwiLFxuICBcInJlc291cmNlX2xpbmtfaWRcIixcbl07XG5leHBvcnQgY29uc3QgUkVDT01NRU5ERURfUEFSQU1TID0gW1xuICBcInJlc291cmNlX2xpbmtfdGl0bGVcIixcbiAgXCJ1c2VyX2lkXCIsXG4gIFwicm9sZXNcIixcbiAgXCJjb250ZXh0X2lkXCIsXG4gIFwiY29udGV4dF90aXRsZVwiLFxuICBcImNvbnRleHRfbGFiZWxcIixcbiAgXCJsaXNfcGVyc29uX25hbWVfZ2l2ZW5cIixcbiAgXCJsaXNfcGVyc29uX25hbWVfZmFtaWx5XCIsXG4gIFwibGlzX3BlcnNvbl9uYW1lX2Z1bGxcIixcbiAgXCJsaXNfcGVyc29uX2NvbnRhY3RfZW1haWxfcHJpbWFyeVwiLFxuICBcImxhdW5jaF9wcmVzZW50YXRpb25fbG9jYWxlXCIsXG4gIFwibGF1bmNoX3ByZXNlbnRhdGlvbl9kb2N1bWVudF90YXJnZXRcIixcbiAgXCJsYXVuY2hfcHJlc2VudGF0aW9uX3dpZHRoXCIsXG4gIFwibGF1bmNoX3ByZXNlbnRhdGlvbl9oZWlnaHRcIixcbiAgXCJsYXVuY2hfcHJlc2VudGF0aW9uX3JldHVybl91cmxcIixcbiAgXCJ0b29sX2NvbnN1bWVyX2luZm9fcHJvZHVjdF9mYW1pbHlfY29kZVwiLFxuICBcInRvb2xfY29uc3VtZXJfaW5mb192ZXJzaW9uXCIsXG4gIFwidG9vbF9jb25zdW1lcl9pbnN0YW5jZV9ndWlkXCIsXG4gIFwidG9vbF9jb25zdW1lcl9pbnN0YW5jZV9uYW1lXCIsXG4gIFwidG9vbF9jb25zdW1lcl9pbnN0YW5jZV9jb250YWN0X2VtYWlsXCIsXG5dO1xuZXhwb3J0IGNvbnN0IE9QVElPTkFMX1BBUkFNUyA9IFtcbiAgXCJyZXNvdXJjZV9saW5rX2Rlc2NyaXB0aW9uXCIsXG4gIFwidXNlcl9pbWFnZVwiLFxuICBcImNvbnRleHRfdHlwZVwiLFxuICBcImxhdW5jaF9wcmVzZW50YXRpb25fY3NzX3VybFwiLFxuICBcInRvb2xfY29uc3VtZXJfaW5zdGFuY2VfZGVzY3JpcHRpb25cIixcbiAgXCJ0b29sX2NvbnN1bWVyX2luc3RhbmNlX3VybFwiLFxuXTtcblxuZXhwb3J0IGNvbnN0IGdldFR5cGUgPSAocGFyYW06IHN0cmluZykgPT4ge1xuICBpZiAocGFyYW0uaW5jbHVkZXMoXCJjdXN0b21fXCIpKSB7XG4gICAgcmV0dXJuIFwiQ3VzdG9tXCI7XG4gIH1cbiAgaWYgKHBhcmFtLmluY2x1ZGVzKFwiZXh0X1wiKSkge1xuICAgIHJldHVybiBcIkV4dGVuc2lvblwiO1xuICB9XG4gIGlmIChwYXJhbS5pbmNsdWRlcyhcIm9hdXRoX1wiKSkge1xuICAgIHJldHVybiBcIkF1dGhvcml6YXRpb25cIjtcbiAgfVxuICBpZiAoUkVRVUlSRURfUEFSQU1TLmluY2x1ZGVzKHBhcmFtKSkge1xuICAgIHJldHVybiBcIlJlcXVpcmVkXCI7XG4gIH1cbiAgaWYgKFJFQ09NTUVOREVEX1BBUkFNUy5pbmNsdWRlcyhwYXJhbSkpIHtcbiAgICByZXR1cm4gXCJSZWNvbW1lbmRlZFwiO1xuICB9XG4gIGlmIChPUFRJT05BTF9QQVJBTVMuaW5jbHVkZXMocGFyYW0pKSB7XG4gICAgcmV0dXJuIFwiT3B0aW9uYWxcIjtcbiAgfVxuICByZXR1cm4gXCJVbmtub3duXCI7XG59O1xuIiwgImltcG9ydCB7IEFjdGlvbkZ1bmN0aW9uLCByZWRpcmVjdCB9IGZyb20gXCJyZW1peFwiO1xuaW1wb3J0IHsgc3RvcmVMYXVuY2ggfSBmcm9tIFwifi9sb2NhbFN0b3JhZ2Uuc2VydmVyXCI7XG5pbXBvcnQgeyBMdGlMYXVuY2hQYXJhbXMgfSBmcm9tIFwifi9sdGlMYXVuY2hQYXJhbXNcIjtcblxuZXhwb3J0IGNvbnN0IGFjdGlvbjogQWN0aW9uRnVuY3Rpb24gPSBhc3luYyAoeyByZXF1ZXN0IH0pID0+IHtcbiAgY29uc3QgZm9ybURhdGEgPSBhd2FpdCByZXF1ZXN0LmZvcm1EYXRhKCk7XG4gIGNvbnN0IGxhdW5jaERhdGEgPSBPYmplY3QuZnJvbUVudHJpZXMoZm9ybURhdGEpIGFzIEx0aUxhdW5jaFBhcmFtcztcbiAgY29uc3QgaWQgPSBsYXVuY2hEYXRhLm9hdXRoX25vbmNlO1xuICBzdG9yZUxhdW5jaChpZCwgbGF1bmNoRGF0YSk7XG4gIHJldHVybiByZWRpcmVjdChgL2xhdW5jaC8ke2lkfWApO1xufTtcbiIsICJpbXBvcnQgeyBMb2FkZXJGdW5jdGlvbiwgdXNlTG9hZGVyRGF0YSB9IGZyb20gXCJyZW1peFwiO1xuaW1wb3J0IHsgYnVpbGRYTUwgfSBmcm9tIFwifi94bWwuc2VydmVyXCI7XG5cbmV4cG9ydCBjb25zdCBsb2FkZXI6IExvYWRlckZ1bmN0aW9uID0gYXN5bmMgKCkgPT4gKHtcbiAgeG1sOiBidWlsZFhNTCh7fSksIC8vIHVzZSBhbGwgZGVmYXVsdHNcbn0pO1xuXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBYTUxDb25maWcoKSB7XG4gIGNvbnN0IHsgeG1sIH0gPSB1c2VMb2FkZXJEYXRhKCk7XG4gIHJldHVybiA8Y29kZT57eG1sfTwvY29kZT47XG59XG4iLCAiaW1wb3J0IGdldENvbmZpZyBmcm9tIFwiLi9jb25maWcuc2VydmVyXCI7XG5pbXBvcnQge1xuICBCQVNJQ19MVElfUkVRVUVTVCxcbiAgQ09OVEVOVF9JVEVNX1NFTEVDVElPTixcbiAgQ09OVEVOVF9JVEVNX1NFTEVDVElPTl9SRVFVRVNULFxuICBQTEFDRU1FTlRTX0JZX0tFWSxcbn0gZnJvbSBcIi4vcGxhY2VtZW50cy5zZXJ2ZXJcIjtcblxuY29uc3QgY29uZmlnID0gZ2V0Q29uZmlnKCk7XG5cbmV4cG9ydCB0eXBlIFhNTE9wdGlvbnMgPSB7XG4gIHRpdGxlOiBzdHJpbmc7XG4gIGRvbWFpbjogc3RyaW5nO1xuICBsYXVuY2hVcmw6IHN0cmluZztcbiAgZGVzY3JpcHRpb24/OiBzdHJpbmc7XG4gIHByaXZhY3lMZXZlbD86IHN0cmluZztcbiAgc2VsZWN0aW9uSGVpZ2h0Pzogc3RyaW5nO1xuICBzZWxlY3Rpb25XaWR0aD86IHN0cmluZztcbiAgb2F1dGhDb21wbGlhbnQ/OiBib29sZWFuO1xuICB2aXNpYmlsaXR5Pzogc3RyaW5nO1xuICBjdXN0b21GaWVsZHM/OiBzdHJpbmc7XG4gIHBsYWNlbWVudHM/OiBzdHJpbmdbXTtcbn07XG5cbmNvbnN0IGRlZmF1bHRzOiBYTUxPcHRpb25zID0ge1xuICB0aXRsZTogXCJMVEkgMS4xIFRlc3QgVG9vbFwiLFxuICBkZXNjcmlwdGlvbjogXCJ0aGUgbW9zdCBiYXNpYyAxLjEgdG9vbCBldmVyXCIsXG4gIGRvbWFpbjogY29uZmlnLkRPTUFJTixcbiAgbGF1bmNoVXJsOiBjb25maWcuTEFVTkNIX1VSTCxcbiAgcHJpdmFjeUxldmVsOiBcInB1YmxpY1wiLFxuICBwbGFjZW1lbnRzOiBbXCJjb3Vyc2VfbmF2aWdhdGlvblwiXSxcbn07XG5cbmNvbnN0IHByb3BlcnR5ID0gKG5hbWU6IHN0cmluZywgdmFsdWU/OiBzdHJpbmcgfCBib29sZWFuKSA9PiB7XG4gIGlmICghdmFsdWUpIHtcbiAgICByZXR1cm4gXCJcIjtcbiAgfVxuXG4gIHJldHVybiBgPGx0aWNtOnByb3BlcnR5IG5hbWU9XCIke25hbWV9XCI+JHt2YWx1ZX08L2x0aWNtOnByb3BlcnR5PmA7XG59O1xuXG5jb25zdCBwbGFjZW1lbnRNZXNzYWdlVHlwZSA9IChwOiBzdHJpbmcpID0+IHtcbiAgY29uc3QgcGxhY2VtZW50ID0gUExBQ0VNRU5UU19CWV9LRVlbcF07XG4gIGlmICghcGxhY2VtZW50LnR5cGVzKSB7XG4gICAgcmV0dXJuIEJBU0lDX0xUSV9SRVFVRVNUO1xuICB9XG5cbiAgaWYgKHBsYWNlbWVudC50eXBlcy5pbmNsdWRlcyhDT05URU5UX0lURU1fU0VMRUNUSU9OX1JFUVVFU1QpKSB7XG4gICAgcmV0dXJuIENPTlRFTlRfSVRFTV9TRUxFQ1RJT05fUkVRVUVTVDtcbiAgfVxuXG4gIGlmIChwbGFjZW1lbnQudHlwZXMuaW5jbHVkZXMoQ09OVEVOVF9JVEVNX1NFTEVDVElPTikpIHtcbiAgICByZXR1cm4gQ09OVEVOVF9JVEVNX1NFTEVDVElPTjtcbiAgfVxuXG4gIHJldHVybiBCQVNJQ19MVElfUkVRVUVTVDtcbn07XG5cbmNvbnN0IHBsYWNlbWVudFhNTCA9IChcbiAgcDogc3RyaW5nLFxuICB1cmw6IHN0cmluZyxcbiAgc2VsZWN0aW9uV2lkdGg/OiBzdHJpbmcsXG4gIHNlbGVjdGlvbkhlaWdodD86IHN0cmluZ1xuKSA9PiBgXG48bHRpY206b3B0aW9ucyBuYW1lPVwiJHtwfVwiPlxuICAgICR7cHJvcGVydHkoXCJlbmFibGVkXCIsIFwidHJ1ZVwiKX1cbiAgICAke3Byb3BlcnR5KFwidXJsXCIsIGAke3VybH0/cGxhY2VtZW50PSR7cH1gKX1cbiAgICAke3Byb3BlcnR5KFwidGV4dFwiLCBQTEFDRU1FTlRTX0JZX0tFWVtwXS5uYW1lKX1cbiAgICAke3Byb3BlcnR5KFwic2VsZWN0aW9uX3dpZHRoXCIsIHNlbGVjdGlvbldpZHRoKX1cbiAgICAke3Byb3BlcnR5KFwic2VsZWN0aW9uX2hlaWdodFwiLCBzZWxlY3Rpb25IZWlnaHQpfVxuICAgICR7cHJvcGVydHkoXCJtZXNzYWdlX3R5cGVcIiwgcGxhY2VtZW50TWVzc2FnZVR5cGUocCkpfVxuPC9sdGljbTpvcHRpb25zPlxuYDtcblxuY29uc3QgY3VzdG9tRmllbGRYTUwgPSAoZmllbGRzOiBzdHJpbmcpID0+IGBcbiAgPGx0aWNtOm9wdGlvbnMgbmFtZT1cImN1c3RvbV9maWVsZHNcIj5cbiAgICAke2ZpZWxkc1xuICAgICAgLnNwbGl0KFwiXFxuXCIpXG4gICAgICAubWFwKChmaWVsZCkgPT4ge1xuICAgICAgICBjb25zdCBba2V5LCB2YWx1ZV0gPSBmaWVsZC50cmltKCkuc3BsaXQoXCI9XCIpO1xuICAgICAgICByZXR1cm4gcHJvcGVydHkoa2V5LCB2YWx1ZSk7XG4gICAgICB9KVxuICAgICAgLmpvaW4oXCJcIil9XG4gIDwvbHRpY206b3B0aW9ucz5cbmA7XG5cbmNvbnN0IGhlYWRlclByb3BzID0gYFxueG1sbnM9XCJodHRwOi8vd3d3Lmltc2dsb2JhbC5vcmcveHNkL2ltc2x0aWNjX3YxcDBcIlxueG1sbnM6Ymx0aSA9IFwiaHR0cDovL3d3dy5pbXNnbG9iYWwub3JnL3hzZC9pbXNiYXNpY2x0aV92MXAwXCJcbnhtbG5zOmx0aWNtID1cImh0dHA6Ly93d3cuaW1zZ2xvYmFsLm9yZy94c2QvaW1zbHRpY21fdjFwMFwiXG54bWxuczpsdGljcCA9XCJodHRwOi8vd3d3Lmltc2dsb2JhbC5vcmcveHNkL2ltc2x0aWNwX3YxcDBcIlxueG1sbnM6eHNpID0gXCJodHRwOi8vd3d3LnczLm9yZy8yMDAxL1hNTFNjaGVtYS1pbnN0YW5jZVwiXG54c2k6c2NoZW1hTG9jYXRpb24gPSBcImh0dHA6Ly93d3cuaW1zZ2xvYmFsLm9yZy94c2QvaW1zbHRpY2NfdjFwMCBodHRwOi8vd3d3Lmltc2dsb2JhbC5vcmcveHNkL2x0aS9sdGl2MXAwL2ltc2x0aWNjX3YxcDAueHNkXG5odHRwOi8vd3d3Lmltc2dsb2JhbC5vcmcveHNkL2ltc2Jhc2ljbHRpX3YxcDAgaHR0cDovL3d3dy5pbXNnbG9iYWwub3JnL3hzZC9sdGkvbHRpdjFwMC9pbXNiYXNpY2x0aV92MXAwLnhzZFxuaHR0cDovL3d3dy5pbXNnbG9iYWwub3JnL3hzZC9pbXNsdGljbV92MXAwIGh0dHA6Ly93d3cuaW1zZ2xvYmFsLm9yZy94c2QvbHRpL2x0aXYxcDAvaW1zbHRpY21fdjFwMC54c2Rcbmh0dHA6Ly93d3cuaW1zZ2xvYmFsLm9yZy94c2QvaW1zbHRpY3BfdjFwMCBodHRwOi8vd3d3Lmltc2dsb2JhbC5vcmcveHNkL2x0aS9sdGl2MXAwL2ltc2x0aWNwX3YxcDAueHNkXCJcbmA7XG5cbi8vIGNvbXBhY3RzIG9iaiBieSByZW1vdmluZyBudWxsIG9yIGVtcHR5IHN0cmluZyBrZXlzXG4vLyBoYWNreSBhbmQgZnVuXG4vLyBAdHMtaWdub3JlXG5jb25zdCBjb21wYWN0ID0gKG9iaikgPT4ge1xuICBPYmplY3Qua2V5cyhvYmopLmZvckVhY2goXG4gICAgKGtleSkgPT4gKG9ialtrZXldID09PSB1bmRlZmluZWQgfHwgb2JqW2tleV0gPT09IFwiXCIpICYmIGRlbGV0ZSBvYmpba2V5XVxuICApO1xufTtcblxuZXhwb3J0IGNvbnN0IGJ1aWxkWE1MID0gKG9wdHM6IFhNTE9wdGlvbnMpID0+IHtcbiAgY29tcGFjdChvcHRzKTtcbiAgY29uc3Qge1xuICAgIGxhdW5jaFVybCxcbiAgICB0aXRsZSxcbiAgICBkZXNjcmlwdGlvbixcbiAgICBkb21haW4sXG4gICAgcHJpdmFjeUxldmVsLFxuICAgIHBsYWNlbWVudHMsXG4gICAgc2VsZWN0aW9uSGVpZ2h0LFxuICAgIHNlbGVjdGlvbldpZHRoLFxuICAgIG9hdXRoQ29tcGxpYW50LFxuICAgIHZpc2liaWxpdHksXG4gICAgY3VzdG9tRmllbGRzLFxuICB9ID0geyAuLi5kZWZhdWx0cywgLi4ub3B0cyB9O1xuXG4gIHJldHVybiBgPD94bWwgdmVyc2lvbj1cIjEuMFwiIGVuY29kaW5nPVwiVVRGLThcIj8+XG4gICAgICAgIDxjYXJ0cmlkZ2VfYmFzaWNsdGlfbGluayAke2hlYWRlclByb3BzfT5cbiAgICAgICAgICAgIDxibHRpOmxhdW5jaF91cmw+JHtsYXVuY2hVcmx9PC9ibHRpOmxhdW5jaF91cmw+XG4gICAgICAgICAgICA8Ymx0aTp0aXRsZT4ke3RpdGxlfTwvYmx0aTp0aXRsZT5cbiAgICAgICAgICAgIDxibHRpOmRlc2NyaXB0aW9uPiR7ZGVzY3JpcHRpb259PC9ibHRpOmRlc2NyaXB0aW9uPlxuICAgICAgICAgICAgPGJsdGk6ZXh0ZW5zaW9ucyBwbGF0Zm9ybT1cImNhbnZhcy5pbnN0cnVjdHVyZS5jb21cIj5cbiAgICAgICAgICAgICAgICAke3Byb3BlcnR5KFwiZG9tYWluXCIsIGRvbWFpbil9XG4gICAgICAgICAgICAgICAgJHtwcm9wZXJ0eShcInRleHRcIiwgdGl0bGUpfVxuICAgICAgICAgICAgICAgICR7cHJvcGVydHkoXCJvYXV0aF9jb21wbGlhbnRcIiwgb2F1dGhDb21wbGlhbnQpfVxuICAgICAgICAgICAgICAgICR7cHJvcGVydHkoXCJwcml2YWN5X2xldmVsXCIsIHByaXZhY3lMZXZlbCl9XG4gICAgICAgICAgICAgICAgJHtwcm9wZXJ0eShcbiAgICAgICAgICAgICAgICAgIFwidmlzaWJpbGl0eVwiLFxuICAgICAgICAgICAgICAgICAgdmlzaWJpbGl0eSA9PT0gXCJub25lXCIgPyBmYWxzZSA6IHZpc2liaWxpdHlcbiAgICAgICAgICAgICAgICApfVxuICAgICAgICAgICAgICAgICR7Y3VzdG9tRmllbGRzID8gY3VzdG9tRmllbGRYTUwoY3VzdG9tRmllbGRzKSA6IFwiXCJ9XG4gICAgICAgICAgICAgICAgJHtwbGFjZW1lbnRzPy5tYXAoKHApID0+XG4gICAgICAgICAgICAgICAgICBwbGFjZW1lbnRYTUwocCwgbGF1bmNoVXJsLCBzZWxlY3Rpb25XaWR0aCwgc2VsZWN0aW9uSGVpZ2h0KVxuICAgICAgICAgICAgICAgICl9XG4gICAgICAgICAgICA8L2JsdGk6ZXh0ZW5zaW9ucz5cbiAgICAgICAgPC9jYXJ0cmlkZ2VfYmFzaWNsdGlfbGluaz5cbiAgICA8L3htbD5gO1xufTtcbiIsICJleHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBjb25maWcoKSB7XG4gIGNvbnN0IGRvbWFpbiA9IHByb2Nlc3MuZW52LkxUSV9ET01BSU4gfHwgXCJsb2NhbGhvc3Q6MzAwMFwiO1xuICBjb25zdCBwcmVmaXggPSBwcm9jZXNzLmVudi5OT0RFX0VOViA9PT0gXCJwcm9kdWN0aW9uXCIgPyBcImh0dHBzOi8vXCIgOiBcImh0dHA6Ly9cIjtcbiAgY29uc3QgbGF1bmNoVVJMID0gYCR7cHJlZml4fSR7ZG9tYWlufS9sYXVuY2hgO1xuXG4gIHJldHVybiB7XG4gICAgRE9NQUlOOiBkb21haW4sXG4gICAgTEFVTkNIX1VSTDogbGF1bmNoVVJMLFxuICB9O1xufVxuIiwgImV4cG9ydCBjb25zdCBCQVNJQ19MVElfUkVRVUVTVCA9IFwiYmFzaWNfbHRpX3JlcXVlc3RcIjtcbmV4cG9ydCBjb25zdCBDT05URU5UX0lURU1fU0VMRUNUSU9OID0gXCJjb250ZW50X2l0ZW1fc2VsZWN0aW9uXCI7XG5leHBvcnQgY29uc3QgQ09OVEVOVF9JVEVNX1NFTEVDVElPTl9SRVFVRVNUID0gXCJjb250ZW50X2l0ZW1fc2VsZWN0aW9uX3JlcXVlc3RcIjtcblxuZXhwb3J0IHR5cGUgUGxhY2VtZW50ID0ge1xuICBrZXk6IHN0cmluZztcbiAgbmFtZTogc3RyaW5nO1xuICB0eXBlcz86IHN0cmluZ1tdO1xufTtcblxuZXhwb3J0IGNvbnN0IFBMQUNFTUVOVFM6IFBsYWNlbWVudFtdID0gW1xuICB7IGtleTogXCJhY2NvdW50X25hdmlnYXRpb25cIiwgbmFtZTogXCJBY2NvdW50IE5hdmlnYXRpb25cIiB9LFxuICB7XG4gICAga2V5OiBcImFzc2lnbm1lbnRfbWVudVwiLFxuICAgIG5hbWU6IFwiQXNzaWdubWVudCBNZW51XCIsXG4gICAgdHlwZXM6IFtDT05URU5UX0lURU1fU0VMRUNUSU9OLCBCQVNJQ19MVElfUkVRVUVTVF0sXG4gIH0sXG4gIHtcbiAgICBrZXk6IFwiYXNzaWdubWVudF9zZWxlY3Rpb25cIixcbiAgICBuYW1lOiBcIkFzc2lnbm1lbnQgU2VsZWN0aW9uXCIsXG4gICAgdHlwZXM6IFtDT05URU5UX0lURU1fU0VMRUNUSU9OX1JFUVVFU1QsIEJBU0lDX0xUSV9SRVFVRVNUXSxcbiAgfSxcbiAge1xuICAgIGtleTogXCJjb2xsYWJvcmF0aW9uXCIsXG4gICAgbmFtZTogXCJDb2xsYWJvcmF0aW9uXCIsXG4gICAgdHlwZXM6IFtDT05URU5UX0lURU1fU0VMRUNUSU9OX1JFUVVFU1QsIEJBU0lDX0xUSV9SRVFVRVNUXSxcbiAgfSxcbiAge1xuICAgIGtleTogXCJjb3Vyc2VfYXNzaWdubWVudHNfbWVudVwiLFxuICAgIG5hbWU6IFwiQ291cnNlIEFzc2lnbm1lbnRzIE1lbnVcIixcbiAgICB0eXBlczogW0JBU0lDX0xUSV9SRVFVRVNUXSxcbiAgfSxcbiAgeyBrZXk6IFwiY291cnNlX2hvbWVfc3ViX25hdmlnYXRpb25cIiwgbmFtZTogXCJDb3Vyc2UgSG9tZSBTdWIgTmF2aWdhdGlvblwiIH0sXG4gIHsga2V5OiBcImNvdXJzZV9uYXZpZ2F0aW9uXCIsIG5hbWU6IFwiQ291cnNlIE5hdmlnYXRpb25cIiB9LFxuICB7XG4gICAga2V5OiBcImNvdXJzZV9zZXR0aW5nc19zdWJfbmF2aWdhdGlvblwiLFxuICAgIG5hbWU6IFwiQ291cnNlIFNldHRpbmdzIFN1YiBOYXZpZ2F0aW9uXCIsXG4gIH0sXG4gIHtcbiAgICBrZXk6IFwiZGlzY3Vzc2lvbl90b3BpY19tZW51XCIsXG4gICAgbmFtZTogXCJEaXNjdXNzaW9uIE1lbnVcIixcbiAgICB0eXBlczogW0NPTlRFTlRfSVRFTV9TRUxFQ1RJT04sIEJBU0lDX0xUSV9SRVFVRVNUXSxcbiAgfSxcbiAge1xuICAgIGtleTogXCJlZGl0b3JfYnV0dG9uXCIsXG4gICAgbmFtZTogXCJFZGl0b3IgQnV0dG9uXCIsXG4gICAgdHlwZXM6IFtDT05URU5UX0lURU1fU0VMRUNUSU9OX1JFUVVFU1QsIEJBU0lDX0xUSV9SRVFVRVNUXSxcbiAgfSxcbiAge1xuICAgIGtleTogXCJmaWxlX21lbnVcIixcbiAgICBuYW1lOiBcIkZpbGUgTWVudVwiLFxuICAgIHR5cGVzOiBbQ09OVEVOVF9JVEVNX1NFTEVDVElPTiwgQkFTSUNfTFRJX1JFUVVFU1RdLFxuICB9LFxuICB7IGtleTogXCJnbG9iYWxfbmF2aWdhdGlvblwiLCBuYW1lOiBcIkdsb2JhbCBOYXZpZ2F0aW9uXCIgfSxcbiAge1xuICAgIGtleTogXCJob21ld29ya19zdWJtaXNzaW9uXCIsXG4gICAgbmFtZTogXCJIb21ld29yayBTdWJtaXNzaW9uXCIsXG4gICAgdHlwZXM6IFtDT05URU5UX0lURU1fU0VMRUNUSU9OX1JFUVVFU1QsIEJBU0lDX0xUSV9SRVFVRVNUXSxcbiAgfSxcbiAge1xuICAgIGtleTogXCJsaW5rX3NlbGVjdGlvblwiLFxuICAgIG5hbWU6IFwiTGluayBTZWxlY3Rpb25cIixcbiAgICB0eXBlczogW0NPTlRFTlRfSVRFTV9TRUxFQ1RJT05fUkVRVUVTVCwgQkFTSUNfTFRJX1JFUVVFU1RdLFxuICB9LFxuICB7XG4gICAga2V5OiBcIm1pZ3JhdGlvbl9zZWxlY3Rpb25cIixcbiAgICBuYW1lOiBcIk1pZ3JhdGlvbiBTZWxlY3Rpb25cIixcbiAgICB0eXBlczogW0NPTlRFTlRfSVRFTV9TRUxFQ1RJT05fUkVRVUVTVCwgQkFTSUNfTFRJX1JFUVVFU1RdLFxuICB9LFxuICB7XG4gICAga2V5OiBcIm1vZHVsZV9tZW51XCIsXG4gICAgbmFtZTogXCJNb2R1bGUgTWVudVwiLFxuICAgIHR5cGVzOiBbQ09OVEVOVF9JVEVNX1NFTEVDVElPTiwgQkFTSUNfTFRJX1JFUVVFU1RdLFxuICB9LFxuICB7IGtleTogXCJwb3N0X2dyYWRlc1wiLCBuYW1lOiBcIlBvc3QgR3JhZGVzXCIgfSxcbiAge1xuICAgIGtleTogXCJxdWl6X21lbnVcIixcbiAgICBuYW1lOiBcIlF1aXogTWVudVwiLFxuICAgIHR5cGVzOiBbQ09OVEVOVF9JVEVNX1NFTEVDVElPTiwgQkFTSUNfTFRJX1JFUVVFU1RdLFxuICB9LFxuICB7XG4gICAga2V5OiBcInNpbWlsYXJpdHlfZGV0ZWN0aW9uXCIsXG4gICAgbmFtZTogXCJTaW1pbGFyaXR5IERldGVjdGlvblwiLFxuICAgIHR5cGVzOiBbQkFTSUNfTFRJX1JFUVVFU1RdLFxuICB9LFxuICB7XG4gICAga2V5OiBcInN1Ym1pc3Npb25fdHlwZV9zZWxlY3Rpb25cIixcbiAgICBuYW1lOiBcIlN1Ym1pc3Npb24gVHlwZSBTZWxlY3Rpb25cIixcbiAgICB0eXBlczogW0NPTlRFTlRfSVRFTV9TRUxFQ1RJT05fUkVRVUVTVCwgQkFTSUNfTFRJX1JFUVVFU1RdLFxuICB9LFxuICB7IGtleTogXCJ0b29sX2NvbmZpZ3VyYXRpb25cIiwgbmFtZTogXCJUb29sIENvbmZpZ3VyYXRpb25cIiB9LFxuICB7IGtleTogXCJ1c2VyX25hdmlnYXRpb25cIiwgbmFtZTogXCJVc2VyIE5hdmlnYXRpb25cIiB9LFxuICB7XG4gICAga2V5OiBcIndpa2lfcGFnZV9tZW51XCIsXG4gICAgbmFtZTogXCJXaWtpIFBhZ2UgTWVudVwiLFxuICAgIHR5cGVzOiBbQ09OVEVOVF9JVEVNX1NFTEVDVElPTiwgQkFTSUNfTFRJX1JFUVVFU1RdLFxuICB9LFxuXTtcblxuZXhwb3J0IHR5cGUgUGxhY2VtZW50SGFzaCA9IHtcbiAgW2tleTogc3RyaW5nXTogUGxhY2VtZW50O1xufTtcblxuZXhwb3J0IGNvbnN0IFBMQUNFTUVOVFNfQllfS0VZID0gUExBQ0VNRU5UUy5yZWR1Y2UoKGFjYzogUGxhY2VtZW50SGFzaCwgcCkgPT4ge1xuICBhY2NbcC5rZXldID0gcDtcbiAgcmV0dXJuIGFjYztcbn0sIHt9KTtcbiIsICJpbXBvcnQgeyBGb3JtLCBMb2FkZXJGdW5jdGlvbiwgdXNlTG9hZGVyRGF0YSB9IGZyb20gXCJyZW1peFwiO1xuaW1wb3J0IHsgUExBQ0VNRU5UUywgUGxhY2VtZW50IH0gZnJvbSBcIn4vcGxhY2VtZW50cy5zZXJ2ZXJcIjtcbmltcG9ydCB7IGJ1aWxkWE1MLCBYTUxPcHRpb25zIH0gZnJvbSBcIn4veG1sLnNlcnZlclwiO1xuaW1wb3J0IHtcbiAgYnVpbGRFcnJvclRyYWNrZXIsXG4gIFNlcmlhbGl6ZWRFcnJvclRyYWNrZXIsXG59IGZyb20gXCJ+L3htbEJ1aWxkZXIvZXJyb3JUcmFja2VyLnNlcnZlclwiO1xuXG5jb25zdCB2YWxpZGF0ZUN1c3RvbUZpZWxkcyA9IChwYXJhbTogc3RyaW5nIHwgdW5kZWZpbmVkKTogc3RyaW5nID0+IHtcbiAgaWYgKCFwYXJhbSkge1xuICAgIHJldHVybiBcIlwiO1xuICB9XG5cbiAgY29uc3QgYWxsRmllbGRzVmFsaWQgPSBwYXJhbS5zcGxpdChcIlxcblwiKS5ldmVyeShcbiAgICAvLyBhbGxvdyBlbXB0eSBvciB3aGl0ZXNwYWNlLW9ubHkgbGluZXNcbiAgICAvLyBhbGxvdyBzcGFjZXMgYmVmb3JlIGFuZCBhZnRlciwgYnV0IG5vdCBpbiBrZXkgb3IgdmFsdWVcbiAgICAvLyBhbGxvdyBvbmx5IG9uZSBrZXk9dmFsdWUgcGFpciBwZXIgbGluZVxuICAgIC8vIGFsbG93IGFueSBjaGFyYWN0ZXJzIGluIHZhbHVlLCBmb3IgZXhhbXBsZSBgJENhbnZhcy5jb3Vyc2UuaWRgXG4gICAgKGZpZWxkKSA9PiAvXlxccyokfF5cXHMqXFx3Kz1bXj1cXHNdK1xccyokLy50ZXN0KGZpZWxkKVxuICApO1xuXG4gIGlmIChhbGxGaWVsZHNWYWxpZCkge1xuICAgIHJldHVybiBcIlwiO1xuICB9IGVsc2Uge1xuICAgIHJldHVybiBcIkN1c3RvbSBmaWVsZHMgbXVzdCBiZSBpbiBrZXk9dmFsdWUgZm9ybWF0IGFuZCBvbmx5IG9uZSBwZXIgbGluZSFcIjtcbiAgfVxufTtcblxuZXhwb3J0IGNvbnN0IGxvYWRlcjogTG9hZGVyRnVuY3Rpb24gPSBhc3luYyAoeyByZXF1ZXN0IH0pID0+IHtcbiAgY29uc3QgdXJsID0gbmV3IFVSTChyZXF1ZXN0LnVybCk7XG4gIGNvbnN0IGdldFBhcmFtID0gKHA6IHN0cmluZykgPT4gdXJsLnNlYXJjaFBhcmFtcy5nZXQocCkgYXMgc3RyaW5nO1xuICBjb25zdCBnZXRCb29sZWFuUGFyYW0gPSAocDogc3RyaW5nKSA9PlxuICAgIEFycmF5LmZyb20odXJsLnNlYXJjaFBhcmFtcy5rZXlzKCkpLmluY2x1ZGVzKHApO1xuXG4gIGNvbnN0IG9wdHM6IFhNTE9wdGlvbnMgPSB7XG4gICAgdGl0bGU6IGdldFBhcmFtKFwidG9vbF9uYW1lXCIpLFxuICAgIGRlc2NyaXB0aW9uOiBnZXRQYXJhbShcImRlc2NyaXB0aW9uXCIpLFxuICAgIGRvbWFpbjogZ2V0UGFyYW0oXCJ0b29sX2RvbWFpblwiKSxcbiAgICBsYXVuY2hVcmw6IGdldFBhcmFtKFwibGF1bmNoX3VybFwiKSxcbiAgICBwcml2YWN5TGV2ZWw6IGdldFBhcmFtKFwicHJpdmFjeV9sZXZlbFwiKSxcbiAgICBzZWxlY3Rpb25IZWlnaHQ6IGdldFBhcmFtKFwic2VsZWN0aW9uX2hlaWdodFwiKSxcbiAgICBzZWxlY3Rpb25XaWR0aDogZ2V0UGFyYW0oXCJzZWxlY3Rpb25fd2lkdGhcIiksXG4gICAgb2F1dGhDb21wbGlhbnQ6IGdldEJvb2xlYW5QYXJhbShcIm9hdXRoX2NvbXBsaWFudFwiKSxcbiAgICB2aXNpYmlsaXR5OiBnZXRQYXJhbShcInZpc2liaWxpdHlcIiksXG4gICAgY3VzdG9tRmllbGRzOiBnZXRQYXJhbShcImN1c3RvbV9maWVsZHNcIiksXG4gICAgcGxhY2VtZW50czogdXJsLnNlYXJjaFBhcmFtcy5nZXRBbGwoXCJwbGFjZW1lbnRzXCIpLFxuICB9O1xuXG4gIGNvbnN0IGVycm9yVHJhY2tlciA9IGJ1aWxkRXJyb3JUcmFja2VyKCk7XG4gIGVycm9yVHJhY2tlci5hZGQoXCJjdXN0b21fZmllbGRzXCIsIHZhbGlkYXRlQ3VzdG9tRmllbGRzKG9wdHMuY3VzdG9tRmllbGRzKSk7XG5cbiAgcmV0dXJuIHtcbiAgICB4bWw6IGVycm9yVHJhY2tlci5oYXNFcnJvcnMoKSA/IGVycm9yVHJhY2tlci50ZXh0IDogYnVpbGRYTUwob3B0cyksXG4gICAgZXJyb3JUcmFja2VyOiBlcnJvclRyYWNrZXIudG9KU09OKCksXG4gICAgcGxhY2VtZW50czogUExBQ0VNRU5UUyxcbiAgfTtcbn07XG5cbnR5cGUgRmllbGRQcm9wcyA9IHtcbiAgbmFtZTogc3RyaW5nO1xuICBpbnB1dE5hbWU/OiBzdHJpbmc7XG4gIHR5cGU/OiBzdHJpbmc7XG4gIGRlZmF1bHRWYWx1ZT86IHN0cmluZztcbiAgZGVzY3JpcHRpb24/OiBzdHJpbmc7XG4gIGVycm9yPzogc3RyaW5nO1xuICBjaGlsZHJlbj86IFJlYWN0LlJlYWN0Tm9kZTtcbn07XG5jb25zdCBGaWVsZCA9ICh7XG4gIG5hbWUsXG4gIGlucHV0TmFtZSxcbiAgdHlwZSA9IFwic3RyaW5nXCIsXG4gIGRlZmF1bHRWYWx1ZSA9IFwiXCIsXG4gIGRlc2NyaXB0aW9uID0gXCJcIixcbiAgZXJyb3IgPSBcIlwiLFxuICBjaGlsZHJlbixcbn06IEZpZWxkUHJvcHMpID0+IChcbiAgPHRyPlxuICAgIDx0ZD5cbiAgICAgIDxzcGFuPntuYW1lfTwvc3Bhbj5cbiAgICAgIHtkZXNjcmlwdGlvbiAmJiAoXG4gICAgICAgIDxkaXZcbiAgICAgICAgICBzdHlsZT17eyBtYXhXaWR0aDogXCIyMGVtXCIsIHBhZGRpbmdMZWZ0OiBcIjFlbVwiLCBmb250U3R5bGU6IFwiaXRhbGljXCIgfX1cbiAgICAgICAgPlxuICAgICAgICAgIHtkZXNjcmlwdGlvbn1cbiAgICAgICAgPC9kaXY+XG4gICAgICApfVxuICAgIDwvdGQ+XG4gICAgPHRkPlxuICAgICAge2NoaWxkcmVufVxuICAgICAgeyFjaGlsZHJlbiAmJiAoXG4gICAgICAgIDxpbnB1dCBuYW1lPXtpbnB1dE5hbWV9IHR5cGU9e3R5cGV9IGRlZmF1bHRWYWx1ZT17ZGVmYXVsdFZhbHVlfT48L2lucHV0PlxuICAgICAgKX1cbiAgICA8L3RkPlxuICAgIDx0ZD5cbiAgICAgIDxwIHN0eWxlPXt7IGNvbG9yOiBcInJlZFwiIH19PntlcnJvcn08L3A+XG4gICAgPC90ZD5cbiAgPC90cj5cbik7XG5cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIEluZGV4KCkge1xuICBjb25zdCB7XG4gICAgeG1sLFxuICAgIHBsYWNlbWVudHMsXG4gICAgZXJyb3JUcmFja2VyLFxuICB9OiB7XG4gICAgeG1sOiBzdHJpbmc7XG4gICAgcGxhY2VtZW50czogUGxhY2VtZW50W107XG4gICAgZXJyb3JUcmFja2VyOiBTZXJpYWxpemVkRXJyb3JUcmFja2VyO1xuICB9ID0gdXNlTG9hZGVyRGF0YSgpO1xuXG4gIHJldHVybiAoXG4gICAgPGRpdiBzdHlsZT17eyBmb250RmFtaWx5OiBcInN5c3RlbS11aSwgc2Fucy1zZXJpZlwiLCBsaW5lSGVpZ2h0OiBcIjEuNFwiIH19PlxuICAgICAgPGgxPkxUSSAxLjEgVGVzdCBUb29sPC9oMT5cbiAgICAgIDxoMz5Vc2FnZTwvaDM+XG4gICAgICA8cD5cbiAgICAgICAgRmlsbCBvdXQgdGhlIGZpZWxkcyBiZWxvdyB0byB5b3VyIGhlYXJ0J3MgY29udGVudCB0byBjb25maWd1cmUgeW91clxuICAgICAgICB0b29sLiBGaWVsZHMgbGVmdCBibGFuayB3aWxsIHVzZSBzYW5lIGRlZmF1bHRzLlxuICAgICAgPC9wPlxuICAgICAgPHA+XG4gICAgICAgIENvdXJzZSBOYXZpZ2F0aW9uIGlzIHRoZSBvbmx5IGRlZmF1bHQgcGxhY2VtZW50LCBzbyBhZGQgbW9yZSBpZiB5b3Ugd2FudFxuICAgICAgICB0aGVtLiBPbmNlIHlvdSdyZSByZWFkeSwgY29weSB0aGUgWE1MIGZyb20gdGhlIGJvdHRvbSBvZiB0aGUgcGFnZS5cbiAgICAgIDwvcD5cbiAgICAgIDxwPlxuICAgICAgICBJbiBhIENhbnZhcyBjb3Vyc2Ugb3IgYWNjb3VudCwgbmF2aWdhdGUgdG8gU2V0dGluZ3MgLSZndDsgQXBwcyAtJmd0OyArXG4gICAgICAgIEFwcCAtJmd0OyBQYXN0ZSBYTUwuIEdpdmUgdGhlIHRvb2wgYSBuYW1lIChJIHByZWZlciBMVEkgMS4xIFRlc3QgVG9vbClcbiAgICAgICAgYW5kIHB1dCBga2V5YCBmb3IgdGhlIENvbnN1bWVyIEtleSBhbmQgYHNlY3JldGAgZm9yIHRoZSBTaGFyZWQgU2VjcmV0LFxuICAgICAgICBhbmQgcGFzdGUgdGhlIFhNTCBpbiB0aGUgWE1MIGJveC5cbiAgICAgIDwvcD5cbiAgICAgIDxwPlxuICAgICAgICBTYXZlIHRoZSB0b29sIGFuZCB0aGVuIHJlbG9hZCB0aGUgcGFnZS4gYExUSSAxLjEgVGVzdCBUb29sYCBzaG91bGQgYmUgYVxuICAgICAgICBuZXcgb3B0aW9uIGluIHRoZSBjb3Vyc2UgbmF2IHNpZGViYXIuIExhdW5jaCBpdCBhbmQgeW91IHdpbGwgYmUgYWJsZSB0b1xuICAgICAgICBzZWUgYWxsIHRoZSBsYXVuY2ggcGFyYW1ldGVycy5cbiAgICAgIDwvcD5cbiAgICAgIDxoMz5Db25maWd1cmF0aW9uPC9oMz5cbiAgICAgIDxwPlxuICAgICAgICAoU2VlIHRoZXtcIiBcIn1cbiAgICAgICAgPGEgaHJlZj1cImh0dHBzOi8vY2FudmFzLmluc3RydWN0dXJlLmNvbS9kb2MvYXBpL2ZpbGUudG9vbHNfeG1sLmh0bWxcIj5cbiAgICAgICAgICBDYW52YXMgQVBJIGRvY3NcbiAgICAgICAgPC9hPntcIiBcIn1cbiAgICAgICAgZm9yIGluZm9ybWF0aW9uIG9uIHRoZXNlIG9wdGlvbnMpXG4gICAgICA8L3A+XG4gICAgICB7ZXJyb3JUcmFja2VyLmhhc0Vycm9ycyAmJiAoXG4gICAgICAgIDxwIHN0eWxlPXt7IGNvbG9yOiBcInJlZFwiIH19PntlcnJvclRyYWNrZXIudGV4dH08L3A+XG4gICAgICApfVxuICAgICAgPEZvcm0gbWV0aG9kPVwiZ2V0XCI+XG4gICAgICAgIDx0YWJsZT5cbiAgICAgICAgICA8RmllbGQgbmFtZT1cIlRvb2wgTmFtZVwiIGlucHV0TmFtZT1cInRvb2xfbmFtZVwiPjwvRmllbGQ+XG4gICAgICAgICAgPEZpZWxkIG5hbWU9XCJEZXNjcmlwdGlvblwiIGlucHV0TmFtZT1cImRlc2NyaXB0aW9uXCI+PC9GaWVsZD5cbiAgICAgICAgICA8RmllbGQgbmFtZT1cIlRvb2wgRG9tYWluXCIgaW5wdXROYW1lPVwidG9vbF9kb21haW5cIj48L0ZpZWxkPlxuICAgICAgICAgIDxGaWVsZCBuYW1lPVwiTGF1bmNoIFVSTFwiIGlucHV0TmFtZT1cImxhdW5jaF91cmxcIj48L0ZpZWxkPlxuICAgICAgICAgIDxGaWVsZCBuYW1lPVwiUHJpdmFjeSBMZXZlbFwiPlxuICAgICAgICAgICAgPHNlbGVjdCBuYW1lPVwicHJpdmFjeV9sZXZlbFwiPlxuICAgICAgICAgICAgICA8b3B0aW9uIHZhbHVlPVwicHVibGljXCI+cHVibGljPC9vcHRpb24+XG4gICAgICAgICAgICAgIDxvcHRpb24gdmFsdWU9XCJuYW1lX29ubHlcIj5uYW1lX29ubHk8L29wdGlvbj5cbiAgICAgICAgICAgICAgPG9wdGlvbiB2YWx1ZT1cImFub255bW91c1wiPmFub255bW91czwvb3B0aW9uPlxuICAgICAgICAgICAgPC9zZWxlY3Q+XG4gICAgICAgICAgPC9GaWVsZD5cbiAgICAgICAgICA8RmllbGRcbiAgICAgICAgICAgIG5hbWU9XCJPQXV0aCBDb21wbGlhbnRcIlxuICAgICAgICAgICAgaW5wdXROYW1lPVwib2F1dGhfY29tcGxpYW50XCJcbiAgICAgICAgICAgIHR5cGU9XCJjaGVja2JveFwiXG4gICAgICAgICAgICBkZXNjcmlwdGlvbj1cIkRvZXMgbm90IGNvcHkgbGF1bmNoIFVSTCBxdWVyeSBwYXJhbWV0ZXJzIHRvIFBPU1QgYm9keSB3aGVuIHRydWVcIlxuICAgICAgICAgID48L0ZpZWxkPlxuICAgICAgICAgIDxGaWVsZCBuYW1lPVwiVmlzaWJpbGl0eVwiPlxuICAgICAgICAgICAgPHNlbGVjdCBuYW1lPVwidmlzaWJpbGl0eVwiPlxuICAgICAgICAgICAgICA8b3B0aW9uIHZhbHVlPVwibm9uZVwiPm5vbmU8L29wdGlvbj5cbiAgICAgICAgICAgICAgPG9wdGlvbiB2YWx1ZT1cInB1YmxpY1wiPnB1YmxpYzwvb3B0aW9uPlxuICAgICAgICAgICAgICA8b3B0aW9uIHZhbHVlPVwibWVtYmVyc1wiPm1lbWJlcnM8L29wdGlvbj5cbiAgICAgICAgICAgICAgPG9wdGlvbiB2YWx1ZT1cImFkbWluc1wiPmFkbWluczwvb3B0aW9uPlxuICAgICAgICAgICAgPC9zZWxlY3Q+XG4gICAgICAgICAgPC9GaWVsZD5cbiAgICAgICAgICA8RmllbGRcbiAgICAgICAgICAgIG5hbWU9XCJDdXN0b20gRmllbGRzXCJcbiAgICAgICAgICAgIGRlc2NyaXB0aW9uPVwiKGtleT12YWx1ZSwgb25lIHBlciBsaW5lKVwiXG4gICAgICAgICAgICBlcnJvcj17ZXJyb3JUcmFja2VyLmVycm9ycy5jdXN0b21fZmllbGRzfVxuICAgICAgICAgID5cbiAgICAgICAgICAgIDx0ZXh0YXJlYSBuYW1lPVwiY3VzdG9tX2ZpZWxkc1wiIHJvd3M9ezN9IGNvbHM9ezI0fT48L3RleHRhcmVhPlxuICAgICAgICAgIDwvRmllbGQ+XG4gICAgICAgICAgPEZpZWxkXG4gICAgICAgICAgICBuYW1lPVwiU2VsZWN0aW9uIEhlaWdodFwiXG4gICAgICAgICAgICBpbnB1dE5hbWU9XCJzZWxlY3Rpb25faGVpZ2h0XCJcbiAgICAgICAgICAgIHR5cGU9XCJudW1iZXJcIlxuICAgICAgICAgICAgZGVmYXVsdFZhbHVlPVwiNTAwXCJcbiAgICAgICAgICA+PC9GaWVsZD5cbiAgICAgICAgICA8RmllbGRcbiAgICAgICAgICAgIG5hbWU9XCJTZWxlY3Rpb24gV2lkdGhcIlxuICAgICAgICAgICAgaW5wdXROYW1lPVwic2VsZWN0aW9uX3dpZHRoXCJcbiAgICAgICAgICAgIHR5cGU9XCJudW1iZXJcIlxuICAgICAgICAgICAgZGVmYXVsdFZhbHVlPVwiNTAwXCJcbiAgICAgICAgICA+PC9GaWVsZD5cbiAgICAgICAgICA8RmllbGQgbmFtZT1cIlBsYWNlbWVudHNcIj5cbiAgICAgICAgICAgIDxzZWxlY3QgbmFtZT1cInBsYWNlbWVudHNcIiBtdWx0aXBsZT5cbiAgICAgICAgICAgICAge3BsYWNlbWVudHMubWFwKChwKSA9PiAoXG4gICAgICAgICAgICAgICAgPG9wdGlvbiB2YWx1ZT17cC5rZXl9PntwLm5hbWV9PC9vcHRpb24+XG4gICAgICAgICAgICAgICkpfVxuICAgICAgICAgICAgPC9zZWxlY3Q+XG4gICAgICAgICAgPC9GaWVsZD5cbiAgICAgICAgPC90YWJsZT5cbiAgICAgICAgPGJ1dHRvbiB0eXBlPVwic3VibWl0XCI+R2VuZXJhdGU8L2J1dHRvbj5cbiAgICAgIDwvRm9ybT5cbiAgICAgIDxoMz5HZW5lcmF0ZWQgWE1MPC9oMz5cbiAgICAgIDxjb2RlPnt4bWx9PC9jb2RlPlxuICAgIDwvZGl2PlxuICApO1xufVxuIiwgImV4cG9ydCB0eXBlIEVycm9yVHJhY2tlciA9IHtcbiAgaGFzRXJyb3JzOiAoKSA9PiBib29sZWFuO1xuICB0ZXh0OiBzdHJpbmc7XG4gIGFkZDogKGtleTogc3RyaW5nLCBtZXNzYWdlOiBzdHJpbmcpID0+IHZvaWQ7XG4gIHRvSlNPTjogKCkgPT4gU2VyaWFsaXplZEVycm9yVHJhY2tlcjtcbn07XG5cbmV4cG9ydCB0eXBlIFNlcmlhbGl6ZWRFcnJvclRyYWNrZXIgPSB7XG4gIGhhc0Vycm9yczogYm9vbGVhbjtcbiAgdGV4dDogc3RyaW5nO1xuICBlcnJvcnM6IEVycm9ySGFzaDtcbn07XG5cbmV4cG9ydCB0eXBlIEVycm9ySGFzaCA9IHtcbiAgW2tleTogc3RyaW5nXTogc3RyaW5nO1xufTtcblxuZXhwb3J0IGZ1bmN0aW9uIGJ1aWxkRXJyb3JUcmFja2VyKCk6IEVycm9yVHJhY2tlciB7XG4gIGNvbnN0IGVycm9yczogRXJyb3JIYXNoID0ge307XG5cbiAgY29uc3QgYWRkID0gKGtleTogc3RyaW5nLCBtZXNzYWdlOiBzdHJpbmcpID0+IHtcbiAgICBpZiAobWVzc2FnZSkge1xuICAgICAgZXJyb3JzW2tleV0gPSBtZXNzYWdlO1xuICAgIH1cbiAgfTtcblxuICBjb25zdCBoYXNFcnJvcnMgPSAoKSA9PiBPYmplY3Qua2V5cyhlcnJvcnMpLmxlbmd0aCA+IDA7XG4gIGNvbnN0IHRleHQgPSBcIkZpeCBlcnJvcnMgYmVmb3JlIHJlZ2VuZXJhdGluZ1wiO1xuXG4gIHJldHVybiB7XG4gICAgYWRkLFxuICAgIGhhc0Vycm9ycyxcbiAgICB0ZXh0LFxuICAgIHRvSlNPTjogKCkgPT4gKHsgdGV4dCwgaGFzRXJyb3JzOiBoYXNFcnJvcnMoKSwgZXJyb3JzIH0pLFxuICB9O1xufVxuIiwgImV4cG9ydCBkZWZhdWx0IHsndmVyc2lvbic6J2JiNzIyNmRlJywnZW50cnknOnsnbW9kdWxlJzonL2J1aWxkL2VudHJ5LmNsaWVudC1DNFVMMkZVMi5qcycsJ2ltcG9ydHMnOlsnL2J1aWxkL19zaGFyZWQvY2h1bmstVVhXTUxJSEwuanMnXX0sJ3JvdXRlcyc6eydyb290Jzp7J2lkJzoncm9vdCcsJ3BhcmVudElkJzp1bmRlZmluZWQsJ3BhdGgnOicnLCdpbmRleCc6dW5kZWZpbmVkLCdjYXNlU2Vuc2l0aXZlJzp1bmRlZmluZWQsJ21vZHVsZSc6Jy9idWlsZC9yb290LTRNVlVDSlBVLmpzJywnaW1wb3J0cyc6dW5kZWZpbmVkLCdoYXNBY3Rpb24nOmZhbHNlLCdoYXNMb2FkZXInOmZhbHNlLCdoYXNDYXRjaEJvdW5kYXJ5JzpmYWxzZSwnaGFzRXJyb3JCb3VuZGFyeSc6ZmFsc2V9LCdyb3V0ZXMvaW5kZXgnOnsnaWQnOidyb3V0ZXMvaW5kZXgnLCdwYXJlbnRJZCc6J3Jvb3QnLCdwYXRoJzp1bmRlZmluZWQsJ2luZGV4Jzp0cnVlLCdjYXNlU2Vuc2l0aXZlJzp1bmRlZmluZWQsJ21vZHVsZSc6Jy9idWlsZC9yb3V0ZXMvaW5kZXgtSlE1WVFRUTYuanMnLCdpbXBvcnRzJzpbJy9idWlsZC9fc2hhcmVkL2NodW5rLUxHSVY2UTQ3LmpzJ10sJ2hhc0FjdGlvbic6ZmFsc2UsJ2hhc0xvYWRlcic6dHJ1ZSwnaGFzQ2F0Y2hCb3VuZGFyeSc6ZmFsc2UsJ2hhc0Vycm9yQm91bmRhcnknOmZhbHNlfSwncm91dGVzL2xhdW5jaC8kbGF1bmNoSWQnOnsnaWQnOidyb3V0ZXMvbGF1bmNoLyRsYXVuY2hJZCcsJ3BhcmVudElkJzoncm9vdCcsJ3BhdGgnOidsYXVuY2gvOmxhdW5jaElkJywnaW5kZXgnOnVuZGVmaW5lZCwnY2FzZVNlbnNpdGl2ZSc6dW5kZWZpbmVkLCdtb2R1bGUnOicvYnVpbGQvcm91dGVzL2xhdW5jaC8kbGF1bmNoSWQtRUs2UUo1RUcuanMnLCdpbXBvcnRzJzpbJy9idWlsZC9fc2hhcmVkL2NodW5rLUhSWkxGSFdRLmpzJ10sJ2hhc0FjdGlvbic6ZmFsc2UsJ2hhc0xvYWRlcic6dHJ1ZSwnaGFzQ2F0Y2hCb3VuZGFyeSc6ZmFsc2UsJ2hhc0Vycm9yQm91bmRhcnknOmZhbHNlfSwncm91dGVzL2xhdW5jaC9pbmRleCc6eydpZCc6J3JvdXRlcy9sYXVuY2gvaW5kZXgnLCdwYXJlbnRJZCc6J3Jvb3QnLCdwYXRoJzonbGF1bmNoJywnaW5kZXgnOnRydWUsJ2Nhc2VTZW5zaXRpdmUnOnVuZGVmaW5lZCwnbW9kdWxlJzonL2J1aWxkL3JvdXRlcy9sYXVuY2gvaW5kZXgtSTNPWlgzUUcuanMnLCdpbXBvcnRzJzpbJy9idWlsZC9fc2hhcmVkL2NodW5rLUhSWkxGSFdRLmpzJ10sJ2hhc0FjdGlvbic6dHJ1ZSwnaGFzTG9hZGVyJzpmYWxzZSwnaGFzQ2F0Y2hCb3VuZGFyeSc6ZmFsc2UsJ2hhc0Vycm9yQm91bmRhcnknOmZhbHNlfSwncm91dGVzL3htbF9jb25maWcnOnsnaWQnOidyb3V0ZXMveG1sX2NvbmZpZycsJ3BhcmVudElkJzoncm9vdCcsJ3BhdGgnOid4bWxfY29uZmlnJywnaW5kZXgnOnVuZGVmaW5lZCwnY2FzZVNlbnNpdGl2ZSc6dW5kZWZpbmVkLCdtb2R1bGUnOicvYnVpbGQvcm91dGVzL3htbF9jb25maWctSFYzVUpUN0suanMnLCdpbXBvcnRzJzpbJy9idWlsZC9fc2hhcmVkL2NodW5rLUxHSVY2UTQ3LmpzJ10sJ2hhc0FjdGlvbic6ZmFsc2UsJ2hhc0xvYWRlcic6dHJ1ZSwnaGFzQ2F0Y2hCb3VuZGFyeSc6ZmFsc2UsJ2hhc0Vycm9yQm91bmRhcnknOmZhbHNlfX0sJ3VybCc6Jy9idWlsZC9tYW5pZmVzdC1CQjcyMjZERS5qcyd9OyJdLAogICJtYXBwaW5ncyI6ICI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBO0FBQUE7QUFBQTtBQUFBLFlBQXVCO0FBQUE7QUFBQTs7O0FDQXZCO0FBQUE7QUFBQTtBQVVBO0FBRUEsV0FBTyxlQUFlLFNBQVMsY0FBYyxFQUFFLE9BQU87QUFFdEQsUUFBSSxPQUFPLFFBQVE7QUFJbkIsV0FBTyxlQUFlLFNBQVMsNEJBQTRCO0FBQUEsTUFDekQsWUFBWTtBQUFBLE1BQ1osS0FBSyxXQUFZO0FBQUUsZUFBTyxLQUFLO0FBQUE7QUFBQTtBQUVqQyxXQUFPLGVBQWUsU0FBUyxvQ0FBb0M7QUFBQSxNQUNqRSxZQUFZO0FBQUEsTUFDWixLQUFLLFdBQVk7QUFBRSxlQUFPLEtBQUs7QUFBQTtBQUFBO0FBRWpDLFdBQU8sZUFBZSxTQUFTLHNDQUFzQztBQUFBLE1BQ25FLFlBQVk7QUFBQSxNQUNaLEtBQUssV0FBWTtBQUFFLGVBQU8sS0FBSztBQUFBO0FBQUE7QUFFakMsV0FBTyxlQUFlLFNBQVMsbUNBQW1DO0FBQUEsTUFDaEUsWUFBWTtBQUFBLE1BQ1osS0FBSyxXQUFZ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
