import "./AccessibilityIphone.css";
import { useNavigate } from 'react-router-dom';
import { useContext } from "react";
import { AuthContext } from "../context/AuthContext";
const AccessibilityIphone = () => {
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
  return (
    <div className="accessibility-iphone">
      <div className="group-parent33">
        <button className="rectangle-parent67" onClick={toLogin}>
          <div className="group-child141" />
          <div className="div195">אזור אישי</div>
          <img className="mdiaccount-icon" alt="" src="/mdiaccount.svg" />
        </button>
        <button className="group-parent34">
          <img className="group-child142" alt="" src="/group-84.svg" />
          <img className="group-child143" alt="" src="/group-851.svg" />
        </button>
      </div>
      <img className="icon42" alt="" src="/-02-16@2x.png" />
      <div className="accessibility-iphone-child" />
      <div className="div196">הצהרת נגישות</div>
      <div className="pdf-container1">
        <p className="pdf1">
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
        <p className="pdf1">תפעול האתר ועזרי נגישות:  </p>
        <p className="pdf1">
          עש נקיון בע"מ מאמינה בשוויון הזדמנויות במרחב האינטרנטי לבעלי לקויות
          מגוונות ואנשים הנעזרים בטכנולוגיה המסייעת לשימוש במחשב. אנו עושים את
          מירב המאמצים כדי שהתכנים באתרנו יהיו קריאים ומובנים ככל הניתן, אם
          נתקלתם בתוכן מבלבל או שאינו ברור, נשמח ותפנו את תשומת ליבנו לכך ונפעל
          לתיקון והבהרת התכנים. האתר כולל אמצעי נגישות הכוללים, בין היתר:
        </p>
        <ul className="edge-firefox-chrome-safari1">
          <li className="li6">אמצעי ניווט פשוטים ונוחים לשימוש.</li>
          <li className="li6">תכנים שנכתבו בשפה ברורה ככל הניתן.</li>
          <li className="li6">
            התכנים כתובים וערוכים בצורה מסודרת ועם כותרות שמסייעות להתמצאות.
          </li>
          <li className="li6">
            האתר מותאם לצפייה בדפדפני אינטרנט רבים ובפרט העיקריים שבהם: Edge,
            Firefox, Chrome, Safari ועוד.
          </li>
          <li className="li6">
            האתר מותאם לגלישה סלולארית ולצפייה במחשב נייד/שולחני כאחד.
          </li>
          <li className="li6">
            ניתן להגדיל ולהקטין את האתר (Zoom) באמצעות מקש ה- CTRL וגלגלת העכבר.
          </li>
          <li className="li6">
            ניתנו תיאורים אינפורמטיביים לעמודי האתר על מנת להקל על השימוש באתר.
          </li>
          <li className="li6">ניתן לצפות באתר ברזולוציות שונות.</li>
        </ul>
        <p className="pdf1">
          אנו ממשיכים במאמצים לשפר את נגישות האתר כחלק ממחויבותנו לאפשר שימוש בו
          עבור כלל האוכלוסייה כולל אנשים עם מוגבלויות. נשמח לקבל פניות לקבלת
          מידע ו/או הצעות שיפור על מנת לשפר את נגישות האתר לשירות קהל הגולשים.
        </p>
        <p className="pdf1">
          אם נתקלת בקושי לגלוש באתר או יש לך הערה בנושא, נשמח אם תיצור קשר באחת
          מהדרכים הבאות:
        </p>
        <p className="pdf1">טלפון: 052-603-8271</p>
        <p className="pdf1">דואר אלקטרוני: ash.office14@gmail.com</p>
      </div>
      <img className="tablercopyleft-icon" alt="" src="/tablercopyleft.svg" />
      <div className="accessibility-iphone-item" />
      <img className="icon43" alt="" src="/-04-11@2x.png" />
      <div className="div197">
        כל הזכויות שמורות לעש ניקיון ואחזקה בע”מ 2025
      </div>

    </div>
  );
};

export default AccessibilityIphone;
