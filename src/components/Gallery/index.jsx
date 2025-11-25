import { useState } from "react";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";
import GallerySlide from "./GallerySlide";
import ImageModal from "./ImageModal";
import galleryImages from "./images";
import "./gallery.css";

export default function Gallery() {
  const [selectedImage, setSelectedImage] = useState(null);

  const desktopSettings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    arrows: true,
    autoplay: true,
    autoplaySpeed: 4000,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          dots: false,
          arrows: true
        }
      }
    ]
  };

  const mobileSettings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    arrows: true,
    autoplay: true,
    autoplaySpeed: 4000
  };

  const slides = [];
  for (let i = 0; i < galleryImages.length; i += 7) {
    slides.push(galleryImages.slice(i, i + 7));
  }

  return (
    <section id="gallery" className="pt-[21px] px-15">
      <div className="max-w-[1350px] mx-auto">
        <h2 className="text-[70px] text-white text-center mb-8 max-md:text-[40px]">Gallery</h2>

        {/* desktop*/}
        <div className="hidden md:block scale-85">
          <Slider {...desktopSettings}>
            {slides.map((slideImages, index) => (
              <div key={index}>
                <GallerySlide images={slideImages} onImageClick={setSelectedImage} />
              </div>
            ))}
          </Slider>
        </div>

        {/* mobile */}
        <div className="block md:hidden">
          <Slider {...mobileSettings}>
            {galleryImages.map((image, index) => (
              <div key={index}>
                <div
                  className="sm:w-[400px] h-[400px] px-2 cursor-pointer mx-auto"
                  onClick={() => setSelectedImage(image)}
                >
                  <div className="h-full overflow-hidden rounded-lg">
                    <img src={image} alt="" className="w-full h-full object-cover" />
                  </div>
                </div>
              </div>
            ))}
          </Slider>
        </div>
      </div>

      <ImageModal image={selectedImage} onClose={() => setSelectedImage(null)} />
    </section>
  );
}
