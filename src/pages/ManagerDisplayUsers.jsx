import UserOption from "../components/UserOption.jsx";
import "./ManagerDisplayUsers.css";
import CustomToggleButton from "../components/CustomToggleButton.jsx";
import { useState, useEffect } from "react";
import axios from "axios";
import { useNavigate } from 'react-router-dom';

const ManagerDisplayUsers = () => {
  const [active, setActive] = useState(true);
  const [customers, setCustomers] = useState([]);
  const [workers, setWorkers] = useState([]);
  const navigate = useNavigate();

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

  const jobs = () => {
    navigate(`/manager-jobs`)
  }
  const edit = () => {
    navigate(`/manager-edit-profile`)
  }

  const addUser = () => {
    if(active){
      navigate(`/manager-add-worker`)
    }
    else {
      navigate(`/manager-add-customer`)
    }
  }

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
     
      <input
        className="manager-display-customers-item"
        placeholder="חיפוש משתמש..."
        type="text"
      />
      <CustomToggleButton active={active} onClick={() => setActive(!active)} Height={"50vh"} name1="עובדים" name2="לקוחות" left="-850px"/>;

      <button className="rectangle-parent112" onClick={addUser}>
        <div className="group-child199" />
        <b className="b208">+</b>
      </button>
      <div className="search-list-container7">
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
              numBranch={` ${item.branches.length}`}
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
          <button className="vector-wrapper6" onClick={edit}>
            <img className="vector-icon9" alt="" src="/vector2.svg" />
          </button>
          <button className="vector-wrapper7" onClick={jobs}>
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
