import { Fragment } from "react";
import { useDispatch } from "react-redux";
import { counterActions } from "../../store/counter";
const TkReduxPage1 = () => {
  const dispatch = useDispatch();
  const handleAdd1Click = () => {
    dispatch(counterActions.add1());
  };
  const handleSub1Click = () => {
    dispatch(counterActions.sub1());
  };

  return (
    <Fragment>
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
