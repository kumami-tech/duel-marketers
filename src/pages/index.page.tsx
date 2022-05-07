import type { NextPage } from "next";
import { Layout } from "~/components/ui/Layout/Layout";
import { PeopleIcon, TrendingUpIcon, GraphIcon, DirectionIcon } from "~/components/ui/Icons";
import { Feature } from "~/components/ui/Feature";
import { TableRow } from "~/components/ui/TableRow";
import { Button } from "~/components/ui/Button";
import { SeparatorDots } from "~/components/ui/SeparatorDots";

const businessSummary = [
  {
    label: "団体名",
    data: "DUEL MARKETERS",
  },
  {
    label: "設立",
    data: "2022年4月",
  },
  {
    label: "代表",
    data: "近藤 星矢",
  },
  {
    label: "事業内容",
    data: [
      "WEBサイトコンサルティング事業",
      "マーケティング企画・戦略立案",
      "SEO対策",
      "データ解析",
      "コンテンツ記事制作",
      "メディア運用",
    ].join("\n"),
  },
  {
    label: "保有資格",
    data: [
      "ウェブ解析士個人認定資格",
      "Google アナリティクス個人認定資格",
      "CEFR C1（TOEIC940点相当）",
    ].join("\n")
  },
];

const Home: NextPage = () => {
  return (
    <Layout>
      <section className="w-full h-[calc(100vh_-_64px)] relative bg-[url('/red-and-blue-fire.jpg')] bg-cover flex items-center justify-center">
        <div className="text-center flex flex-col gap-y-8 items-center">
          <h1 className="text-white font-bold text-4xl">Web課題と決闘する</h1>
          <div className="text-white leading-8">
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
      </section>
      <section className="py-14 flex flex-col items-center">
        <h1 className="font-bold text-3xl text-center mb-10">Webでのこんな悩みを解決します</h1>
        <div className="flex gap-x-20">
          <Feature
            icon={<PeopleIcon />}
            title="Web運用のリソース不足"
            description="Webマーケティングに詳しい人材がいない。自社スタッフは兼任のためWebに割く時間がない。"
          />
          <Feature
            icon={<TrendingUpIcon />}
            title="Webの顧客を獲得できない"
            description="アクセス数が増えない。サイトに集客しても収益に結びつかない。"
          />
          <Feature
            icon={<GraphIcon />}
            title="サイトに問題がある"
            description="サイトのどこを修正すればいいのかわからない。ツールは導入しているが分析でつまづいている。"
          />
          <Feature
            icon={<DirectionIcon />}
            title="何をすべきかわからない"
            description="サイトを立ち上げたばかりで何から始めていいかわからない。サイトをうまく活用できていない。"
          />
        </div>
        <SeparatorDots className="my-12" />
        <div className="leading-8 text-center">
          まずはWeb集客から始め、『収益化』まで繋げていきます。
          <br />
          精密な「クライント企業様の調査」「競合分析」「アクセス解析」
          <br />
          これらを基に戦略を決め、 実行までサポートさせていただきます。
          <br />
          具体的なサービス内容は
          <span className="text-red underline cursor-pointer mx-0.5">サービスページ</span>
          をご覧いただけますと幸いです。
        </div>
      </section>

      <section className="w-full h-[859px] relative bg-[url('/fire-on-right-and-left.jpg')] bg-cover flex flex-col items-center justify-center">
        <div className="flex flex-col items-center">
          <h1 className="text-white font-bold text-4xl mb-6">事業概要</h1>
          <div>
            {businessSummary.map((item, index) => (
              <TableRow
                key={index}
                label={item.label}
                data={item.data}
                borderBottom={index !== businessSummary.length - 1}
              />
            ))}
          </div>
        </div>
      </section>
    </Layout>
  );
};
export default Home;
