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
              : "Maxsus tayyorlangan kompression trikotaj"}
          </h1>
          <p>
            {lenguage === "ru"
              ? "Само слово «варикоз» происходит от латинского «varix» - вздутие. . Расширение вен на ногах в результате их растяжения и изгиба неправильным образом называется варикозным расширением вен. Компрессионный трикотаж — специальные гольфы, чулки и колготки, где на лодыжку оказывается сильное давление, и по мере подъёма вверх по ноге, давление постепенно уменьшается. Применение сильнейшего давления на лодыжке в соответствии со стандартом и постепенное снижение этого давления по мере подъема вверх по ноге помогает мышцам ног выполнять свои механические функции естественным образом и способствует циркуляции крови, перемещая ее вверх."
              : `"Varikoz tomirlari" so'zining o'zi lotincha "varix" - shish paydo bo'lishidan kelib chiqqan. . Oyoq tomirlarining noto'g'ri cho'zilishi va egilishi natijasida kengayishiga varikoz tomirlari deyiladi. Siqish paypoqlari - maxsus paypoqlar, paypoqlar va taytlar, bu erda to'piqda kuchli bosim mavjud va siz oyoqni yuqoriga ko'tarsangiz, bosim asta-sekin kamayadi. Standartga muvofiq oyoq to‘pig‘iga eng kuchli bosimni qo‘llash va oyoqni yuqoriga ko‘tarilganda bu bosimni bosqichma-bosqich kamaytirish oyoq mushaklarining o‘z mexanik funksiyalarini tabiiy tarzda bajarishiga yordam beradi va uni yuqoriga ko‘chirish orqali qon aylanishini rag‘batlantiradi.`}
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
                {lenguage === "ru" ? "Показания" : "Ko'rsatkichlar"}
              </h1>
              <h2 className="text-[25px] font-bold">
                {lenguage === "ru"
                  ? "Почему варикозный трикотаж изготавливается на заказ:"
                  : "Nima uchun varikoz trikotaj buyurtma asosida tayyorlanadi:"}
              </h2>
              <p className="text-[18px]">
                {lenguage === "ru"
                  ? "Чулки от варикоза производятся в соответствии со стандартами. Однако каждый человек имеет уникальную анатомию. Исследования показывают, что 20% пользователей компрессионных чулок анатомически не соответствуют стандартным размерам тела. Наиболее важным моментом для получения пользы от компрессионных чулок является использование изделия соответствующего размера. Люди, которые не могут использовать компрессионные чулки стандартного размера, должны проконсультироваться со специалистом и использовать компрессионные чулки, изготовленные в соответствии с их анатомией."
                  : "Varikoz tomirlari uchun paypoqlar standartlarga muvofiq ishlab chiqariladi. Biroq, har bir inson o'ziga xos anatomiyaga ega. Tadqiqotlar shuni ko'rsatadiki, siqilgan paypoq kiyganlarning 20% ​​anatomik jihatdan standart tana o'lchovlariga mos kelmaydi. Siqish paypoqlaridan foyda olish uchun eng muhim narsa to'g'ri o'lchamdan foydalanishdir. Standart o'lchamdagi kompressor paypoqlaridan foydalana olmaydigan odamlar mutaxassis bilan maslahatlashib, ularning anatomiyasiga mos keladigan kompressor paypoqlaridan foydalanishlari kerak."}
              </p>
            </div>
          </div>
          <div className="w-full min-h-[70vh] py-3 px-5 flex flex-col gap-5">
            <h1 className="text-[30px] font-bold">
              {lenguage === "ru"
                ? "Преимущества чулок при варикозе, изготовленных на заказ:"
                : "Buyurtma bo'yicha tikilgan varikoz tomirlari uchun paypoqlarning afzalliklari:"}
            </h1>
            <p className="text-[20px]">
              {lenguage === "ru"
                ? "Благодаря специальным компрессионным чулкам, изготовленным специально для вашей ноги, обеспечивается максимальная эффективность, так как компрессия оказывается на нужные точки под нужным градусом."
                : "Oyog'ingiz uchun maxsus tayyorlangan maxsus siqish paypoqlari tufayli maksimal samaradorlik ta'minlanadi, chunki siqish kerakli darajada to'g'ri nuqtalarga qo'llaniladi."}
            </p>
            <p className="text-[20px]">
              {lenguage === "ru"
                ? "Для кого предназначены чулки при варикозе, изготовленные на заказ?"
                : "Varikoz tomirlari uchun paypoqlar kimlar uchun buyurtma asosida tayyorlanadi?"}
            </p>
            <p className="text-[20px]">
              {lenguage === "ru"
                ? "Если ваши размеры ноги не соответствуют стандартной таблице измерений, если обхват ноги широкий-узкий или длинный-короткий выходит за рамки стандартов, если есть значительная разница между обхватом правой и левой ноги, если длина и обхват ноги не совместимы друг с другом, то целесообразно использовать чулки при варикозе, изготовленные на заказ."
                : "Oyog'ingizning o'lchovlari standart o'lchov jadvaliga to'g'ri kelmasa, oyoq atrofi keng-tor yoki uzun-qisqa bo'lsa, o'ng va chap oyoqlarning aylanasi o'rtasida sezilarli farq bo'lsa, oyoqning uzunligi va atrofi bo'lsa. bir-biriga mos kelmaydi, keyin buyurtma asosida tayyorlangan varikoz tomirlari uchun paypoqlardan foydalanish tavsiya etiladi."}
            </p>
            <p className="text-[20px]">
              {lenguage === "ru"
                ? "Как снять мерки для индивидуального изготовления варикозных чулок:"
                : "Varikoz paypoqlarini individual ishlab chiqarish uchun o'lchovlarni qanday qilish kerak:"}
            </p>
            <p className="text-[20px]">
              {lenguage === "ru"
                ? "Измерения окружности и длины зависят от модели чулок (ниже колена, выше колена, колготки). Для каждой точки давления должны быть проведены отдельные измерения. Наша компания проводит обучение наших дистрибьюторов или сотрудников аптек по снятию размеров ног пациентов для изготовления чулок при варикозе на заказ. Сотрудникам наших дистрибьюторов выдается сертификат об участии в тренинге."
                : "Atrof va uzunlik o'lchovlari paypoq modeliga bog'liq (tizzadan pastda, tizzadan yuqorisida, taytlar). Har bir bosim nuqtasi uchun alohida o'lchovlar amalga oshirilishi kerak. Bizning kompaniyamiz distribyutorlarimiz yoki farmatsevtlarimizni buyurtma berish uchun varikoz tomirlari uchun paypoq ishlab chiqarish uchun bemorlarning oyoqlarini o'lchashga o'rgatadi. Bizning distribyutorlarimiz xodimlari treningda ishtirok etish sertifikatiga ega bo'lishadi."}
            </p>
            <h1 className="text-[30px] font-bold">
              {lenguage === "ru"
                ? "Почему Variteks изготавливает варикозные чулки на заказ:"
                : "Nima uchun Variteks varikoz paypoqlarini buyurtma asosida ishlab chiqaradi:"}
            </h1>
            <p className="text-[20px]">
              {lenguage === "ru"
                ? "Компания Variteks достигла возможности производить варикозные чулки на заказ благодаря своему более чем 60-летнему опыту и производственным мощностям, которые недавно увеличились. Тот факт, что данные изделия заказываются пациентом из-за рубежа, и, следовательно, время на доставку, высокая стоимость, побудили нас к производству в этом направлении.."
                : "Variteks o'zining 60 yildan ortiq tajribasi va yaqinda ortib borayotgan ishlab chiqarish quvvati tufayli buyurtma asosida varikoz paypoq ishlab chiqarish qobiliyatiga erishdi. Bu mahsulotlarni bemorning chet eldan buyurtma qilishi, demak, yetkazib berish muddati, qimmatligi bizni shu yo‘nalishda ishlab chiqarishga undadi.."}
            </p>
            <p className="text-[20px]">
              {lenguage === "ru"
                ? "В дополнение к машинному парку, необходимому для производства чулок при варикозе на заказ, испытание давлением, которое является одним из самых важных вопросов в компрессионных чулках, проводится на нашей персональной машине для испытания компрессии."
                : "Maxsus varikoz paypoq ishlab chiqarish uchun zarur bo'lgan mashina parkiga qo'shimcha ravishda, kompressor paypoqlarining eng muhim masalalaridan biri bo'lgan bosim sinovi bizning shaxsiy siqishni sinov mashinamizda amalga oshiriladi."}
            </p>
            <p className="text-[20px]">
              {lenguage === "ru"
                ? "Эта услуга первой и единственной турецкой компании Variteks, , производящей на заказ чулки при варикозе, появилась в результате проекта, поддержанного TÜBİTAK (Совет по научно-техническим исследованиям Турции)."
                : "Varikoz tomirlari uchun maxsus tayyorlangan paypoq ishlab chiqaradigan birinchi va yagona turk kompaniyasi Variteksning ushbu xizmati TÜBİTAK (Turkiya Ilmiy va Texnologiya Tadqiqot Kengashi) tomonidan qo'llab-quvvatlangan loyiha natijasidir."}
            </p>
            <h2 className="text-[30px] font-bold">
              {lenguage === "ru"
                ? "Как следует чистить и стирать компрессионный трикотаж, изготовленный на заказ:"
                : "Maxsus tayyorlangan kompressor paypoqlarini qanday tozalash va yuvish kerak:"}
            </h2>
            <p className="text-[20px]">
              {lenguage === "ru"
                ? "Его следует стирать при температуре воды 30-градусов с мылом вручную без трения. Стирать в стиральной машине запрещено. Сушат на полотенце при комнатной температуре. Не сушить в сушильной машине, не подвергать химчистке, не отжимать, не гладить, не использовать стиральный порошок, смягчитель и отбеливатель."
                : "Uni 30 graduslik suvda sovun bilan ishqalamasdan qo'lda yuvish kerak. Kir yuvish mashinasida yuvish taqiqlanadi. Xona haroratida sochiqni quriting. Quritmang, quritmang, siqmang, dazmollamang, detarjan, yumshatuvchi yoki oqartirgichdan foydalanmang."}
            </p>
            <Socialmedia size={50} />
            <h1 className="text-[35px] text-red-600 font-bold">
              {lenguage === "ru"
                ? "Характеристики изделия"
                : "Mahsulot xususiyatlari"}
            </h1>
            <img src={NewDesign} className="w-[150px]" alt="error" />
          </div>
        </div>
      </div>
    </>
  );
};

export default AntiVaricoseProductsOrder;
