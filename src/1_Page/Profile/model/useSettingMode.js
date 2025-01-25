import { useMemo, useState, useCallback } from "react";

const SETTING_MODE_LIST = ["공유", "삭제"];

const useSettingMode = () => {
  const [modifyMode, setIsModifyState] = useState(null);

  const handleSetMode = useCallback((type) => {
    if (SETTING_MODE_LIST.includes(type)) {
      setIsModifyState(type);
    }
  }, []);

  const handleCloseMode = useCallback(() => {
    setIsModifyState(null);
  }, []);

  const memoizedSetMode = useMemo(
    () => ({
      modifyMode,
      handleSetMode,
      handleCloseMode,
    }),
    [modifyMode]
  );

  return {
    modifyMode,
    memoizedSetMode,
  };
};

export default useSettingMode;
