import type { NextPage } from "next";
import Image from "next/image";
import { Layout } from "~/components/Layout/Layout";
import { ProfileItem } from "~/components/ProfileItem";
import {
  HandShakeIcon,
  AccountCircleIcon,
  LampIcon,
  SquareCapIcon,
} from "~/components/Icons";

const profileItemList = [
  {
    icon: <HandShakeIcon />,
    title: "ご挨拶",
    description: [
      "はじめまして、Webマーケターの近藤と申します。",
      "この度は、プロフィールページにお越しいただき誠にありがとうございます。",
      "僭越ながら簡単な自己紹介をさせていただきます。",
    ].join("\n"),
  },
  {
    icon: <AccountCircleIcon />,
    title: "経歴",
    description: [
      "2019年明治大学情報コミュニケーション学部卒業。\n",
      "卒業後は地方銀行に入行し約3年間、個人融資窓口や法人渉外係等に従事。\n",
      "2022年1月より、Webディレクターの統括管理やWebディレクターとしてコンテンツ作成に携わっております。\n",
      "現在では銀行員として培った提案力とディレクション経験をもとに、SEO内部・外部対策やコンテンツマーケティング・サイト解析による顧客サイト価値の向上から実際に顧客獲得施策に至るまで、一気通貫して対応し、より顧客に寄り添った Webマーケティング施策のご提案が可能です。",
    ].join("\n"),
  },
  {
    icon: <LampIcon />,
    title: "お役に立てること",
    description: [
      "■ Webマーケティング戦略立案",
      "戦略の立案から設計 / 市場調査 / 収益化施策\n",
      "■ Webマーケティング全般",
      "SEO対策 / セールスライティング / キーワード選定 / コンテンツマーケティング / Google Analytics解析 / Google Search Console / CV改善など",
    ].join("\n"),
  },
  {
    icon: <SquareCapIcon />,
    title: "保有資格",
    description: [
      "・Google アナリティクス個人認定資格（GAIQ）",
      "・SEO検定2級",
      "・ニュース時事能力検定2級",
      "・神田カレーマイスター（シルバー）",
      "・温泉ソムリエ",
      "・ファイナンシャル・プランニング技能検定2級",
      "・金融業務2級 事業承継・M&Aコース",
      "・金融業務検定3級 シニア・ライフコンサルタント",
      "・他金融資格数十種類",
    ].join("\n"),
  },
];

const ProfilePage: NextPage = () => {
  return (
    <Layout>
      <div className="w-full h-[360px] md:h-[400px] relative bg-[url('/fire-from-below.jpg')] bg-cover flex flex-col items-center justify-center">
        <div className="flex flex-col items-center">
          <h1 className="text-white font-bold text-xl text-center mb-5">
            プロフィール
          </h1>
          <div className="md:hidden">
            <Image
              src="/sophomoric-man.jpg"
              alt="プロフィール画像"
              width={200}
              height={200}
              className="rounded-full object-cover md:hidden"
            />
          </div>
          <div className="hidden md:block">
            <Image
              src="/sophomoric-man.jpg"
              alt="プロフィール画像"
              width={240}
              height={240}
              className="rounded-full object-cover hidden "
            />
          </div>
        </div>
      </div>

      <div className="flex justify-center">
        <div className="max-w-[640px] flex flex-col gap-y-10 items-center py-6 md:py-10 px-6">
          {profileItemList.map((item, index) => (
            <ProfileItem
              key={index}
              icon={item.icon}
              title={item.title}
              description={item.description}
            />
          ))}
        </div>
      </div>
    </Layout>
  );
};
export default ProfilePage;
