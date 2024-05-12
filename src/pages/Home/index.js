import { useEffect, useState } from "react";
import { dummyData } from "../../dummyData";
import "./style.css";
import DataTable from "./DataTable";
import DataTableMobile from "./DataTableMobile";

const Home = () => {
  const [data, setData] = useState([]);

  useEffect(() => {
    setData(dummyData);
  }, []);
  return (
    <div className="container">
        <DataTable data={data}/>
        <DataTableMobile data={data}/>
    </div>
  );
};

export default Home;
