import type { FC } from "react";

type HeaderMenuItemProps = {
  title: string;
};

export const HeaderMenuItem: FC<HeaderMenuItemProps> = (props) => {
  return <li className="font-bold text-sm cursor-pointer">{props.title}</li>;
};
