import type { NextPage } from "next";
import Image from "next/image";
import { Layout } from "~/components/ui/Layout/Layout";

const ProfilePage: NextPage = () => {
  return (
    <Layout>
      <section className="w-full h-[540px] relative bg-[url('/fire-from-below.jpg')] bg-cover flex flex-col items-center justify-center">
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
      </section>
    </Layout>
  );
};
export default ProfilePage;
