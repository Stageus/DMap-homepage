import React from "react";
import { useCookies } from "react-cookie";
import useIsLoginAtom from "../Recoil/useIsLogin";

const useAuthenticator = () => {
  const [cookies, setCookies] = useCookies(["accessToken"]);
  const [isLogin, setIsLogin] = useIsLoginAtom();

  React.useEffect(() => {
    cookies["accessToken"] ? setIsLogin(true) : setIsLogin(false);
  }, []);

  return [isLogin];
};

export default useAuthenticator;
