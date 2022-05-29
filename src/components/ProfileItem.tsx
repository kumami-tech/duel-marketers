import type { FC, ReactNode } from "react";

type ProfileItemProps = {
  icon: ReactNode;
  title: string;
  description: string;
};

export const ProfileItem: FC<ProfileItemProps> = (props) => {
  const descriptionText = () => {
    return props.description.split("\n\n").map((item, index) => {
      return (
        <div key={index} className="mb-2">
          {item.split("\n").map((item, index) => {
            return <p key={index}>{item}</p>;
          })}
        </div>
      );
    });
  };

  return (
    <div className="w-full flex gap-x-12 items-center leading-7">
      <div>
        <div className="flex lg:justify-start">
          <div className="text-lg font-bold text-red mb-3 flex gap-x-2 items-center">
            {props.icon}
            {props.title}
          </div>
        </div>
        <div>{descriptionText()}</div>
      </div>
    </div>
  );
};
