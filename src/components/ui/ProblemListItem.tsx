import type { FC, ReactNode } from "react";

type ProblemListItemProps = {
  icon: ReactNode;
  title: string;
  description: string;
};

export const ProblemListItem: FC<ProblemListItemProps> = (props) => {
  return (
    <div className="w-60 flex flex-col items-center">
      {props.icon}
      <div className="text-lg font-bold my-3">{props.title}</div>
      <div className="">{props.description}</div>
    </div>
  );
};
