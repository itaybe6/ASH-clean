import { useState } from "react";
import "./ClientContactUsMobile.css";

const ClientContactUsMobile = () => {
  // הגדרת state לכל שדה קלט
  const [fullName, setFullName] = useState("");
  const [phoneNumber, setPhoneNumber] = useState("");
  const [city, setCity] = useState("");
  const [message, setMessage] = useState("");

  // פונקציה לטיפול בשליחת הטופס
  const handleSubmit = (e) => {
    e.preventDefault();
    // כאן ניתן להוסיף את הלוגיקה לשליחת הנתונים
    console.log({ fullName, phoneNumber, city, message });

    // איפוס השדות לאחר השליחה (אופציונלי)
    setFullName("");
    setPhoneNumber("");
    setCity("");
    setMessage("");
  };

  return (
    <div className="client-contact-us-mobile">
      <div className="client-contact-us-mobile-child" />
      <img className="icon33" alt="" src="/-02-11@2x.png" />
      <div className="div150">שלום (שם לקוח)</div>
      <div className="div151">התחברות אחרונה 24/02/2025 בשעה 14:53</div>
      <div className="div152">צור איתנו קשר</div>
      <div className="div153">
        יש בעיה? צריך עזרה או רק שאלה? מלא פה את הפרטים שלך ונחזור אלייך בהקדם
      </div>
      
      {/* הוספת הטופס עם state */}
      <form className="rectangle-parent55" onSubmit={handleSubmit}>
        <input
          className="group-child122"
          placeholder="שם מלא"
          type="text"
          value={fullName}
          onChange={(e) => setFullName(e.target.value)}
          required
        />
        <input
          className="group-child123"
          placeholder="מספר פלאפון"
          type="tel"
          value={phoneNumber}
          onChange={(e) => setPhoneNumber(e.target.value)}
          required
        />
        <input
          className="group-child124"
          placeholder="עיר"
          type="text"
          value={city}
          onChange={(e) => setCity(e.target.value)}
          required
        />
        <textarea
          className="rectangle-textarea"
          placeholder="כתוב כאן..."
          rows={10}
          cols={30} // התאם את ה-cols לפי הצורך
          maxLength={500} // ניתן להוסיף מגבלת תווים
          value={message}
          onChange={(e) => setMessage(e.target.value)}
          required
        />
        <button type="submit" className="rectangle-parent56">
          <div className="component-child4" />
          <b className="b63">שליחה</b>
        </button>
      </form>

      <button className="vector-wrapper57">
        <img className="vector-icon66" alt="" src="/vector10.svg" />
      </button>
    </div>
  );
};

export default ClientContactUsMobile;
