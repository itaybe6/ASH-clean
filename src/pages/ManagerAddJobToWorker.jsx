import React, { useState, useEffect } from "react";
import { Autocomplete, TextField, Button } from "@mui/material";
import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";
import { LocalizationProvider, DatePicker } from "@mui/x-date-pickers";
import CustomDatePicker from "../components/CustomDatePicker";
import axios from "axios";
import "./ManagerAddJobToWorker.css";
import { useParams } from "react-router-dom";

const ManagerAddJobToWorker = () => {
  const [businesses, setBusinesses] = useState([]);
  const [branches, setBranches] = useState([]);
  const [selectedBusiness, setSelectedBusiness] = useState(null);
  const [selectedBranch, setSelectedBranch] = useState(null);
  const [selectedDate, setSelectedDate] = useState(null);
  const { id } = useParams();
  useEffect(() => {
    const fetchBusinesses = async () => {

      try {
        const response = await axios.get("http://localhost:5000/manager/getAll");
        setBusinesses(response.data);
        console.log(businesses)

      } catch (error) {
        console.error("שגיאה בשליפת עסקים:", error);
      }
    };

    fetchBusinesses();
  }, []);


  useEffect(() => {

    if (selectedBusiness) {
      const fetchBranches = async () => {
        try {
          const response = await axios.get(`http://localhost:5000/manager/${selectedBusiness._id}/branches`);
          setBranches(response.data);

        } catch (error) {
          console.error("שגיאה בשליפת עסקים:", error);
        }
      };
      fetchBranches();
    } else {
      setBranches([]);
    }
  }, [selectedBusiness]);


  const handleAddCleaning = async () => {
    if (!id || !selectedBranch || !selectedDate) {
      alert("יש למלא את כל הפרטים");
      return;
    }

    try {
      const response = await axios.post(`http://localhost:5000/manager/${id}/cleanings`, {
        branch: selectedBranch._id,
        dateTime: selectedDate.format("YYYY-MM-DD"),
      });

      alert("ניקיון נוסף בהצלחה!");
      setSelectedBusiness(null)
      setSelectedBranch(null)
      setSelectedDate(null)
    } catch (error) {
      console.error("שגיאה בהוספת ניקיון:", error);
      alert("שגיאה בהוספת הניקיון, נסה שוב.");
    }
  };
  return (
    <div className="manager-add-job-to-worker">
      <div className="manager-add-job-to-worker-child" />
      <img className="manager-add-job-to-worker-item" alt="" src="/line-21.svg" />
      <div className="rectangle-parent15">
        <div className="group-child20" />
        <button className="vector-wrapper18">
          <img className="vector-icon25" alt="" src="/vector1.svg" />
        </button>
        <img className="icon11" alt="" src="/-02-13@2x.png" />

        <div className="group-parent5">
          <button className="vector-wrapper19">
            <img className="vector-icon26" alt="" src="/vector2.svg" />
          </button>
          <button className="vector-wrapper20">
            <img className="vector-icon27" alt="" src="/vector9.svg" />
          </button>
          <button className="parent10">
            <div className="div56">משתמשים</div>
            <img className="icbaseline-people-alt-icon4" alt="" src="/icbaselinepeoplealt.svg" />
          </button>
        </div>

        {/* אזור הוספת העבודה */}
        <div className="form-container">
          <h3 className="form-title">הוספת עבודה</h3>
          <p className="form-subtitle">מלא את כל הפרטים כדי להוסיף עבודה</p>

          <div className="input-row">
            {/* שדה בחירת עסק */}
            <Autocomplete
              options={businesses}
              getOptionLabel={(option) => option.businessName}
              onChange={(event, newValue) => setSelectedBusiness(newValue)}
              renderInput={(params) => <TextField {...params} label="בחירת עסק" />}
              className="autocomplete-field1"
            />

            {/* שדה בחירת סניף */}
            <Autocomplete
              key={selectedBranch} // זה יכריח רענון בעת שינוי
              options={branches}
              getOptionLabel={(option) => option.name}
              onChange={(event, newValue) => setSelectedBranch(newValue)}
              renderInput={(params) => <TextField {...params} label="בחירת שם סניף" />}
              disabled={!selectedBusiness}
              className="autocomplete-field2"
            />
          </div>

          <div className="date-picker-container887">
          <CustomDatePicker selectedDate={selectedDate} setSelectedDate={setSelectedDate} />
        </div>

        </div>
      </div>

      <button className="rectangle-parent17" onClick={handleAddCleaning}>
        <div className="group-child24" />
        <b className="b19">הוספה</b>
      </button>

      
    </div>
  );
};

export default ManagerAddJobToWorker;
