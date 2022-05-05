import type { NextPage } from "next";
import { Layout } from "~/components/ui/Layout/Layout";
import { Button } from "~/components/ui/Button";

const Home: NextPage = () => {
  return (
    <Layout>
      <div className="w-full h-[708px] relative bg-[url('/red-and-blue-fire.jpg')] bg-cover flex items-center justify-center">
        <div className="text-center flex flex-col gap-y-8 items-center">
          <div className="text-white font-bold text-4xl">Web課題と決闘する</div>
          <div className="text-white leading-7">
            「どうやってWebサイトで集客して売り上げに繋げるか分からない」
            <br />
            「Webサイトはあるけど有効的に使えていない」
            <br />
            このような悩みを抱えている方を徹底的にサポートします。
            <br />
            Webサイトを「価値のある資産」にし、ビジネスを活性化させていきましょう。
          </div>
          <Button label="無料で相談してみる" textColor="text-black" bgColor="bg-white" />
        </div>
      </div>
    </Layout>
  );
};
export default Home;
