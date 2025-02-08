import React from "react";
import "./Header.css";

export default function Header({ name,mobile}) {
  return (
    <div className={`header-container ${mobile ? "header-mobile" : ""}`}>
      <h2>שלום {name}
      </h2>
      <p>התחברות למערכת עש ניקיון ואחזקה בע"מ</p>
    </div>
  );
}
