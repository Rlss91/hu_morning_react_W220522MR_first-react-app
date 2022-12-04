import { useState, useEffect } from "react";
import "./App.scss";
import { ToastContainer } from "react-toastify";
import { useDispatch, useSelector } from "react-redux";
import { authActions } from "./store/auth";
import jwt_decode from "jwt-decode";
// import ShalomOlam, { f1, f2, f3 } from "./components/HelloWorld";
import HelloWorldComponent from "./components/HelloWorldComponent";
import LoginPage from "./pages/LoginPage";
import ConditionPage from "./pages/ConditionPage";
import RegisterPage from "./pages/RegisterPage";
import PanelPage from "./pages/PanelPage/PanelPage";
import SideEffectPage from "./pages/SideEffect";
import NavBarComponent from "./components/NavBarComponent";
import TkReduxPage1 from "./pages/TKRedux/TkReduxPage1";
import TkReduxPage2 from "./pages/TKRedux/TkReduxPage2";

import HomePage from "./pages/HomePage";
import { Route, Switch } from "react-router-dom";
import RouteP1Page from "./pages/RouteP1Page";
import RouteP2Page from "./pages/RouteP2Page";
import MoreInfoBizCardPage from "./pages/MoreInfoBizCardPage";
import EditBizCardPage from "./pages/EditBizCardPage";
import NotFoundPage from "./pages/NotFoundPage";
import AuthGuardRoute from "./components/AuthGuardRoute";
import QParamsPage from "./pages/QParamsPage";
import QParamsPageFilter from "./pages/QParamsPageFilter";
import MyQParamsPage from "./pages/MyQParamsPage";
import AdminOnlyPage from "./pages/AdminOnlyPage";
import AdminGuardRoute from "./components/AdminGuardRoute";
import updateUserInfo from "./services/updateUserInfo.js";
import useAutoLogin from "./hooks/useAutoLogin";
import ForgotPassword from "pages/ForgotPassword.page";
import ResetPasswordPage from "pages/ResetPasswordPage";

const App = () => {
  const autoLoginFunction = useAutoLogin();
  const loggedIn = useSelector((state) => state.auth.loggedIn);
  const [tryToLogin, setTryToLogin] = useState(true);
  /*
    tryToLogin - ממתין לאימות
  */
  useEffect(() => {
    (async () => {
      let status = await autoLoginFunction(localStorage.getItem("token"));
      if (status === false) {
        setTryToLogin(false); //להפסיק להמתין
      }
    })();
  }, []);
  useEffect(() => {
    /*
      if 
      the login proccess succesd
      and
      im wating for login proccess to end
      then
      stop wating
    */
    if (loggedIn === true && tryToLogin === true) {
      setTryToLogin(false); //להפסיק להמתין
    }
  }, [loggedIn]);

  return (
    <div className="container">
      <NavBarComponent />
      <ToastContainer />
      {!tryToLogin && (
        <Switch>
          <Route path="/" exact component={HomePage}></Route>
          <Route path="/login" component={LoginPage}></Route>
          <Route path="/register" component={RegisterPage}></Route>
          <AuthGuardRoute
            path="/panelpage"
            component={PanelPage}
          ></AuthGuardRoute>
          <Route path="/moreinfo/:id" component={MoreInfoBizCardPage}></Route>
          <AuthGuardRoute
            path="/editbizcard/:id"
            component={EditBizCardPage}
          ></AuthGuardRoute>
          <AdminGuardRoute path="/adminonly" component={AdminOnlyPage} />
          <Route path="/pages" component={RouteP1Page}></Route>
          <Route path="/pages/p2" component={RouteP2Page}></Route>
          <Route path="/qparams" component={QParamsPage}></Route>
          <Route path="/qparamsfilter" component={QParamsPageFilter} />
          <Route path="/myqparams" component={MyQParamsPage}></Route>
          <Route path="/forgotpassword" component={ForgotPassword}></Route>
          <Route
            path="/resetpassword/:token"
            component={ResetPasswordPage}
          ></Route>
          <Route path="*" component={NotFoundPage}></Route>
        </Switch>
      )}
    </div>
  );
};

export default App;
