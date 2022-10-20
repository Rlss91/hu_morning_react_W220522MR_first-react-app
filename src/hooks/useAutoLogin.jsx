import { useEffect } from "react";
import { useDispatch } from "react-redux";
import jwt_decode from "jwt-decode";

import autoLogin from "../services/autoLogin";
import { authActions } from "../store/auth";
const useAutoLogin = () => {
  const dispatch = useDispatch();
  useEffect(() => {
    (async () => {
      try {
        let { data } = await autoLogin();
        let dataFromToken = jwt_decode(localStorage.getItem("token"));
        if (data) {
          dispatch(authActions.login(dataFromToken));
          dispatch(authActions.updateUserInfo(data));
        }
      } catch (err) {
        console.log("you not logged in");
      }
    })();
  }, []);
};
export default useAutoLogin;
