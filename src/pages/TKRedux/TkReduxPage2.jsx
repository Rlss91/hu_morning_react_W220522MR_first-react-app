import { useSelector } from "react-redux";

const TkReduxPage2 = () => {
  const counter = useSelector((state) => state.counter.counter);
  //                                     redux.slice.variable
  //const [counter, setCounter] = useState(0)
  //*useSelector = counter
  //!setCounter X
  return <h1>{counter}</h1>;
};

export default TkReduxPage2;
