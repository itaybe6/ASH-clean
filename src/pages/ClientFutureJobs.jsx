import FutureJobClient from "../components/FutureJobClient";
import CustomToggleButton from "../components/CustomToggleButton";
import { useNavigate } from 'react-router-dom';
import React, { useState, useEffect } from "react";
import axios from "axios";
import "./ClientFutureJobs.css";
import { useParams } from 'react-router-dom';
import Autocomplete from '@mui/material/Autocomplete';
import TextField from '@mui/material/TextField';

const ClientFutureJobs = () => {
  const [active, setActive] = useState(true);
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
          const response = await axios.get( `${apiUrl}/costumer/${selectedBranch._id}/cleanings` );
          const allCleanings = response.data;

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
      <div className="dropdown-container89">
        <Autocomplete
          options={branches}
          getOptionLabel={(branch) => branch.name}
          onChange={(event, newValue) => setSelectedBranch(newValue)}
          renderInput={(params) => <TextField {...params} label="בחר סניף" variant="outlined" fullWidth />}
        />
      </div>

      <button className="group1737" onClick={editBranch}>
        <img className="vector-icon16" alt="" src="/vector11.svg" />
        <img className="vector-icon17" alt="" src="/vector12.svg" />
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