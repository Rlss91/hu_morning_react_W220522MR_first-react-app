import "./App.scss";
// import ShalomOlam, { f1, f2, f3 } from "./components/HelloWorld";
import HelloWorldComponent from "./components/HelloWorldComponent";
import LoginPage from "./pages/LoginPage";
import ConditionPage from "./pages/ConditionPage";
import RegisterPage from "./pages/RegisterPage";
import PanelPage from "./pages/PanelPage";

const App = () => {
  return (
    <div className="container">
      {/* <HelloWorldComponent /> */}
      {/* <RegisterPage /> */}
      {/* <LoginPage /> */}
      {/* <ConditionPage /> */}
      <PanelPage />
    </div>
  );
};

export default App;
