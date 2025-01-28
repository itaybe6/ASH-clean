import "./ManagerRegistrationAddBranchesMobile.css";

const ManagerRegistrationAddBranchesMobile = () => {
  return (
    <div className="manager-registration-add-b1">
      <div className="manager-registration-add-b-child1" />
      <div className="div109">שלום (שם מנהל)</div>
      <div className="div110">התחברות אחרונה 24/02/2025 בשעה 14:53</div>
      <b className="b51">הוספת משתמש - לקוח</b>
      <div className="div111">אנא מלא את הפרטים למטה כדי להוסיף עובד</div>
      <img
        className="icbaseline-person-icon1"
        alt=""
        src="/icbaselineperson.svg"
      />
      <img className="icon25" alt="" src="/-02-11@2x.png" />
      <button className="vector-wrapper40">
        <img className="vector-icon49" alt="" src="/vector10.svg" />
      </button>
      <div className="manager-registration-add-b-inner1">
        <div className="group-wrapper4">
          <div className="group-wrapper4">
            <div className="div112">סניף 1</div>
            <input
              className="group-child87"
              placeholder="שם סניף"
              type="text"
            />
            <input
              className="group-child88"
              placeholder="כתובת סניף"
              type="text"
            />
            <input
              className="group-child89"
              placeholder="מספר פלאפון"
              type="tel"
            />
            <div className="div113">{`+ הוספת סניף נוסף `}</div>
          </div>
        </div>
      </div>
      <button className="rectangle-parent42">
        <div className="group-child90" />
        <b className="b52">הוספת משתמש</b>
      </button>
    </div>
  );
};

export default ManagerRegistrationAddBranchesMobile;
