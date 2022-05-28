import type { FC, ReactNode } from "react";

type ProfileItemProps = {
  icon: ReactNode;
  title: string;
  description: string;
};

export const ProfileItem: FC<ProfileItemProps> = (props) => {
  const descriptionText = props.description.split("\n").map((item, index) => {
    return <p key={index}>{item}</p>;
  });

  return (
    <div className="w-[790px] flex gap-x-12 items-center leading-7">
      <div>
        <div className="text-lg font-bold text-red mb-3 flex gap-x-2 items-center">
          {props.icon}
          {props.title}
        </div>
        <div>{descriptionText}</div>
      </div>
    </div>
  );
};