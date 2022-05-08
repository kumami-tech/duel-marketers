import type { ComponentPropsWithoutRef } from "react";
import type { FC } from "react";

type SquareCapIconProps = ComponentPropsWithoutRef<"svg">;

export const SquareCapIcon: FC<SquareCapIconProps> = (props) => {
  return (
    <svg
      width="100"
      height="100"
      viewBox="0 0 100 100"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M89.5832 70.5208V41.1458L49.8957 62.5L4.1665 37.5L49.8957 12.5L95.8332 37.5V70.5208H89.5832ZM49.8957 87.5L19.6873 70.9375V49.0625L49.8957 65.625L80.104 49.0625V70.9375L49.8957 87.5Z"
        fill="#FF0000"
      />
    </svg>
  );
};
