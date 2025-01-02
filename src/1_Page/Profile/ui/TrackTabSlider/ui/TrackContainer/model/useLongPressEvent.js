import { useEffect, useRef } from "react";

const useLongPressEvent = (onPinchStart, delay = 1000) => {
  const timerRef = useRef(null);

  const handleStart = () => {
    timerRef.current = setTimeout(() => {
      if (onPinchStart) onPinchStart();
    }, delay);
  };

  const handleCancel = () => {
    if (timerRef.current) {
      clearTimeout(timerRef.current); // 타이머 취소
      timerRef.current = null;
    }
  };

  useEffect(() => {
    return () => {
      clearTimeout(timerRef.current); // Cleanup 타이머
    };
  }, []);

  return {
    onTouchStart: handleStart,
    onTouchEnd: handleCancel,
    onTouchCancel: handleCancel,
  };
};

export default useLongPressEvent;