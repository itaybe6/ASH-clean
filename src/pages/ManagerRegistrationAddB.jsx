import "./ManagerRegistrationAddB.css";

const ManagerRegistrationAddB = () => {
  return (
    <div className="manager-registration-add-b">
      <div className="manager-registration-add-b-child" />
      <img
        className="manager-registration-add-b-item"
        alt=""
        src="/line-21.svg"
      />
      <div className="div100">שלום (שם מנהל)</div>
      <div className="div101">התחברות אחרונה 24/02/2025 בשעה 14:53</div>
      <div className="manager-registration-add-b-inner">
        <div className="vector-parent1">
          <img className="vector-icon44" alt="" src="/vector19.svg" />
          <b className="b46">הוספת משתמש - לקוח</b>
          <div className="div102">אנא מלא את הפרטים למטה כדי להוסיף סניף</div>
        </div>
      </div>
      <div className="rectangle-parent38">
        <div className="group-child75" />
        <button className="vector-wrapper36">
          <img className="vector-icon45" alt="" src="/vector8.svg" />
        </button>
        <img className="icon23" alt="" src="/-02-13@2x.png" />
        <button className="vector-wrapper37">
          <img className="vector-icon46" alt="" src="/vector2.svg" />
        </button>
        <button className="vector-wrapper38">
          <img className="vector-icon47" alt="" src="/vector9.svg" />
        </button>
        <button className="group-wrapper3">
          <button className="parent27">
            <div className="div103">משתמשים</div>
            <img className="group-child76" alt="" src="/group-401.svg" />
          </button>
        </button>
      </div>
      <div className="group-parent18">
        <div className="group-parent19">
          <div className="group-parent20">
            <input
              className="group-child77"
              placeholder="שם סניף"
              type="text"
            />
            <input
              className="group-child78"
              placeholder="מספר פלאפון"
              type="tel"
            />
            <input className="group-child79" placeholder="כתובת" type="text" />
          </div>
          <div className="div104">{`+ הוספת סניף נוסף `}</div>
        </div>
        <button className="rectangle-parent39">
          <div className="group-child80" />
          <b className="b47">הוספת משתמש</b>
        </button>
        <button className="rectangle-parent40">
          <div className="group-child81" />
          <b className="b48">חזרה</b>
        </button>
      </div>
    </div>
  );
};

export default ManagerRegistrationAddB;
