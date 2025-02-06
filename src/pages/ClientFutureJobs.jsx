import FutureJobClient from "../components/FutureJobClient";
import CustomToggleButton from "../components/CustomToggleButton";
import { useNavigate } from 'react-router-dom';
import React, { useState, useEffect } from "react";
import axios from "axios";
import "./ClientFutureJobs.css";
import { useParams } from 'react-router-dom';

const ClientFutureJobs = () => {
  const [active, setActive] = useState(true);
  const [dropdownOpen, setDropdownOpen] = useState(false);
  const [selectedBranch, setSelectedBranch] = useState(null);
  const [branches, setBranches] = useState([]);
  const { id } = useParams(); 
  const navigate = useNavigate();

  const [futureCleanings, setFutureCleanings] = useState([]);    
  const [completedCleanings, setCompletedCleanings] = useState([]); 

  const parseJwt = (token) => {
    try {
      const base64Url = token.split('.')[1];
      const base64 = base64Url.replace(/-/g, '+').replace(/_/g, '/');
      return JSON.parse(atob(base64));
    } catch (error) {
      return null;
    }
  };
  const token = parseJwt(localStorage.getItem("token"));

  useEffect(() => {
    const fetchBranches = async () => {
      try {
        const response = await axios.get(`http://localhost:5000/customer/${id}/branches`);
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
            `http://localhost:5000/customer/${selectedBranch._id}/cleanings`
          );
          const allCleanings = response.data;
          setFutureCleanings(allCleanings.filter((c) => c.done == false));
          setCompletedCleanings(allCleanings.filter((c) => c.done == true));

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

  const Conatct = () => {
    navigate(`/client-contact-us/${id}/`);

  };
  const Edit = () => {
    navigate(`/client-edit-profile/${id}/`);

  };
  const editBranch = () => {
    if (selectedBranch)
      navigate(`/manager-customer-edit-branch/${selectedBranch._id}`);
  }
  return (
    <div className="client-future-jobs">
      <div className="client-future-jobs-child" />
      <img className="client-future-jobs-item" alt="" src="/line-21.svg" />
      <div className="parent40">
        <div className="div168">לוח ניקיונות {selectedBranch ? selectedBranch.name : ""}</div>
        <div className="div169">
          כל הניקיונות האחרונים של הסניף שלך נרשמו כאן
        </div>
      </div>

      {/* מציג עבודות בהתאם לערך של active */}
      <div className="jobs-list-container5">
        {active
          ? completedCleanings.map((job) => (
              <FutureJobClient
                key={job._id}
                namew={job.employee?.fullName}
                date={job.dateTime}
                done={job.done}
                active={active}
              />
            ))
          : futureCleanings.map((job) => (
              <FutureJobClient
                key={job._id}
                namew={job.employee?.fullName}
                date={job.dateTime}
                done={job.done}
                active={active}
              />
            ))
        }
      </div>
      <button className="group1737" onClick={editBranch}>
        <img className="vector-icon16" alt="" src="/vector11.svg" />
        <img className="vector-icon17" alt="" src="/vector12.svg" />
      </button>
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

      <div className="frame-parent5">
        <div className="wrapper11">
          <div className="div176">שלום (שם לקוח)</div>
        </div>
        <div className="wrapper12">
          <div className="div177">התחברות אחרונה 24/02/2025 בשעה 14:53</div>
        </div>
      </div>
      <button className="rectangle-parent61" onClick={() => setDropdownOpen(!dropdownOpen)}>
        <div className="group-child129" />
        <b className="b66">בחירת סניף</b>
      </button>

      <CustomToggleButton
        active={active}
        onClick={() => setActive(!active)}
        Height={"56vh"}
        name1="עבודות"
        name2="עבודות עתידיות"
        left="100px"
      />
    </div>
  );
};

export default ClientFutureJobs;