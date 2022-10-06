import { useState, useEffect } from "react";
import { useLocation } from "react-router-dom";

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
  const location = useLocation();
  useEffect(() => {
    const qParmas = new URLSearchParams(location.search);
    if (qParmas.has("filter")) {
      let filter = qParmas.get("filter");
      let regex = new RegExp(filter, "i");
      let newFilteredArr = JSON.parse(JSON.stringify(originalArr));
      newFilteredArr = newFilteredArr.filter((item) => regex.test(item));
      setFilteredArr(newFilteredArr);
    }
  }, [location]);
  return filteredArr.map((item, idx) => {
    return <h1 key={idx}>{item}</h1>;
  });
};

export default QParamsPageFilter;
