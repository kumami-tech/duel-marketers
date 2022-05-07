import type { FC } from "react";
import clsx from "clsx";

type ButtonProps = {
  label: string;
  textColor: string;
  bgColor: string;
  className?: string;
};

export const Button: FC<ButtonProps> = (props) => {
  return (
    <button
      type="button"
      className={clsx(["font-bold rounded-full px-10 py-4 w-fit", props.textColor, props.bgColor, props.className])}
    >
      {props.label}
    </button>
  );
};
