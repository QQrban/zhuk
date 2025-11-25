export default function AboutItem({ src, classes, children, reverse = false }) {
  return (
    <div
      className={`flex gap-8 flex-col items-center ${
        reverse ? "sm:flex-row-reverse" : "sm:flex-row"
      } justify-between`}
    >
      <img src={src} alt="" className={`w-[280px] md:w-[350px] lg:w-[420px] ${classes}`} />
      <div className="text-white max-w-[800px] text-[20px] md:text-[28px] lg:text-[32px]">
        {children}
      </div>
    </div>
  );
}
