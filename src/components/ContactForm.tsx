import React, { FC, useRef, useState } from "react";
import emailjs from "@emailjs/browser";
import clsx from "clsx";

export const ContactForm: FC = () => {
  const form = useRef();

  const [processing, setProcessing] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    setProcessing(true);

    emailjs
      .sendForm(
        process.env.NEXT_PUBLIC_EMAILJS_SERVICE_ID,
        process.env.NEXT_PUBLIC_EMAILJS_TEMPLATE_ID,
        form.current,
        process.env.NEXT_PUBLIC_EMAILJS_PUBLIC_KEY,
      )
      .then(
        () => {
          alert("メールを送信しました。");
          setProcessing(false);
        },
        (error) => {
          alert("エラーが発生しました。時間をおいて再度実行してください。");
          console.log(error.text);
          setProcessing(false);
        },
      );
  };

  const labelStyle = "font-bold block mb-1";
  const inputCommonStyle =
    "w-full border-gray-300 border rounded-sm outline-0 px-2";
  const textFieldStyle = [inputCommonStyle, "h-10"].join(" ");
  const textAreaStyle = [inputCommonStyle, "h-32 py-1"].join(" ");
  const opacity = processing ? "opacity-80" : "";

  return (
    <form
      ref={form}
      onSubmit={handleSubmit}
      className="w-[574px] flex flex-col items-center gap-6"
    >
      <div className="w-full">
        <label className={labelStyle}>氏名</label>
        <input type="text" name="user_name" className={textFieldStyle} />
      </div>
      <div className="w-full">
        <label className={labelStyle}>メールアドレス</label>
        <input type="email" name="user_email" className={textFieldStyle} />
      </div>
      <div className="w-full">
        <label className={labelStyle}>件名</label>
        <input type="text" name="subject" className={textFieldStyle} />
      </div>
      <div className="w-full">
        <label className={labelStyle}>お問い合わせ内容</label>
        <textarea name="message" className={textAreaStyle} />
      </div>
      <input
        type="submit"
        value="送信"
        disabled={processing}
        className={clsx([
          "font-bold text-white bg-red px-14 py-3 rounded-full cursor-pointer",
          opacity,
        ])}
      />
    </form>
  );
};
