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
          {lenguage === "ru" ? "ЧЕЛОВЕЧЕСКИЕ РЕСУРСЫ" : "HUMAN RESOURCES"}
        </h1>
        <p className="text-[18px]">
          {lenguage === "ru"
            ? "Наша цель, как команды отдела кадров Variteks, состоит в том, чтобы привлечь в компанию нужных людей, поддержать, раскрыть потенциал и повысить их ценность, чтобы наша компания могла достичь своих целей. Наш принцип - быть справедливыми во всех правах, предоставляемых сотрудникам. Отдел кадров компании Variteks с 1958 года имеет стратегическое значение благодаря нашему антропоцентрическому подходу к управлению. Мы рады обеспечить справедливую и ориентированную на результат рабочую среду для наших сотрудников с помощью наших последовательных процедур и практик, соблюдая правила этики, равенства и конфиденциальности."
            : "Our goal as the Variteks Human Resources team is to bring the right people into the company, support them, unlock their potential and add value so that our company can achieve its goals. Our principle is to be fair in all rights granted to employees. Variteks Human Resources has been strategically important since 1958 thanks to our anthropocentric approach to management. We are pleased to provide a fair and results-oriented work environment for our employees through our consistent procedures and practices, respecting the rules of ethics, equality and confidentiality."}
        </p>
        <img src={image} alt="err" />
        <h3 className="text-[20px] font-bold">
          {lenguage === "ru" ? "Образование" : "Education"}
        </h3>
        <p className="text-[18px]">
          {lenguage === "ru"
            ? `Каждый человек в семье Variteks оценивается на лучших позициях, где он может реализовать свои способности. С целью приобретения членства семьи, когда к нам присоединяется новый друг, Variteks предоставляет всю необходимую поддержку под названием "Ориентационное обучение".`
            : `Each person in the Variteks family is evaluated for the best positions where he can realize his abilities. For the purpose of acquiring family membership when a new friend joins us, Variteks provides all the necessary support called "Orientation Training".`}
        </p>
        <p className="text-[18px]">
          {lenguage === "ru"
            ? "Помимо их собственных требований, обучение наших сотрудников определяется их руководителями и отделом кадров. Для улучшения профессиональных навыков и компетенций организуются соответствующие тренинги, учитывающие личные запросы и потребности."
            : "Apart from their own requirements, the training of our employees is determined by their supervisors and Human Resources. To improve professional skills and competencies, appropriate trainings are organized, taking into account personal requests and needs."}
        </p>
        <h3 className="text-[20px] font-bold">
          {lenguage === "ru" ? "Производительность" : "Performance"}
        </h3>
        <p className="text-[18px]">
          {lenguage === "ru"
            ? "Наша компания, тщательно следящая за эффективностью работы, оценивает результаты деятельности своих сотрудников не реже двух раз в год. При окончательной оценке в конце года оценки эффективности работы увязываются с достаточно организованной системой премирования после тонкой проработки."
            : "Our company, which carefully monitors the efficiency of work, evaluates the performance of its employees at least twice a year. At the final evaluation at the end of the year, performance evaluations are linked to a well-organized bonus system after fine workmanship."}
        </p>
        <p className="text-[18px]">
          {lenguage === "ru"
            ? "Все идеи, повышающие эффективность работы наших сотрудников, имеют большое значение. По этому поводу не реже двух раз в год проводятся опросы, направленные на повышение производительности; эффективность работы оценивается путем оценки не только сотрудника, но и компании. Кроме того, для высокоэффективных сотрудников предусмотрено планирование карьеры."
            : "All ideas that increase the efficiency of our employees are of great importance. On this occasion, surveys are conducted at least twice a year aimed at improving productivity; performance is assessed by evaluating not only the employee, but also the company. In addition, career planning is provided for high-performing employees."}
        </p>
        <h3 className="text-[20px] font-bold">
          {lenguage === "ru" ? "Мероприятия" : "Events"}
        </h3>
        <p className="text-[18px]">
          {lenguage === "ru"
            ? "Хотя мы подчеркиваем, насколько важна для нашей компании концепция семьи, независимо от подчиненного, внутрикорпоративные мероприятия, повышающие мотивацию, проводятся часто для того, чтобы все наши сотрудники были счастливы, независимо от их обязанностей, и чтобы наши сотрудники не просто занимались делом, а работали так, как будто они занимаются своим делом."
            : "Although we emphasize how important the concept of the family is to our company, regardless of the subordinate, internal corporate events that increase motivation are often carried out to ensure that all our employees are happy, regardless of their duties, and that our employees do not just do business, but work like they're doing their own thing."}
        </p>
      </div>
    </>
  );
}
