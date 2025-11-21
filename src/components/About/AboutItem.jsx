export default function AboutItem({ src, classes, children, reverse = false }) {
  return (
    <div className={`flex gap-8 ${reverse ? "flex-row-reverse" : "flex-row"} items-center`}>
      <img src={src} alt="" className={`w-[400px] ${classes}`} />
      <div className="text-white max-w-[800px] text-[32px]">{children}</div>
    </div>
  );
}
