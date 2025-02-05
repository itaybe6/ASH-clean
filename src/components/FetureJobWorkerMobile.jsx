import React , {useState} from "react";
import "./FetureJobWorkerMobile.css";
import WorkerJobSucMobile from "../pages/WorkerJobSucMobile";

const FetureJobWorkerMobile = ({ nameb, address, time, id }) => {
  const [ok,setOk] = useState(false);

  return (
    <div className="feturejobworkermobile">
      {ok &&  <WorkerJobSucMobile   nameb={nameb} address={address} time={time} id={id}/>}

      <button className="exec-button" onClick={() => {setOk(true)}}>ביצוע</button>
      <div className="title">{nameb}</div>
      <div className="address">{address}</div>
      <div className="time">{time}</div>
    </div>
  );
};

export default FetureJobWorkerMobile;
