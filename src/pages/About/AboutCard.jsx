import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { Axios } from "../../Api/Axios";
import { Box } from "@mui/material";
import ExitIcon from "@mui/icons-material/ExitToApp";
import Loading from "../../components/Loading";

export default function AboutCard() {
  const [aboutCard, setAboutCard] = useState([]);
  const [loading, setLoading] = useState(false);
  const [card, setCard] = useState({});
  const [modul, setModul] = useState(false);
  const lenguage = localStorage.getItem("lenguage")
    ? localStorage.getItem("lenguage")
    : "ru";
  useEffect(() => {
    const getAboutCard = async (url) => {
      const response = await Axios.get(url);
      setAboutCard(await response.data);
      setLoading(true);
    };
    getAboutCard(lenguage === "ru" ? "about/ru/card/" : "about/uz/card/");
  }, []);

  const getCard = (card) => {
    setCard(card);
    setModul(true);
  };

  return (
    <>
      <Box
        className={
          "duration-300 fixed overflow-x-auto top-0 left-0 w-full h-screen bg-black/60 z-50 justify-center items-center py-[50px] " +
          (modul ? "flex" : "hidden")
        }
        onClick={() => {
          setModul(false);
        }}
      >
        <Box
          className={
            "flex flex-col justify-center items-center duration-300 relative xl:w-[60%] md:w-[80%] w-full min-h-[95vh] bg-white delay-300 rounded-xl overflow-hidden md:mt-0 mt-[500px] " +
            (modul ? "scale-100" : "scale-0")
          }
          onClick={() => {
            setModul(true);
          }}
        >
          <Box className="w-full min-h-[10vh] py-2 border-b border-red-500 px-5 pr-10">
            <h3 className="text-red-400 md:text-3xl text-lg">{card.title}</h3>
          </Box>
          <Box className="w-full min-h-[85vh] py-4 px-5">
            <p>{card.text}</p>
            {card.id === 2 ? (
              <video
                src={card.media}
                controls
                className="w-full max-w-full"
              ></video>
            ) : null}
          </Box>
          <Box
            className="absolute top-2 right-2 cursor-pointer flex w-[40px] h-[40px] rounded-[12px] bg-[#c53631] text-white items-center justify-center"
            onClick={() => {
              setModul(false);
            }}
          >
            <ExitIcon />
          </Box>
        </Box>
      </Box>
      <Box className="about-header-bottom md:w-[80%] w-[90%] mx-auto min-h-0 py-5 flex flex-wrap md:justify-between justify-center gap-[50px]">
        {loading ? (
          aboutCard.map((card) => (
            <Box key={card.id}>
              <Link
                to={card.title === "Сертификаты" ? "/certificate" : "#"}
                className="text-center w-[230px] py-3 flex flex-col gap-3 cursor-pointer"
                onClick={() => {
                  setModul(true);
                  getCard(card);
                  if (card.id === 5) {
                    window.scrollTo({
                      top: 0,
                    });
                  }
                }}
              >
                <Box className="rounded-[15px] border-[5px] hover:border-[5px] hover:border-[#838383] hover:duration-500">
                  <img src={card.icon} className="w-full" alt="history-icon" />
                </Box>
                <h2 className="text-[20px] font-bold">{card.title}</h2>
              </Link>
            </Box>
          ))
        ) : (
          <Loading />
        )}
      </Box>
    </>
  );
}
