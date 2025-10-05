import { Link } from "@remix-run/react";

export default function Index() {
  return (
    <div style={{ fontFamily: "system-ui, sans-serif", lineHeight: "1.4" }}>
      <h1>LTI 1.3 Test Tool</h1>
      <Link to="/">Return to 1.1 Configuration</Link>
      <h3>Purpose</h3>
      <p>
        This tool lives on the same domain as a 1.1 test tool to facilitate
        testing of the 1.1 -&gt; 1.3 migration process, which requires the tools
        to be on the same domain.
      </p>
      <p>
        In addition, there hasn't historically been a in-house 1.3 test tool
        suitable for deployed environments. Though this doesn't yet have any
        other features besides a basic launch, this does fill that gap.
      </p>
      <p>
        Currently, this tool only configures itself for two placements:
        course_navigation and assignment_selection. In the future this page will
        allow you to further configure the tool.
      </p>
      <h3>Installation (Deployed)</h3>
      <p>
        This tool currently only supports one registration per deployed
        environment - so it is installed as a SiteAdmin global DeveloperKey, and
        is available for you to install in any production/beta Canvas context
        you wish.
      </p>
      <p>To install the tool in your root account, follow these steps:</p>
      <ol>
        <li>
          Copy this global DeveloperKey ID: <code>170000000000763</code>
        </li>
        <li>
          Navigate to{" "}
          <code>
            &lt;account&gt;.instructure.com/accounts/self/developer_keys
          </code>
          , switch to the Inherited tab, click Show More, then Ctrl/Cmd-F for
          the global ID from step 1. Turn that key ON for your account.
        </li>
        <li>
          Navigate to the context in which you wish to install this tool (e.g.
          your sandbox root account). Go to Settings -&gt; Apps -&gt; View App
          Configurations -&gt; + App, and choose By Client Id, and paste the ID
          from step 1.
        </li>
        <li>
          Reload the page. Congrats, the tool is installed! It will show up in a
          course sidebar and during assignment creation.
        </li>
      </ol>
      <h3>Installation (Locally)</h3>
      <p>
        This tool currently only supports one registration/client_id/Platform
        when developing locally, and is configured using environment variables.
      </p>
      <p>To install the tool in your local Canvas, follow these steps:</p>
      <ol>
        <li>
          Visit the{" "}
          <a href="/1_3/tool_configuration">tool configuration page</a> and copy
          the JSON there.
        </li>
        <li>
          Navigate to{" "}
          <code>&lt;local-canvas-install&gt;/accounts/self/developer_keys</code>
          , and click + LTI Key. Give it a name and select Paste JSON, then
          paste the JSON you copied in step 1.
        </li>
        <li>
          Save and close the new DeveloperKey, turn it ON, and copy its ID.
        </li>
        <li>
          In this repository, replace the <code>CLIENT_ID</code> entry in{" "}
          <code>.env</code> with this copied ID.
        </li>
        <li>
          Modify any other entries in <code>.env</code> to match your Canvas
          install domain.
        </li>
        <li>
          Restart the dev server after making any <code>.env</code> changes.
        </li>
        <li>
          Congrats, the tool is installed! It will show up in course sidebars
          and when creating assignments.
        </li>
      </ol>
    </div>
  );
}
