import type { NextPage } from "next";
import Link from "next/link";
import { Layout } from "~/components/Layout/Layout";
import {
  PeopleIcon,
  TrendingUpIcon,
  ComputerIcon,
  DirectionIcon,
} from "~/components/Icons";
import { ProblemListItem } from "~/components/ProblemListItem";
import { TableRow } from "~/components/TableRow";
import { Button } from "~/components/Button";
import { SeparatorDots } from "~/components/SeparatorDots";

const problemList = [
  {
    icon: <PeopleIcon />,
    title: ["Webに詳しい人材が", "いない"].join("\n"),
    description: [
      "自社にWeb周りの知識がある人材がいない",
      "どのようなWeb担当者を採用したらよいかわからない",
    ].join("\n"),
  },
  {
    icon: <TrendingUpIcon />,
    title: ["Web経由の集客が", "できない・わからない"].join("\n"),
    description: [
      "サイトの認知度の上げ方がわからない",
      "集客ができていても収益につながらない",
    ].join("\n"),
  },
  {
    icon: <ComputerIcon />,
    title: ["サイトの改善方法が", "わからない"].join("\n"),
    description: [
      "サイトの修正部分がわからない",
      "ツールを使った分析方法がわからない",
    ].join("\n"),
  },
  {
    icon: <DirectionIcon />,
    title: ["そもそも何をすべきか", "わからない"].join("\n"),
    description: [
      "サイトを立ち上げたばかりで何から始めていいかわからない",
      "サイト活用の戦略の立て方がわからない",
    ].join("\n"),
  },
];

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
    data: ["Google アナリティクス個人認定資格（GAIQ）", "SEO検定2級"].join(
      "\n",
    ),
  },
];

const Home: NextPage = () => {
  return (
    <Layout>
      <section className="w-full h-[calc(100vh_-_56px)] md:h-[calc(100vh_-_64px)] relative bg-[url('/red-and-blue-fire-sp2.jpg')] md:bg-[url('/red-and-blue-fire-pc.jpg')] bg-[length:100%_100%] bg-center md:bg-top flex items-center justify-center px-8">
        <div className="text-center flex flex-col gap-y-8 items-center">
          <h1 className="text-white font-bold text-3xl md:text-4xl">
            Web課題と決闘する
          </h1>
          <div className="text-white md:text-lg leading-8 md:leading-10">
            <p className="mb-3">
              「Webサイトからの集客方法が
              <br className="sm:hidden" />
              わからない」
              <br />
              「Webサイトを立ち上げたけれど
              <br className="sm:hidden" />
              有効な活用方法がわからない」
            </p>
            <p>
              このような課題とお客様と共に決闘し、
              <br />
              Web施策の戦略提案から実行まで
              <br className="sm:hidden" />
              伴走いたします。
            </p>
          </div>
          <Link href="/contact">
            <a className="">
              <Button
                label="無料で相談してみる"
                textColor="text-black"
                bgColor="bg-white"
                className="text-sm sm:text-base"
                labelClassName="group-hover:opacity-70"
              />
            </a>
          </Link>
        </div>
      </section>

      <section className="py-12 md:py-20 flex flex-col items-center px-8">
        <h1 className="font-bold text-2xl md:text-3xl text-center mb-10">
          このようなWebのお悩みは
          <br className="md:hidden" />
          ありませんか？
        </h1>
        <div className="flex-wrap flex flex-col xl:flex-row items-center gap-x-14 gap-y-10">
          {problemList.map((item, index) => {
            return (
              <ProblemListItem
                key={index}
                icon={item.icon}
                title={item.title}
                description={item.description}
              />
            );
          })}
        </div>
        <SeparatorDots className="my-14" />
        <div className="leading-8 md:text-center md:text-lg">
          <p className="mb-6">
            <span className="font-bold text-red mr-1">DUEL MARKETERS</span>
            では以上のようなお悩みを、
            <br className="hidden md:block" />
            <span className="font-bold">
              「お客様の調査」「競合分析」「アクセス解析」
            </span>
            を基に戦略設定から実行まで、
            <br className="hidden md:block" />
            お客様の課題に寄り添った提案をさせていただきます。
          </p>
          <p className="mb-6">
            どんな小さな困りごとでも構いません。
            <br className="hidden md:block" />
            まずは一度ご相談いただければ、真摯にご対応させていただきます。
          </p>
          <p>
            具体的なサービス内容は、
            <br className="hidden md:block" />
            <Link href="/service">
              <a className="text-red underline hover:opacity-80 cursor-pointer mx-0.5">
                サービスページ
              </a>
            </Link>
            をご覧いただけますと幸いです。
          </p>
        </div>
      </section>

      <section className="w-full h-[700px] md:h-[800px] relative bg-[url('/fire-on-right-and-left-sp.jpg')] md:bg-[url('/fire-on-right-and-left-pc.jpg')] bg-[length:100%_100%] bg-center bg-no-repeat flex flex-col items-center justify-center px-6">
        <div className="flex flex-col items-center">
          <h1 className="text-white font-bold text-2xl md:text-3xl mb-6 md:mb-10">
            事業概要
          </h1>
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
