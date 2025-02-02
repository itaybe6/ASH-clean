import UserOption from "../components/UserOption.jsx";
import "./ManagerDisplayUsers.css";
import CustomToggleButton from "../components/CustomToggleButton.jsx";
import { useState, useEffect } from "react";
import axios from "axios";

const ManagerDisplayUsers = () => {
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
      })
      .catch((error) => console.error("Error fetching customers:", error));
  }, []);


  return (
    <div className="manager-display-customers">
      <div className="manager-display-customers-inner">
        <div className="frame-child2" />
      </div>
      <img
        className="manager-display-customers-child"
        alt=""
        src="/line-21.svg"
      />
      <div className="div29">שלום (שם מנהל)</div>
      <div className="div30">התחברות אחרונה 24/02/2025 בשעה 14:53</div>
      <input
        className="manager-display-customers-item"
        placeholder="חיפוש משתמש..."
        type="text"
      />
      <CustomToggleButton active={active} onClick={() => setActive(!active)} Height={"50vh"} name1="עובדים" name2="לקוחות" left="440px"/>;

      <button className="rectangle-parent11">
        <div className="group-child19" />
        <b className="b20">+</b>
      </button>
      <div className="search-list-container">
        {active
          ? workers.map((item, index) => (
            <UserOption
              key={index}
              nameCus={item.fullName}
              type = "עובד"
              id = {item._id}
            />
          ))
          : customers.map((item, index) => (
            <UserOption
              key={index}
              nameCus={item.businessName}
              numBranch={`סניפים ${item.branches.length}`}
              type = "לקוח"
              id = {item._id}

            />
          ))
        }
      </div>

      <div className="rectangle-parent12">
        <div className="group-child20" />
        <button className="vector-wrapper5">
          <img className="vector-icon8" alt="" src="/vector8.svg" />
        </button>
        <img className="icon9" alt="" src="/-02-13@2x.png" />
        <div className="group-parent5">
          <button className="vector-wrapper6">
            <img className="vector-icon9" alt="" src="/vector2.svg" />
          </button>
          <button className="vector-wrapper7">
            <img className="vector-icon10" alt="" src="/vector9.svg" />
          </button>
          <button className="parent10">
            <div className="div35">משתמשים</div>
            <img
              className="icbaseline-people-alt-icon1"
              alt=""
              src="/icbaselinepeoplealt.svg"
            />
          </button>
        </div>
      </div>
    </div>
  );
};

export default ManagerDisplayUsers;
