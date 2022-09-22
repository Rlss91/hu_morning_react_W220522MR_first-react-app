import { useSelector } from "react-redux";

const TkReduxPage2 = () => {
  const counter = useSelector((state) => state.counter.counter);
  return <h1>{counter}</h1>;
};

export default TkReduxPage2;
