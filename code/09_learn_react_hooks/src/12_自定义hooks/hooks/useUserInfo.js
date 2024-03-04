// ?个人信息的hook
import { useContext } from "react";
import { UserContext } from "../context";

function useUserInfo() {
  const userInfo = useContext(UserContext);

  return userInfo;
}

export default useUserInfo;
