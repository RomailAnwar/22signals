import React from "react";
import icon from "../assets/btn-icon.svg";

function MyButton({ text = "LET’S TALK" }) {
  return (
    <button >
      {text}
      <img src={icon} alt="Icon" className="ml-2" />
    </button>
  );
}

export default MyButton;
