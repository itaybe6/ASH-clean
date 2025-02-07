import UserOptionMobile from "../components/UserOptionMobile.jsx";
import "./ManagerDisplayUsersMobile.css";
import CustomToggleButton from "../components/CustomToggleButton.jsx";
import { useState, useEffect } from "react";
import axios from "axios";
import { useNavigate } from 'react-router-dom';
import MobileMenuManager from "./MobileMenuManager";

const ManagerDisplayUsersMobile = () => {
  const [active, setActive] = useState(true);
  const [customers, setCustomers] = useState([]);
  const [workers, setWorkers] = useState([]);
  const [displayMenu, setDisplayMenu] = useState(false)
  const [searchQuery, setSearchQuery] = useState("");

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


  const addUser = () => {
    if (active) {
      navigate(`/manager-add-worker`)
    }
    else {
      navigate(`/manager-add-customer`)
    }
  }

  const menu = () => {
    setDisplayMenu(!displayMenu)
  }
  // פונקציית סגירת תפריט
  const closeMenu = () => {
    setDisplayMenu(false);
  };

  const filteredCustomers = customers.filter((customer) =>
    customer.businessName.toLowerCase().includes(searchQuery.toLowerCase())
  );

  const filteredWorkers = workers.filter((worker) =>
    worker.fullName.toLowerCase().includes(searchQuery.toLowerCase())
  );


  return (
    <div className="manager-display-customers-mo">
      {displayMenu ? <MobileMenuManager isOpen={displayMenu} closeMenu={closeMenu} /> : null}

      <div className="manager-display-customers-mo-child" />
      <input
        className="manager-display-customers-item2"
        placeholder="חיפוש משתמש..."
        type="text"
        value={searchQuery}
        onChange={(e) => setSearchQuery(e.target.value)} // עדכון state בזמן הקלדה
      />
      <img className="icon113" alt="" src="/-02-11@2x.png" />
      <button className="vector-wrapper11" onClick={menu}>
        <img className="vector-icon14" alt="" src="/vector10.svg" />
      </button>
      <div className="rectangle-parent15">
        <div className="group-child23" />
        <div className="div44">חיפוש משתמש...</div>
      </div>
      <div className="group-parent77">
        <img className="group-child242" alt="" src="/group-275.svg" />
        <b className="b236" onClick={addUser}>+</b>
      </div>
      <CustomToggleButton active={active} onClick={() => setActive(!active)} Height={"70vh"} name1="עובדים" name2="לקוחות" left={"130px"} />;

      <div className="search-list-container2">
        {active
          ? filteredWorkers.map((item, index) => (
            <UserOptionMobile
              key={index}
              bname={item.fullName}
              id={item._id}
              type={"עובד"}
              numbranch="0"

            />
          ))
          : filteredCustomers.map((item, index) => (
            <UserOptionMobile
              key={index}
              bname={item.businessName}
              numbranch={String(item.branches.length)}
              id={item._id}
              type={"לקוח"}

            />
          ))}
      </div>
    </div>
  );
};

export default ManagerDisplayUsersMobile;
