import { useEffect } from "react";

export default function ImageModal({ image, onClose }) {
  useEffect(() => {
    if (!image) return;

    const handleEsc = (e) => {
      if (e.key === "Escape") onClose();
    };

    window.addEventListener("keydown", handleEsc);
    document.body.style.overflow = "hidden";

    return () => {
      window.removeEventListener("keydown", handleEsc);
      document.body.style.overflow = "unset";
    };
  }, [image, onClose]);

  if (!image) return null;

  return (
    <div
      className="fixed inset-0 z-9999 bg-opacity-60 flex items-center justify-center p-4 backdrop-blur-sm"
      onClick={onClose}
    >
      <div
        className="relative max-w-[90vw] md:max-w-[600px] rounded-lg shadow-2xl"
        onClick={(e) => e.stopPropagation()}
      >
        <button
          className="absolute top-2 right-2 md:-top-10 md:-right-10 text-white text-3xl md:text-5xl font-light hover:text-gray-400 transition-colors cursor-pointer z-10 bg-black/50 md:bg-transparent rounded-full w-10 h-10 md:w-auto md:h-auto flex items-center justify-center"
          onClick={onClose}
        >
          ×
        </button>

        <img
          src={image}
          alt=""
          className="w-full h-full object-contain rounded-lg max-h-[80vh] md:max-h-[70vh]"
        />
      </div>
    </div>
  );
}
