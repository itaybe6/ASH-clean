import React , {useState} from "react";
import "./FetureJobWorker.css";
import WorkerJobSuc from "../pages/WorkerJobSuc";

const FetureJobWorker = ({ nameb, address,time,id}) => {
  const [ok,setOk] = useState(false);

  return (
    <div className="feture-job-worker-card">
      {ok &&  <WorkerJobSuc   nameb={nameb} address={address} time={time} id={id}/>}
  
      <div className="feture-job-worker-details">
        <b className="feture-job-worker-title">{nameb}</b>
        <div className="feture-job-worker-address">{address}</div>
        <div className="feture-job-worker-time"> {time}</div>
      </div>
      <button className="feture-job-worker-button"  onClick={() => {setOk(true)}} >ביצוע</button>

    </div>
  );
};

export default FetureJobWorker;
