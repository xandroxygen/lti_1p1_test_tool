export type ErrorTracker = {
  hasErrors: () => boolean;
  text: string;
  add: (key: string, message: string) => void;
  toJSON: () => SerializedErrorTracker;
};

export type SerializedErrorTracker = {
  hasErrors: boolean;
  text: string;
  errors: ErrorHash;
};

export type ErrorHash = {
  [key: string]: string;
};

export function buildErrorTracker(): ErrorTracker {
  const errors: ErrorHash = {};

  const add = (key: string, message: string) => {
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
    toJSON: () => ({ text, hasErrors: hasErrors(), errors }),
  };
}
