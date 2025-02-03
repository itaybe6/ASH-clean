import DoneJobCustomerMobile from "../components/DoneJobCustomerMobile";
import "./ManagerCustomerJobsDoneMobile.css";
import MobileMenuManager from "./MobileMenuManager";
import React, { useState, useEffect } from "react";
import CustomToggleButton from "../components/CustomToggleButton";
import { useParams } from 'react-router-dom';
import { useNavigate } from 'react-router-dom';
import "./ManagerCustomerJobsDone.css";
import axios from "axios";

const ManagerCustomerJobsDoneMobile = () => {
  const [displayMenu, setDisplayMenu] = useState(false)
  const [active, setActive] = useState(true);
  const [branches, setBranches] = useState([]);
  const [dropdownOpen, setDropdownOpen] = useState(false);
  const [selectedBranch, setSelectedBranch] = useState(null);
  const navigate = useNavigate();
  const { id } = useParams();

  const menu = () => {
    setDisplayMenu(!displayMenu)
  }
  // פונקציית סגירת תפריט
  const closeMenu = () => {
    setDisplayMenu(false);
  };

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
    <div className="manager-customer-jobs-done-m">
      {displayMenu ? <MobileMenuManager isOpen={displayMenu} closeMenu={closeMenu} /> : null}

      <div className="manager-customer-jobs-done-m-child" />
      <div className="manager-customer-jobs-done-m-item" />
      <b className="b28">שלום (שם מנהל)</b>
      <div className="div56">התחברות אחרונה 24/02/2025 בשעה 14:53</div>
      <img
        className="manager-customer-jobs-done-m-inner"
        alt=""
        src="/group-247.svg"
      />
      <img className="icon14" alt="" src="/-02-11@2x.png" />
      <button className="vector-wrapper16" onClick={menu}>
        <img className="vector-icon21" alt="" src="/vector10.svg" />
      </button>
      <DoneJobCustomerMobile
        date="24/05/2025"
        time="14:53"
        namew="ליאור שם טוב"
        done="נעשה"
      />

      <div className="parent16">
        <div className="div57">{selectedBranch ? selectedBranch.name : "בחירת סניף"}</div>
        <div className="div58">
          כל הניקיונות האחרונים של הסניף שלך נרשמו כאן
        </div>
        <CustomToggleButton active={active} onClick={() => setActive(!active)} Height={"25vh"} name1="עבודות" name2="עבודות עתידיות" left="30px" />;
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
      </div>


      <button className="rectangle-parent19" onClick={() => setDropdownOpen(!dropdownOpen)}>
        <div className="group-child30" />
        <b className="b29">בחירת סניף</b>
      </button>

      <button className="group2" onClick={editBranch}>
        <img className="vector-icon22" alt="" src="/vector13.svg" />
        <img className="vector-icon23" alt="" src="/vector14.svg" />
      </button>
      <button className="rectangle-parent20" onClick={addBranch}>
        <div className="group-child31" />
        <b className="b30">+</b>
      </button>
    </div>
  );
};

export default ManagerCustomerJobsDoneMobile;
