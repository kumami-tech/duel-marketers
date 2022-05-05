import type { NextPage } from "next";
import { Layout } from "~/components/ui/Layout/Layout";

const Home: NextPage = () => {
  return (
    <Layout>
      <div className="w-full h-[708px] relative bg-[url('/red-and-blue-fire.jpg')] bg-cover"></div>
    </Layout>
  );
};
export default Home;
