import type { ComponentPropsWithoutRef } from "react";
import type { FC } from "react";

type TrendingUpIconProps = ComponentPropsWithoutRef<"svg">;

export const TrendingUpIcon: FC<TrendingUpIconProps> = (props) => {
  return (
    <svg width="100" height="100" viewBox="0 0 100 100" fill="none" xmlns="http://www.w3.org/2000/svg" {...props}>
      <path
        d="M12.8125 75L8.33337 70.5208L38.75 40.2083L56.1459 57.6042L81.25 32.5H68.0209V26.25H91.6667V49.8958H85.5209V37.0833L56.0417 66.5625L38.6459 49.1667L12.8125 75Z"
        fill="#FF0000"
      />
    </svg>
  );
};
