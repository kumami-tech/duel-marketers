import type { ReactNode, FC } from "react";
import { Header } from "./Header/Header";
import { Footer } from "./Footer";

type LayoutProps = {
  children: ReactNode;
};

export const Layout: FC<LayoutProps> = (props) => {
  return (
    <div>
      <div className="sticky top-0 z-50">
        <Header />
      </div>
      <main>{props.children}</main>
      <Footer />
    </div>
  );
};
