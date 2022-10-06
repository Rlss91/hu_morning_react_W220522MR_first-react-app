import { useState, useEffect } from "react";
import axios from "axios";
import { useParams } from "react-router-dom";

const EditBizCardPage = () => {
  const [bizCardData, setBizCardData] = useState({
    title: "",
    subTitle: "",
    description: "",
    address: "",
    phone: "",
    url: "",
  });
  let { id } = useParams();
  useEffect(() => {
    (async () => {
      try {
        let { data } = await axios.get(`/cards/card/${id}`);
        setBizCardData({
          title: data.title,
          subTitle: data.subTitle,
          description: data.description,
          address: data.address,
          phone: data.phone,
          url: data.image.url,
        });
      } catch (err) {
        console.log("axios err", err);
      }
    })();
  }, []);

  const handleBizCardInputChange = (ev) => {
    let bizCardInput = JSON.parse(JSON.stringify(bizCardData));
    if (bizCardInput.hasOwnProperty(ev.target.id)) {
      bizCardInput[ev.target.id] = ev.target.value;
      setBizCardData(bizCardInput);
    }
  };

  const handleFormSubmit = async (ev) => {
    ev.preventDefault();
    //!we need to add joi validation!!!!
    try {
      let { data } = await axios.put(`/cards/${id}`, {
        ...bizCardData,
        alt: bizCardData.title,
      });
    } catch (err) {
      console.log("axios put err", err);
    }
  };

  return (
    <form onSubmit={handleFormSubmit}>
      <div className="mb-3">
        <label htmlFor="title" className="form-label">
          Title
        </label>
        <input
          type="text"
          className="form-control"
          id="title"
          value={bizCardData.title}
          onChange={handleBizCardInputChange}
        />
      </div>
      <div className="mb-3">
        <label htmlFor="subTitle" className="form-label">
          SubTitle
        </label>
        <input
          type="text"
          className="form-control"
          id="subTitle"
          value={bizCardData.subTitle}
          onChange={handleBizCardInputChange}
        />
      </div>
      <div className="mb-3">
        <label htmlFor="description" className="form-label">
          Description
        </label>
        <input
          type="text"
          className="form-control"
          id="description"
          value={bizCardData.description}
          onChange={handleBizCardInputChange}
        />
      </div>
      <div className="mb-3">
        <label htmlFor="address" className="form-label">
          Address
        </label>
        <input
          type="text"
          className="form-control"
          id="address"
          value={bizCardData.address}
          onChange={handleBizCardInputChange}
        />
      </div>
      <div className="mb-3">
        <label htmlFor="phone" className="form-label">
          Phone
        </label>
        <input
          type="text"
          className="form-control"
          id="phone"
          value={bizCardData.phone}
          onChange={handleBizCardInputChange}
          pattern="^0\d([\d]{0,1})([-]{0,1})\d{7}$"
        />
      </div>
      <div className="mb-3">
        <label htmlFor="url" className="form-label">
          Image URL
        </label>
        <input
          type="text"
          className="form-control"
          id="url"
          value={bizCardData.url}
          onChange={handleBizCardInputChange}
        />
      </div>
      <button type="submit" className="btn btn-primary">
        Submit
      </button>
    </form>
  );
};

export default EditBizCardPage;
