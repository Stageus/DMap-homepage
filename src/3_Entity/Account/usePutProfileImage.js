import React from "react";
import { useFetch } from "../../4_Shared/util/apiUtil";

const usePutProfileImage = ({ onSuccess, onError }) => {
  const [serverState, request] = useFetch();

  const putProfileImage = (imageFile) => {
    const formData = new FormData();
    formData.append("image", imageFile);
    request("PUT", "/account/image", formData, null);
  };

  React.useEffect(() => {
    if (!serverState) return;
    switch (serverState?.status) {
      case 400:
        onError?.(
          "유효하지 않은 파일 형식입니다. jpg,png,gif 파일만 허용됩니다."
        );
        break;
      case 413:
        onError?.("파일 크기는 최대 5MB까지만 허용됩니다.");
        break;
      default:
        onSuccess?.();
        break;
    }
  }, [serverState]);

  return [putProfileImage];
};

export default usePutProfileImage;
