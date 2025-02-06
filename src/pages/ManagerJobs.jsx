import { useState,useEffect } from "react";
import Search from "../components/Search";
import CustomDatePicker from "../components/CustomDatePicker.jsx";
import axios from "axios";
import "./ManagerJobs.css";

const ManagerJobs = () => {
  const [selectedDate, setSelectedDate] = useState(null);
  const [cleanings, setCleanings] = useState([]);


  const searchItems = [
    {
      worker: "ליאור שם טוב",
      status: "נעשה",
      branch: "שכונות, פארק, באר שבע",
      date: "24/05/2025",
      bussiness: "אורן משי",
    },
    {
      worker: "מיכל כהן",
      status: "לא נעשה",
      branch: "תל אביב",
      date: "15/06/2025",
      bussiness: "קניון עזריאלי",
    },
    {
      worker: "מיכל כהן",
      status: "לא נעשה",
      branch: "תל אביב",
      date: "15/06/2025",
      bussiness: "קניון עזריאלי",
    },
    {
      worker: "מיכל כהן",
      status: "לא נעשה",
      branch: "תל אביב",
      date: "15/06/2025",
      bussiness: "קניון עזריאלי",
    },
    {
      worker: "מיכל כהן",
      status: "לא נעשה",
      branch: "תל אביב",
      date: "15/06/2025",
      bussiness: "קניון עזריאלי",
    },
    {
      worker: "מיכל כהן",
      status: "לא נעשה",
      branch: "תל אביב",
      date: "15/06/2025",
      bussiness: "קניון עזריאלי",
    }, {
      worker: "מיכל כהן",
      status: "לא נעשה",
      branch: "תל אביב",
      date: "15/06/2025",
      bussiness: "קניון עזריאלי",
    },
    {
      worker: "מיכל כהן",
      status: "לא נעשה",
      branch: "תל אביב",
      date: "15/06/2025",
      bussiness: "קניון עזריאלי",
    },
    // אפשר להוסיף כאן עוד אובייקטים כרצונך
  ];

  useEffect(() => {
    axios.get("http://localhost:5000/manager/getAllCleanings")
      .then((res) => {
        setCleanings(res.data);
      })
      .catch((error) => console.error("Error fetching customers:", error));
  }, []);

  return (
    <div>

      <div className="manager-jobs">
        <div className="manager-jobs-child" />
        <div className="parent5">
          <div className="div14">שלום (שם מנהל)</div>
          <div className="div15">התחברות אחרונה 24/02/2025 בשעה 14:53</div>
        </div>
        <div className="search-list-container">
          {searchItems.map((item, index) => (
            <Search
              key={index}
              worker={item.worker}
              status={item.status}
              branch={item.branch}
              date={item.date}
              bussiness={item.bussiness}
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

      </div>
    </div>

  );
};

export default ManagerJobs;
