import type { FC, ReactNode } from "react";

type ProblemListItemProps = {
  icon: ReactNode;
  title: string;
  description: string;
};

export const ProblemListItem: FC<ProblemListItemProps> = (props) => {
  const titleText = props.title.split("\n").map((item, index) => {
    return (
      <p key={index} className="mb-1 text-center">
        {item}
      </p>
    );
  });

  const descriptionText = props.description.split("\n").map((item, index) => {
    return (
      <li key={index} className="mb-1">
        {item}
      </li>
    );
  });

  return (
    <div className="w-60 flex flex-col items-center">
      {props.icon}
      <div className="text-lg font-bold my-3">{titleText}</div>
      <ul className="list-disc pl-4">{descriptionText}</ul>
    </div>
  );
};
