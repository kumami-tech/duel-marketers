import type { NextPage } from "next";
import Image from "next/image";
import { Layout } from "~/components/ui/Layout/Layout";
import { ProfileItem } from "~/components/ui/ProfileItem";
import {
  HandShakeIcon,
  AccountCircleIcon,
  LampIcon,
  SquareCapIcon,
} from "~/components/ui/Icons";

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
      "2019年明治大学情報コミュニケーション学部卒業。",
      "卒業後は地方銀行に入行し約3年間、個人融資窓口や法人渉外係等に従事。",
      "2022年1月よりWebディレクターの統括管理やWebディレクターとしてコンテンツ作成に携わっております。",
      "現在では銀行員として培った提案力とディレクション経験をもとに、",
      "SEO内部・外部対策やコンテンツマーケティング・サイト解析による",
      "顧客サイト価値の向上から実際に顧客獲得施策に至るまで、",
      "一気通貫して対応し、より顧客に寄り添った Webマーケティング施策のご提案が可能です。",
    ].join("\n"),
  },
  {
    icon: <LampIcon />,
    title: "お役に立てること",
    description: [
      "■ Webマーケティング戦略立案",
      "戦略の立案から設計 / 市場調査 / 収益化施策",
      "■ Webマーケティング全般",
      "SEO対策 / セールスライティング / キーワード選定 / コンテンツマーケティング /",
      "Google Analytics解析 / Google Search Console / CV改善など",
    ].join("\n"),
  },
  {
    icon: <SquareCapIcon />,
    title: "保有資格",
    description: [
      "Google アナリティクス個人認定資格（GAIQ）",
      "SEO検定2級",
      "ニュース時事能力検定2級",
      "神田カレーマイスター（シルバー）",
      "温泉ソムリエ",
      "ファイナンシャル・プランニング技能検定2級",
      "金融業務2級 事業承継・M&Aコース",
      "金融業務検定3級 シニア・ライフコンサルタント",
      "他金融資格数十種類",
    ].join("\n"),
  },
];

const ProfilePage: NextPage = () => {
  return (
    <Layout>
      <div className="w-full h-[540px] relative bg-[url('/fire-from-below.jpg')] bg-cover flex flex-col items-center justify-center">
        <h1 className="text-white font-bold text-2xl absolute top-20">
          プロフィール
        </h1>
        <Image
          src="/sophomoric-man.jpg"
          alt="プロフィール画像"
          width={250}
          height={250}
          className="rounded-full object-cover"
        />
      </div>

      <div className=" flex flex-col gap-y-10 items-center py-12">
        {profileItemList.map((item, index) => (
          <ProfileItem
            key={index}
            icon={item.icon}
            title={item.title}
            description={item.description}
          />
        ))}
      </div>
    </Layout>
  );
};
export default ProfilePage;
