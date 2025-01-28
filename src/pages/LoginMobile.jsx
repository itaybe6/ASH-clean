import "./LoginMobile.css";

const LoginMobile = () => {
  return (
    <div className="login-mobile">
      <img className="icon39" alt="" src="/-02-14@2x.png" />
      <div className="div184">כניסה לאזור האישי</div>
      <div className="div185">אנא הכנס מספר פלאפון וסיסמא כדי להתחבר</div>
      <input
        className="login-mobile-child"
        placeholder="מספר פלאפון"
        type="tel"
      />
      <input
        className="login-mobile-item"
        placeholder="סיסמא"
        type="password"
      />
      <button className="vector-wrapper68">
        <img className="vector-icon77" alt="" src="/vector26.svg" />
      </button>
      <button className="rectangle-parent63">
        <div className="group-child131" />
        <div className="div186">חזרה לאתר</div>
      </button>
    </div>
  );
};

export default LoginMobile;
