import Component2 from "../components/Component2";
import "./HomePageDesktop.css";
import { useNavigate } from 'react-router-dom';
import { useContext ,useEffect} from "react";
import { AuthContext } from "../context/AuthContext";
import { useState } from "react";
import { useLocation } from 'react-router-dom';
import newImage from '../imges/125.jpg';

import axios from "axios";

const HomePage = () => {
  const navigate = useNavigate();
  const { token } = useContext(AuthContext);
  const [fullName, setFullName] = useState('');
  const [phoneNumber, setPhoneNumber] = useState('');
  const [service, setService] = useState('');
  const apiUrl = import.meta.env.VITE_API_URL;
  const location = useLocation();


  const toLogin = () => {
    if (!token) {
      navigate("/login")
    }
    if (token.role == "Manager") {
      navigate("/manager-display-users");
    }
    else if (token.role == "Regular") {
      navigate("/worker-edit-profile");
    }
    else {
      navigate(`/clientJobs/${token.id}/`);
    }
  }
  const sendEmail = async () => {
    try {
      const response = await axios.post(`${apiUrl}/costumer/sendEmail`, {
        fullName,
        phoneNumber,
        service
      });
      if (response.status === 200) {
        alert('האימייל נשלח בהצלחה!');
        setFullName('');
        setPhoneNumber('');
        setService('');
      } else {
        alert('שגיאה בשליחת האימייל');
      }
    } catch (error) {
      console.error('שגיאה:', error);
      alert('שגיאה בחיבור לשרת');
    }
  };

  const access = () => { navigate('/accessibility') }

  const scrollToSection = (id) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };
  useEffect(() => {
    if (location.hash) {
        const element = document.getElementById(location.hash.substring(1));
        if (element) {
            element.scrollIntoView({ behavior: 'smooth' });
        }
    }
}, [location]);
  return (
    <div className="homepage">
      <div className="test-02-3-wrapper">
        <img className="test-02-3-icon" alt="" src="/test02-3@2x.png" />
      </div>
      <div className="test-02-4-wrapper">
        <img className="test-02-4-icon" alt="" src="/test02-4@2x.png" />
      </div>
      <img className="homepage-child" alt="" src="/line-1.svg" />
      <div className="ashoffice14gmailcom-group">
        <div className="ashoffice14gmailcom4">
          <p className="p23">מספר פלאפון:052-6038271</p>
          <p className="p23">אימייל : ash.office14@gmail.com</p>
        </div>
        <div className="div199">לפניות נוספות</div>
      </div>
      <img className="icon44" alt="" src="/-04-1@2x.png" />
      <div className="wrapper20">
        <div className="div200">
          <img className="icon45" alt="" src="/-02-1@2x.png" />
        </div>
      </div>
      <div className="div201">כשזה מגיע לניקיון, אנחנו לא משאירים סימן.</div>
      <div className="parent44">
        <b className="b72">{`ניקיון חלונות `}</b>
        <b className="b73">ברמה אחרת!</b>
      </div>
      <button className="rectangle-parent70" onClick={() => scrollToSection('lead1')}>
        <div className="frame-child6" />
        <b className="b74">לחץ כאן לניקיון מושלם!</b>
      </button>
      <div className="parent45">
        <button className="button" onClick={access}>הצהרת נגישות</button>
        <button className="button" onClick={() => scrollToSection('testimonials')} >לקוחות ממליצים</button>
        <button className="button" onClick={() => scrollToSection('about')}>אודות</button>
        <button className="button" onClick={() => scrollToSection('services')}>שירותים</button>
        <button className="button" onClick={() => window.location.href = '/'}>דף בית </button>
      </div>
      <button className="vector-wrapper69" onClick={toLogin}>
        <img className="vector-icon78" alt="" src="/vector27.svg" />
      </button>
      <button className="homepage-inner">
        <div className="group-parent35" onClick={() => window.location.href = "tel:+972526308271"}>
          <img className="frame-child7" alt="" src="/group-842.svg" />
          <img className="frame-child8" alt="" src="/group-82.svg" />
        </div>
      </button>
      <div className="homepage-item" />
      <div className="parent46">
        <img className="icon46" alt="" src="/-1@2x.png" />
        <img className="icon47" alt="" src="/-1-1@2x.png" />
        <img className="icon48" alt="" src="/-1-2@2x.png" />
        <img className="il-makiage-11" alt="" src="/il-makiage-1@2x.png" />
        <img className="icon49" alt="" src="/--1@2x.png" />
        <img className="jack-kuba-11" alt="" src="/jack-kuba-1@2x.png" />
      </div>
      <img className="homepage-child1" alt="" src="/group-302.svg" />
      <div className="hands-holding-cleaning-tools-s-wrapper">
        <img
          className="hands-holding-cleaning-tools-s-icon1"
          alt=""
          src="/handsholdingcleaningtoolssolutions-1@2x.png"
        />
      </div>
      <div className="homepage-child2" />
      <div className="div202">
        עש ניקיון ואחזקה בע”מ מתמחה בפתרונות ניקיון לעסקים, עם דגש על איכות,
        שירות מקצועי ותוצאות ללא פשרות. אנו גאים לעבוד עם רשתות קמעונאיות בפריסה
        ארצית ולהציע שירותים מותאמים אישית, כמו ניקוי חלונות, שילוט והסרת מדבקות
        – הכל כדי שהעסק שלכם יבריק וייראה במיטבו.
      </div>
      <b className="b75">מה אנחנו עושים?</b>
      <button className="rectangle-parent71" onClick={() => scrollToSection('lead2')} >
        <div className="group-child150" />
        <b className="b76">לחץ כאן לניקיון מושלם!</b>
      </button>
      <div className="homepage-child3" />
      <div className="group-parent36">
        <section id="services"></section>
        <div className="rectangle-parent72">
          <div className="group-child151" />
          <b className="b77">ניקיון חלונות ראווה</b>
          <div className="div203">
            ניקוי חלונות לעסקים עם תוצאות מבריקות וללא סימנים, לשדרוג מראה העסק.
          </div>
          <div className="group-child152" />
          <img className="page-1-icon3" alt="" src="/page1.svg" />
        </div>
        <div className="rectangle-parent72">
          <div className="group-child151" />
          <b className="b78">ניקוי שילוט מסחרי</b>
          <div className="div204">
            ניקוי שלטי פרסום ושלטי חוצות להסרת אבק, לכלוך ומדבקות, ולהחזרת מראה
            ייצוגי.
          </div>
          <div className="group-child154" />
          <img className="page-1-icon4" alt="" src="/page1-1.svg" />
        </div>
        <div className="rectangle-parent72">
          <div className="group-child151" />
          <b className="b79">ניקוי חלונות בגובה</b>
          <div className="div205">
            ניקוי חלונות בגורדי שחקים ובניינים גבוהים עם ציוד סנפלינג ובמות
            הרמה.
          </div>
          <div className="group-child156" />
          <img className="window-1-icon" alt="" src="/window-1.svg" />
        </div>
        <div className="rectangle-parent72">
          <div className="group-child151" />
          <b className="b80">ניקיון לאחר שיפוץ</b>
          <div className="div204">
            הסרת שאריות שיפוץ כמו צבע ואבק, והחזרת המתחם למצב מוכן לשימוש.
          </div>
          <div className="group-child158" />
          <img className="house-icon" alt="" src="/house.svg" />
        </div>
        <div className="rectangle-parent72">
          <div className="group-child151" />
          <b className="b81">ניקוי מדבקות פרסום</b>
          <div className="div204">
            הסרת מדבקות ישנות מחלונות ושלטים, עם ניקוי מושלם שלא פוגע במשטח.
          </div>
          <div className="group-child152" />
          <img className="page-1-icon5" alt="" src="/page1-2.svg" />
        </div>
        <div className="rectangle-parent72">
          <div className="group-child151" />
          <b className="b82">תחזוקה שוטפת לחלונות</b>
          <div className="div204">
            ניקיון מתוזמן לחלונות ושלטים לשמירה על מראה עסק נקי ומזמין.
          </div>
          <img className="group-child162" alt="" src="/group-346.svg" />
        </div>
      </div>
      <div className="div209">
        <p className="p23">ברוכים הבאים</p>
        <p className="p25">לעש - ניקיון ואחזקה בע"מ</p>
      </div>
      <section id="about"></section>
      <div className="div210">
        עש - ניקיון ואחזקה בע"מ, שהוקמה בשנת 2021, מובילה את תחום ניקוי חלונות
        ושלטים בישראל עם שירות מקצועי, חדשני ויעיל בפריסה ארצית. אנו עובדים
        בשיתוף פעולה עם רשתות קמעונאיות מובילות בפריסה ארצית, ומציעים מגוון
        שירותים כמו ניקיון חלונות ראווה, ניקוי לוחות סולריים, חיפוי מבנים, ניקוי
        בגובה (סנפלינג ובמות הרמה) וניקוי בשיטת אוסמוזה הפוכה. עם מעל 1000
        לקוחות מרוצים, צוות מיומן ושירות אדיב וזמין, אנו דואגים שהחלונות והשלטים
        שלכם יבריקו וישדרו מקצועיות ויוקרה – כי "חלון נקי הוא הראי של העסק!"
      </div>
      <button className="rectangle-parent78" onClick={() => scrollToSection('lead3')}>
        <div className="group-child163" />
        <b className="b83">לחץ כאן לניקיון מושלם!</b>
      </button>
      <div className="line-div" />
      <div className="div211">
        כל הזכויות שמורות לעש ניקיון ואחזקה בע”מ 2025
      </div>
      <div className="parent47">
        <div className="div212">לפניות נוספות</div>
        <div className="ashoffice14gmailcom6">
          <p className="p23">מספר פלאפון:052-6038271</p>
          <p className="p23">אימייל : ash.office14@gmail.com</p>
        </div>
      </div>
      <div className="homepage-child4" />
      <section id="testimonials"></section>
      <Component2 />
      <img className="mask-group-icon1" alt="" src={newImage} />
      <img className="icon50" alt="" src="/-04-1-1@2x.png" />
      <div className="group-parent37">
        <div className="component-container">
          <div className="group-child164" />
        </div>
        <button className="vector-wrapper70" onClick={sendEmail}>
          <img className="vector-icon79" alt="" src="/vector28.svg" />
        </button>
        <section id="lead1"></section>
        <input className="group-child165" placeholder="מספר פלאפון" type="tel" value={phoneNumber} onChange={(e) => setPhoneNumber(e.target.value)} />
        <input className="group-child166" placeholder="עיר" type="text" value={service} onChange={(e) => setService(e.target.value)} />
        <input className="group-child167" placeholder="שם מלא" type="text" value={fullName} onChange={(e) => setFullName(e.target.value)} />
        <div className="div213">
          <p className="p23">הניקיון המושלם</p>
          <p className="p23">בדרך אליכם!</p>
        </div>
      </div>

      <div className="group-parent38">
        <div className="rectangle-frame">
        <section id="lead2"></section>

          <div className="group-child168" />
        </div>
        <div className="parent48">

          <b className="b84">
            <p className="p23">הניקיון המושלם</p>
            <p className="p23">בדרך אליכם!</p>
          </b>
          <img className="group-child169" alt="" src="/line-2.svg" />
          <input className="group-child170" placeholder="שם מלא" type="text" value={fullName} onChange={(e) => setFullName(e.target.value)} />
          <input className="group-child171" placeholder="מספר פלאפון" type="tel" value={phoneNumber} onChange={(e) => setPhoneNumber(e.target.value)} />
          <input className="group-child172" placeholder="עיר" type="text" value={service} onChange={(e) => setService(e.target.value)} />
          <button className="rectangle-parent79" onClick={sendEmail} >
            <div className="group-child173" />
            <b className="b85">שליחה</b>
          </button>
          <div className="div214">השאירו פרטים ונחזיר לכם את הברק!</div>
        </div>
      </div>
      <div className="group-parent39">
        <div className="instance-wrapper">
        <section id="lead3"></section>
          <div className="group-child174" />
        </div>
        <div className="group-parent40">
          <button className="vector-wrapper71" onClick={sendEmail}>
            <img className="vector-icon80" alt="" src="/vector28.svg" />
          </button>
          <input className="group-child175" pplaceholder="מספר פלאפון" type="tel" value={phoneNumber} onChange={(e) => setPhoneNumber(e.target.value)} />
          <input className="group-child176" placeholder="עיר" type="text" value={service} onChange={(e) => setService(e.target.value)} />
          <input className="group-child177" placeholder="שם מלא" type="text" value={fullName} onChange={(e) => setFullName(e.target.value)} />
          <div className="div215">
            <p className="p23">הניקיון המושלם</p>
            <p className="p23">בדרך אליכם!</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HomePage;
