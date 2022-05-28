import { useRef, useState } from "react";
import type { NextPage } from "next";
import emailjs from "@emailjs/browser";
import { useRouter } from "next/router";
import { Layout } from "~/components/Layout/Layout";
import clsx from "clsx";

const ContactPage: NextPage = () => {
  const form = useRef();
  const [processing, setProcessing] = useState(false);
  const opacity = processing ? "opacity-80" : "";
  const router = useRouter();

  const handleSubmit = async (e) => {
    e.preventDefault();
    setProcessing(true);

    try {
      await emailjs
        .sendForm(
          process.env.NEXT_PUBLIC_EMAILJS_SERVICE_ID,
          process.env.NEXT_PUBLIC_EMAILJS_TEMPLATE_ID,
          form.current,
          process.env.NEXT_PUBLIC_EMAILJS_PUBLIC_KEY,
        )
        .then(() => {
          router.push("/contact_completed");
        });
    } catch (error) {
      alert("エラーが発生しました。時間をおいて再度実行してください。");
      console.error(error);
    } finally {
      setProcessing(false);
    }
  };

  const labelStyle = "font-bold block mb-1";
  const inputCommonStyle =
    "w-full border-gray-300 border rounded-sm outline-0 px-2";
  const textFieldStyle = [inputCommonStyle, "h-10"].join(" ");
  const textAreaStyle = [inputCommonStyle, "h-32 py-1"].join(" ");

  return (
    <Layout>
      <div className="flex flex-col items-center px-6 py-8">
        <h1 className="font-bold text-xl">お問い合わせ</h1>
        <div className="my-6">
          お仕事のご依頼や弊社サービスに関する相談はこちらのフォームから行えます。
          <br />
          3営業日以内に折り返しご連絡いたします。
        </div>
        <form
          ref={form}
          onSubmit={handleSubmit}
          className="w-full sm:max-w-[574px] flex flex-col items-center gap-6"
        >
          <div className="w-full">
            <label className={labelStyle}>氏名</label>
            <input
              type="text"
              name="user_name"
              required
              className={textFieldStyle}
            />
          </div>
          <div className="w-full">
            <label className={labelStyle}>メールアドレス</label>
            <input
              type="email"
              name="user_email"
              required
              className={textFieldStyle}
            />
          </div>
          <div className="w-full">
            <label className={labelStyle}>件名</label>
            <input
              type="text"
              name="subject"
              required
              className={textFieldStyle}
            />
          </div>
          <div className="w-full">
            <label className={labelStyle}>お問い合わせ内容</label>
            <textarea name="message" required className={textAreaStyle} />
          </div>
          <input
            type="submit"
            value={processing ? "送信中..." : "送信"}
            disabled={processing}
            className={clsx([
              "font-bold text-white bg-red w-36 py-3 rounded-full cursor-pointer",
              opacity,
            ])}
          />
        </form>
      </div>
    </Layout>
  );
};
export default ContactPage;
