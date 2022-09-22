import { useState } from "react";
import "./App.scss";
import { ToastContainer } from "react-toastify";
// import ShalomOlam, { f1, f2, f3 } from "./components/HelloWorld";
import HelloWorldComponent from "./components/HelloWorldComponent";
import LoginPage from "./pages/LoginPage";
import ConditionPage from "./pages/ConditionPage";
import RegisterPage from "./pages/RegisterPage";
import PanelPage from "./pages/PanelPage/PanelPage";
import SideEffectPage from "./pages/SideEffect";
import NavBarComponent from "./components/NavBarComponent";

const App = () => {
  // const [tf, setTf] = useState(true);
  return (
    <div className="container">
      <NavBarComponent />
      <ToastContainer />
      {/* <HelloWorldComponent /> */}
      {/* <RegisterPage /> */}
      <LoginPage />
      {/* <ConditionPage /> */}
      {/* <PanelPage /> */}
      {/* <button onClick={(ev) => setTf(!tf)}>toggle timer</button>
      {tf && <SideEffectPage />} */}
    </div>
  );
};

export default App;
