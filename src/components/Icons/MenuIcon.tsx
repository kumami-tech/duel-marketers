import type { ComponentPropsWithoutRef } from "react";
import type { FC } from "react";

type MenuIconProps = ComponentPropsWithoutRef<"svg">;

export const MenuIcon: FC<MenuIconProps> = (props) => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      height="36"
      width="36"
      viewBox="0 0 48 48"
      {...props}
    >
      <path d="M6 36V33H42V36ZM6 25.5V22.5H42V25.5ZM6 15V12H42V15Z" />
    </svg>
  );
};
