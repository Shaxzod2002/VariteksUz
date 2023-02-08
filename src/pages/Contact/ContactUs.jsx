import React, { useEffect, useState } from "react";
import { MdLocationPin } from "react-icons/md";
import { BsTelephoneFill } from "react-icons/bs";
import { GrDocumentText } from "react-icons/gr";
import { IoMdMail } from "react-icons/io";
import parse from "html-react-parser";
import { Axios } from "../../Api/Axios";
import Loading from "../../components/Loading";
import Maps from "../../components/Maps";

export default function ContactUs() {
  const [contact, setContact] = useState([]);
  const [loading, setLoading] = useState(false);
  const lenguage = localStorage.getItem("lenguage")
    ? localStorage.getItem("lenguage")
    : "ru";
  useEffect(() => {
    const getContact = async (url) => {
      const response = await Axios.get(url);
      setContact(await response.data);
      setLoading(true);
    };
    getContact(lenguage === "ru" ? "contact/ru/" : "contact/uz/");
  }, []);
  if (!contact) return null;
  return (
    <>
      <div className="contact-bg md:block hidden"></div>
      <div className="w-full flex md:flex-row flex-col justify-end md:pt-8 pt-[120px] min-h-0 ">
        <div className="md:w-[40%] w-full flex flex-col gap-3 md:pr-6 pr-0 md:pl-0 pl-4 py-5">
          <h1 className="text-[25px] font-bold">
            {lenguage === "ru" ? "Контакты" : "Contacts"}
          </h1>
          {loading ? (
            contact.map((item, id) => (
              <div key={id} className="flex flex-col gap-3">
                <div className="w-full min-h-[100px] flex justify-start">
                  <div className="w-full min-h-full">
                    <p className="text-[18px]">{parse(item.address)}</p>
                  </div>
                </div>
                <div className="flex gap-2 items-center text-2xl">
                  <BsTelephoneFill />
                  <a href={"tel:" + item.mobile_phone}>{item.mobile_phone}</a>
                </div>
                <div className="flex gap-2 items-center text-2xl">
                  <GrDocumentText />
                  <a href={"tel:" + item.facts_phone}>{item.facts_phone}</a>
                </div>
              </div>
            ))
          ) : (
            <Loading />
          )}
          <div className="flex gap-2 items-center text-2xl">
            <IoMdMail />
            <a href="mailto:info@variteks.com">info@variteks.uz</a>
          </div>
        </div>
        <div className="md:w-[50%] w-full contact-right min-h-[50vh] px-5 py-5 flex flex-col gap-5">
          <h1 className="text-[25px] font-bold">
            {lenguage === "ru" ? "Форма для контактов" : "Contact form"}
          </h1>
          <input
            type="text"
            className="w-[400px] max-w-full border-[2px] border-black rounded-lg py-2 px-3"
            placeholder={lenguage === "ru" ? "Фамилия Имя" : "Full name"}
          />
          <input
            type="text"
            className="w-[400px] max-w-full border-[2px] border-black rounded-lg py-2 px-3"
            placeholder={
              lenguage === "ru" ? "Электронный адрес" : "Email address"
            }
          />
          <input
            type="text"
            className="w-[400px] max-w-full border-[2px] border-black rounded-lg py-2 px-3"
            placeholder={lenguage === "ru" ? "Тематика" : "Subject"}
          />
          <textarea
            type="text"
            className="w-[400px] max-w-full h-[100px] border-[2px] border-black rounded-lg px-3 resize-none pt-2"
            placeholder={lenguage === "ru" ? "Сообщение" : "Message"}
          ></textarea>
          <button className="w-[200px] py-3 flex justify-center items-center text-white bg-red-600 rounded-lg cursor-pointer hover:text-red-600 hover:bg-white hover:border-red-600 border-[2px] hover:duration-500">
            {lenguage === "ru" ? "Кнопка Послать" : "Send button"}
          </button>
        </div>
      </div>
      <Maps />
    </>
  );
}
