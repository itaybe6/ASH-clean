import { useState, useEffect } from "react";
import JobOptionMobile from "../components/JobOptionMobile";
import MobileMenuManager from "./MobileMenuManager";
import { format, subDays, addDays, isSameDay } from "date-fns";
import CustomDatePicker from "../components/CustomDatePicker.jsx";
import CustomToggleButton from "../components/CustomToggleButton";
import axios from "axios";

import "./ManagerJobsMobile.css";

const ManagerJobsMobile = () => {
  const [active, setActive] = useState(true);
  const [displayMenu, setDisplayMenu] = useState(false)
  const [cleanings, setCleanings] = useState([]);
  const [selectedDate, setSelectedDate] = useState(null);
  const [filterCleanings, setFilterCleanings] = useState([]);
  const apiUrl = import.meta.env.VITE_API_URL;
  const filterCleaningsByActive = (cleaningsList) => {
    const referenceDate = active ? addDays(new Date(), 7) : subDays(new Date(), 7);
    if (active) {
      return cleaningsList.filter((item) => new Date(item.dateTime) <= referenceDate && new Date(item.dateTime) >= new Date());
    }
    else {
      return cleaningsList.filter((item) => new Date(item.dateTime) >= referenceDate && new Date(item.dateTime) <= new Date());
    }
  };
  useEffect(() => {
    axios.get(`${apiUrl}/manager/getAllCleanings`)
      .then((res) => {
        setCleanings(res.data);
        const filteredData = filterCleaningsByActive(res.data);
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

  useEffect(() => {
    setFilterCleanings(filterCleaningsByActive(cleanings));
  }, [active, cleanings]);

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
        <div className="search-list-container">
          {filterCleanings.map((item, index) => (
            <JobOptionMobile
              key={index}
              worker={item.employee.fullName}
              status={item.done}
              branch={item.branch.name}
              date={format(new Date(item.dateTime), "dd/MM/yyyy")}
              bussiness={item.branch.customer.businessName}
              id={item._id}
            />
          ))}
        </div>
        <button className="vector-wrapper67" onClick={menu} >
          <img className="vector-icon76" alt="" src="/vector10.svg" />
        </button>
        <img className="icon7" alt="" src="/-02-11@2x.png" />
      </div>
      <div className="CustomToggleButton82">
        <CustomToggleButton active={active} onClick={() => setActive(!active)} Height={"50px"} name1=" שבוע קדימה" name2=" שבוע אחורה" left="0px" />
      </div>
    </div>
  );
};

export default ManagerJobsMobile;
