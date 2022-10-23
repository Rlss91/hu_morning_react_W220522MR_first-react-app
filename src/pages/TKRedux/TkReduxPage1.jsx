import { Fragment, useState } from "react";
import { useDispatch } from "react-redux";
import { counterActions } from "../../store/counter";
const TkReduxPage1 = () => {
  const [numberInput, setNumberInput] = useState("0");
  //const [counter, setCounter] = useState(0)
  //!useSelector
  //*setCounter = dispatch(counterActions.add1())
  const dispatch = useDispatch();
  const handleAdd1Click = () => {
    dispatch(counterActions.add1());
  };
  const handleSub1Click = () => {
    dispatch(counterActions.sub1());
  };

  const handleNumberInputChange = (ev) => {
    setNumberInput(ev.target.value);
  };
  const handleAddNumberClick = () => {
    dispatch(counterActions.addNumber(numberInput));
  };

  return (
    <Fragment>
      <input
        type="number"
        value={numberInput}
        onChange={handleNumberInputChange}
      />
      <button className="btn btn-primary" onClick={handleAddNumberClick}>
        add number
      </button>
      <button className="btn btn-success" onClick={handleAdd1Click}>
        +1
      </button>
      <button className="btn btn-danger" onClick={handleSub1Click}>
        -1
      </button>
    </Fragment>
  );
};

export default TkReduxPage1;
