import { Field, useField } from "formik";
import { FC, HTMLAttributes } from "react";

interface InputProps extends HTMLAttributes<HTMLInputElement> {
  id: string;
  name: string;
  type: string;
  label: string;
  disabled?: boolean;
  placeholder: string;
  onChange?: () => void;
  onInput?: () => void;
}
const Input: FC<InputProps> = (props) => {
  const [field, meta] = useField(props);
  return (
    <>
      <label
        htmlFor={props.id}
        className="block text-base mb-1 font-medium text-black capitalize"
      >
        {props.label}
      </label>
      <input {...field} {...props} />
      {meta.touched && meta.error ? (
        <div className="error">{meta.error}</div>
      ) : null}
    </>
  );
};

export default Input;
