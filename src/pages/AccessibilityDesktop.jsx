import "./AccessibilityDesktop.css";
import { useNavigate } from 'react-router-dom';
import { useContext } from "react";
import { AuthContext } from "../context/AuthContext";
const AccessibilityDesktop = () => {
  const navigate = useNavigate();
  const { token } = useContext(AuthContext);
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
      navigate(`/clientJobs/${user.id}/`);
    }
  }
  const homepage = () => {
    navigate("/homepage");
  };
  return (
    <div className="accessibility-desktop">
      <img
        className="accessibility-desktop-child"
        alt=""
        src="/group-841.svg"
      />
      <div className="accessibility-desktop-item" />
      <div className="div187">הצהרת נגישות</div>
      <div className="accessibility-desktop-inner" />
      <img className="icon40" alt="" src="/-04-11@2x.png" onClick={homepage} />
      <div className="div188">
        כל הזכויות שמורות לעש ניקיון ואחזקה בע”מ 2025
      </div>
      <div className="ashoffice14gmailcom-parent">
        <div className="ashoffice14gmailcom">
          <p className="pdf">מספר פלאפון:052-6038271</p>
          <p className="pdf">אימייל : ash.office14@gmail.com</p>
        </div>
        <div className="div189">לפניות נוספות</div>
      </div>

      <div className="pdf-container">
        <p className="pdf">
          חברתנו משקיעה משאבים רבים על מנת לספק לכל לקוחותינו שירות שוויוני,
          מכובד, נגיש ומקצועי. בהתאם לחוק שוויון זכויות לאנשים עם מוגבלויות
          תשנ"ח- 1998 ולתקנות שהותקנו מכוחו, מושקעים מאמצים רבים בביצוע התאמות
          הנגישות הנדרשות על מנת שאדם בעל מוגבלות יוכל לקבל את השירותים הניתנים
          לכלל הלקוחות, באופן עצמאי ושוויוני.חשוב לציין, כי למרות מאמצנו להנגיש
          את כלל הדפים באתר, ייתכן ויתגלו חלקים או יכולות באתר שטרם הונגשו
          כדוגמת מסמכים בקובץ PDF ותמונות. אנו ממשיכים במאמצים לשפר את נגישות
          האתר כחלק ממחויבותנו לאפשר שימוש בו עבור כלל האוכלוסייה כולל אנשים עם
          מוגבלויות.
        </p>
        <p className="pdf">תפעול האתר ועזרי נגישות:  </p>
        <p className="pdf">
          עש נקיון בע"מ מאמינה בשוויון הזדמנויות במרחב האינטרנטי לבעלי לקויות
          מגוונות ואנשים הנעזרים בטכנולוגיה המסייעת לשימוש במחשב. אנו עושים את
          מירב המאמצים כדי שהתכנים באתרנו יהיו קריאים ומובנים ככל הניתן, אם
          נתקלתם בתוכן מבלבל או שאינו ברור, נשמח ותפנו את תשומת ליבנו לכך ונפעל
          לתיקון והבהרת התכנים. האתר כולל אמצעי נגישות הכוללים, בין היתר:
        </p>
        <ul className="edge-firefox-chrome-safari">
          <li className="li">אמצעי ניווט פשוטים ונוחים לשימוש.</li>
          <li className="li">תכנים שנכתבו בשפה ברורה ככל הניתן.</li>
          <li className="li">
            התכנים כתובים וערוכים בצורה מסודרת ועם כותרות שמסייעות להתמצאות.
          </li>
          <li className="li">
            האתר מותאם לצפייה בדפדפני אינטרנט רבים ובפרט העיקריים שבהם: Edge,
            Firefox, Chrome, Safari ועוד.
          </li>
          <li className="li">
            האתר מותאם לגלישה סלולארית ולצפייה במחשב נייד/שולחני כאחד.
          </li>
          <li className="li">
            ניתן להגדיל ולהקטין את האתר (Zoom) באמצעות מקש ה- CTRL וגלגלת העכבר.
          </li>
          <li className="li">
            ניתנו תיאורים אינפורמטיביים לעמודי האתר על מנת להקל על השימוש באתר.
          </li>
          <li className="li">ניתן לצפות באתר ברזולוציות שונות.</li>
        </ul>
        <p className="pdf">
          אנו ממשיכים במאמצים לשפר את נגישות האתר כחלק ממחויבותנו לאפשר שימוש בו
          עבור כלל האוכלוסייה כולל אנשים עם מוגבלויות. נשמח לקבל פניות לקבלת
          מידע ו/או הצעות שיפור על מנת לשפר את נגישות האתר לשירות קהל הגולשים.
        </p>
        <p className="pdf">
          אם נתקלת בקושי לגלוש באתר או יש לך הערה בנושא, נשמח אם תיצור קשר באחת
          מהדרכים הבאות:
        </p>
        <p className="pdf">טלפון: 052-603-8271</p>
        <p className="pdf">דואר אלקטרוני: ash.office14@gmail.com</p>
      </div>
      <img className="icon41" alt="" src="/-02-15@2x.png" />
      <div className="grouping1447">
        <button className="wrapper16" onClick={() => window.location.href = '/#about'}>
          <div className="div191" >אודות</div>
        </button>
        <button className="wrapper17" onClick={() => window.location.href = '/#testimonials'}>
          <div className="div191">לקוחות ממליצים</div>
        </button>
        <button className="wrapper19" onClick={() => window.location.href = '/#services'}>
          <div className="div191" >שירותים</div>
        </button>
        <button className="wrapper23">
          <div className="div191">הצהרת נגישות</div>
        </button>
        <button className="wrapper18" onClick={() => window.location.href = '/'}>
          <div className="div191" >דף בית</div>
        </button>
      </div>

      <div className="group-parent31">
        <button className="rectangle-parent66" onClick={toLogin} >
          <div className="group-child138" />
          <b className="b69">אזור אישי</b>
        </button>
        <button className="group-parent32" onClick={() => window.location.href = "tel:+972527488779"} >
          <img className="group-child139" alt="" src="/group-842.svg" />
          <img className="group-child140" alt="" src="/group-841.svg" />
        </button>

      </div>

    </div>
  );
};

export default AccessibilityDesktop;
