import React from "react";
import image from "../../images/Contact/insan-kaynaklari.png";
export default function PersonnalManagement() {
  const lenguage = localStorage.getItem("lenguage")
    ? localStorage.getItem("lenguage")
    : "ru";
  return (
    <>
      <div className="contact-bg md:block hidden"></div>
      <div className="personnel-management px-4 md:w-[70%] w-full md:pt-8 pt-[120px] mx-auto flex flex-col gap-4 pb-5">
        <h1 className="text-[40px] font-bold">
          {lenguage === "ru" ? "ЧЕЛОВЕЧЕСКИЕ РЕСУРСЫ" : "KADRLAR BO'LIMI"}
        </h1>
        <p className="text-[18px]">
          {lenguage === "ru"
            ? "Наша цель, как команды отдела кадров Variteks, состоит в том, чтобы привлечь в компанию нужных людей, поддержать, раскрыть потенциал и повысить их ценность, чтобы наша компания могла достичь своих целей. Наш принцип - быть справедливыми во всех правах, предоставляемых сотрудникам. Отдел кадров компании Variteks с 1958 года имеет стратегическое значение благодаря нашему антропоцентрическому подходу к управлению. Мы рады обеспечить справедливую и ориентированную на результат рабочую среду для наших сотрудников с помощью наших последовательных процедур и практик, соблюдая правила этики, равенства и конфиденциальности."
            : "Variteks Inson resurslari jamoasi sifatida bizning maqsadimiz kompaniyamiz o'z maqsadlariga erishishi uchun kompaniyaga to'g'ri odamlarni jalb qilish, ularni qo'llab-quvvatlash, ularning salohiyatini ochish va ularga qiymat qo'shishdir. Bizning printsipimiz xodimlarga berilgan barcha huquqlarda adolatli bo'lishdir. Variteks Inson resurslari 1958 yildan beri boshqaruvga antropotsentrik yondashuvimiz tufayli strategik ahamiyatga ega. Biz axloq, tenglik va maxfiylik qoidalarini hurmat qilgan holda, izchil tartib va amaliyotlarimiz orqali xodimlarimiz uchun adolatli va natijalarga yo'naltirilgan ish muhitini ta'minlashdan mamnunmiz."}
        </p>
        <img src={image} alt="err" />
        <h3 className="text-[20px] font-bold">
          {lenguage === "ru" ? "Образование" : "Ta'lim"}
        </h3>
        <p className="text-[18px]">
          {lenguage === "ru"
            ? `Каждый человек в семье Variteks оценивается на лучших позициях, где он может реализовать свои способности. С целью приобретения членства семьи, когда к нам присоединяется новый друг, Variteks предоставляет всю необходимую поддержку под названием "Ориентационное обучение".`
            : `Variteks oilasidagi har bir kishi o'z qobiliyatlarini amalga oshirishi mumkin bo'lgan eng yaxshi lavozimlar uchun baholanadi. Oilaviy a'zolikni qo'lga kiritish maqsadida, bizga yangi do'st qo'shilganda, Variteks "Orientatsiya treningi" deb nomlangan barcha kerakli yordamni taqdim etadi.`}
        </p>
        <p className="text-[18px]">
          {lenguage === "ru"
            ? "Помимо их собственных требований, обучение наших сотрудников определяется их руководителями и отделом кадров. Для улучшения профессиональных навыков и компетенций организуются соответствующие тренинги, учитывающие личные запросы и потребности."
            : "O'z talablaridan tashqari, bizning xodimlarimizni o'qitish ularning rahbarlari va kadrlar bo'limi tomonidan belgilanadi. Kasbiy mahorat va malakalarni oshirish uchun shaxsiy talab va ehtiyojlarni inobatga olgan holda tegishli treninglar tashkil etiladi."}
        </p>
        <h3 className="text-[20px] font-bold">
          {lenguage === "ru" ? "Производительность" : "Ishlash"}
        </h3>
        <p className="text-[18px]">
          {lenguage === "ru"
            ? "Наша компания, тщательно следящая за эффективностью работы, оценивает результаты деятельности своих сотрудников не реже двух раз в год. При окончательной оценке в конце года оценки эффективности работы увязываются с достаточно организованной системой премирования после тонкой проработки."
            : "Ish samaradorligini diqqat bilan kuzatib boradigan kompaniyamiz yiliga kamida ikki marta o'z xodimlarining ish faoliyatini baholaydi. Yil oxirida yakuniy baholashda, ish faoliyatini baholash nozik mahoratdan keyin yaxshi tashkil etilgan bonus tizimi bilan bog'lanadi."}
        </p>
        <p className="text-[18px]">
          {lenguage === "ru"
            ? "Все идеи, повышающие эффективность работы наших сотрудников, имеют большое значение. По этому поводу не реже двух раз в год проводятся опросы, направленные на повышение производительности; эффективность работы оценивается путем оценки не только сотрудника, но и компании. Кроме того, для высокоэффективных сотрудников предусмотрено планирование карьеры."
            : "Xodimlarimiz samaradorligini oshiradigan barcha g'oyalar katta ahamiyatga ega. Shu munosabat bilan yiliga kamida ikki marta samaradorlikni oshirishga qaratilgan so'rovlar o'tkaziladi; samaradorlik nafaqat xodimni, balki kompaniyani ham baholash orqali baholanadi. Bundan tashqari, yuqori natijalarga erishgan xodimlar uchun martaba rejalashtirish taqdim etiladi."}
        </p>
        <h3 className="text-[20px] font-bold">
          {lenguage === "ru" ? "Мероприятия" : "Voqealar"}
        </h3>
        <p className="text-[18px]">
          {lenguage === "ru"
            ? "Хотя мы подчеркиваем, насколько важна для нашей компании концепция семьи, независимо от подчиненного, внутрикорпоративные мероприятия, повышающие мотивацию, проводятся часто для того, чтобы все наши сотрудники были счастливы, независимо от их обязанностей, и чтобы наши сотрудники не просто занимались делом, а работали так, как будто они занимаются своим делом."
            : "Biz oila tushunchasining kompaniyamiz uchun qanchalik muhimligini ta'kidlagan bo'lsak-da, qanday bo'lmasin, motivatsiyani oshiradigan ichki korporativ tadbirlar tez-tez o'tkaziladi, bu bizning barcha xodimlarimiz, ularning vazifalaridan qat'i nazar, baxtli bo'lishlari va xodimlarimiz shunchaki biznes qiling, lekin ular o'z ishlarini qilayotgandek ishlang."}
        </p>
        <h3 className="text-[20px] font-bold">
          {lenguage === "ru" ? "Career Opportunity" : "Karyera imkoniyati"}
        </h3>
        <div className="flex gap-5">
          <a
            href="kariyer.net"
            target={"_blank"}
            className="w-[200px] py-3 flex justify-center items-center text-white bg-red-600 rounded-lg cursor-pointer"
          >
            Kariyer.net
          </a>
          <a
            href="elman.net"
            target={"_blank"}
            className="w-[200px] py-3 flex justify-center items-center text-white bg-red-600 rounded-lg cursor-pointer"
          >
            Elman.net
          </a>
        </div>
      </div>
    </>
  );
}
