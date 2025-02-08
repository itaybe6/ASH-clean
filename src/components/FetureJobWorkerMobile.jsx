import React , {useState} from "react";
import "./FetureJobWorkerMobile.css";
import WorkerJobSucMobile from "../pages/WorkerJobSucMobile";
import axios from "axios";

const FetureJobWorkerMobile = ({ nameb, address, time, id ,done}) => {
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
    <div className="feturejobworkermobile">
      {ok &&  <WorkerJobSucMobile   nameb={nameb} address={address} time={time} id={id} setOk={setOk}/> }

      {done ? <button className="exec-button"  onClick={handleCancelCleaning} >ביטול</button>  :
              <button className="exec-button"  onClick={() => {setOk(true)}} >ביצוע</button> }
      <div className="title">{nameb}</div>
      <div className="address">{address}</div>
      <div className="time">{time}</div>
    </div>
  );
};

export default FetureJobWorkerMobile;
