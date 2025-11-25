import { LuChefHat, LuGraduationCap, LuMail } from "react-icons/lu";
import { GoRocket } from "react-icons/go";

export default function Services() {
  const services = [
    {
      id: 1,
      icon: <LuMail size={64} />,
      title: "Restaurant Concept",
      description:
        "Creating a restaurant concept, solving problems, training and recruiting kitchen staff.",
    },
    {
      id: 2,
      icon: <LuChefHat size={64} />,
      title: "Menu Development",
      description:
        "I will make a special menu for your restaurant, train and recruit kitchen staff.",
    },
    {
      id: 3,
      icon: <LuGraduationCap size={64} />,
      title: "Chef Training",
      description:
        "I organize theoretical and practical training sessions for both new and experienced chefs.",
    },
    {
      id: 4,
      icon: <GoRocket size={64} />,
      title: "Turnkey Restaurant",
      description:
        "Launch your restaurant from scratch: concept, menu, staff, and full operational setup.",
    },
  ];

  return (
    <section
      id="services"
      className="pt-[21px] px-10 relative overflow-hidden"
    >
      <div className="max-w-[1350px] mx-auto relative z-10">
        <h2 className="text-[70px] text-white text-center mb-16 max-md:text-[40px] font-bold">
          Services
        </h2>

        <div className="flex flex-wrap justify-center xl:justify-between gap-6 lg:gap-8">
          {services.map((service) => (
            <div
              key={service.id}
              className="bg-black flex flex-col items-center text-center p-8 rounded-xl hover:bg-zinc-900/50 transition-all duration-300 group flex-1 min-w-[250px] max-w-[300px]"
            >
              <div className="text-yelloWW mb-6 group-hover:scale-110 transition-transform duration-300">
                {service.icon}
              </div>

              <h3 className="text-2xl font-bold text-white mb-4">
                {service.title}
              </h3>

              <p className="text-gray-300 text-xl leading-relaxed">
                {service.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
