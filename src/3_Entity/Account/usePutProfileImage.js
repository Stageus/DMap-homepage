import React from "react";

const BASE_URL = process.env.REACT_APP_SERVER_URL;
const TEST_TOKEN = process.env.REACT_APP_TESTING_ACCESS_TOKEN;

export const useFormDataFetch = () => {
  const [serverState, setServerState] = React.useState(null);
  const [loading, setLoading] = React.useState(true);

  const request = async (method, endPoint, formData = null) => {
    try {
      const config = {
        method: method,
        headers: {
          Authorization: TEST_TOKEN, // 인증 토큰 추가
        },
        body: formData,
      };

      const response = await fetch(`${BASE_URL}${endPoint}`, config);
      const data = await response.json();
      setServerState({ ...data, status: response.status });
    } catch (error) {
      console.error("FormData 요청 오류:", error);
    } finally {
      setLoading(false);
    }
  };

  return [serverState, request, loading];
};

const usePutProfileImage = (onProfileImageChange) => {
  const [serverState, request, loading] = useFormDataFetch();

  const putProfileImage = (imageFile) => {
    const formData = new FormData();
    formData.append("image", imageFile);
    request("PUT", "/account/image", formData);
  };

  React.useEffect(() => {
    switch (serverState?.status) {
      case 400:
        console.log("입력 값 오류: 닉네임 형식이 잘못되었습니다.");
        return;
      case 403:
        console.log("인증 실패: 다시 로그인 하십시오");
        return;
      case 409:
        console.log("중복 닉네임: 해당 닉네임은 이미 사용 중입니다.");
        return;
      case 200:
        onProfileImageChange();
        break;
      default:
        console.log(serverState.message);
    }
  }, [serverState]);

  return [putProfileImage, loading];
};

export default usePutProfileImage;
