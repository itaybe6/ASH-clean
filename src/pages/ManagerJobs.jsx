import { useState, useEffect } from "react";
import Search from "../components/Search";
import CustomDatePicker from "../components/CustomDatePicker.jsx";
import CustomToggleButton from "../components/CustomToggleButton";

import axios from "axios";
import "./ManagerJobs.css";
import { format, subDays, addDays, isSameDay } from "date-fns";

const ManagerJobs = () => {
  const [active, setActive] = useState(true);
  const [selectedDate, setSelectedDate] = useState(null);
  const [cleanings, setCleanings] = useState([]);
  const [filterCleanings, setFilterCleanings] = useState([]);

  const filterCleaningsByActive = (cleaningsList) => {
    const referenceDate = active ? addDays(new Date(), 7) : subDays(new Date(), 7);
    return cleaningsList.filter((item) => new Date(item.dateTime) <= referenceDate);
  };

  useEffect(() => {
    axios.get("http://localhost:5000/manager/getAllCleanings")
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

  return (
    <div>
      <div className="manager-jobs">

        <div className="manager-jobs-child" />
        <div className="parent5">
          <div className="div14">שלום (שם מנהל)</div>
          <div className="div15">התחברות אחרונה 24/02/2025 בשעה 14:53</div>
        </div>
        <div className="search-list-container">
          {filterCleanings.map((item, index) => (
            <Search
              id={item._id}
              key={index}
              worker={item.employee.fullName}
              status={item.done}
              branch={item.branch.address}
              date={format(new Date(item.dateTime), "dd/MM/yyyy")}
              bussiness={item.branch.name}
            />
          ))}
        </div>

        <div className="date-picker-container88">
          <CustomDatePicker selectedDate={selectedDate} setSelectedDate={setSelectedDate} />
        </div>
        <div className="rectangle-parent7">
          <div className="group-child11" />
          <button className="vector-wrapper">
            <img className="vector-icon" alt="" src="/vector1.svg" />
          </button>
          <img className="icon6" alt="" src="/-02-13@2x.png" />
          <div className="group-parent2">
            <button className="vector-container">
              <img className="vector-icon1" alt="" src="/vector2.svg" />
            </button>
            <button className="vector-wrapper4">

              <img className="vector-icon7" alt="" src="/vector7.svg" />
            </button>
            <button className="parent6">
              <div className="div16">משתמשים</div>
              <img
                className="icbaseline-people-alt-icon"
                alt=""
                src="/icbaselinepeoplealt.svg"
              />
            </button>
          </div>
        </div>
        <div className="CustomToggleButton89">
          <CustomToggleButton
            active={active}
            onClick={() => setActive(!active)}
            Height={"56vh"}
            name1=" שבוע קדימה"
            name2=" שבוע אחורה"
            left="100px"
          />
        </div>

      </div>
    </div>

  );
};

export default ManagerJobs;
