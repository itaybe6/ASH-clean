import "./ManagerAddJobToWorkerMobile.css";

const ManagerAddJobToWorkerMobile = () => {
  return (
    <div className="manager-add-job-to-worker-mo">
      <div className="manager-add-job-to-worker-mo-child" />
      <b className="b20">שלום (שם מנהל)</b>
      <div className="div59">התחברות אחרונה 24/02/2025 בשעה 14:53</div>
      <img className="icon12" alt="" src="/-02-11@2x.png" />
      <button className="vector-wrapper21">
        <img className="vector-icon28" alt="" src="/vector10.svg" />
      </button>
      <div className="parent12">
        <div className="div60">{`הוספת עבודה `}</div>
        <div className="div61">מלא את כל הפרטים כדי להוסיף עבודה</div>
      </div>
      <div className="rectangle-parent18">
        <input className="group-child25" placeholder="בחירת עסק" type="text" />
        <input className="group-child26" placeholder="בחירת סניף" type="text" />
        <input
          className="group-child27"
          placeholder="בחירת תאריך ושעה"
          type="datetime-local"
        />
      </div>
      <button className="rectangle-parent19">
        <div className="group-child28" />
        <b className="b21">הוספה</b>
      </button>
    </div>
  );
};

export default ManagerAddJobToWorkerMobile;
