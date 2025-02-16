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
  const apiUrl = import.meta.env.VITE_API_URL;

  const filterCleaningsByActive = (cleaningsList) => {
    const referenceDate = active ? addDays(new Date(), 7) : subDays(new Date(), 7);
    if (active) {
      return cleaningsList.filter((item) => new Date(item.dateTime) <= referenceDate && new Date(item.dateTime) >= new Date() );
    }
    else {
      return cleaningsList.filter((item) => new Date(item.dateTime) >= referenceDate && new Date(item.dateTime) <= new Date() );
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

  return (
    <div>
      <div className="manager-jobs">
        <div className="search-list-container5">
          {filterCleanings
            .sort((a, b) => new Date(a.dateTime) - new Date(b.dateTime)) // מיון עולה - מהקרוב לרחוק
            .map((item, index) => (
              <Search
                id={item._id}
                key={index}
                worker={item.employee.fullName}
                status={item.done}
                branch={item.branch.name}
                date={format(new Date(item.dateTime), "dd/MM/yyyy")}
                bussiness={item.branch.customer.businessName}
              />
            ))}
        </div>

        <div className="date-picker-container88">
          <CustomDatePicker selectedDate={selectedDate} setSelectedDate={setSelectedDate} />
        </div>

        <div className="CustomToggleButton89">
          <CustomToggleButton
            active={active}
            onClick={() => setActive(!active)}
            Height={"50px"}
            name1=" שבוע קדימה"
            name2=" שבוע אחורה"
          />
        </div>

      </div>
    </div>

  );
};

export default ManagerJobs;
