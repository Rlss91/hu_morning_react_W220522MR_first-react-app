import { Fragment, useState, useEffect } from "react";
import "./PanelPage.scss";

const initialBizCardArray = [
  {
    name: "test1",
    img: "https://parrotdm.com/wp-content/uploads/2020/10/27255-scaled.jpg",
  },
  {
    name: "test2",
    img: "https://parrotdm.com/wp-content/uploads/2020/10/27255-scaled.jpg",
  },
  {
    name: "test3",
    img: "https://parrotdm.com/wp-content/uploads/2020/10/27255-scaled.jpg",
  },
];
const PanelPage = () => {
  const [findInput, setFindInput] = useState("");
  const [bizCardArr, setBizCardArr] = useState(initialBizCardArray);

  useEffect(() => {
    let regex = new RegExp(findInput, "i"); //create regex tamplate that will try to find the value and wil ignore case
    let bizCardArrCopy = JSON.parse(JSON.stringify(initialBizCardArray)); //cloneDeep
    // you cant change the array directly from the state, so we must do cloneDeep
    bizCardArrCopy = bizCardArrCopy.filter((item) => regex.test(item.name));
    setBizCardArr(bizCardArrCopy);
  }, [findInput]);

  const handleFindInputChange = (ev) => {
    // setTimeout(() => {
    //   setFindInput("1");
    // }, 1000);
    setFindInput(ev.target.value);
  };
  return (
    <Fragment>
      <div className="form-floating mb-3">
        <input
          type="email"
          className="form-control"
          id="floatingInput"
          placeholder="name@example.com"
          value={findInput}
          onChange={handleFindInputChange}
        />
        <label htmlFor="floatingInput">Find</label>
      </div>
      <div className="row row-cols-1 row-cols-md-2 g-4">
        {bizCardArr.map((item, idx) => (
          <div className="col" key={"bizCards" + idx}>
            <div className="card">
              <img src={item.img} className="card-img-top" alt={item.name} />
              <div className="card-body">
                <h5 className="card-title">{item.name}</h5>
                <p className="card-text">
                  This is a longer card with supporting text below as a natural
                  lead-in to additional content. This content is a little bit
                  longer.
                </p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </Fragment>
  );
};

export default PanelPage;
