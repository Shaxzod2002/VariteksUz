import React, { useEffect, useState } from "react";
import { Link, useLocation } from "react-router-dom";
import ReactLoading from "react-loading";
import { Axios } from "../../Api/Axios";

const AntiVaricoseProducts = () => {
  const [subcategory, setSubcategory] = useState([]);
  const [loading, setLoading] = useState(false);
  const location = useLocation();
  const lenguage = localStorage.getItem("lenguage")
    ? localStorage.getItem("lenguage")
    : "ru";

  useEffect(() => {
    const getSubCategory = async (url) => {
      const response = await Axios.get(url);
      setSubcategory(await response.data);
      setLoading(true);
    };
    getSubCategory(
      lenguage === "ru"
        ? "category/ru/subcategory/"
        : "category/uz/subcategory/"
    );
  }, []);
  const windowScrollTo = () => {
    window.scrollTo({
      top: 0,
    });
  };

  const filterSubcategory = subcategory.filter((item) =>
    item.category.id === Number(location.pathname.split("/")[2]) ? item : null
  );

  return (
    <>
      <div className="anti-varicose-products-bg md:block hidden"></div>
      {loading ? (
        <div className="w-full min-h-0 py-5 md:pt-8 pt-[120px]">
          <div className="md:w-[70%] w-full mx-auto md:pl-0 pl-3">
            <h1 className="md:text-4xl text-2xl font-bold">
              {lenguage === "ru"
                ? "Чулки От Варикоза"
                : "Varikoz tomirlari uchun paypoqlar"}
            </h1>
            <p className="text-[18px]">
              {lenguage === "ru"
                ? "Все наши компрессионные чулки производятся на высокотехнологичном оборудовании в соответствии с требованиями стандарта CEN(Европейский комитет по стандартизации). Во всех наших изделиях мы используем высококачественное сырье. Дизайн наших чулок разработан и для мужчин, и для женщин. Компрессионные чулки имеют 3 разных уровня давления: Ccl I - Ccl II - Ccl III. Наши носки выпускаются в двух вариантах: с открытым и закрытым носком. Мы предлагаем два варианта расцветок для средних и легких компрессионных чулок: бежевый и черный. Также в линейке легких компрессионных носков, у нас представлен выбор спортивных носков и носков для ежедневной активной компрессии."
                : "Bizning barcha kompressor paypoqlarimiz CEN (Yevropa standartlashtirish qo'mitasi) standarti talablariga muvofiq yuqori texnologiyali uskunalarda ishlab chiqariladi. Biz barcha mahsulotlarimizda yuqori sifatli xom ashyolardan foydalanamiz. Bizning paypoqlarimiz erkaklar va ayollar uchun mo'ljallangan. Siqish paypoqlari 3 xil bosim darajasiga ega: Ccl I - Ccl II - Ccl III. Bizning paypoqlarimiz ikkita versiyada mavjud: ochiq va yopiq oyoq. Biz o'rta va engil siqish paypoqlari uchun ikkita rang variantini taklif qilamiz: bej va qora. Bundan tashqari, engil siqish paypoqlari qatorida bizda kundalik faol siqish uchun sport paypoqlari va paypoqlar tanlovi mavjud."}
            </p>
          </div>
          <div className="md:w-[70%] w-full mx-auto min-h-0 py-5 md:pl-0 pl-3">
            <h3 className="md:text-4xl text-2xl font-bold md:text-left text-center">
              {lenguage === "ru"
                ? "Брюшные Корсеты"
                : "Qorin bo'shlig'i korsetlari"}
            </h3>
            <div className="w-full flex flex-wrap my-6 md:justify-start justify-center items-start gap-6">
              {filterSubcategory.map((item) => (
                <Link
                  key={item.id}
                  to={`/product/${item.id}/1`}
                  onClick={windowScrollTo}
                  className="flex flex-col items-center justify-start gap-3 w-[200px] rounded-xl min-h-[300px]"
                >
                  <img
                    src={item.image}
                    className="w-full h-[250px] rounded-xl border-2 border-red-500"
                    alt={item.id}
                  />
                  <div className="w-full flex flex-col text-center items-center justify-start">
                    <h3 className="text-2xl font-semibold">{item.name}</h3>
                  </div>
                </Link>
              ))}
            </div>
          </div>
        </div>
      ) : (
        <div className="w-full flex justify-center py-4">
          <ReactLoading
            type="spinningBubbles"
            color={"#000"}
            width={100}
            height={100}
          />
        </div>
      )}
    </>
  );
};

export default AntiVaricoseProducts;
