import React from "react";
import { useFetch } from "../../4_Shared/util/apiUtil";
import { useCookies } from "react-cookie";
import { useNavigate } from "react-router-dom";
import useIsLoginAtom from "../../4_Shared/Recoil/useIsLogin";

const useLogin = (code, state, platform = "KAKAO") => {
  const navigate = useNavigate();
  const [serverState, request] = useFetch();
  const [cookies, setCookies] = useCookies([
    "accessToken",
    "refreshToken",
    "userIdx",
  ]);
  const [isLogin, setIsLogin] = useIsLoginAtom();

  React.useEffect(() => {
    if (code && state) {
      request(
        "GET",
        `/account/login/token?code=${code}&state=${state}&platform=${platform}`,
        null
      );
    }
  }, [code, state]);

  React.useEffect(() => {
    if (serverState) {
      console.log(serverState);
      const expires = new Date();
      expires.setMinutes(expires.getMinutes() + 30);
      setCookies("accessToken", serverState.access_token, {
        path: "/",
        expires,
      });
      setCookies("refreshToken", serverState.refresh_token, { path: "/" });
      setCookies("userIdx", serverState.user_idx, { path: "/" });
      setIsLogin(true);
      navigate("/");
    }
  }, [serverState]);

  return [serverState];
};

export default useLogin;
