const IPOdetails = ({ data }) => {
  return (
    <div className="ipo-details-outer-wrapper">
      <div className="heading">IPO Details</div>
      <div className="ipo-details">
        <div className="ipo-item">
          <div className="sub-text">Issue size</div>
          <div className="main-text">{data.issueSize}</div>
        </div>
        <div className="ipo-item">
          <div className="sub-text">Price range</div>
          <div className="main-text">{data.issueDate}</div>
        </div>
        <div className="ipo-item">
          <div className="sub-text">Min AMount</div>
          <div className="main-text">{data.issueDate}</div>
        </div>
        <div className="ipo-item">
          <div className="sub-text">Lot size</div>
          <div className="main-text">{data.issueDate}</div>
        </div>
        <div className="ipo-item">
          <div className="sub-text">Issue dates</div>
          <div className="main-text">{data.issueDate}</div>
        </div>
        <div className="ipo-item">
          <div className="sub-text">Listed on</div>
          <div className="main-text">{data.issueDate}</div>
        </div>
        <div className="ipo-item">
          <div className="sub-text">Listed price</div>
          <div className="main-text">{data.issueDate}</div>
        </div>
        <div className="ipo-item">
          <div className="sub-text">Listing gains</div>
          <div className="main-text">{data.issueDate}</div>
        </div>
      </div>
    </div>
  );
};

export default IPOdetails;
