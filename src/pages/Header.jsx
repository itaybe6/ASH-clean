import React from "react";
import "./Header.css";

export default function Header({ name}) {
  return (
    <div className="header-container">
      <h2>שלום {name}
      </h2>
      <p>התחברות למערכת עס ניקיון ואחזקה בע"מ</p>
    </div>
  );
}
