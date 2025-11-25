import ProjectCard from "./ProjectCard";
import bhBalta from "../../assets/bhBalta.jpg";
import bhT1 from "../../assets/bhT1.jpg";
import badasspizza from "../../assets/badassPizza.jpg";

export default function Projects() {
  const projects = [
    {
      id: 1,
      image: bhBalta,
      title: "Bad Habits Baltijaama Turg",
      description:
        "American restaurant opened in 2024 in Tallinn, combining BBQ, street food, bakery, cocktail bar and merch shop. This is a place where gastronomy meets art: stylish interior, neon signs, vintage furniture and paintings by a famous Estonian artists, which create an unique atmosphere.",
      link: "https://badhabits.ee/goodtimes/en",
      imagePosition: "right",
    },
    {
      id: 2,
      image: bhT1,
      title: "Bad Habits T1 Mall",
      description:
        "Bad Habits expands with a second location at T1 Mall in 2025, dedicated to authentic American pizza. This urban pizzeria combines traditional hand-tossed techniques with innovative flavor combinations, casual dining atmosphere, and bold street-style interior that brings the spirit of American pizza joints to Tallinn.",
      link: "https://badhabits.ee/funtown/en",
      imagePosition: "left",
    },
    {
      id: 3,
      image: badasspizza,
      title: "Badass Pizza",
      description:
        "Authentic American pizza restaurant opened in 2025 in the heart of Tallinn. Experience the best flavors of America with our hand-tossed pizzas, unique toppings combinations, and vibrant atmosphere. Where traditional Italian techniques meet bold American creativity.",
      link: "https://badasspizza.ee",
      imagePosition: "right",
    },
  ];

  return (
    <section id="projects" className="pt-[21px] px-10">
      <div className="max-w-[1350px] mx-auto">
        <h2 className="text-[70px] text-white text-center mb-12 max-md:text-[40px]">
          Projects
        </h2>

        <div className="space-y-12">
          {projects.map((project) => (
            <ProjectCard
              key={project.id}
              image={project.image}
              title={project.title}
              description={project.description}
              link={project.link}
              imagePosition={project.imagePosition}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
