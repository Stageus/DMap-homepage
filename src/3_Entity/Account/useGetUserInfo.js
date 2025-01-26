import React from "react";
import { useFetch } from "../../4_Shared/util/apiUtil";

const TEST_TOKEN = process.env.REACT_APP_TESTING_ACCESS_TOKEN;

const useGetUserInfo = (userIdx) => {
  const [serverState, request, loading] = useFetch();
  const [userInfo, setUserInfo] = React.useState(null);

  // userIdx가 숫자인 경우 API 호출 방지
  const isValidUserIdx = (idx) => idx && isNaN(idx);

  React.useEffect(() => {
    if (isValidUserIdx(userIdx)) {
      request("GET", `/account/info/${userIdx}`, null, TEST_TOKEN);
    } else {
      console.error("유효하지 않은 사용자 ID입니다.");
    }
  }, [userIdx]);

  React.useEffect(() => {
    if (!loading && serverState) {
      switch (serverState.status) {
        case 400:
          console.log(serverState.message);
          break;
        default:
          break;
      }
    }
    setUserInfo(serverState);
  }, [loading, serverState]);

  return [userInfo, loading];
};

export default useGetUserInfo;
