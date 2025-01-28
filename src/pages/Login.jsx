import "./Login.css";

const Login = () => {
  return (
    <div className="login">
      <button className="vector-wrapper65">
        <img className="vector-icon74" alt="" src="/vector24.svg" />
      </button>
      <div className="wrapper13">
        <img className="icon37" alt="" src="/-02-13@2x.png" />
      </div>
      <div className="frame-parent6">
        <div className="wrapper14">
          <div className="div178">כניסה לאזור האישי</div>
        </div>
        <div className="wrapper15">
          <div className="div179">אנא הכנס מספר פלאפון וסיסמא כדי להתחבר</div>
        </div>
      </div>
      <input className="login-child" placeholder="מספר פלאפון" type="tel" />
      <input className="login-item" placeholder="סיסמא" type="password" />
      <button className="login-inner">
        <div className="vector-wrapper66">
          <img className="vector-icon75" alt="" src="/vector25.svg" />
        </div>
      </button>
    </div>
  );
};

export default Login;
