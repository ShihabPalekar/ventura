import { useNavigate } from "react-router";

const DataTableMobile = ({ data }) => {
  const navigate = useNavigate();

  return (
    <div className="data-table-sm">
      {data &&
        data.map((item) => (
          <div key={item.id} className="data-card-sm" onClick={() => navigate(`/details/${item.id}`)}>
            <div style={{ display: "flex", alignItems: "center" }}>
              <img
                className="logo"
                src={item.logoUrl}
                width={"40px"}
                height={"40px"}
              />
              <div>
                <div className="main-text">{item.name}</div>
                <div className="sub-text">{item.companyName}</div>
              </div>
            </div>
            <div className="data-container">
                <div className="data-item">
                    <div className="sub-text">Issue date</div>
                    <div className="main-text">{item.issueDate}</div>
                </div>
                <div className="data-item">
                    <div className="sub-text">Issue date</div>
                    <div className="main-text">{item.issueSize}</div>
                </div>
                <div className="data-item">
                    <div className="sub-text">Price range</div>
                    <div className="main-text">{item.priceRange}</div>
                </div>
                <div className="data-item">
                    <div className="sub-text">Min Invest Amt</div>
                    <div className="main-text">{item.minInvestAmount}</div>
                </div>
                <div className="data-item">
                    <div className="sub-text">Min Invest Qty</div>
                    <div className="main-text">{item.minInvestQty}</div>
                </div>
            </div>
          </div>
        ))}
    </div>
  );
};

export default DataTableMobile;
