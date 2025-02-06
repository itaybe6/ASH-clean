import { useState, useEffect } from "react";
import JobOptionMobile from "../components/JobOptionMobile";
import MobileMenuManager from "./MobileMenuManager";
import { format, subDays, isSameDay } from "date-fns";
import CustomDatePicker from "../components/CustomDatePicker.jsx";
import axios from "axios";
import "./ManagerJobsMobile.css";

const ManagerJobsMobile = () => {
  const [displayMenu, setDisplayMenu] = useState(false)
  const [cleanings, setCleanings] = useState([]);
  const [selectedDate, setSelectedDate] = useState(null);
  const [filterCleanings, setFilterCleanings] = useState([]);


  const filterLastFourDays = (cleaningsList) => {
    const fourDaysAgo = subDays(new Date(), 4); // מחזיר את התאריך של לפני 4 ימים
    return cleaningsList.filter((item) => new Date(item.dateTime) >= fourDaysAgo);
  };

  useEffect(() => {
    axios.get("http://localhost:5000/manager/getAllCleanings")
      .then((res) => {
        setCleanings(res.data);
        const filteredData = filterLastFourDays(res.data);
        setFilterCleanings(filteredData);
      })
      .catch((error) => console.error("Error fetching cleanings:", error));
  }, []);

  useEffect(() => {
    if (selectedDate) {
      const filteredData = cleanings.filter((item) =>
        isSameDay(new Date(item.dateTime), new Date(selectedDate))
      );
      setFilterCleanings(filteredData);
    }
  }, [selectedDate, cleanings]);

  const menu = () => {
    setDisplayMenu(!displayMenu)
  }
  // פונקציית סגירת תפריט
  const closeMenu = () => {
    setDisplayMenu(false);
  };
  return (
    <div>
      <div className="manager-jobs-mobile">
        {displayMenu ? <MobileMenuManager isOpen={displayMenu} closeMenu={closeMenu} /> : null}
        <div className="date-picker-container889">
          <CustomDatePicker selectedDate={selectedDate} setSelectedDate={setSelectedDate} />
        </div>
        <div className="manager-jobs-mobile-inner">
          <div className="frame-child1" />
        </div>
        <div className="div23">שלום (שם מנהל)</div>
        <div className="div24">התחברות אחרונה 24/02/2025 בשעה 14:53</div>
        
        <div className="search-list-container">
          {cleanings.map((item, index) => (
            <JobOptionMobile
              key={index}
              worker={item.employee.fullName}
              status={item.done}
              branch={item.branch.address}
              date={format(new Date(item.dateTime), "dd/MM/yyyy")}
              bussiness={item.branch.name}
            />
          ))}
        </div>
        <button className="vector-wrapper67" onClick={menu} >
          <img className="vector-icon76" alt="" src="/vector10.svg" />
        </button>
        <img className="icon7" alt="" src="/-02-11@2x.png" />
      </div>
    </div>
  );
};

export default ManagerJobsMobile;
