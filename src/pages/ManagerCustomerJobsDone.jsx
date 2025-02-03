import DoneJobCustomer from "../components/DoneJobCustomer";
import CustomToggleButton from "../components/CustomToggleButton";
import { useState, useEffect } from "react";
import { useParams } from 'react-router-dom';
import { useNavigate } from 'react-router-dom';
import "./ManagerCustomerJobsDone.css";
import axios from "axios";

const ManagerCustomerJobsDone = () => {
  const [active, setActive] = useState(true);
  const [branches, setBranches] = useState([]);
  const [dropdownOpen, setDropdownOpen] = useState(false);  
  const [selectedBranch, setSelectedBranch] = useState(null);  
  const navigate = useNavigate();

  const { id } = useParams(); 
  useEffect(() => {
    const fetchBranches = async () => {
      try {
        const response = await axios.get(`http://localhost:5000/manager/${id}/branches`);
        setBranches(response.data);
      } catch (error) {
        console.error("Error fetching branches:", error);
      }
    };

    fetchBranches();
  }, []);

  const handleSelectBranch = (branch) => {
    setSelectedBranch(branch);
    setDropdownOpen(false);
  };

  const editBranch = () => {
    if (selectedBranch)
      navigate(`/manager-customer-edit-branch/${selectedBranch._id}`);
  }
  const addBranch = () => {
    navigate(`/manager-customer-add-branch/${id}`);
  }

  return (

    <div className="manager-customer-jobs-done">

      <div className="manager-customer-jobs-done-child" />
      <img
        className="manager-customer-jobs-done-item"
        alt=""
        src="/line-21.svg"
      />
      <div className="parent13">
        <div className="div46">{selectedBranch ? selectedBranch.name : "בחירת סניף"}</div>
        <div className="div47">
          כל הניקיונות האחרונים של הסניף שלך נרשמו כאן
        </div>
      </div>
      <div className="manager-customer-jobs-done-inner">
        <div className="group-child26" />
      </div>
      <div className="frame-parent">
        <div className="wrapper3">
          <div className="div48">שלום (שם מנהל)</div>
        </div>
        <div className="wrapper4">
          <div className="div49">התחברות אחרונה 24/02/2025 בשעה 14:53</div>
        </div>
      </div>
      <button className="rectangle-parent16" onClick={() => setDropdownOpen(!dropdownOpen)}>
        <div className="group-child27" />
        <b className="b26">בחירת סניף</b>
      </button>
      <div className="parent14">
        <div className="div50">תאריך</div>
        <div className="div51">שעה</div>
        <div className="div52">עובד מבצע</div>
        <div className="div53">סטטוס</div>
        <div className="div54">אישור</div>
        <DoneJobCustomer
          workername="ליאור שם טוב"
          time="14:53"
          date="24/05/2025"
          done="נעשה"
        />
      </div>

      <button className="group1" onClick={editBranch}>
        <img className="vector-icon16" alt="" src="/vector11.svg" />
        <img className="vector-icon17" alt="" src="/vector12.svg" />
      </button>
      <CustomToggleButton active={active} onClick={() => setActive(!active)} Height={"80vh"} name1="עבודות" name2="עבודות עתידיות" left="440px" />;
      {dropdownOpen && (
        <ul className="dropdown-menu">
          {branches.map((branch) => (
            <li
              key={branch._id}
              className="dropdown-item"
              onClick={() => handleSelectBranch(branch)}
            >
              {branch.name}
            </li>
          ))}
        </ul>
      )}
      <button className="rectangle-parent17" onClick={addBranch}>
        <div className="group-child28" />
        <b className="b27">+</b>
      </button>
      <div className="rectangle-parent18">
        <div className="group-child26" />
        <button className="vector-wrapper13">
          <img className="vector-icon18" alt="" src="/vector1.svg" />
        </button>
        <img className="icon13" alt="" src="/-02-13@2x.png" />
        <div className="group-parent9">
          <button className="vector-wrapper14">
            <img className="vector-icon19" alt="" src="/vector2.svg" />
          </button>
          <button className="vector-wrapper15">
            <img className="vector-icon20" alt="" src="/vector9.svg" />
          </button>
          <button className="parent15">
            <div className="div55">משתמשים</div>
            <img
              className="icbaseline-people-alt-icon3"
              alt=""
              src="/icbaselinepeoplealt.svg"
            />
          </button>
        </div>
      </div>
    </div>
  );
};

export default ManagerCustomerJobsDone;
