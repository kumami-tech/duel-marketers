import { FC, useState } from "react";
import Link from "next/link";
import { Logo } from "~/components/Layout/Header/Logo";
import { CloseIcon, MenuIcon } from "~/components/Icons";
import { HeaderMenuSp } from "~/components/Layout/Header/HeaderMenuSp";
import { HeaderMenuPc } from "~/components/Layout/Header/HeaderMenuPc";

export const Header: FC = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const openMenu = () => {
    setMenuOpen(true);
  };
  const closeMenu = () => {
    setMenuOpen(false);
  };

  return (
    <>
      <header className="bg-white px-4 md:px-10 w-full h-14 md:h-16 items-center flex justify-between relative drop-shadow z-10">
        <Link href="/">
          <a className="hover:opacity-80">
            <Logo />
          </a>
        </Link>
        <HeaderMenuPc className="hidden md:block" />
        {menuOpen ? (
          <CloseIcon onClick={closeMenu} className="md:hidden cursor-pointer" />
        ) : (
          <MenuIcon onClick={openMenu} className="md:hidden cursor-pointer" />
        )}
      </header>
      {menuOpen && (
        <HeaderMenuSp
          onBgClick={closeMenu}
          className="md:hidden absolute top-14"
        />
      )}
    </>
  );
};
