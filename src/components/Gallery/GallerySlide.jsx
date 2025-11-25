export default function GallerySlide({ images, onImageClick }) {
  return (
    <div className="flex gap-2 h-[720px] px-2 max-md:h-[400px]">
      <div className="hidden lg:flex flex-col gap-2 w-[38%] min-w-0">
        <div
          className="flex-1 min-h-0 overflow-hidden rounded-lg cursor-pointer"
          onClick={() => onImageClick(images[0])}
        >
          <img
            src={images[0]}
            alt=""
            className="w-full h-full object-cover transition-transform duration-300 hover:scale-105"
          />
        </div>
        <div
          className="flex-1 min-h-0 overflow-hidden rounded-lg cursor-pointer"
          onClick={() => onImageClick(images[1])}
        >
          <img
            src={images[1]}
            alt=""
            className="w-full h-full object-cover transition-transform duration-300 hover:scale-105"
          />
        </div>
      </div>

      <div className="flex flex-1 w-full gap-2 flex-col min-w-0">
        <div className="flex gap-2 h-[40%] min-h-0">
          <div
            className="w-[35%] min-w-0 overflow-hidden rounded-lg cursor-pointer"
            onClick={() => onImageClick(images[2])}
          >
            <img
              src={images[2]}
              alt=""
              className="w-full h-full object-cover transition-transform duration-300 hover:scale-105"
            />
          </div>
          <div
            className="hidden md:block flex-1 min-w-0 overflow-hidden rounded-lg cursor-pointer"
            onClick={() => onImageClick(images[3])}
          >
            <img
              src={images[3]}
              alt=""
              className="w-full h-full object-cover transition-transform duration-300 hover:scale-105"
            />
          </div>
        </div>

        <div className="hidden md:flex gap-2 flex-1 min-h-0">
          <div className="w-[40%] flex flex-col gap-2 min-w-0">
            <div
              className="flex-1 min-h-0 overflow-hidden rounded-lg cursor-pointer"
              onClick={() => onImageClick(images[4])}
            >
              <img
                src={images[4]}
                alt=""
                className="w-full h-full object-cover transition-transform duration-300 hover:scale-105"
              />
            </div>
            <div
              className="flex-1 min-h-0 overflow-hidden rounded-lg cursor-pointer"
              onClick={() => onImageClick(images[5])}
            >
              <img
                src={images[5]}
                alt=""
                className="w-full h-full object-cover transition-transform duration-300 hover:scale-105"
              />
            </div>
          </div>
          <div
            className="flex-1 min-w-0 overflow-hidden rounded-lg cursor-pointer"
            onClick={() => onImageClick(images[6])}
          >
            <img
              src={images[6]}
              alt=""
              className="w-full h-full object-cover transition-transform duration-300 hover:scale-105"
            />
          </div>
        </div>
      </div>
    </div>
  );
}
