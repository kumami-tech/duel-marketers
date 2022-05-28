import type { NextPage } from "next";
import { Layout } from "~/components/Layout/Layout";

const ContactPage: NextPage = () => {
  return (
    <Layout>
      <div className="flex flex-col items-center py-12">
        <h1 className="font-bold text-xl">お問い合わせ完了</h1>
        <div className="mt-6">
          <p>
            お問い合わせありがとうございました。
            <br />
            受付完了メールを自動送信しておりますので、ご確認くださいませ。
          </p>
          <p className="mt-2 text-sm">
            ※メールが届かない場合は、ご入力いただいたメールアドレスが間違っている可能性があります。
          </p>
        </div>
      </div>
    </Layout>
  );
};
export default ContactPage;
