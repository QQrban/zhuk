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
        className="relative max-w-[600px] rounded-lg shadow-2xl"
        onClick={(e) => e.stopPropagation()}
      >
        <button
          className="absolute -top-10 -right-10 text-white text-5xl font-light hover:text-gray-400 transition-colors cursor-pointer"
          onClick={onClose}
        >
          ×
        </button>

        <img
          src={image}
          alt=""
          className="w-full h-full object-contain rounded-lg max-h-[70vh]"
        />
      </div>
    </div>
  );
}
