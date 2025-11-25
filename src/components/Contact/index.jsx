import { CiInstagram, CiFacebook, CiPhone, CiMail } from "react-icons/ci";
import { CiLinkedin } from "react-icons/ci";
import narisovannyjZhuk from "../../assets/narisovannqjZhuk.png";

export default function Contact() {
  const contacts = [
    {
      id: 1,
      icon: <CiInstagram size={40} />,
      text: "@dmitri_zhuk",
      link: "https://instagram.com/dmitri_zhuk",
    },
    {
      id: 2,
      icon: <CiFacebook size={40} />,
      text: "www.facebook.com/dmitri.zhuk",
      link: "https://www.facebook.com/dmitri.zhuk",
    },
    {
      id: 3,
      icon: <CiPhone size={40} />,
      text: "+37258069795",
      link: "tel: +37258069795",
    },
    {
      id: 4,
      icon: <CiMail size={40} />,
      text: "dmitrizhuk11@gmail.com",
      link: "mailto:dmitrizhuk11@gmail.com",
    },
  ];

  return (
    <section
      id="contact"
      className="pt-20 px-10 relative overflow-hidden pb-1"
    >
      <div className="absolute inset-0 opacity-5"></div>

      <div className="max-w-[1350px] mx-auto relative z-10">
        <h2 className="text-[70px] text-white text-center mb-16 max-md:text-[40px] font-bold">
          Contact
        </h2>

        <div className="flex flex-col lg:flex-row gap-12 items-center justify-between">
          <div className="flex flex-col gap-8">
            {contacts.map((contact) => (
              <a
                key={contact.id}
                href={contact.link}
                target={contact.id <= 2 ? "_blank" : undefined}
                rel={contact.id <= 2 ? "noopener noreferrer" : undefined}
                className="flex items-center gap-4 text-white transition-colors group"
              >
                <div className="group-hover:scale-110 transition-transform text-yelloWW">
                  {contact.icon}
                </div>
                <span className="text-xl sm:text-2xl md:text-3xl">
                  {contact.text}
                </span>
              </a>
            ))}
          </div>

          <div className="flex flex-col items-center flex-1">
            <div className="relative">
              <div className="relative w-[340px] sm:w-[450px]">
                <img
                  src={narisovannyjZhuk}
                  alt="Chef Dmitri Zhuk"
                  className="object-cover rounded-lg"
                />
              </div>
            </div>
            <p className="text-yelloWW text-xl md:text-2xl text-right mt-8 font-medium max-w-md">
              Because being a freakin' culinary badass... <br /> is not an
              official job title!
            </p>
          </div>
        </div>

        <div className="mt-16 text-center text-gray-500 text-md flex items-center gap-1">
          Designed & Developed by Kurban Ramazanov
          <a
            target="_blank"
            href="https://www.linkedin.com/in/kurban-ramazanov-2b50b026b/"
          >
            <CiLinkedin />
          </a>
        </div>
      </div>
    </section>
  );
}
