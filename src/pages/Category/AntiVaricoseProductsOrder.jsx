import React from "react";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/navigation";
// import required modules
import { Navigation } from "swiper";
import Image1 from "../../images/Our Production/Anti Varicose Products Made to Order/1.jpg";
import Image2 from "../../images/Our Production/Anti Varicose Products Made to Order/2.jpg";
import NewDesign from "../../images/Our Production/Anti Varicose Products Made to Order/new-design.jpg";
import Socialmedia from "../../components/SocialMedia";

const AntiVaricoseProductsOrder = () => {
  const lenguage = localStorage.getItem("lenguage")
    ? localStorage.getItem("lenguage")
    : "ru";
  return (
    <>
      <div className="anti-varicose-products-order-bg md:block hidden"></div>
      <div className=" w-full min-h-screen py-5 md:pt-8 pt-[120px]">
        <div className="md:w-[80%] w-full mx-auto flex flex-col gap-3 min-h-[50vh] py-5 pl-3 md:pl-0">
          <h1 className="md:text-5xl text-2xl font-bold">
            {lenguage === "ru"
              ? "Компрессионный Трикотаж Изготовленные На Заказ"
              : "Custom Made Varicose Stocking"}
          </h1>
          <p>
            {lenguage === "ru"
              ? "Само слово «варикоз» происходит от латинского «varix» - вздутие. . Расширение вен на ногах в результате их растяжения и изгиба неправильным образом называется варикозным расширением вен. Компрессионный трикотаж — специальные гольфы, чулки и колготки, где на лодыжку оказывается сильное давление, и по мере подъёма вверх по ноге, давление постепенно уменьшается. Применение сильнейшего давления на лодыжке в соответствии со стандартом и постепенное снижение этого давления по мере подъема вверх по ноге помогает мышцам ног выполнять свои механические функции естественным образом и способствует циркуляции крови, перемещая ее вверх."
              : `The varicose is derived from the Latin word "varix" which means curved. Widening of the veins in the legs by stretching and bending in an irregular manner is called as varicose veins. Varicose stockings are the clothes in which strong pressure is applied on the ankle and as it goes up the pressure decreases gradually. The application of the strongest pressure to the ankle, in accordance with the standard, and the gradual decrease of this pressure as you go up helps the leg muscles to perform their mechanical functions naturally and helps the blood circulations by moving the blood up again.`}
          </p>
        </div>
        <div className="md:w-[80%] w-full min-h-0 mx-auto">
          <div className="w-full min-h-[50vh] flex md:flex-row flex-col">
            <div className="md:w-[400px] w-full min-h-[50vh] flex justify-between items-center">
              <Swiper
                navigation={true}
                modules={[Navigation]}
                loop={true}
                autoplay={true}
              >
                <SwiperSlide className="swiperChild">
                  <img
                    src={Image1}
                    className="rounded-[15px] w-full h-full"
                    alt="error"
                  />
                </SwiperSlide>
                <SwiperSlide className="swiperChild">
                  <img
                    src={Image2}
                    className="rounded-[15px] w-full h-full"
                    alt="error"
                  />
                </SwiperSlide>
              </Swiper>
            </div>
            <div className="md:w-[calc(100% - 20% - 400px)] w-full min-h-[50vh] md:px-[50px] pl-3">
              <h1 className="text-[30px] text-red-600">
                {lenguage === "ru" ? "Показания" : "Indications"}
              </h1>
              <h2 className="text-[25px] font-bold">
                {lenguage === "ru"
                  ? "Почему варикозный трикотаж изготавливается на заказ:"
                  : "Why Custom Made Varicose Stocking:"}
              </h2>
              <p className="text-[18px]">
                {lenguage === "ru"
                  ? "Чулки от варикоза производятся в соответствии со стандартами. Однако каждый человек имеет уникальную анатомию. Исследования показывают, что 20% пользователей компрессионных чулок анатомически не соответствуют стандартным размерам тела. Наиболее важным моментом для получения пользы от компрессионных чулок является использование изделия соответствующего размера. Люди, которые не могут использовать компрессионные чулки стандартного размера, должны проконсультироваться со специалистом и использовать компрессионные чулки, изготовленные в соответствии с их анатомией."
                  : "Varicose stockings are produced according to standards. However, each person has a unique anatomy. Researches indicate that 20% of compression stockings users are not anatomically suitable for standard body sizes. The most important point to benefit from compression stockings is to use the appropriate sized product. People who cannot use standard size compression stockings should consult a professional and use compression socks produced in accordance with their anatomy."}
              </p>
            </div>
          </div>
          <div className="w-full min-h-[70vh] py-3 px-5 flex flex-col gap-5">
            <h1 className="text-[30px] font-bold">
              {lenguage === "ru"
                ? "Преимущества чулок при варикозе, изготовленных на заказ:"
                : "Benefits of Custom Made Varicose Stocking:"}
            </h1>
            <p className="text-[20px]">
              {lenguage === "ru"
                ? "Благодаря специальным компрессионным чулкам, изготовленным специально для вашей ноги, обеспечивается максимальная эффективность, так как компрессия оказывается на нужные точки под нужным градусом."
                : "Thanks to the special compression stockings produced for your leg, providing maximum efficiency as the compression is given to the right points at right degrees."}
            </p>
            <p className="text-[20px]">
              {lenguage === "ru"
                ? "Для кого предназначены чулки при варикозе, изготовленные на заказ?"
                : "For whom is a Custom Made Varicose stocking?"}
            </p>
            <p className="text-[20px]">
              {lenguage === "ru"
                ? "Если ваши размеры ноги не соответствуют стандартной таблице измерений, если обхват ноги широкий-узкий или длинный-короткий выходит за рамки стандартов, если есть значительная разница между обхватом правой и левой ноги, если длина и обхват ноги не совместимы друг с другом, то целесообразно использовать чулки при варикозе, изготовленные на заказ."
                : "If your leg measurements do not match the standard leg measurement chart, if the leg circumference is wide-narrow or long-short outside the standards, if there is a significant difference between the right and left leg circumference, if the leg length and circumference are not compatible with each other, it will be appropriate to use custom made varicose stockings."}
            </p>
            <p className="text-[20px]">
              {lenguage === "ru"
                ? "Как снять мерки для индивидуального изготовления варикозных чулок:"
                : "How to measure for Custom Made Varicose Stocking:"}
            </p>
            <p className="text-[20px]">
              {lenguage === "ru"
                ? "Измерения окружности и длины зависят от модели чулок (ниже колена, выше колена, колготки). Для каждой точки давления должны быть проведены отдельные измерения. Наша компания проводит обучение наших дистрибьюторов или сотрудников аптек по снятию размеров ног пациентов для изготовления чулок при варикозе на заказ. Сотрудникам наших дистрибьюторов выдается сертификат об участии в тренинге."
                : "The circumference and length measurements to be taken will vary according to the model of the stocking (below the knee, above the knee, with panty). Separate measurements must be made for each pressure point. Our company provides training to our distributors or the authorities at the pharmacies to take patient leg size for custom made varicose stockings. Training participation certificate is issued to the staff of our distributors."}
            </p>
            <h1 className="text-[30px] font-bold">
              {lenguage === "ru"
                ? "Почему Variteks изготавливает варикозные чулки на заказ:"
                : "Why Variteks Custom Made Varicose Stocking:"}
            </h1>
            <p className="text-[20px]">
              {lenguage === "ru"
                ? "Компания Variteks достигла возможности производить варикозные чулки на заказ благодаря своему более чем 60-летнему опыту и производственным мощностям, которые недавно увеличились. Тот факт, что данные изделия заказываются пациентом из-за рубежа, и, следовательно, время на доставку, высокая стоимость, побудили нас к производству в этом направлении.."
                : "Variteks has reached the ability to produce custom made varicose stockings thanks to its experience of more than 60 years and the production capacity of varicose veins that has recently increased. The fact that this product is ordered from abroad and consequently the patient's inability to get custom made varicose stockings quickly and having to bear high costs due to being imported has prompted us to produce in this regard."}
            </p>
            <p className="text-[20px]">
              {lenguage === "ru"
                ? "В дополнение к машинному парку, необходимому для производства чулок при варикозе на заказ, испытание давлением, которое является одним из самых важных вопросов в компрессионных чулках, проводится на нашей персональной машине для испытания компрессии."
                : "In addition to the machine park required for the production of custom made varicose stockings, the pressure test, which is one of the most important issues in compression stockings, is performed in our personal compression test machine."}
            </p>
            <p className="text-[20px]">
              {lenguage === "ru"
                ? "Эта услуга первой и единственной турецкой компании Variteks, , производящей на заказ чулки при варикозе, появилась в результате проекта, поддержанного TÜBİTAK (Совет по научно-техническим исследованиям Турции)."
                : "This service of Variteks, the first and only Turkish company to produce custom made varicose stockings, has emerged as a result of a project supported by TÜBİTAK (Scientific and Technological Research Council of Turkey)."}
            </p>
            <h2 className="text-[30px] font-bold">
              {lenguage === "ru"
                ? "Как следует чистить и стирать компрессионный трикотаж, изготовленный на заказ:"
                : "How should the Custom Made Varicose Stocking be cleaned and how it should be washed:"}
            </h2>
            <p className="text-[20px]">
              {lenguage === "ru"
                ? "Его следует стирать при температуре воды 30-градусов с мылом вручную без трения. Стирать в стиральной машине запрещено. Сушат на полотенце при комнатной температуре. Не сушить в сушильной машине, не подвергать химчистке, не отжимать, не гладить, не использовать стиральный порошок, смягчитель и отбеливатель."
                : "It should be washed in 30 degrees water with soap by hand without rubbing. It is not machine washed. It is dried on a towel at room temperature. Do not dry in the machine, do not dry clean, do not wring, iron, use detergent, softener and bleach."}
            </p>
            <Socialmedia size={50} />
            <h1 className="text-[35px] text-red-600 font-bold">
              {lenguage === "ru" ? "Характеристики изделия" : "FEATURES"}
            </h1>
            <img src={NewDesign} className="w-[150px]" alt="NEW PRODUCT" />
          </div>
        </div>
      </div>
    </>
  );
};

export default AntiVaricoseProductsOrder;
