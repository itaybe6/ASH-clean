import { useEffect, useState } from "react";
import "./ClientContactUs.css";
import axios from "axios";
import { useParams } from 'react-router-dom';

const ClientContactUs = () => {
  const [message, setMessage] = useState("");
  const [fullName, setFullName] = useState("");
  const [phoneNumber, setPhoneNumber] = useState("");
  const [city, setCity] = useState("");
  const { id } = useParams(); 
  const apiUrl = import.meta.env.VITE_API_URL;


  useEffect(() => {
    const scrollAnimElements = document.querySelectorAll(
      "[data-animate-on-scroll]"
    );
    const observer = new IntersectionObserver(
      (entries) => {
        for (const entry of entries) {
          if (entry.isIntersecting || entry.intersectionRatio > 0) {
            const targetElement = entry.target;
            targetElement.classList.add("animate");
            observer.unobserve(targetElement);
          }
        }
      },
      {
        threshold: 0.15,
      }
    );
    for (let i = 0; i < scrollAnimElements.length; i++) {
      observer.observe(scrollAnimElements[i]);
    }

    return () => {
      for (let i = 0; i < scrollAnimElements.length; i++) {
        observer.unobserve(scrollAnimElements[i]);
      }
    };
  }, []);

 


  const handleSubmit = async (e) => {
    e.preventDefault();
  
    const formData = {
      fullName,
      phoneNumber,
      city,
      message,
    };
  
    try {
      const response = await axios.post(`${apiUrl}/costumer/contact`, formData);
      alert(response.data.message);
      setFullName("");
      setPhoneNumber("");
      setCity("");
      setMessage("");
    } catch (error) {
      console.error("Error sending message:", error);
      alert("שגיאה בשליחת ההודעה");
    }
  };


  return (
    <div className="client-contact-us" data-animate-on-scroll>
      <div className="client-contact-us-child" />
      <div className="frame-parent1">
       
      </div>
      <div className="parent32">
        <div className="div136">צור איתנו קשר</div>
        <div className="div137">
          יש בעיה? צריך עזרה או רק שאלה? מלא פה את הפרטים שלך ונחזור אלייך בהקדם!
        </div>
      </div>
      {/* הוספת הטופס עם state */}
      <form onSubmit={handleSubmit}>
        <textarea
          className="client-contact-us-inner"
          placeholder="כתוב כאן..."
          rows={10}
          maxLength={500} // שונה מ-10 ל-500 להנחה
          cols={1}
          value={message}
          onChange={(e) => setMessage(e.target.value)}
        />
        <input
          className="client-contact-us-child1"
          placeholder="שם מלא"
          type="text"
          value={fullName}
          onChange={(e) => setFullName(e.target.value)}
          required
        />
        <input
          className="client-contact-us-child2"
          placeholder="מספר פלאפון"
          type="tel"
          value={phoneNumber}
          onChange={(e) => setPhoneNumber(e.target.value)}
          required
        />
        <input
          className="client-contact-us-child3"
          placeholder="עיר"
          type="text"
          value={city}
          onChange={(e) => setCity(e.target.value)}
          required
        />
        <button type="submit" className="vector-wrapper49">
          <img className="vector-icon58" alt="" src="/vector.svg" />
        </button>
      </form>
      
    </div>
  );
};

export default ClientContactUs;
