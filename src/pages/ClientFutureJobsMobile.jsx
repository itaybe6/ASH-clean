import FutureJobClientMobile from "../components/FutureJobClientMobile";
import CustomToggleButton from "../components/CustomToggleButton";
import MobileMenuClient from "./MobileMenuClient";
import React, { useState, useEffect } from "react";
import axios from "axios";
import "./ClientFutureJobsMobile.css";
import { useNavigate } from 'react-router-dom';
import { useParams } from 'react-router-dom';
import Autocomplete from '@mui/material/Autocomplete';
import TextField from '@mui/material/TextField';

const ClientFutureJobsMobile = () => {
  const [active, setActive] = useState(true);
  const [dropdownOpen, setDropdownOpen] = useState(false);
  const [selectedBranch, setSelectedBranch] = useState(null);
  const [branches, setBranches] = useState([]);
  const [cleanings, setCleanings] = useState([]);
  const [displayMenu, setDisplayMenu] = useState(false)
  const navigate = useNavigate();
  const apiUrl = import.meta.env.VITE_API_URL;

  const { id } = useParams();
  const [futureCleanings, setFutureCleanings] = useState([]);
  const [completedCleanings, setCompletedCleanings] = useState([]);


  useEffect(() => {
    const fetchBranches = async () => {
      try {
        console.log(id)
        const response = await axios.get(`${apiUrl}/costumer/${id}/branches`);
        setBranches(response.data);
      } catch (error) {
        console.error("Error fetching branches:", error);
      }
    };
    fetchBranches();
  }, []);

  useEffect(() => {
    if (selectedBranch) {
      const fetchCleaning = async () => {
        try {
          const response = await axios.get(
            `${apiUrl}/customer/${selectedBranch._id}/cleanings`
          );
          const allCleanings = response.data;

          const sortByDate = (jobs) => {
            return jobs.sort((a, b) =>
              new Date(a.dateTime.split("/").reverse().join("-")) -
              new Date(b.dateTime.split("/").reverse().join("-"))
            );
          };
          setFutureCleanings(sortByDate(allCleanings.filter((c) => c.done === false)));
          setCompletedCleanings(sortByDate(allCleanings.filter((c) => c.done === true)));
        } catch (error) {
          console.error('Error fetching cleanings:', error);
        }
      };
      fetchCleaning();
    }
  }, [selectedBranch]);



  const handleSelectBranch = (branch) => {
    setSelectedBranch(branch);
    setDropdownOpen(false);
  };

  const menu = () => {
    setDisplayMenu(!displayMenu)
  }
  // פונקציית סגירת תפריט
  const closeMenu = () => {
    setDisplayMenu(false);
  };
  const editBranch = () => {
    if (selectedBranch)
      navigate(`/manager-customer-edit-branch/${selectedBranch._id}`);
  }
  return (
    <div className="client-future-jobs-mobile">
      {displayMenu ? <MobileMenuClient isOpen={displayMenu} closeMenu={closeMenu} id={id} /> : null}
      <div className="client-future-jobs-mobile-child" />
      <img className="icon38" alt="" src="/-02-11@2x.png" />
      <div className="parent43">
        <div className="div182">לוח ניקיונות {selectedBranch ? selectedBranch.name : "בחר סניף"}</div>
        <div className="div183">כל הניקיונות האחרונים של הסניף שלך נרשמו כאן</div>
      </div>
      <button className="group8737" onClick={editBranch}>
        <img className="vector-icon86" alt="" src="/vector11.svg" />
        <img className="vector-icon87" alt="" src="/vector12.svg" />
      </button>
      {/* כאן נכנס מיפוי על המערך במקום FutureJobClientMobile יחיד */}
      <div className="clean-jobs-list-container">
        {active
          ? completedCleanings.map((job) => (
            <FutureJobClientMobile
              key={job._id}
              namew={job.employee?.fullName}
              date={job.dateTime}
              done={job.done}
              active={active}
              id={job._id}

            />
          ))
          : futureCleanings.map((job) => (
            <FutureJobClientMobile
              key={job._id}
              namew={job.employee?.fullName}
              date={job.dateTime}
              done={job.done}
              active={active}
              id={job._id}
            />
          ))
        }
      </div>


      <div className="CustomToggleButton2012">
        <CustomToggleButton
          active={active}
          onClick={() => setActive(!active)}
          Height={"50px"}
          name1="עבודות"
          name2="עבודות עתידיות"
        />
      </div>


      <div className="dropdown-container85">
        <Autocomplete
          options={branches}
          getOptionLabel={(branch) => branch.name}
          onChange={(event, newValue) => handleSelectBranch(newValue)}
          renderInput={(params) => <TextField {...params} label="בחר סניף" variant="outlined" fullWidth />}
        />
      </div>
      <button className="vector-wrapper67" onClick={menu}>
        <img className="vector-icon76" alt="" src="/vector10.svg" />
      </button>
    </div>
  );
};

export default ClientFutureJobsMobile;
