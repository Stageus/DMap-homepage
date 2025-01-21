import { useEffect, useRef } from "react";
import putImage from "../../../../../../../3_Entity/Account/putImage";

const useModifyClick = (
  image,
  errorMessage,
  imagePreviewURL,
  uploadedImageFile,
  handleProfileImageChange,
  setMessage,
  confirmModalToggle,
  handleImageConfirmModalOpen
) => {
  const imageRef = useRef(image);

  useEffect(() => {
    imageRef.current = image;
  }, [image]);

  const handleModifyClick = async (handleClose) => {
    if (errorMessage) {
      setMessage(errorMessage);
      return confirmModalToggle();
    }
    if (imageRef.current === imagePreviewURL) {
      setMessage("사진을 변경하세요");
      return confirmModalToggle();
    }
    try {
      const result = await putImage(uploadedImageFile);
      if (!result) throw new Error("이미지 업로드 실패");
      setMessage("변경되었습니다");
      handleProfileImageChange(uploadedImageFile);
      handleImageConfirmModalOpen(handleClose);
    } catch (error) {
      setMessage(error.message || "오류가 발생했습니다.");
      confirmModalToggle();
    }
  };

  return { handleModifyClick };
};

export default useModifyClick;
