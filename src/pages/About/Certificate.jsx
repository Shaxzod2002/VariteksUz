import { Box } from "@mui/material";
import React, { useEffect, useState } from "react";
import { Axios } from "../../Api/Axios";
import ExitIcon from "@mui/icons-material/ExitToApp";
import Loading from "../../components/Loading";

export default function Certificate() {
  const [certificate, setCertificate] = useState([]);
  const [loading, setLoading] = useState(false);
  const [card, setCard] = useState({});
  const [modul, setModul] = useState(false);
  const lenguage = localStorage.getItem("lenguage")
    ? localStorage.getItem("lenguage")
    : "ru";

  useEffect(() => {
    const getCertificate = async (url) => {
      setCertificate(await (await Axios.get(url)).data);
      setLoading(true);
    };
    getCertificate("about/ru/image/");
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
            "flex flex-col justify-center items-center duration-300 relative xl:w-[60%] lg:w-[70%] md:w-[80%] w-full min-h-[95vh] bg-white delay-300 rounded-xl overflow-hidden " +
            (modul ? "scale-100" : "scale-0")
          }
          onClick={() => {
            setModul(true);
          }}
        >
          <img
            className="w-[400px] max-w-full cursor-pointer"
            src={card.image}
            alt={card.id}
          />
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
      <Box className="about-bg md:flex hidden"></Box>
      <Box className="lg:w-[70%] md:w-[80%] w-full mx-auto md:py-8 pt-[100px] flex flex-col gap-6">
        <h1 className="md:text-5xl text-3xl font-bold md:text-left text-center">
          {lenguage === "ru" ? "Cертификаты" : "Sertifikatlar"}
        </h1>
        {certificate.length !== 0 ? (
          <Box className="flex flex-wrap md:justify-start justify-center gap-4">
            {loading ? (
              certificate.map((item) => {
                return (
                  <Box key={item.id}>
                    <img
                      className="w-[200px] cursor-pointer"
                      src={item.image}
                      alt={item.id}
                      onClick={() => {
                        setModul(true);
                        getCard(item);
                      }}
                    />
                  </Box>
                );
              })
            ) : (
              <Loading />
            )}
          </Box>
        ) : (
          <Box className="w-full flex justify-center">
            <h1 className="text-[#c53631]">
              {lenguage === "ru"
                ? "Сертификаты не найдены"
                : "Sertifikatlar topilmadi"}
            </h1>
          </Box>
        )}
      </Box>
    </>
  );
}
