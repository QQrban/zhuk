import zhukMain from "../../assets/zhukMain.png";
import z from "../../assets/zhukMain.png";

export default function Hero() {
  return (
    <section className="pt-[120px] xl:pt-[150px] px-4">
      <div className="flex flex-col max-w-[1350px] mx-auto gap-[60px] xl:flex-row items-center">
        <div className="text-white max-w-[800px] xl:w-[650px] flex flex-col gap-[21px] text-center xl:text-start">
          <h1 className="text-[75px] xl:max-w-[400px] leading-25">Rock Your Taste Buds.</h1>
          <p className="text-[26px]">
            A Tallinn-based <span className="text-yelloWW">restaurateur</span> and chef with deep
            experience across the culinary world, from leading top Estonian kitchens as Head and
            Executive Chef to{" "}
            <span className="text-yelloWW">creating restaurant concepts from scratch</span>. Big
            culinary experience, from street food to fine dining.
          </p>
          <p className="text-[40px] text-yelloWW">Get ready to eat like a legend!</p>
        </div>
        <div className="shrink-0">
          <img
            src={zhukMain}
            alt="zhuk"
            className="w-[300px] h-[300px] md:w-[650px] md:h-auto rounded-full md:rounded-none object-cover"
          />
        </div>
      </div>
    </section>
  );
}
