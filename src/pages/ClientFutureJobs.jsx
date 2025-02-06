import React, { useState, useEffect } from "react";
import { useNavigate } from 'react-router-dom';
import FutureJobClient from "../components/FutureJobClient";
import CustomToggleButton from "../components/CustomToggleButton";
import "./ClientFutureJobs.css";

// מערך סניפים לדוגמה (אפשר להרחיב עפ"י הטבלה)
const staticBranches = [
  {
    _id: "b1",
    name: "לידר ירושלים - לב הפסגה",
    cleanings: [
      { _id: "c11", employee: { fullName: "טארק אבו דחל" }, dateTime: "2025-02-03T08:00:00Z", done: true },
      { _id: "c14", employee: { fullName: "טארק אבו דחל" }, dateTime: "2025-03-04T09:00:00Z", done: false }
    ]
  },
  {
    _id: "b2",
    name: "לידר ירושלים - מלחה",
    cleanings: [
      { _id: "c21", employee: { fullName: "טארק אבו דחל" }, dateTime: "2025-02-03T08:00:00Z", done: true },
      { _id: "c24", employee: { fullName: "טארק אבו דחל" }, dateTime: "2025-03-04T14:00:00Z", done: false }
    ]
  },
  {
    _id: "b3",
    name: "לידר ירושלים - רמות",
    cleanings: [
      { _id: "c31", employee: { fullName: "טארק אבו דחל" }, dateTime: "2025-02-03T07:30:00Z", done: true },
      { _id: "c33", employee: { fullName: "טארק אבו דחל" }, dateTime: "2025-03-04T12:00:00Z", done: false },
    ]
  },
  {
    _id: "b4",
    name: "לידר אשדוד - רובע ז'",
    cleanings: [
      { _id: "c41", employee: { fullName: "מיכאל אזולאי" }, dateTime: "2025-07-15T08:00:00Z", done: true },
      { _id: "c42", employee: { fullName: "שירה ביטון" }, dateTime: "2025-07-22T10:30:00Z", done: true },
      { _id: "c43", employee: { fullName: "יוסי דגן" }, dateTime: "2025-09-12T15:00:00Z", done: false },
      { _id: "c44", employee: { fullName: "ליאורה כץ" }, dateTime: "2025-09-20T09:00:00Z", done: false }
    ]
  },
  {
    _id: "b5",
    name: "לידר אשקלון - מרכז העיר",
    cleanings: [
      { _id: "c51", employee: { fullName: "יעקב פרץ" }, dateTime: "2025-06-05T08:00:00Z", done: true },
      { _id: "c52", employee: { fullName: "אביגיל משולם" }, dateTime: "2025-06-15T12:30:00Z", done: true },
      { _id: "c53", employee: { fullName: "דניאל חזיזה" }, dateTime: "2025-08-18T09:00:00Z", done: false },
      { _id: "c54", employee: { fullName: "אסף גולן" }, dateTime: "2025-08-29T14:00:00Z", done: false }
    ]
  },
  {
    _id: "b6",
    name: "לידר באר שבע",
    cleanings: [
      { _id: "c61", employee: { fullName: "דניאל כהן" }, dateTime: "2025-05-20T07:00:00Z", done: true },
      { _id: "c62", employee: { fullName: "עידן בר" }, dateTime: "2025-06-10T15:30:00Z", done: true },
      { _id: "c63", employee: { fullName: "מירב סגל" }, dateTime: "2025-08-25T10:30:00Z", done: false },
      { _id: "c64", employee: { fullName: "רוני לוי" }, dateTime: "2025-09-05T13:00:00Z", done: false }
    ]
  }
  ,  {
    _id: "b7",
    name: "לידר בית שמש - לב הרמה",
    cleanings: [
      { _id: "c11", employee: { fullName: "משה לוי" }, dateTime: "2025-07-01T08:00:00Z", done: true },
      { _id: "c12", employee: { fullName: "דוד כהן" }, dateTime: "2025-07-10T10:30:00Z", done: true },
      { _id: "c13", employee: { fullName: "שרית יוסף" }, dateTime: "2025-09-02T15:00:00Z", done: false },
      { _id: "c14", employee: { fullName: "עדי בר" }, dateTime: "2025-09-15T09:00:00Z", done: false }
    ]
  },
  {
    _id: "b8",
    name: "לידר בית שמש - רמה א",
    cleanings: [
      { _id: "c21", employee: { fullName: "רותם כהן" }, dateTime: "2025-06-01T08:00:00Z", done: true },
      { _id: "c22", employee: { fullName: "ליאור שם-טוב" }, dateTime: "2025-06-05T12:30:00Z", done: true },
      { _id: "c23", employee: { fullName: "אבי לוי" }, dateTime: "2025-09-10T09:00:00Z", done: false },
      { _id: "c24", employee: { fullName: "נעה גל" }, dateTime: "2025-09-21T14:00:00Z", done: false }
    ]
  },
  {
    _id: "b9",
    name: "לידר בית שמש - רמה ד",
    cleanings: [
      { _id: "c31", employee: { fullName: "חיים שלמה" }, dateTime: "2025-05-10T07:30:00Z", done: true },
      { _id: "c32", employee: { fullName: "רונית שמחה" }, dateTime: "2025-05-21T16:00:00Z", done: true },
      { _id: "c33", employee: { fullName: "אור בן חמו" }, dateTime: "2025-08-02T12:00:00Z", done: false },
      { _id: "c34", employee: { fullName: "תמר קרן" }, dateTime: "2025-08-17T10:00:00Z", done: false }
    ]
  },
  {
    _id: "b10",
    name: "לידר גבעת עלייה - מבנה A",
    cleanings: [
      { _id: "c41", employee: { fullName: "מיכאל אזולאי" }, dateTime: "2025-07-15T08:00:00Z", done: true },
      { _id: "c42", employee: { fullName: "שירה ביטון" }, dateTime: "2025-07-22T10:30:00Z", done: true },
      { _id: "c43", employee: { fullName: "יוסי דגן" }, dateTime: "2025-09-12T15:00:00Z", done: false },
      { _id: "c44", employee: { fullName: "ליאורה כץ" }, dateTime: "2025-09-20T09:00:00Z", done: false }
    ]
  },
  {
    _id: "b11",
    name: "לידר גבעת עלייה - מבנה B",
    cleanings: [
      { _id: "c51", employee: { fullName: "יעקב פרץ" }, dateTime: "2025-06-05T08:00:00Z", done: true },
      { _id: "c52", employee: { fullName: "אביגיל משולם" }, dateTime: "2025-06-15T12:30:00Z", done: true },
      { _id: "c53", employee: { fullName: "דניאל חזיזה" }, dateTime: "2025-08-18T09:00:00Z", done: false },
      { _id: "c54", employee: { fullName: "אסף גולן" }, dateTime: "2025-08-29T14:00:00Z", done: false }
    ]
  },
  {
    _id: "b11",
    name: "לידר גבעת עלייה - מבנה B",
    cleanings: [
      { _id: "c51", employee: { fullName: "יעקב פרץ" }, dateTime: "2025-06-05T08:00:00Z", done: true },
      { _id: "c52", employee: { fullName: "אביגיל משולם" }, dateTime: "2025-06-15T12:30:00Z", done: true },
      { _id: "c53", employee: { fullName: "דניאל חזיזה" }, dateTime: "2025-08-18T09:00:00Z", done: false },
      { _id: "c54", employee: { fullName: "אסף גולן" }, dateTime: "2025-08-29T14:00:00Z", done: false }
    ]
  },
  {
    _id: "b11",
    name: "לידר גבעת עלייה - מבנה B",
    cleanings: [
      { _id: "c51", employee: { fullName: "יעקב פרץ" }, dateTime: "2025-06-05T08:00:00Z", done: true },
      { _id: "c52", employee: { fullName: "אביגיל משולם" }, dateTime: "2025-06-15T12:30:00Z", done: true },
      { _id: "c53", employee: { fullName: "דניאל חזיזה" }, dateTime: "2025-08-18T09:00:00Z", done: false },
      { _id: "c54", employee: { fullName: "אסף גולן" }, dateTime: "2025-08-29T14:00:00Z", done: false }
    ]
  },

];


const ClientFutureJobs = () => {
  const navigate = useNavigate();

  // מצב הסוויץ' (true=מציג עבודות עתידיות, false=מציג שהושלמו)
  const [active, setActive] = useState(false);

  // שליטה על תפריט בחירת סניף
  const [dropdownOpen, setDropdownOpen] = useState(false);
  const [selectedBranch, setSelectedBranch] = useState(null);

  // שתי הרשימות שיוצגו במסך
  const [futureCleanings, setFutureCleanings] = useState([]);     // done=false
  const [completedCleanings, setCompletedCleanings] = useState([]); // done=true

  // נטען רשימת סניפים סטטית (הייתה יכולה להיות בקשה לשרת, אבל כאן זה Hard-Coded)
  const [branches] = useState(staticBranches);

  // ברגע שבוחרים סניף, מפלחים את הניקיונות לשתי רשימות
  useEffect(() => {
    if (selectedBranch) {
      const future = selectedBranch.cleanings.filter(c => c.done === true);
      const completed = selectedBranch.cleanings.filter(c => c.done === false);
      setFutureCleanings(future);
      setCompletedCleanings(completed);
    }
  }, [selectedBranch]);

  const handleSelectBranch = (branch) => {
    setSelectedBranch(branch);
    setDropdownOpen(false);
  };

  const Conatct = () => {
    navigate("/client-contact-us");
  };
  const Edit = () => {
    navigate("/client-edit-profile");
  };

  return (
    <div className="client-future-jobs">
      <div className="client-future-jobs-child" />
      <img className="client-future-jobs-item" alt="" src="/line-21.svg" />

      <div className="parent40">
        <div className="div168">
          {/* אם בחרנו סניף, מציגים את שמו. אחרת טקסט ברירת מחדל */}
          לוח ניקיונות {selectedBranch ? `${selectedBranch.name}` : "(בחר סניף)"}
        </div>
        
      </div>

      {/* מציג עבודות בהתאם לערך של active */}
      <div className="jobs-list-container5">
        {active
          ? futureCleanings.map((job) => (
              <FutureJobClient
                key={job._id}
                namew={job.employee.fullName}
                date={job.dateTime}
                done={job.done}
                active={active}
              />
            ))
          : completedCleanings.map((job) => (
              <FutureJobClient
                key={job._id}
                namew={job.employee.fullName}
                date={job.dateTime}
                done={job.done}
                active={active}
              />
            ))
        }
      </div>

      {/* תפריט תחתון / כפתורי ניווט */}
      <div className="rectangle-parent60">
        <div className="group-child128" />
        <button className="vector-wrapper62">
          <img className="vector-icon71" alt="" src="/vector8.svg" />
        </button>
        <img className="icon36" alt="" src="/-02-13@2x.png" />
        <div className="group-parent30">
          <button className="vector-wrapper63" onClick={Edit}>
            <img className="vector-icon72" alt="" src="/vector2.svg" />
          </button>
          <button className="vector-wrapper64">
            <img className="vector-icon73" alt="" src="/vector22.svg" />
          </button>
          <button className="parent42" onClick={Conatct}>
            <div className="div175">צור קשר</div>
            <img
              className="icbaseline-contact-mail-icon3"
              alt=""
              src="/icbaselinecontactmail.svg"
            />
          </button>
        </div>
      </div>

      {/* תפריט נפתח לבחירת סניף */}
      {dropdownOpen && (
        <ul className="dropdown-menu4">
          {branches.map((branch) => (
            <li
              key={branch._id}
              className="dropdown-item4"
              onClick={() => handleSelectBranch(branch)}
            >
              {branch.name}
            </li>
          ))}
        </ul>
      )}

      {/* כותרת עליונה */}
      <div className="frame-parent5">
        <div className="wrapper11">
          <div className="div176">שלום שרגא</div>
        </div>
        <div className="wrapper12">
          <div className="div177">ברוכים הבאים למערכת עש ניקיון ואחזקה</div>
        </div>
      </div>

      {/* כפתור לבחירת הסניף */}
      <button className="rectangle-parent61" onClick={() => setDropdownOpen(!dropdownOpen)}>
        <div className="group-child129" />
        <b className="b66">בחירת סניף</b>
      </button>

      {/* כפתור טוגל בין "עבודות" ל"עבודות עתידיות" */}
      <CustomToggleButton
        active={active}
        onClick={() => setActive(!active)}
        Height={"56vh"}
        name2="עבודות עתידיות"
        name1="עבודות"
        left="100px"
      />
    </div>
  );
};

export default ClientFutureJobs;