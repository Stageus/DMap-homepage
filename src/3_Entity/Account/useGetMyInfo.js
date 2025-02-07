import React from "react";
import { useFetch } from "../../4_Shared/util/apiUtil";

const useGetMyInfo = () => {
  const [serverState, request] = useFetch();
  const [userInfo, setUserInfo] = React.useState(null);

  React.useEffect(() => {
      request("GET", `/account/me`, null);
  }, []);

  React.useEffect(() => {
    if (serverState) {
      setUserInfo(serverState);
    }
  }, [serverState]);

  return [userInfo];
};

export default useGetMyInfo;
