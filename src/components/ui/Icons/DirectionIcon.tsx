import type { ComponentPropsWithoutRef } from "react";
import type { FC } from "react";

type DirectionIconProps = ComponentPropsWithoutRef<"svg">;

export const DirectionIcon: FC<DirectionIconProps> = (props) => {
  return (
    <svg width="100" height="100" viewBox="0 0 100 100" fill="none" xmlns="http://www.w3.org/2000/svg" {...props}>
      <path d="M54.5694 85L43.4861 56.5139L15 45.4306V41.25L85 15L58.75 85H54.5694Z" fill="#FF0000" />
    </svg>
  );
};
