import React, { FC, useRef } from "react";
import emailjs from "@emailjs/browser";

export const ContactForm: FC = () => {
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(
        process.env.NEXT_PUBLIC_EMAILJS_SERVICE_ID,
        process.env.NEXT_PUBLIC_EMAILJS_TEMPLATE_ID,
        form.current,
        process.env.NEXT_PUBLIC_EMAILJS_PUBLIC_KEY,
      )
      .then(
        (result) => {
          console.log(result.text);
        },
        (error) => {
          console.log(error.text);
        },
      );
  };

  const labelStyle = "font-bold block mb-1";
  const inputCommonStyle =
    "w-full border-gray-300 border rounded-sm outline-0 px-2";
  const textFieldStyle = [inputCommonStyle, "h-10"].join(" ");
  const textAreaStyle = [inputCommonStyle, "h-32 py-1"].join(" ");

  return (
    <form
      ref={form}
      onSubmit={sendEmail}
      className="w-[574px] flex  flex-col items-center gap-6"
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
        className="font-bold text-white bg-red px-14 py-3 rounded-full cursor-pointer"
      />
    </form>
  );
};
