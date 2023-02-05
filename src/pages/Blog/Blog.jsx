import React, { useEffect, useState } from "react";
import CalendarMonthIcon from "@mui/icons-material/CalendarMonth";
import { useLocation } from "react-router-dom";
import parse from "html-react-parser";
import { Axios } from "../../Api/Axios";
import Loading from "../../components/Loading";
export default function BlogPage() {
  const [subblog, setSubblog] = useState([]);
  const [blog, setBlog] = useState([]);
  const [loading, setLoading] = useState(false);
  const [blogLoading, setBlogLoading] = useState(false);
  const location = useLocation();

  const lenguage = localStorage.getItem("lenguage")
    ? localStorage.getItem("lenguage")
    : "ru";
  useEffect(() => {
    const getSubbout = async (url) => {
      const response = await Axios.get(url);
      setSubblog(await response.data);
      setLoading(true);
    };
    getSubbout(
      lenguage === "ru"
        ? `blog/ru/${location.pathname.split("/")[2]}`
        : `blog/uz/${location.pathname.split("/")[2]}`
    );

    const getAbout = async (url) => {
      const response = await Axios.get(url);
      setBlog(await response.data);
      setBlogLoading(true);
    };
    getAbout(lenguage === "ru" ? "blog/ru/" : "blog/uz/");
  });
  const ru_months = [
    "Январь",
    "Февраль",
    "Март",
    "Апрель",
    "Май",
    "Июнь",
    "Июль",
    "Август",
    "Сентябрь",
    "Октябрь",
    "Ноябрь",
    "Декабрь",
  ];
  const uz_months = [
    "Yanvar",
    "Fevral",
    "Mart",
    "Aprel",
    "May",
    "Iyun",
    "Iyul",
    "Avgust",
    "",
    "Oktyabr",
    "Noyabr",
    "Dekabr",
  ];
  const ru_weeks = [
    "Понедельник",
    "Вторник",
    "Среда",
    "Четверг",
    "Пятница",
    "Суббота",
    "Воскресенье",
  ];

  const uz_weeks = [
    "Dushanba",
    "Seshanba",
    "Chorshanba",
    "Payshanba",
    "Juma",
    "Shanba",
    "Yakshanba",
  ];
  const date = new Date(subblog.date);
  return (
    <div className="w-full min-h-screen">
      <div className="about-bg md:block hidden"></div>
      {loading ? (
        <div className="md:pt-8 md:pl-3 pl-0 pt-[120px] w-full md:w-[70%] min-h-0 mx-auto flex md:flex-row flex-col-reverse gap-8 items-center md:items-start">
          <div className="md:w-[600px] w-full max-w-[90%] pb-4 flex flex-col gap-3">
            <h1 className="md:text-4xl text-3xl font-bold">{subblog.title}</h1>
            <p className="flex items-center gap-2">
              <CalendarMonthIcon />
              <span>{date.getDay()}</span>
              <span>
                {lenguage === "ru"
                  ? ru_months[date.getMonth()]
                  : uz_months[date.getMonth()]}
                ,
              </span>
              <span>{date.getFullYear()}</span>
              <span>
                {lenguage === "ru"
                  ? ru_weeks[date.getDay()]
                  : uz_weeks[date.getDay()]}
              </span>
            </p>
            <img src={subblog.image} alt={subblog.id} className="w-full" />
            <div className="w-full py-4">{parse(subblog.text)}</div>
          </div>
          {blogLoading ? (
            <div className="md:w-[300px] w-full md:mt-14 mt-0 min-h-[0] flex flex-col justify-center gap-3 md:pl-0 pl-4">
              <h3>Блог</h3>
              <div className="w-[200px] h-[2px] bg-gray-300">
                <div className="w-[70%] h-[2px] bg-red-500"></div>
              </div>
              {blog.map((blog_item) => (
                <div className="flex flex-col gap-4" key={blog_item.id}>
                  <div className="w-full min-h-0 pb-4 border-b border-gray-400">
                    <a href={`/blog/${blog_item.id}`}>{blog_item.title}</a>
                    <p className="flex items-center gap-2">
                      <CalendarMonthIcon />
                      <span>{new Date(blog_item.date).getDay()}</span>
                      <span>
                        {lenguage === "ru"
                          ? ru_months[new Date(blog_item.date).getMonth()]
                          : uz_months[new Date(blog_item.date).getMonth()]}
                        ,
                      </span>
                      <span>{new Date(blog_item.date).getFullYear()}</span>
                      <span>
                        {lenguage === "ru"
                          ? ru_weeks[new Date(blog_item.date).getDay()]
                          : uz_weeks[new Date(blog_item.date).getDay()]}
                      </span>
                    </p>
                  </div>
                </div>
              ))}
            </div>
          ) : null}
        </div>
      ) : (
        <Loading />
      )}
    </div>
  );
}
