import React from "react";
import STYLE from "./style";
import useBottomSheet from "./model/useBottomSheet";

const BottomSheet = ({ children, onClose }) => {
  const {
    isVisible,
    translateY,
    isDragging,
    handleTouchStart,
    handleTouchMove,
    handleTouchEnd,
    handleClose,
  } = useBottomSheet(onClose);

  return (
    <STYLE.Overlay>
      <STYLE.Sheet
        className={isVisible ? "open" : "close"}
        style={{
          transform: `translateY(${isVisible ? translateY : "300"}px)`,
          transition: !isDragging.current ? "transform 0.3s ease-out" : "none",
        }}
        onTouchStart={handleTouchStart}
        onTouchMove={handleTouchMove}
        onTouchEnd={handleTouchEnd}>
        <STYLE.Handle />
        {children({ handleClose })}
      </STYLE.Sheet>
    </STYLE.Overlay>
  );
};

export default BottomSheet;
