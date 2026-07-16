import React, { useEffect } from "react";
import { AiOutlineClose } from "react-icons/ai";
import { Portal } from "../Portal";

export default function CommonModal({
  isOpen,
  onClose,
  children,
  size = "md",
  title,
  subTitle,
  closeOnBackdropClick = true,
  showCloseButton = true,
}) {
  // Handle Escape key press
  useEffect(() => {
    const handleEscapeKey = (event) => {
      if (event.key === "Escape" && isOpen) {
        onClose();
      }
    };

    if (isOpen) {
      document.addEventListener("keydown", handleEscapeKey);
      document.body.style.overflow = "hidden";
    }

    return () => {
      document.removeEventListener("keydown", handleEscapeKey);
      document.body.style.overflow = "unset";
    };
  }, [isOpen, onClose]);

  if (!isOpen) return null;

  // Size variants
  const sizeClasses = {
    sm: "max-w-sm",
    md: "max-w-md",
    lg: "max-w-lg",
    xl: "max-w-xl",
    "2xl": "max-w-2xl",
    full: "max-w-[90vw]",
  };

  const modalContent = (
    <Portal>
      <div className="fixed inset-0 z-50">
        {/* Blurred Background */}
        <div
          className="absolute inset-0 bg-black/50 backdrop-blur-sm transition-opacity duration-300"
          style={{ cursor: closeOnBackdropClick ? "pointer" : "default" }}
        />

        {/* Modal Container */}
        <div className="fixed inset-0 flex items-center justify-center p-4 z-50"
         onClick={closeOnBackdropClick ? onClose : undefined}
         >
          <div
            className={`${sizeClasses[size]} w-full bg-white rounded-lg shadow-2xl max-h-[90vh] overflow-y-auto relative animate-fadeIn`}
            onClick={(e) => e.stopPropagation()}
          >
            {/* Header with Title and Close Button */}
            {(title || showCloseButton) && (
              <div className="sticky top-0 bg-white border-b border-gray-200 px-4 sm:px-6 py-4 flex items-center justify-between z-10">
                {title && (
                  <div className="text-center sm:text-left">
                    <h2 className="text-sm sm:text-base md:text-lg lg:text-xl font-bold mb-1 text-gray-900">
                      {title}
                    </h2>
                    { subTitle &&
                      <p className="text-xs sm:text-xs md:text-sm lg:text-base text-gray-600">
                      {subTitle}
                    </p>
                    }
                  </div>
                )}
                {showCloseButton && (
                  <button
                    onClick={onClose}
                    className="ml-auto flex-shrink-0 text-gray-500 hover:text-gray-700 transition-colors"
                    aria-label="Close modal"
                  >
                    <AiOutlineClose size={24} />
                  </button>
                )}
              </div>
            )}

            {/* Modal Content */}
            <div>{children}</div>
          </div>
        </div>

        <style jsx>{`
          @keyframes fadeIn {
            from {
              opacity: 0;
              transform: scale(0.95);
            }
            to {
              opacity: 1;
              transform: scale(1);
            }
          }

          :global(.animate-fadeIn) {
            animation: fadeIn 0.3s ease-out;
          }
        `}</style>
      </div>
    </Portal>
  );

  return modalContent;
  // Use createPortal directly instead of custom Portal component
  // return createPortal(modalContent, document.body);
}
