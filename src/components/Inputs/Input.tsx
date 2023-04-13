import { Field, useField } from "formik";
import { FC, HTMLAttributes } from "react";

interface InputProps extends HTMLAttributes<HTMLInputElement> {
  labelclassName?: string;
  inputclassName?: string;
  id: string;
  name: string;
  type: string;
  symbol?: string;
  label: string;
  disabled?: boolean;
  value?: number | string | undefined;
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
        className={`block text-base mb-1 font-medium text-black capitalize ${props.labelclassName}`}
      >
        {props.label}
      </label>
      <div className="relative">
        <span className="absolute left-3 top-2 font-medium text-black">
          {!!props.symbol ? props.symbol : ""}
        </span>
        <input
          {...field}
          {...props}
          className={`w-full bg-inputArea rounded-xl px-3 py-2 border-none outline-none focus:shadow-outline text-gray-700 focus:ring-1 focus:ring-gray-300 ${props.inputclassName}`}
          autoComplete="off"
        />
      </div>
      {meta.touched && meta.error ? (
        <div className="error text-red-600 my-2">{meta.error}</div>
      ) : null}
    </>
  );
};

export default Input;
