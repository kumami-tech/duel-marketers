import type { NextPage } from "next";
import Link from "next/link";
import { Layout } from "~/components/ui/Layout/Layout";
import {
  PeopleIcon,
  TrendingUpIcon,
  ComputerIcon,
  DirectionIcon,
} from "~/components/ui/Icons";
import { Feature } from "~/components/ui/Feature";
import { TableRow } from "~/components/ui/TableRow";
import { Button } from "~/components/ui/Button";
import { SeparatorDots } from "~/components/ui/SeparatorDots";

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
      <section className="w-full h-[calc(100vh_-_64px)] relative bg-[url('/red-and-blue-fire.jpg')] bg-cover flex items-center justify-center">
        <div className="text-center flex flex-col gap-y-8 items-center">
          <h1 className="text-white font-bold text-4xl">Web課題と決闘する</h1>
          <div className="text-white text-lg leading-10">
            「Webサイトからの集客方法がわからない」
            <br />
            「Webサイトを立ち上げたけれど有効な活用方法がわからない」
            <br />
            このような課題とお客様と共に決闘し、
            <br />
            Web施策の戦略提案から実行まで伴走いたします。
          </div>
          <Link href="/contact">
            <a className="">
              <Button
                label="無料で相談してみる"
                textColor="text-black"
                bgColor="bg-white"
                labelClassName="group-hover:opacity-70"
              />
            </a>
          </Link>
        </div>
      </section>

      <section className="py-20 flex flex-col items-center">
        <h1 className="font-bold text-3xl text-center mb-10">
          このようなWebのお悩みはありませんか？
        </h1>
        <div className="flex gap-x-14">
          {problemList.map((item, index) => {
            return (
              <Feature
                key={index}
                icon={item.icon}
                title={item.title}
                description={item.description}
              />
            );
          })}
        </div>
        <SeparatorDots className="my-14" />
        <div className="leading-8 text-center text-lg">
          <p className="mb-6">
            <span className="font-bold text-red mr-1">DUEL MARKETERS</span>
            では以上のような悩みを、
            <br />
            <span className="font-bold">
              「お客様の調査」「競合分析」「アクセス解析」
            </span>
            を基に戦略設定から実行まで、
            <br />
            お客様の課題に寄り添った提案をさせていただきます。
          </p>
          <p className="mb-6">
            どんな小さな困りごとでも構いません。
            <br />
            まずは一度ご相談いただければ、真摯にご対応させていただきます。
          </p>
          <p>
            具体的なサービス内容は、
            <br />
            <Link href="/service">
              <a className="text-red underline hover:opacity-80 cursor-pointer mx-0.5">
                サービスページ
              </a>
            </Link>
            をご覧いただけますと幸いです。
          </p>
        </div>
      </section>

      <section className="w-full h-[840px] relative bg-[url('/fire-on-right-and-left.jpg')] bg-cover flex flex-col items-center justify-center">
        <div className="flex flex-col items-center">
          <h1 className="text-white font-bold text-4xl mb-8">事業概要</h1>
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
