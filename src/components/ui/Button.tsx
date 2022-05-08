import type { FC } from "react";
import clsx from "clsx";

type ButtonProps = {
  label: string;
  textColor: string;
  bgColor: string;
  className?: string;
  labelClassName?: string;
};

export const Button: FC<ButtonProps> = (props) => {
  return (
    <button
      type="button"
      className={clsx([
        "group font-bold rounded-full px-10 py-4 w-fit",
        props.textColor,
        props.bgColor,
        props.className,
      ])}
    >
      <span className={props.labelClassName}>{props.label}</span>
    </button>
  );
};
