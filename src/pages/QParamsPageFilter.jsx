import { useState, useEffect, Fragment } from "react";
import { useLocation, useHistory } from "react-router-dom";

const originalArr = [
  "kenny",
  "john",
  "rick",
  "morty",
  "tom",
  "jerry",
  "garfield",
];
const QParamsPageFilter = () => {
  const [filteredArr, setFilteredArr] = useState(originalArr);
  const [filterInput, setFilterInput] = useState("");
  const location = useLocation();
  const history = useHistory();
  useEffect(() => {
    const qParmas = new URLSearchParams(location.search);
    if (qParmas.has("filter")) {
      let filter = qParmas.get("filter");
      let regex = new RegExp(filter, "i");
      let newFilteredArr = JSON.parse(JSON.stringify(originalArr));
      newFilteredArr = newFilteredArr.filter((item) => regex.test(item));
      setFilteredArr(newFilteredArr);
      if (filter !== filterInput) {
        setFilterInput(filter);
      }
    }
  }, [location]);
  const handleInputKeyUp = (ev) => {
    if (ev.code === "Enter") {
      history.push(`/qparamsfilter?filter=${filterInput}`);
    }
  };
  const handleInputChange = (ev) => {
    setFilterInput(ev.target.value);
  };
  return (
    <Fragment>
      <div className="input-group mb-3">
        <span className="input-group-text" id="basic-addon1">
          @
        </span>
        <input
          type="text"
          className="form-control"
          placeholder="Username"
          aria-label="Username"
          aria-describedby="basic-addon1"
          onKeyUp={handleInputKeyUp}
          onChange={handleInputChange}
          value={filterInput}
        />
      </div>

      {filteredArr.map((item, idx) => {
        return <h1 key={idx}>{item}</h1>;
      })}
    </Fragment>
  );
};

export default QParamsPageFilter;
