import zhukSGambosami from "../../assets/zhukSGambosami.png";
import zhukFace from "../../assets/zhukFace.png";
import morega from "../../assets/morega.png";
import zhukSTarelkoj from "../../assets/zhukSTarelkoj.png";
import AboutItem from "./AboutItem";

export default function About() {
  return (
    <section id="about" className="pt-[21px] px-4">
      <div className="max-w-[1350px] mx-auto flex flex-col items-center">
        <p className="self-end text-yelloWW text-[32px] md:text-[40px]">Food, Fun & Rock’N’Roll</p>
        <h2 className="text-[70px] text-white">About</h2>
        <div className="pt-[50px] flex flex-col gap-[60px] lg:gap-[50px] w-full">
          <AboutItem src={zhukSGambosami}>
            I've had the privilege of working in some incredible kitchens throughout my career. As a
            sous chef at <span className="text-yelloWW">Tchaikovsky</span> and a head chef at{" "}
            <span className="text-yelloWW">One Sixty</span>,{" "}
            <span className="text-yelloWW">Mon Repos</span>, and{" "}
            <span className="text-yelloWW">Tar-Tar Köök+Baar</span>, I've honed my skills and
            developed a unique culinary style.
          </AboutItem>
          <AboutItem src={zhukFace} reverse={true}>
            I've had the invaluable experience of training in Michelin-starred restaurants such as
            <span className="text-yelloWW"> Chez Dominique</span>,
            <span className="text-yelloWW"> Geranium</span>,
            <span className="text-yelloWW"> Formel B</span>,
            <span className="text-yelloWW"> Demo</span>, and
            <span className="text-yelloWW"> Postres</span>, further refining my techniques and
            expanding my culinary horizons.
          </AboutItem>
          <AboutItem src={morega}>
            <span className="text-yelloWW">Every</span> project I create comes from genuine{" "}
            <span className="text-yelloWW">care</span> and full commitment. I focus on the details
            and the atmosphere so guests don’t just eat — they{" "}
            <span className="text-yelloWW">enjoy</span> the whole experience. Each project is{" "}
            <span className="text-yelloWW">unique </span>
            and made to leave a lasting impression.
          </AboutItem>
          <AboutItem src={zhukSTarelkoj} reverse={true}>
            Extensive experience in <span className="text-yelloWW">private</span> gastronomic
            evenings. Developed menus for successful projects. Master in creating unique culinary
            experiences that <span className="text-yelloWW">delight</span> and{" "}
            <span className="text-yelloWW">surprise</span>.
          </AboutItem>
        </div>
      </div>
    </section>
  );
}
