import type { FC } from "react";
import { HeaderMenuItem } from "~/components/Layout/Header/HeaderMenuItem";

type HeaderMenuPcProps = {
  className?: string;
};

export const HeaderMenuPc: FC<HeaderMenuPcProps> = (props) => {
  return (
    <nav className={props.className}>
      <ul className="flex gap-x-10">
        <HeaderMenuItem title="サービス" url="/service" />
        <HeaderMenuItem title="プロフィール" url="/profile" />
        <HeaderMenuItem title="お問い合わせ" url="/contact" />
      </ul>
    </nav>
  );
};
