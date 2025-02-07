import { atom } from "recoil";
import { useRecoilValue } from "recoil";
import { useSetRecoilState } from "recoil";
// key는 절대 겹치지 않게 설정
const isLoginAtom = atom({ key: "ISLOGIN_ATOM", default: false });

const useIsLoginAtom = () => {
  const isLogin = useRecoilValue(isLoginAtom);
  const setIsLogin = useSetRecoilState(isLoginAtom);

  return [isLogin, setIsLogin];
};
export default useIsLoginAtom;
