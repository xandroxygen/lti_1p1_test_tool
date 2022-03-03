export default function validators() {
  const customFields = (param: string | undefined): string => {
    if (!param) {
      return "";
    }

    const allFieldsValid = param.split("\n").every(
      // allow empty or whitespace-only lines
      // allow spaces before and after, but not in key or value
      // allow only one key=value pair per line
      // allow any characters in value, for example `$Canvas.course.id`
      (field) => /^\s*$|^\s*\w+=[^=\s]+\s*$/.test(field)
    );

    if (allFieldsValid) {
      return "";
    } else {
      return "Custom fields must be in key=value format and only one per line!";
    }
  };

  return {
    customFields,
  };
}
