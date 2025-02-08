import React , {useState} from "react";
import "./FetureJobWorker.css";
import WorkerJobSuc from "../pages/WorkerJobSuc";
import axios from "axios";

const FetureJobWorker = ({ nameb, address,time,id , done}) => {
  const [ok,setOk] = useState(false);

  const handleCancelCleaning = async () => {
    try {
        const confirmDelete = window.confirm("האם אתה בטוח שברצונך לבטל את העבודה ?");
        if (!confirmDelete) return;

        const response = await axios.put(`http://localhost:5000/worker/cleanings/${id}/cancel`);

        if (response.status === 200) {
            alert("ניקיון עבר למצב - לא נעשה");
            console.log(response)
        } else {
            alert("שגיאה בשינוי סטטוס של ניקיון");
        }
    } catch (error) {
        console.error("שגיאה במחיקת ניקיון:", error);
        alert("שגיאה במחיקת ניקיון");
    }
};


  return (
    <div className="feture-job-worker-card">
      {ok &&  <WorkerJobSuc   nameb={nameb} address={address} time={time} id={id}/>}
  
      <div className="feture-job-worker-details">
        <b className="feture-job-worker-title">{nameb}</b>
        <div className="feture-job-worker-address">{address}</div>
        <div className="feture-job-worker-time"> {time}</div>
      </div>
      {done ? <button className="feture-job-worker-button"  onClick={handleCancelCleaning} >ביטול</button>  :
             <button className="feture-job-worker-button"  onClick={() => {setOk(true)}} >ביצוע</button> }

    </div>
  );
};

export default FetureJobWorker;
