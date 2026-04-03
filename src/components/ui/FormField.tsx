import { type InputHTMLAttributes, type TextareaHTMLAttributes } from "react";

type BaseProps = {
  label: string;
  fieldId: string;
  error?: string;
  touched?: boolean;
};

type InputFieldProps = BaseProps &
  Omit<InputHTMLAttributes<HTMLInputElement>, "id"> & {
    as?: "input";
  };

type TextareaFieldProps = BaseProps &
  Omit<TextareaHTMLAttributes<HTMLTextAreaElement>, "id"> & {
    as: "textarea";
  };

type Props = InputFieldProps | TextareaFieldProps;

export function FormField(props: Props) {
  const { label, fieldId, error, touched, as = "input", ...rest } = props;
  const errorId = `${fieldId}-error`;
  const showError = touched && error;

  return (
    <div>
      <label htmlFor={fieldId} className="block text-sm font-medium text-slate-300">
        {label}
      </label>
      {as === "textarea" ? (
        <textarea
          id={fieldId}
          aria-invalid={Boolean(showError)}
          aria-describedby={showError ? errorId : undefined}
          className="field-frost mt-2"
          {...(rest as TextareaHTMLAttributes<HTMLTextAreaElement>)}
        />
      ) : (
        <input
          id={fieldId}
          aria-invalid={Boolean(showError)}
          aria-describedby={showError ? errorId : undefined}
          className="field-frost mt-2"
          {...(rest as InputHTMLAttributes<HTMLInputElement>)}
        />
      )}
      {showError ? (
        <p id={errorId} className="mt-2 text-xs text-amber-200">
          {error}
        </p>
      ) : null}
    </div>
  );
}
