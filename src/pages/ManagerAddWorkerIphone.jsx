import "./ManagerAddWorkerIphone.css";

const ManagerAddWorkerIphone = () => {
  return (
    <div className="manager-add-worker-iphone">
      <div className="manager-add-worker-iphone-child" />
      <b className="b48">הוספת משתמש - עובד</b>
      <div className="div103">אנא מלא את הפרטים למטה כדי להוסיף עובד</div>
      <img
        className="icbaseline-person-icon"
        alt=""
        src="/icbaselineperson.svg"
      />
      <img className="icon24" alt="" src="/-02-11@2x.png" />
      <button className="vector-wrapper38">
        <img className="vector-icon46" alt="" src="/vector10.svg" />
      </button>
      <div className="rectangle-parent42">
        <input className="group-child69" placeholder="שם מלא" type="text" />
        <input className="group-child70" placeholder="עיר" type="text" />
        <input className="group-child71" placeholder="מספר פלאפון" type="tel" />
      </div>
      <input
        className="manager-add-worker-iphone-item"
        placeholder="סיסמא"
        type="password"
      />
      <input
        className="manager-add-worker-iphone-inner"
        placeholder="אימות סיסמא"
        type="password"
      />
      <button className="rectangle-parent43">
        <div className="group-child72" />
        <b className="b49">הוספת משתמש</b>
      </button>
    </div>
  );
};

export default ManagerAddWorkerIphone;
