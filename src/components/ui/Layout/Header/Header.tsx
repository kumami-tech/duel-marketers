import type { FC } from "react";
import { Logo } from "~/components/ui/Layout/Header/Logo";
import { HeaderMenu } from "~/components/ui/Layout/Header/HeaderMenu";

export const Header: FC = () => {
  return (
    <header className="px-10 w-full h-16 items-center flex justify-between">
      <Logo />
      <HeaderMenu />
    </header>
  );
};
