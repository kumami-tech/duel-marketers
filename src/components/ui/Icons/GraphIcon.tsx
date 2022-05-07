import type { ComponentPropsWithoutRef, FC } from "react";

type GraphIconProps = ComponentPropsWithoutRef<"svg">;

export const GraphIcon: FC<GraphIconProps> = (props) => {
  return (
    <svg width="100" height="100" viewBox="0 0 100 100" fill="none" xmlns="http://www.w3.org/2000/svg" {...props}>
      <path
        d="M16.6666 83.3334V50H31.25V83.3334H16.6666ZM42.7083 83.3334V16.6667H57.2916V83.3334H42.7083ZM68.75 83.3334V37.5H83.3333V83.3334H68.75Z"
        fill="#FF0000"
      />
    </svg>
  );
};
