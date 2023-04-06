import { Field, useField } from "formik";
import { FC, HTMLAttributes } from "react";

interface InputProps extends HTMLAttributes<HTMLInputElement> {
  labelclassName?: string;
  inputclassName?: string;
  id: string;
  name: string;
  type: string;
  label: string;
  disabled?: boolean;
  value?: number | string | undefined;
  placeholder: string;
  onChange?: () => void;
  onInput?: () => void;
}
const Radio: FC<InputProps> = (props) => {
  const [field, meta] = useField(props);
  return (
    <>
      <input
        {...field}
        {...props}
        className={`w-full bg-inputArea rounded-xl px-3 py-2 border-none outline-none focus:shadow-outline text-gray-700 focus:ring-1 focus:ring-gray-300 ${props.inputclassName}`}
        autoComplete="off"
      />

      <label
        htmlFor={props.id}
        className={`block text-base mb-1 font-medium text-black capitalize ${props.labelclassName}`}
      >
        {props.label}
      </label>
    </>
  );
};

export default Radio;
