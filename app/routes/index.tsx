import { Link } from "remix";

export default function Index() {
  return (
    <div style={{ fontFamily: "system-ui, sans-serif", lineHeight: "1.4" }}>
      <h1>LTI 1.1 Test Tool</h1>
      <h3>Usage</h3>
      <p>
        Build a tool configuration in XML and install it in Canvas using `key`
        and `secret`.
      </p>
      <ul>
        <li>
          <Link to="/xml_builder">XML Builder</Link>
        </li>
        <li>
          <Link to="/xml_config">XML Config</Link>
        </li>
        <li>
          <Link to="/launch">Basic Launch</Link>
        </li>
        <li>
          <Link to="/content_item_launch">Content Item Launch</Link>
        </li>
      </ul>
    </div>
  );
}
