import "./ManagerAddWorker.css";

const ManagerAddWorker = () => {
  return (
    <div className="manager-add-worker">
      <section className="manager-add-worker-child" />
      
      <div className="manager-add-worker-inner">
        <div className="vector-parent96">
          <b className="b188">הוספת משתמש - עובד</b>
          <div className="div27">אנא מלא את הפרטים למטה כדי להוסיף סניף</div>
        </div>
      </div>
      <div className="manager-add-worker-inner1">
        <div className="group-frame">
          <div className="group-frame">
            <input className="group-input" placeholder="שם מלא" type="text" />
            <input
              className="group-child12"
              placeholder="מספר פלאפון"
              type="tel"
            />
            <input className="group-child13" placeholder="עיר" type="text" />
          </div>
        </div>
      </div>
      <div className="rectangle-parent8">
        <input
          className="group-child14"
          name="password"
          placeholder="סיסמא"
          type="password"
        />
        <input
          className="group-child15"
          name="verfication"
          placeholder="אימות סיסמא"
          type="password"
        />
      </div>
      <button className="rectangle-parent9">
        <div className="group-child16" />
        <b className="b19">הוספת משתמש</b>
      </button>
      <div className="rectangle-parent10">
        <div className="group-child17" />
        <button className="vector-wrapper2">
          <img className="vector-icon5" alt="" src="/vector5.svg" />
        </button>
        <img className="icon8" alt="" src="/-02-12@2x.png" />
        <div className="group-parent4">
          <button className="vector-wrapper3">
            <img className="vector-icon6" alt="" src="/vector6.svg" />
          </button>
          <button className="vector-wrapper4">
            <img className="vector-icon7" alt="" src="/vector7.svg" />
          </button>
          <div className="group-wrapper1">
            <button className="parent8">
              <div className="div28">משתמשים</div>
              <img className="group-child18" alt="" src="/group-390.svg" />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ManagerAddWorker;
