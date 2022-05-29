import type { FC } from "react";
import { HeaderMenuItem } from "~/components/Layout/Header/HeaderMenuItem";

type HeaderMenuSpProps = {
  className?: string;
};

export const HeaderMenuSp: FC<HeaderMenuSpProps> = (props) => {
  return (
    <div className={props.className}>
      <div className="w-screen h-screen bg-black absolute opacity-30"></div>
      <nav className="drop-shadow">
        <ul className="flex flex-col gap-x-8 z-10">
          <HeaderMenuItem title="サービス" url="/service" borderBottom={true} />
          <HeaderMenuItem
            title="プロフィール"
            url="/profile"
            borderBottom={true}
          />
          <HeaderMenuItem title="お問い合わせ" url="/contact" />
        </ul>
      </nav>
    </div>
  );
};
