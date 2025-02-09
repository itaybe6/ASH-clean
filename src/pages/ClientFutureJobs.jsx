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
  const [futureCleanings, setFutureCleanings] = useState([]);    
  const [completedCleanings, setCompletedCleanings] = useState([]); 
  const { id } = useParams(); 
  const apiUrl = import.meta.env.VITE_API_URL;
  const navigate = useNavigate();



  useEffect(() => {
    const fetchBranches = async () => {
      const customerId = id
      try {
        const response = await axios.get(`${apiUrl}/costumer/${customerId}/branches`);
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
      
          // ממיינים את הניקיונות לפי תאריך (מהקרוב לרחוק)
          allCleanings.sort((a, b) => new Date(a.dateTime) - new Date(b.dateTime));
      
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
      <div className="jobs-container-wrapper">
  <div className="jobs-list-container5">
    {active
      ? completedCleanings.map((job) => (
          <FutureJobClient
            key={job._id}
            namew={job.employee?.fullName}
            date={job.dateTime}
            done={job.done}
            active={active}
            bname={selectedBranch.name}
            id={job._id}
          />
        ))
      : futureCleanings.map((job) => (
          <FutureJobClient
            key={job._id}
            namew={job.employee?.fullName}
            date={job.dateTime}
            done={job.done}
            bname={selectedBranch.name}
            active={active}
            id={job._id}
          />
        ))
    }
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

      <button className="group1737" onClick={editBranch}>
        <img className="vector-icon16" alt="" src="/vector11.svg" />
        <img className="vector-icon17" alt="" src="/vector12.svg" />
      </button>
      
      <button className="rectangle-parent61" onClick={() => setDropdownOpen(!dropdownOpen)}>
        <div className="group-child129" />
        <b className="b66">בחירת סניף</b>
      </button>
    

<div className="CustomToggleButton1144">
<CustomToggleButton
        active={active}
        onClick={() => setActive(!active)}
        Height={"50px"}
        name1="עבודות"
        name2="עבודות עתידיות"
        left="100px"
      /> 
</div>
    


    </div>
  );
};

export default ClientFutureJobs;