import React from "react";
import { Field } from "./Field";

export const Visibility = ({ name }: { name: string }) => (
  <Field name="Visibility">
    <select name={name}>
      <option value="none">none</option>
      <option value="public">public</option>
      <option value="members">members</option>
      <option value="admins">admins</option>
    </select>
  </Field>
);

export const XMLDisplay = ({ xml, error }: { xml: string; error: boolean }) => {
  const onCopyClick = () => {
    navigator.clipboard.writeText(xml);
    const copyNotice = document.getElementById("copy-notice");
    if (copyNotice) {
      copyNotice.style.display = "inline";
      setTimeout(() => {
        copyNotice.style.display = "none";
      }, 3000);
    }
  };

  return (
    <>
      <h3>Generated XML</h3>
      {!error && (
        <div>
          <button onClick={onCopyClick}>Copy to Clipboard</button>
          <span
            style={{
              paddingLeft: "0.5em",
              color: "green",
              display: "none",
            }}
            id="copy-notice"
          >
            Copied to Clipboard!
          </span>
        </div>
      )}
      <code>{xml}</code>
    </>
  );
};

export const PlacementsList = ({ children }: { children: React.ReactNode }) => {
  const onPlacementExpand = () => {
    const placementConfig = document.getElementById("placement-config");
    if (placementConfig) {
      const value = placementConfig.style.display === "flex" ? "none" : "flex";
      placementConfig.style.display = value;
    }
  };

  return (
    <>
      <Field
        name="Placements"
        description="Defaults to only Course Navigation. Click button for more detailed options"
      >
        <button onClick={onPlacementExpand}>
          Toggle Placement Configuration
        </button>
      </Field>
      <div
        id="placement-config"
        style={{
          display: "none",
          flexDirection: "column",
          flexWrap: "wrap",
          maxHeight: "100em",
        }}
      >
        {children}
      </div>
    </>
  );
};

export const Header = () => (
  <>
    <h1>LTI 1.1 Test Tool</h1>
    <h3>Usage</h3>
    <p>
      Fill out the fields below to your heart's content to configure your tool.
      Fields left blank will use sane defaults.
    </p>
    <p>
      Course Navigation is the only default placement, so add more if you want
      them. Once you're ready, copy the XML from the bottom of the page.
    </p>
    <p>
      In a Canvas course or account, navigate to Settings -&gt; Apps -&gt; + App
      -&gt; Paste XML. Give the tool a name (I prefer LTI 1.1 Test Tool) and put
      `key` for the Consumer Key and `secret` for the Shared Secret, and paste
      the XML in the XML box.
    </p>
    <p>
      Save the tool and then reload the page. `LTI 1.1 Test Tool` should be a
      new option in the course nav sidebar. Launch it and you will be able to
      see all the launch parameters.
    </p>
  </>
);
