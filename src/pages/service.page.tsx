import type { NextPage } from "next";
import { Layout } from "~/components/ui/Layout/Layout";
import { ServiceListItem } from "~/components/ui/ServiceListItem";
import {
  SeoIcon,
  BrowserIcon,
  DataAnalyticsIcon,
  BusinessManIcon,
} from "~/components/ui/Icons";

const serviceList = [
  {
    icon: <SeoIcon />,
    title: "内部SEO対策",
    description: [
      "せっかく商品の魅力を訴求しても検索エンジンから正しい評価を得なければ",
      "検索結果の上位を獲得できず、コンテンツの魅力を出しきれません。",
      "検索結果上位を得るための基盤作りには内部SEO対策が必要です。",
      "SEO上のサイトの問題点を分析し、改善するまで丁寧にサポートします。",
    ].join("\n"),
    monthlyFee: "75,000円",
    contractPeriod: "3ヶ月〜",
  },
  {
    icon: <BrowserIcon />,
    title: "コンテンツ制作",
    description: [
      "アクセス数をアップさせ、売上につなげるコンテンツ記事を制作します。",
      "アップロードした記事は「資産」となり継続して利益を生み続けます。",
      "キーワード調査・選定・競合分析・ユーザー検索意図分析・記事構成・画像選定・",
      "SEOライティングまで、上位表示に必要な施策を全て施した記事を作り上げます。",
    ].join("\n"),
    feePerArticle: "30,000円〜",
  },
  {
    icon: <DataAnalyticsIcon />,
    title: "サイト解析",
    description: [
      "Webサイトに集客したユーザーの離脱を減らし、売上に結びつく導線を組み立てます。",
      "Google AnalyticsやGoogle Search Consoleなどでユーザー行動を分析し、",
      "改善のための戦略を立案いたします。",
    ].join("\n"),
    monthlyFee: "75,000円",
    contractPeriod: "3ヶ月〜",
  },
  {
    icon: <BusinessManIcon />,
    title: "Webコンサルティング",
    description: [
      "集客、販売、リピーター作り、Google Analyticsによる解析まで、",
      "PDCAを素早く回しながら一気通貫でサポートします。",
      "Webサイトの売上を最大化するためのあらゆる改善行動をいたします。",
      "（コンテンツマーケティング、SEO内部対策含む）",
    ].join("\n"),
    monthlyFee: "75,000円",
    contractPeriod: "3ヶ月〜",
  },
];

const ServicePage: NextPage = () => {
  return (
    <Layout>
      <div className="flex flex-col items-center py-12">
        <h1 className="font-bold text-xl">サービス</h1>
        <div className="flex flex-col gap-y-8 items-center py-7">
          {serviceList.map((item, index) => (
            <ServiceListItem
              key={index}
              icon={item.icon}
              title={item.title}
              description={item.description}
              monthlyFee={item.monthlyFee}
              contractPeriod={item.contractPeriod}
              feePerArticle={item.feePerArticle}
            />
          ))}
        </div>
      </div>
    </Layout>
  );
};
export default ServicePage;
