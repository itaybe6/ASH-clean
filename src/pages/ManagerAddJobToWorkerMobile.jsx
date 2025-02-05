import "./ManagerAddJobToWorkerMobile.css";
import React, { useState, useEffect } from "react";
import { Autocomplete, TextField } from "@mui/material";
import { useParams } from "react-router-dom";
import CustomDatePicker from "../components/CustomDatePicker";
import MobileMenuManager from "./MobileMenuManager";

import axios from "axios";

const ManagerAddJobToWorkerMobile = () => {
  const [businesses, setBusinesses] = useState([]);
  const [branches, setBranches] = useState([]);
  const [selectedBusiness, setSelectedBusiness] = useState(null);
  const [selectedBranch, setSelectedBranch] = useState(null);
  const [selectedDate, setSelectedDate] = useState(null);
  const [displayMenu, setDisplayMenu] = useState(false)

  const { id } = useParams()
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

  const menu = () => {
    setDisplayMenu(!displayMenu)
  }
  // פונקציית סגירת תפריט
  const closeMenu = () => {
    setDisplayMenu(false);
  };

  const handleAddCleaning = async () => {
    if (!id || !selectedBranch || !selectedDate) {
      alert("יש למלא את כל הפרטים");
      return;
    }
    try {
      const response = await axios.post(`http://localhost:5000/manager/${id}/cleanings`, {
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
    <div className="manager-add-job-to-worker-mo">
      {displayMenu ? <MobileMenuManager isOpen={displayMenu} closeMenu={closeMenu} /> : null}

      <div className="manager-add-job-to-worker-mo-child" />
      <b className="b42">שלום (שם מנהל)</b>
      <div className="div91">התחברות אחרונה 24/02/2025 בשעה 14:53</div>
      <img className="icon21" alt="" src="/-02-11@2x.png" />
      <button className="vector-wrapper31">
        <img className="vector-icon38" alt="" src="/vector10.svg" onClick={menu}/>
      </button>
      <div className="parent25">
        <div className="div92">{`הוספת עבודה `}</div>
        <div className="div93">מלא את כל הפרטים כדי להוסיף עבודה</div>
      </div>
      <div className="form-container">


        <div className="input-row5">
          {/* שדה בחירת עסק */}
          <Autocomplete
            options={businesses}
            getOptionLabel={(option) => option.businessName}
            onChange={(event, newValue) => setSelectedBusiness(newValue)}
            renderInput={(params) => <TextField {...params} label="בחירת עסק" />}
            className="autocomplete-field3"
          />

          {/* שדה בחירת סניף */}
          <Autocomplete
            key={selectedBranch} // זה יכריח רענון בעת שינוי
            options={branches}
            getOptionLabel={(option) => option.name}
            onChange={(event, newValue) => setSelectedBranch(newValue)}
            renderInput={(params) => <TextField {...params} label="בחירת שם סניף" />}
            disabled={!selectedBusiness}
            className="autocomplete-field4"
          />
          <div className="date-picker-container5">
            <CustomDatePicker selectedDate={selectedDate} setSelectedDate={setSelectedDate} />
          </div>
        </div>



      </div>
      <div className="rectangle-parent355" onClick={handleAddCleaning}>
        <div className="group-child555" />
        <b className="b435">הוספה</b>
      </div>
    </div>
  );
};

export default ManagerAddJobToWorkerMobile;
