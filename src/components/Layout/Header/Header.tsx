import type { FC } from "react";
import Link from "next/link";
import { Logo } from "~/components/Layout/Header/Logo";
import { HeaderMenuSp } from "~/components/Layout/Header/HeaderMenuSp";
import { HeaderMenuPc } from "~/components/Layout/Header/HeaderMenuPc";

export const Header: FC = () => {
  return (
    <>
      <header className="bg-white px-4 md:px-10 w-full h-16 items-center flex justify-between relative drop-shadow z-10">
        <Link href="/">
          <a className="hover:opacity-80">
            <Logo />
          </a>
        </Link>
        <HeaderMenuPc className="hidden md:block" />
      </header>
      <HeaderMenuSp className="md:hidden absolute top-16" />
    </>
  );
};
