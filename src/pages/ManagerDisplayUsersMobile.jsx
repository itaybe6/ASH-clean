import UserOptionMobile from "../components/UserOptionMobile.jsx";
import "./ManagerDisplayUsersMobile.css";
import CustomToggleButton from "../components/CustomToggleButton.jsx";
import { useState, useEffect } from "react";
import axios from "axios";

const ManagerDisplayUsersMobile = () => {
  const [active, setActive] = useState(true);
  const [customers, setCustomers] = useState([]);
  const [workers, setWorkers] = useState([]);

  useEffect(() => {
    axios.get("http://localhost:5000/manager/getAll")
      .then((res) => {
        setCustomers(res.data);
      })
      .catch((error) => console.error("Error fetching customers:", error));
  }, []);

  useEffect(() => {
    axios.get("http://localhost:5000/manager/workers")
      .then((res) => {
        setWorkers(res.data);
        console.log(workers)

      })
      .catch((error) => console.error("Error fetching customers:", error));
  }, []);

  return (
    <div className="manager-display-customers-mo">
      <div className="manager-display-customers-mo-child" />
      <b className="b22">שלום (שם מנהל)</b>
      <div className="div43">התחברות אחרונה 24/02/2025 בשעה 14:53</div>
      <img className="icon11" alt="" src="/-02-11@2x.png" />
      <button className="vector-wrapper11">
        <img className="vector-icon14" alt="" src="/vector10.svg" />
      </button>
      <div className="rectangle-parent15">
        <div className="group-child23" />
        <div className="div44">חיפוש משתמש...</div>
      </div>
      <div className="group-parent7">
        <img className="group-child24" alt="" src="/group-275.svg" />
        <b className="b23">+</b>
      </div>
      <CustomToggleButton active={active} onClick={() => setActive(!active)} Height={"70vh"} name1="עובדים" name2="לקוחות" left={"130px"} />;
        
      <div className="search-list-container">
        {active
          ? workers.map((item, index) => (
            <UserOptionMobile
              key={index}
              bname={item.fullName}
            />
          ))
          : customers.map((item, index) => (
            <UserOptionMobile
              key={index}
              bname={item.businessName}
              numbranch={String(item.branches.length)}
            />
          ))}
      </div>
    </div>
  );
};

export default ManagerDisplayUsersMobile;
