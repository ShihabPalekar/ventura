import { useNavigate } from "react-router";

const DataTable = ({ data }) => {
  const navigate = useNavigate();

  return (
    <div className="data-table">
      <div className="heading-row">
        <div className="heading-cell">Company / Issue date</div>
        <div className="heading-cell">Issue size</div>
        <div className="heading-cell">Price range</div>
        <div className="heading-cell">Min invest/qty</div>
      </div>
      {data &&
        data.map((item) => (
          <div
            key={item.id}
            className="data-row"
            onClick={() => navigate(`/details/${item.id}`)}
          >
            <div className="data-cell">
              <img
                className="logo"
                src={item.logoUrl}
                width={"50px"}
                height={"50px"}
              />
              <div>
                <div className="main-text">{item.name}</div>
                <div className="sub-text">{item.issueDate}</div>
              </div>
            </div>
            <div className="data-cell main-text">₹{item.issueSize}</div>
            <div className="data-cell main-text">₹{item.priceRange}</div>
            <div className="data-cell ">
              <div>
                <div className="main-text">₹{item.minInvestAmount}</div>
                <div className="sub-text">{item.minInvestQty}</div>
              </div>
            </div>
          </div>
        ))}
    </div>
  );
};

export default DataTable