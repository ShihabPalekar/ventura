import { useNavigate } from "react-router";

const Nav = ({ data }) => {
  const navigate = useNavigate();
  return (
    <div className="nav-wrapper">
      <div style={{ display: "flex", alignItems: "center", gap: "8px" }}>
        <div>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 24 24"
            fill="currentColor"
            width={"16px"}
            height={"16px"}
            style={{
              border: "1px solid #e6e6e6",
              borderRadius: "5px",
              padding: "6px",
              fontWeight: "800",
              cursor: "pointer"
            }}
            onClick={() => navigate(-1)}
          >
            <path
              fillRule="evenodd"
              d="M7.72 12.53a.75.75 0 0 1 0-1.06l7.5-7.5a.75.75 0 1 1 1.06 1.06L9.31 12l6.97 6.97a.75.75 0 1 1-1.06 1.06l-7.5-7.5Z"
              clipRule="evenodd"
            />
          </svg>
        </div>
        <div style={{ display: "flex", gap: "4px", alignItems: "center" }}>
          <img
            src={data.logoUrl}
            width={"60px"}
            height={"60px"}
            className="logo"
          />
          <div>
            <div className="main-text">{data.name}</div>
            <div className="sub-text">{data.companyName}</div>
          </div>
        </div>
      </div>
      <div style={{ display: "flex", alignItems: "center", gap: "8px" }}>
        <div style={{ paddingTop: "4px" }}>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth={1.5}
            stroke="currentColor"
            width={"30px"}
            height={"30px"}
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M19.5 14.25v-2.625a3.375 3.375 0 0 0-3.375-3.375h-1.5A1.125 1.125 0 0 1 13.5 7.125v-1.5a3.375 3.375 0 0 0-3.375-3.375H8.25m.75 12 3 3m0 0 3-3m-3 3v-6m-1.5-9H5.625c-.621 0-1.125.504-1.125 1.125v17.25c0 .621.504 1.125 1.125 1.125h12.75c.621 0 1.125-.504 1.125-1.125V11.25a9 9 0 0 0-9-9Z"
            />
          </svg>
        </div>
        <button className="apply-btn">Apply now</button>
      </div>
    </div>
  );
};

export default Nav;
