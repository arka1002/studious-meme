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
      <input
        {...field}
        {...props}
        className="w-full bg-inputArea rounded-xl px-3 py-2 border-none outline-none focus:shadow-outline text-gray-700 focus:ring-1 focus:ring-gray-300"
        autoComplete="off"
      />
      {meta.touched && meta.error ? (
        <div className="error text-red-600 my-2">{meta.error}</div>
      ) : null}
    </>
  );
};

export default Input;
