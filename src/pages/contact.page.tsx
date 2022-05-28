import type { NextPage } from "next";
import { Layout } from "~/components/Layout/Layout";
import { ContactForm } from "~/components/ContactForm";

const ContactPage: NextPage = () => {
  return (
    <Layout>
      <div className="flex flex-col items-center py-12">
        <h1 className="font-bold text-xl">お問い合わせ</h1>
        <div className="my-6">
          お仕事のご依頼や弊社サービスに関する相談はこちらのフォームから行えます。
          <br />
          3営業日以内に折り返しご連絡いたします。
        </div>
        <ContactForm />
      </div>
    </Layout>
  );
};
export default ContactPage;
