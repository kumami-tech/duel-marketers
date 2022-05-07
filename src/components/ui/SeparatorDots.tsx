import clsx from "clsx";
import type { FC } from "react";

type SeparatorDotsProps = {
  className?: string;
};

export const SeparatorDots: FC<SeparatorDotsProps> = (props) => {
  return (
    <ul className={clsx(["flex gap-x-11", props.className])}>
      <li className="w-3 h-3 bg-red"></li>
      <li className="w-3 h-3 bg-red"></li>
      <li className="w-3 h-3 bg-red"></li>
    </ul>
  );
};
