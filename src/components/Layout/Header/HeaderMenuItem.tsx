import type { FC } from "react";
import Link from "next/link";
import { useRouter } from "next/router";
import clsx from "clsx";

type HeaderMenuItemProps = {
  title: string;
  url: string;
  borderBottom?: boolean;
};

export const HeaderMenuItem: FC<HeaderMenuItemProps> = (props) => {
  const borderStyle = props.borderBottom ? "border-b-[1px]" : "";
  const router = useRouter();
  const textColor = router.pathname.match(props.url) ? "text-red" : "";
  const hoverOpacity = router.pathname.match(props.url)
    ? "hover:opacity-80"
    : "hover:opacity-70";

  return (
    <Link href={props.url} passHref>
      <li
        className={clsx([
          "w-screen md:w-auto font-bold bg-white px-6 md:px-0 py-5 md:py-0 cursor-pointer z-10",
          borderStyle,
        ])}
      >
        <a className={clsx([textColor, hoverOpacity])}>{props.title}</a>
      </li>
    </Link>
  );
};
