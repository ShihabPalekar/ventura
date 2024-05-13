import { useNavigate } from "react-router";

const Nav = () => {
  const navigate = useNavigate();

  return (
    <div className="nav">
      <div style={{ cursor: "pointer" }} onClick={() => navigate(-1)}>
        Home
      </div>
      <div style={{ paddingTop: "4px" }}>
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 24 24"
          fill="currentColor"
          width={"14px"}
          height={"14px"}
        >
          <path
            fillRule="evenodd"
            d="M16.28 11.47a.75.75 0 0 1 0 1.06l-7.5 7.5a.75.75 0 0 1-1.06-1.06L14.69 12 7.72 5.03a.75.75 0 0 1 1.06-1.06l7.5 7.5Z"
            clipRule="evenodd"
          />
        </svg>
      </div>
      <div>Details</div>
    </div>
  );
};

export default Nav;
