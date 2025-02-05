import { useEffect, useState } from "react";
import "./ClientContactUs.css";
import axios from "axios";
import { useNavigate } from 'react-router-dom';

const ClientContactUs = () => {
  const [message, setMessage] = useState("");
  const [fullName, setFullName] = useState("");
  const [phoneNumber, setPhoneNumber] = useState("");
  const [city, setCity] = useState("");
  const navigate = useNavigate();

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
      const response = await axios.post("http://localhost:5000/customer/contact", formData);
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

  const Edit = () => {
    navigate("/client-edit-profile");
  }
  const Jobs = () => {
    navigate("/clientJobs");
  }
  return (
    <div className="client-contact-us" data-animate-on-scroll>
      <div className="client-contact-us-child" />
      <img className="client-contact-us-item" alt="" src="/line-21.svg" />
      <div className="frame-parent1">
        <div className="wrapper7">
          <div className="div134">שלום שרגא</div>
        </div>
        <div className="wrapper8">
          <div className="div135">התחברות אחרונה 24/02/2025 בשעה 14:53</div>
        </div>
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
      <div className="client-contact-us-inner1">
        <div className="rectangle-parent51">
          <div className="group-child108" />
          <button className="vector-wrapper50">
            <img className="vector-icon59" alt="" src="/vector8.svg" />
          </button>
          <img className="icon30" alt="" src="/-02-13@2x.png" />
          <div className="group-parent25">
            <button className="vector-wrapper51" onClick={Edit}>
              <img className="vector-icon60" alt="" src="/vector2.svg" />
            </button>
            <button className="vector-wrapper52" onClick={Jobs}>
              <img className="vector-icon61" alt="" src="/vector9.svg" />
            </button>
            <button className="parent33">
              <div className="div138">צור קשר</div>
              <img
                className="icbaseline-contact-mail-icon"
                alt=""
                src="/icbaselinecontactmail.svg"
              />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ClientContactUs;
