import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import parse from "html-react-parser";
import CalendarMonthIcon from "@mui/icons-material/CalendarMonth";
import { Axios } from "../../Api/Axios";
import Loading from "../../components/Loading";

export default function Blog() {
  const [blog, setBlog] = useState([]);
  const [loading, setLoading] = useState(false);
  const lenguage = localStorage.getItem("lenguage")
    ? localStorage.getItem("lenguage")
    : "ru";
  useEffect(() => {
    const getAbout = async (url) => {
      const response = await Axios.get(url);
      setBlog(await response.data);
      setLoading(true);
    };
    getAbout(lenguage === "ru" ? "blog/ru/" : "blog/uz/");
  }, []);

  const windowScrollTo = () => {
    window.scrollTo({
      top: 0,
    });
  };

  if (!blog) return null;
  return (
    <div>
      <div className="blog-bg md:block hidden"></div>
      <div className="md:pt-8 pb-4 md:pl-0 pl-3 pt-[120px] blog-header w-full md:w-[70%] min-h-[50vh] mx-auto flex flex-col items-center md:items-start">
        <h1 className="md:text-4xl text-center font-bold">BLOG</h1>
        <div className="flex flex-col gap-4">
          <div className="flex gap-3">
            <Link to={"/blog/1"} className="text-xl">
              {lenguage === "ru" ? "Генеральная" : "General"}
            </Link>
            <Link to={"/blog/2"} className="text-xl">
              {lenguage === "ru" ? "Здоровье" : "Health"}
            </Link>
          </div>
          <div className="w-full flex flex-wrap gap-5 justify-center md:justify-start">
            {loading ? (
              blog.map((item) => (
                <div key={item.id} className="w-[300px] flex flex-col gap-4">
                  <div className="w-[300px] group rounded-3xl overflow-hidden relative">
                    {item.image &&
                    (item.image.toLowerCase().includes("mp4") ||
                      item.image.toLowerCase().includes("mov") ||
                      item.image.toLowerCase().includes("wmv") ||
                      item.image.toLowerCase().includes("avi") ||
                      item.image.toLowerCase().includes("avchd") ||
                      item.image.toLowerCase().includes("webm")) ? (
                      <video
                        src={item.image}
                        controls
                        className="w-full max-h-[375px]"
                      ></video>
                    ) : (
                      <img src={item.image} alt={item.id} />
                    )}

                    <Link
                      to={`/blog/${item.id}`}
                      className="duration-300 w-full min-h-[100px] group-hover:min-h-[120px] bg-red-500/70 absolute top-[calc(100%-80px)] group-hover:top-[calc(100%-120px)] text-white p-4"
                      onClick={windowScrollTo}
                    >
                      {parse(item.title)}
                    </Link>
                  </div>
                  <h6>
                    <CalendarMonthIcon /> {item.date}
                  </h6>
                </div>
              ))
            ) : (
              <Loading />
            )}
          </div>
        </div>
      </div>
    </div>
  );
}
