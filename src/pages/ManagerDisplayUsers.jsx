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
  const [searchQuery, setSearchQuery] = useState("");
  const apiUrl = import.meta.env.VITE_API_URL;

  const navigate = useNavigate();

  useEffect(() => {
    axios.get(`${apiUrl}/manager/getAll`)
      .then((res) => {
        setCustomers(res.data);
      })
      .catch((error) => console.error("Error fetching customers:", error));
  }, []);

  useEffect(() => {
    axios.get(`${apiUrl}/manager/workers`)
      .then((res) => {
        setWorkers(res.data);
      })
      .catch((error) => console.error("Error fetching customers:", error));
  }, []);


  const addUser = () => {
    if(active){
      navigate(`/manager-add-worker`)
    }
    else {
      navigate(`/manager-add-customer`)
    }
  }

  const filteredCustomers = customers.filter((customer) =>
    customer.businessName.toLowerCase().includes(searchQuery.toLowerCase())
  );

  const filteredWorkers = workers.filter((worker) =>
    worker.fullName.toLowerCase().includes(searchQuery.toLowerCase())
  );


  return (
    <div className="manager-display-customers">
    
    
     
     <input
        className="manager-display-customers-item"
        placeholder="חיפוש משתמש..."
        type="text"
        value={searchQuery}
        onChange={(e) => setSearchQuery(e.target.value)} // עדכון state בזמן הקלדה
      />
      <div className="CustomToggleButtonm1856">
      <CustomToggleButton active={active} onClick={() => setActive(!active)} Height={"50px"} name1="עובדים" name2="לקוחות" left="50px"/>
      </div>
      

      <button className="rectangle-parent112" onClick={addUser}>
        <div className="group-child199" />
        <b className="b208">+</b>
      </button>
      <div className="search-list-container7">
        {active
          ? filteredWorkers.map((item, index) => (
            <UserOption
              key={index}
              nameCus={item.fullName}
              type = "עובד"
              id = {item._id}
            />
          ))
          : filteredCustomers.map((item, index) => (
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

      
    </div>
  );
};

export default ManagerDisplayUsers;
