import type { FC } from "react";
import Link from "next/link";
import { useRouter } from "next/router";
import clsx from "clsx";

type HeaderMenuItemProps = {
  title: string;
  url: string;
  borderBottom: boolean;
};

export const HeaderMenuItem: FC<HeaderMenuItemProps> = (props) => {
  const borderStyle = props.borderBottom ? "md:border-b-[1px]" : "";
  const router = useRouter();
  const textColor = router.pathname.match(props.url) ? "text-red" : "";
  const hoverOpacity = router.pathname.match(props.url)
    ? "hover:opacity-80"
    : "hover:opacity-70";

  return (
    <li
      className={clsx([
        "w-screen font-bold bg-white px-8 py-5 cursor-pointer",
        borderStyle,
      ])}
    >
      <Link href={props.url}>
        <a className={clsx([textColor, hoverOpacity])}>{props.title}</a>
      </Link>
    </li>
  );
};
