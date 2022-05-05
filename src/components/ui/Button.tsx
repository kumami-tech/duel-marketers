import type { FC } from "react";
import clsx from "clsx";

type ButtonProps = {
  label: string;
  textColor: string;
  bgColor: string;
};

export const Button: FC<ButtonProps> = (props) => {
  return (
    <button
      type="button"
      className={clsx(["font-bold rounded-full px-9 py-4 text-sm w-fit", props.textColor, props.bgColor])}
    >
      {props.label}
    </button>
  );
};
