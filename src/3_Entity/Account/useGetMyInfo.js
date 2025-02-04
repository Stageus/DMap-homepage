import React from "react";
import { useFetch } from "../../4_Shared/util/apiUtil";

const useGetMyInfo = () => {
  const [serverState, request, loading] = useFetch();
  const [userInfo, setUserInfo] = React.useState(null);

  React.useEffect(() => {
    request("GET", `/account/me`, null);
  }, []);

  React.useEffect(() => {
    if (!loading && serverState) {
      setUserInfo(serverState);
    }
  }, [serverState, loading]);

  return [userInfo, loading];
};

export default useGetMyInfo;
