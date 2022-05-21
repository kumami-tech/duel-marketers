import type { FC, ReactNode } from "react";

type ServiceListItemProps = {
  icon: ReactNode;
  title: string;
  description: string;
  monthlyFee?: string;
  contractPeriod?: string;
  feePerArticle?: string;
};

export const ServiceListItem: FC<ServiceListItemProps> = (props) => {
  const descriptionText = props.description.split("\n").map((item, index) => {
    return <p key={index}>{item}</p>;
  });

  return (
    <div className="bg-white px-20 py-12 shadow-lg">
      <div className="w-[770px] flex gap-x-12 items-center leading-7">
        {props.icon}
        <div>
          <div className="text-lg font-bold mb-3">{props.title}</div>
          <div className="mb-3">{descriptionText}</div>
          <div className="flex gap-20">
            {props.monthlyFee && (
              <div>
                <span className="font-bold mr-6">月額費用</span>
                <span className="">{props.monthlyFee}</span>
              </div>
            )}
            {props.contractPeriod && (
              <div>
                <span className="font-bold mr-6">契約期間</span>
                <span className="">{props.contractPeriod}</span>
              </div>
            )}
            {props.feePerArticle && (
              <div>
                <span className="font-bold mr-6">1記事</span>
                <span className="">{props.feePerArticle}</span>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};
