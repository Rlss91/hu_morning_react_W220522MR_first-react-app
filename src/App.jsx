import "./App.scss";
// import ShalomOlam, { f1, f2, f3 } from "./components/HelloWorld";
import HelloWorldComponent from "./components/HelloWorldComponent";
import LoginPage from "./pages/LoginPage";
import RegisterPage from "./pages/RegisterPage";

const App = () => {
  return (
    <div className="container">
      <HelloWorldComponent />
      <RegisterPage />
      <LoginPage />
    </div>
  );
};

export default App;
