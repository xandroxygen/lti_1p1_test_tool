export type FieldProps = {
  name: string;
  inputName?: string;
  type?: string;
  defaultValue?: string;
  description?: string;
  error?: string;
  children?: React.ReactNode;
};

export const Field = ({
  name,
  inputName,
  type = "string",
  defaultValue = "",
  description = "",
  error = "",
  children,
}: FieldProps) => (
  <tr>
    <td>
      <span>{name}</span>
      {description && (
        <div
          style={{ maxWidth: "20em", paddingLeft: "1em", fontStyle: "italic" }}
        >
          {description}
        </div>
      )}
    </td>
    <td>
      {children}
      {!children && (
        <input name={inputName} type={type} defaultValue={defaultValue}></input>
      )}
    </td>
    <td>
      <p style={{ color: "red" }}>{error}</p>
    </td>
  </tr>
);
