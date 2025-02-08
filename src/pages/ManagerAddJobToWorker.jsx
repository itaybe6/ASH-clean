import React, { useState, useEffect } from "react";
import { Autocomplete, TextField, Button } from "@mui/material";
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
  const apiUrl = import.meta.env.VITE_API_URL;

  const { id } = useParams();
  useEffect(() => {
    const fetchBusinesses = async () => {

      try {
        const response = await axios.get(`${apiUrl}/manager/getAll`);
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
          const response = await axios.get(`${apiUrl}/manager/${selectedBusiness._id}/branches`);
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
      const response = await axios.post(`${apiUrl}/manager/${id}/cleanings`, {
        branch: selectedBranch._id,
        dateTime: selectedDate,
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
      <div className="rectangle-parent15">
       

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
