import type { FC, ReactNode } from "react";

type ServiceListItemProps = {
  icon: ReactNode;
  title: string;
  description: string;
  monthlyFee?: string;
  contractPeriod?: string;
  feePerArticle?: string;
  constructionAgency?: string;
  operationAgency?: string;
};

export const ServiceListItem: FC<ServiceListItemProps> = (props) => {
  return (
    <div className="bg-white px-8 py-10 sm:px-20 sm:py-12 shadow-lg">
      <div className="flex-wrap sm:max-w-[800px] sm:flex-nowrap sm:flex gap-x-12 items-center leading-7">
        <div className="mb-5 sm:mb-0 flex justify-center">{props.icon}</div>
        <div className="w-full">
          <div className="text-lg font-bold mb-3 text-center sm:text-left">
            {props.title}
          </div>
          <div className="mb-3">{props.description}</div>
          <div className="flex-wrap sm:flex gap-x-14">
            {props.monthlyFee && (
              <div>
                <span className="font-bold mr-4">月額費用</span>
                <span className="">{props.monthlyFee}</span>
              </div>
            )}
            {props.contractPeriod && (
              <div>
                <span className="font-bold mr-4">契約期間</span>
                <span className="">{props.contractPeriod}</span>
              </div>
            )}
            {props.feePerArticle && (
              <div>
                <span className="font-bold mr-4">1記事</span>
                <span className="">{props.feePerArticle}</span>
              </div>
            )}
            {props.constructionAgency && (
              <div>
                <span className="font-bold mr-4">構築代行</span>
                <span className="">{props.constructionAgency}</span>
              </div>
            )}
            {props.operationAgency && (
              <div>
                <span className="font-bold mr-4">運用代行</span>
                <span className="">{props.operationAgency}</span>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};
