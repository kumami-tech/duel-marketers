import type { FC } from "react";
import { HeaderMenuItem } from "~/components/ui/Layout/Header/HeaderMenuItem";

export const HeaderMenu: FC = () => {
  return (
    <nav>
      <ul className="flex gap-x-8">
        <HeaderMenuItem title="サービス" />
        <HeaderMenuItem title="プロフィール" />
        <HeaderMenuItem title="お問い合わせ" />
      </ul>
    </nav>
  );
};
