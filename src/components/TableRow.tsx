import type { FC } from "react";
import clsx from "clsx";

type TableRowProps = {
  label: string;
  data: string;
  borderBottom: boolean;
};

export const TableRow: FC<TableRowProps> = (props) => {
  const dataText = props.data.split("\n").map((item, index) => {
    return <p key={index}>{item}</p>;
  });

  return (
    <div
      className={clsx([
        props.borderBottom ? "border-b-[0.5px]" : "",
        "text-white md:text-lg leading-8 border-gray-400 align-top flex",
      ])}
    >
      <div className="min-w-[108px] md:w-40 py-3 md:py-5 font-bold pl-4 md:pl-8">
        {props.label}
      </div>
      <div className="py-3 md:py-5 pr-4 md:pr-8">{dataText}</div>
    </div>
  );
};
