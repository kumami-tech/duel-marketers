import type { FC } from "react";
import { HeaderMenuItem } from "~/components/ui/Layout/Header/HeaderMenuItem";

export const HeaderMenu: FC = () => {
  return (
    <nav>
      <ul className="flex gap-x-8">
        <HeaderMenuItem title="サービス" url="/service" />
        <HeaderMenuItem title="プロフィール" url="/profile" />
        <HeaderMenuItem title="お問い合わせ" url="/contact" />
      </ul>
    </nav>
  );
};
