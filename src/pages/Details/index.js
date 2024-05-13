import { useEffect, useState } from "react";
import "./style.css";
import { dummyData } from "../../dummyData";
import { useParams } from "react-router";
import About from "./About";
import IPOdetails from "./IPOdetails";
import IPOtimeline from "./IPOtimeline";
import HeaderBar from "./HeaderBar";
import Nav from "./Nav";

const Details = () => {
  const [data, setData] = useState({});
  const params = useParams();

  useEffect(() => {
    setData(dummyData.filter((i) => i.id === Number(params.id))[0]);
  }, [data]);

  return (
    <div className="details-container">
      <Nav />
      <HeaderBar data={data} />
      <IPOdetails data={data} />
      <IPOtimeline />
      <About />
    </div>
  );
};

export default Details;
