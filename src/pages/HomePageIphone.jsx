import FrameComponent from "../components/FrameComponent";
import GroupComponent9 from "../components/GroupComponent9";
import Component3 from "../components/Component3";
import "./HomePageIphone.css";
import { useState } from "react";
import axios from "axios";
import LogoCarousel from "../components/LogoCarousel";
const HomePageIphone = () => {
  const apiUrl = import.meta.env.VITE_API_URL;
  const [fullName, setFullName] = useState('');
  const [phoneNumber, setPhoneNumber] = useState('');
  const [service, setService] = useState('');

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
  const scrollToSection = (id) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };
  return (
    <div className="homepage-mobile">
      <img className="homepage-mobile-child" alt="" src="/group-356.svg" />
      <img className="test-02-1-icon" alt="" src="/test02-1@2x.png" />
      <img className="test-02-2-icon" alt="" src="/test02-2@2x.png" />
      <img className="icon89" alt="" src="/-02-1@2x.png" />
      <FrameComponent />
      <button className="group-parent" onClick={() => window.location.href = "tel:+972526308271"}>
        <img className="frame-child" alt="" src="/group-84.svg" />
        <img className="frame-item" alt="" src="/group-85.svg" />
      </button>
      <div className="parent">
        <b className="b">{`ניקיון חלונות `}</b>
        <b className="b1">ברמה אחרת!</b>
      </div>
      <div className="div">כשזה מגיע לניקיון, אנחנו לא משאירים סימן.</div>
      <button className="wrapper" onClick={() => scrollToSection('lead1')}>
        <b className="b2">לחץ כאן לניקיון מושלם!</b>
      </button>
      <img
        className="hands-holding-cleaning-tools-s-icon"
        alt=""
        src="/handsholdingcleaningtoolssolutions-1@2x.png"
      />
      <div className="homepage-mobile-item" />
      <div className="group">
        <b className="b3">
          <section id="lead1"></section>
          <p className="p">הניקיון המושלם</p>
          <p className="p">בדרך אליכם!</p>
        </b>
        <div className="div1">השאירו פרטים ונחזיר לכם את הברק!</div>

        <input className="component-child" placeholder="שם מלא" type="text" value={fullName} onChange={(e) => setFullName(e.target.value)} />
        <input className="component-item" placeholder="מספר פלאפון" type="tel" value={phoneNumber} onChange={(e) => setPhoneNumber(e.target.value)} />
        <input className="component-inner" placeholder="עיר" type="text" value={service} onChange={(e) => setService(e.target.value)} />
        <button className="rectangle-parent" onClick={sendEmail}>
          <div className="group-child" />
          <b className="b4">שליחה</b>
        </button>
        <img className="line-icon" alt="" src="/line-2.svg" />
      </div>
      <div className="container">
      <section id="lead2"></section>
        <b className="b3">
          <p className="p">הניקיון המושלם</p>
          <p className="p">בדרך אליכם!</p>
        </b>
        <div className="div1">השאירו פרטים ונחזיר לכם את הברק!</div>
        <input className="component-child" placeholder="שם מלא" type="text" value={fullName} onChange={(e) => setFullName(e.target.value)} />
        <input className="component-item" placeholder="מספר פלאפון" type="tel" value={phoneNumber} onChange={(e) => setPhoneNumber(e.target.value)} />
        <input className="component-inner" placeholder="עיר" type="text" value={service} onChange={(e) => setService(e.target.value)} />
        <button className="rectangle-parent" onClick={sendEmail}>
          <div className="group-child" />
          <b className="b4">שליחה</b>
        </button>
        <img className="line-icon" alt="" src="/line-2.svg" />
      </div>

      <div className="frame-div33">
       
       <LogoCarousel />



      </div>
      <button className="rectangle-container" onClick={() => scrollToSection('lead2')}>
        <div className="frame-inner" />
        <b className="b7">לחץ כאן לניקיון מושלם!</b>
      </button>
      <div className="parent1">
        <b className="b8">מה אנחנו עושים?</b>
        <div className="div3">
          עש ניקיון ואחזקה בע”מ מתמחה בפתרונות ניקיון לעסקים, עם דגש על איכות,
          שירות מקצועי ותוצאות ללא פשרות. אנו גאים לעבוד עם רשתות קמעונאיות
          בפריסה ארצית ולהציע שירותים מותאמים אישית, כמו ניקוי חלונות, שילוט
          והסרת מדבקות – הכל כדי שהעסק שלכם יבריק וייראה במיטבו.
        </div>
      </div>
      <div className="parent2">
        <div className="div4">
          <p className="p">ברוכים הבאים לעש</p>
          <p className="p">ניקיון ואחזקה בע"מ</p>
        </div>
        <div className="div5">
          עש - ניקיון ואחזקה בע"מ, שהוקמה בשנת 2021, מובילה את תחום ניקוי חלונות
          ושלטים בישראל עם שירות מקצועי, חדשני ויעיל בפריסה ארצית. אנו עובדים
          בשיתוף פעולה עם רשתות קמעונאיות מובילות בפריסה ארצית, ומציעים מגוון
          שירותים כמו ניקיון חלונות ראווה, ניקוי לוחות סולריים, חיפוי מבנים,
          ניקוי בגובה (סנפלינג ובמות הרמה) וניקוי בשיטת אוסמוזה הפוכה. עם מעל
          1000 לקוחות מרוצים, צוות מיומן ושירות אדיב וזמין, אנו דואגים שהחלונות
          והשלטים שלכם יבריקו וישדרו מקצועיות ויוקרה – כי "חלון נקי הוא הראי של
          העסק!"
        </div>
      </div>
      <button className="frame" onClick={() => scrollToSection('lead3')}>
        <b className="b2">לחץ כאן לניקיון מושלם!</b>
      </button>
      <div className="homepage-mobile-inner" />
      <div className="rectangle-div" />
      <img className="icon5" alt="" src="/-04-1@2x.png" />
      <div className="div6">כל הזכויות שמורות לעש ניקיון ואחזקה בע”מ 2025</div>
      <div className="homepage-mobile-inner1">
        <div className="group-container">
          <div className="group-wrapper">
            <div className="group-div">
              <div className="rectangle-parent1">
                <div className="group-inner" />
                <b className="b10">ניקיון חלונות ראווה</b>
                <div className="div7">
                  ניקוי חלונות לעסקים עם תוצאות מבריקות וללא סימנים, לשדרוג מראה
                  העסק.
                </div>
                <div className="ellipse-div" />
                <img className="page-1-icon" alt="" src="/page1.svg" />
              </div>
              <div className="rectangle-parent2">
                <div className="group-inner" />
                <div className="div8">
                  ניקוי שלטי פרסום ושלטי חוצות להסרת אבק, לכלוך ומדבקות, ולהחזרת
                  מראה ייצוגי.
                </div>
                <div className="group-child2" />
                <img className="page-1-icon1" alt="" src="/page11.svg" />
              </div>
              <div className="rectangle-parent3">
                <div className="group-inner" />
                <b className="b11">ניקוי חלונות בגובה</b>
                <div className="div9">
                  ניקוי חלונות בגורדי שחקים ובניינים גבוהים עם ציוד סנפלינג
                  ובמות הרמה.
                </div>
                <img className="group-icon" alt="" src="/group-49.svg" />
              </div>
              <div className="rectangle-parent4">
                <div className="group-inner" />
                <b className="b12">ניקיון לאחר שיפוץ</b>
                <div className="div10">
                  הסרת שאריות שיפוץ כמו צבע ואבק, והחזרת המתחם למצב מוכן לשימוש.
                </div>
                <img className="group-child5" alt="" src="/group-50.svg" />
              </div>
              <div className="rectangle-parent5">
                <div className="group-inner" />
                <div className="parent3">
                  <b className="b13">תחזוקה שוטפת לחלונות</b>
                  <div className="div11">
                    ניקיון מתוזמן לחלונות ושלטים לשמירה על מראה עסק נקי ומזמין.
                  </div>
                  <img className="group-child7" alt="" src="/group-324.svg" />
                </div>
              </div>
              <div className="group-parent1">
                <div className="rectangle-parent6">
                  <div className="group-inner" />
                  <b className="b14">ניקוי מדבקות פרסום</b>
                  <div className="div10">
                    הסרת מדבקות ישנות מחלונות ושלטים, עם ניקוי מושלם שלא פוגע
                    במשטח.
                  </div>
                  <div className="group-child9" />
                </div>
                <img className="page-1-icon2" alt="" src="/page12.svg" />
              </div>
            </div>
          </div>
          <b className="b15">ניקוי שילוט מסחרי</b>
        </div>
      </div>
      <GroupComponent9 />
      <Component3 />
      <img className="mask-group-icon" alt="" src="/mask-group1@2x.png" />
      <div className="parent4">
        <b className="b3">
          <p className="p">הניקיון המושלם</p>
          <p className="p">בדרך אליכם!</p>
        </b>
        <div className="div1">השאירו פרטים ונחזיר לכם את הברק!</div>
        <input className="component-child" placeholder="שם מלא" type="text" value={fullName} onChange={(e) => setFullName(e.target.value)} />
        <input className="component-item" placeholder="מספר פלאפון" type="tel" value={phoneNumber} onChange={(e) => setPhoneNumber(e.target.value)} />
        <input className="component-inner" placeholder="עיר" type="text" value={service} onChange={(e) => setService(e.target.value)} />
        <button className="rectangle-parent" onClick={sendEmail}>
          <div className="group-child" />
          <b className="b4">שליחה</b>
        </button>
        <section id="lead3"></section>
        <img className="line-icon" alt="" src="/line-2.svg" />
      </div>
    </div>
  );
};

export default HomePageIphone;
