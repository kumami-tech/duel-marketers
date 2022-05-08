import type { FC } from "react";
import Link from "next/link";
import { Logo } from "~/components/ui/Layout/Header/Logo";
import { HeaderMenu } from "~/components/ui/Layout/Header/HeaderMenu";

export const Header: FC = () => {
  return (
    <header className="bg-white px-10 w-full h-16 items-center flex justify-between drop-shadow">
      <Link href="/">
        <a className="hover:opacity-80">
          <Logo />
        </a>
      </Link>
      <HeaderMenu />
    </header>
  );
};
