import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";
import bhskedami from "../../assets/bhskedami.jpg";
import edabh from "../../assets/edabh.jpg";
import zoloto from "../../assets/zoloto.jpg";
import mickey from "../../assets/mickey.jpg";
import lososik from "../../assets/lososik.png";
import mylo from "../../assets/mylo.jpeg";
import restoSnaruzhi from "../../assets/restoSnaruzhi.jpg";
import restoVnutri from "../../assets/restoVnutri.jpg";

export default function Gallery() {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    arrows: true,
    autoplay: true,
    autoplaySpeed: 3000
  };

  return (
    <section id="gallery" className="pt-[21px] px-4">
      <div className="max-w-[1350px] mx-auto">
        <h2 className="text-[70px] text-white text-center mb-8">Gallery</h2>

        {/* <Slider {...settings}>
          <div>
            <div className="grid grid-cols-4 grid-rows-3 gap-2 h-[500px] md:h-[600px]">
              <img
                src={bhskedami}
                className="col-span-2 row-span-2 w-full h-full object-cover rounded"
              />
              <img
                src={edabh}
                className="col-span-2 row-span-2 w-full h-full object-cover rounded"
              />
              <img
                src={zoloto}
                className="col-span-2 row-span-1 w-full h-full object-cover rounded"
              />
              <img src={mickey} className="w-full h-full object-cover rounded" />
              <img src={lososik} className="w-full h-full object-cover rounded" />
              <img src={mylo} className="col-span-2 w-full h-full object-cover rounded" />
            </div>
          </div>

          <div>
            <div className="grid grid-cols-4 grid-rows-3 gap-2 h-[500px] md:h-[600px]">
              <img
                src={restoSnaruzhi}
                className="col-span-2 row-span-2 w-full h-full object-cover rounded"
              />
              <img src={restoVnutri} className="w-full h-full object-cover rounded" />
            </div>
          </div>
        </Slider> */}
      </div>
    </section>
  );
}
