export default function ProjectCard({
  image,
  title,
  description,
  link,
  imagePosition = "left",
}) {
  return (
    <div
      className={`flex flex-col ${
        imagePosition === "right" ? "md:flex-row-reverse" : "md:flex-row"
      } gap-10 md:gap-20 items-center overflow-hidden`}
    >
      <div className="w-full md:w-1/2 h-[300px] md:h-[450px] overflow-hidden rounded-md">
        <img
          src={image}
          alt={title}
          className="w-full h-full object-cover transition-transform duration-500"
        />
      </div>

      <div className="w-full md:w-1/2">
        <h3 className="text-3xl md:text-4xl font-bold text-yelloWW mb-4">
          {title}
        </h3>
        <p className="text-gray-300 text-lg lg:text-2xl leading-relaxed mb-6">
          {description}
        </p>
        <a
          href={link}
          target="_blank"
          rel="noopener noreferrer"
          className="inline-block bg-white text-black px-8 py-3 rounded-lg font-semibold hover:bg-yelloWW transition-all duration-300"
        >
          Visit Website →
        </a>
      </div>
    </div>
  );
}
