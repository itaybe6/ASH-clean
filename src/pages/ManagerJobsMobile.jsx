import { useState, useEffect } from "react";
import { LocalizationProvider, DatePicker } from "@mui/x-date-pickers";
import { AdapterDateFns } from "@mui/x-date-pickers/AdapterDateFns";
import JobOptionMobile from "../components/JobOptionMobile";
import MobileMenuManager from "./MobileMenuManager";
import { format } from "date-fns";
import axios from "axios";
import "./ManagerJobsMobile.css";

const ManagerJobsMobile = () => {
  const [groupDateTimePickerValue, setGroupDateTimePickerValue] = useState(null);
  const [displayMenu, setDisplayMenu] = useState(false)
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
    }, {
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

    // אפשר להוסיף כאן עוד אובייקטים כרצונך
  ];

  useEffect(() => {
    axios.get("http://localhost:5000/manager/getAllCleanings")
      .then((res) => {
        setCleanings(res.data);
      })
      .catch((error) => console.error("Error fetching customers:", error));
  }, []);
  const menu = () => {
    setDisplayMenu(!displayMenu)
  }
  // פונקציית סגירת תפריט
  const closeMenu = () => {
    setDisplayMenu(false);
  };
  return (
    <LocalizationProvider dateAdapter={AdapterDateFns}>
      <div className="manager-jobs-mobile">
        {displayMenu ? <MobileMenuManager isOpen={displayMenu} closeMenu={closeMenu} /> : null}

        <div className="manager-jobs-mobile-inner">
          <div className="frame-child1" />
        </div>
        <div className="div23">שלום (שם מנהל)</div>
        <div className="div24">התחברות אחרונה 24/02/2025 בשעה 14:53</div>
        <div className="wrapper2">
          <DatePicker
            value={groupDateTimePickerValue}
            onChange={(newValue) => {
              setGroupDateTimePickerValue(newValue);
            }}
            sx={{}}
            slotProps={{
              textField: {
                size: "medium",
                fullWidth: false,
                required: false,
                autoFocus: false,
                error: false,
                color: "primary",
              },
              openPickerIcon: {
                component: () => <></>,
              },
            }}
          />
        </div>
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
    </LocalizationProvider>
  );
};

export default ManagerJobsMobile;
