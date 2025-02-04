import React from "react";
import { useFetch } from "../../4_Shared/util/apiUtil";
import { useCookies } from "react-cookie";
import { useNavigate } from "react-router-dom";

const useLogin = (code, state, platform = "KAKAO") => {
  const navigate = useNavigate();
  const [serverState, request, loading] = useFetch();
  const [cookies, setCookies] = useCookies(["accessToken", "refreshToken"]);

  React.useEffect(() => {
    request("GET", `/account/login/token?code=${code}&state=${state}&platform=${platform}`, null);
  }, [code, state]);

  React.useEffect(() => {
    if(serverState){
      const expires = new Date();
      expires.setMinutes(expires.getMinutes() + 30);
      console.log(serverState)
      setCookies("accessToken", serverState.access_token, { path: "/", expires });
      setCookies("refreshToken", serverState.refresh_token, { path: "/" });
      navigate("/");
    }
  }, [serverState]);

  return [serverState];
};

export default useLogin;
