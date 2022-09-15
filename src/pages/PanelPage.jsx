import { Fragment } from "react";

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
  return (
    <div className="row row-cols-1 row-cols-md-2 g-4">
      {initialBizCardArray.map((item) => (
        <div className="col">
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
  );
};

export default PanelPage;
