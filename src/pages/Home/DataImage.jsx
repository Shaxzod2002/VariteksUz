import slide1 from "../../images/Home-Page/Sliders/1.jpg";
import slide2 from "../../images/Home-Page/Sliders/2.jpg";
import slide3 from "../../images/Home-Page/Sliders/3.jpg";
import slide4 from "../../images/Home-Page/Sliders/4.jpg";
import headerOverlay from "../../images/Home-Page/Sliders/header-overlay.png";
const lenguage = localStorage.getItem("lenguage")
  ? localStorage.getItem("lenguage")
  : "ru";
export const DataImage = [
  {
    id: 1,
    image: slide1,
    alt: "image1",
    text:
      lenguage === "ru"
        ? "ТЕБЕ НЕОБХОДИМО ДВИГАТЬСЯ ДАЛЬШЕ ПРИ ЛЮБЫХ УСЛОВИЯХ."
        : "YOU MUST GO ON IN ALL CONDITIONS.",
    headerOverlay,
  },
  {
    id: 2,
    image: slide2,
    alt: "image2",
    text:
      lenguage === "ru"
        ? "ENJOYING THE LIFE ТЕБЕ НЕОБХОДИМО ДВИГАТЬСЯ ДАЛЬШЕ НАСЛАЖДАЯСЬ ЖИЗНЬЮ."
        : "YOU MUST GO ON ENJOYING THE LIFE.",
    headerOverlay,
  },
  {
    id: 3,
    image: slide3,
    alt: "image3",
    text:
      lenguage === "ru"
        ? "ТЕБЕ НЕОБХОДИМО ДВИГАТЬСЯ ДАЛЬШЕ ПРЕКРАСНЫМ ДНЕМ"
        : "YOU MUST GO ON FOR BEAUTIFUL DAYS.",
    headerOverlay,
  },
  {
    id: 4,
    image: slide4,
    alt: "image4",
    text:
      lenguage === "ru"
        ? "ТЕБЕ НЕОБХОДИМО ДВИГАТЬСЯ ДАЛЬШЕ ИМЕЯ СВОЙ СОБСТВЕННЫЙ СТИЛЬ."
        : "YOU MUST GO ON WITH YOUR OWN STYLE.",
    headerOverlay,
  },
];
