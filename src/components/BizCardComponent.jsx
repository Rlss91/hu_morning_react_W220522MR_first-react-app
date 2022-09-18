// const BizCardComponent = (props) => {
const BizCardComponent = ({ name, img, desc, id }) => {
  return (
    <div className="col">
      <div className="card">
        <img src={img} className="card-img-top" alt={name} />
        <div className="card-body">
          <h5 className="card-title">{name}</h5>
          <p className="card-text">{desc}</p>
        </div>
      </div>
    </div>
  );
};

export default BizCardComponent;
