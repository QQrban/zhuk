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
      imagePosition: "right"
    },
    {
      id: 2,
      image: bhT1,
      title: "Bad Habits T1 Mall",
      description:
        "American family restaurant opened in 2025 in T1 Mall, Tallinn, combining BBQ, street food, pizzeria, ice cream shop and merch shop. This is a place where gastronomy meets art: stylish interior, neon signs, vintage furniture , private Caddilac  Room, and BBQ garage which create a unique atmosphere.",
      link: "https://badhabits.ee/funtown/en",
      imagePosition: "left"
    },
    {
      id: 3,
      image: badasspizza,
      title: "Badass Pizza",
      description:
        "Authentic American pizza restaurant opened in 2025 in the heart of Tallinn. Experience the best flavors of America with our hand-tossed pizzas, unique toppings combinations, and vibrant atmosphere. Where traditional Italian techniques meet bold American creativity.",
      link: "https://badasspizza.ee",
      imagePosition: "right"
    }
  ];

  return (
    <section id="projects" className="pt-[21px] px-10">
      <div className="max-w-[1350px] mx-auto">
        <h2 className="text-[70px] text-white text-center mb-12 max-md:text-[40px]">Projects</h2>

        <div className="space-y-12">
          {projects.map(project => (
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
