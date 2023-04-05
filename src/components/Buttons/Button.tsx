import { FC, ReactElement } from "react";

interface ButtonProps extends React.HTMLProps<HTMLButtonElement> {
  className: string;
  onClick?: () => void;
  children: React.ReactNode;
  type?: "submit" | "reset" | "button" | undefined;
}
const Button: FC<ButtonProps> = (props) => {
  return (
    <>
      <button
        type={props.type}
        className={
          " p-4 w-full rounded-lg tracking-wide font-semibold focus:outline-none hover:opacity-70 shadow-md  " +
          (props.className && props.className)
        }
        onClick={props.onClick}
      >
        {props.children}
      </button>
    </>
  );
};

export default Button;
