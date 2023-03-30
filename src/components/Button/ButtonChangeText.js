import React from "react";
import "./ButtonChangeText.css";

const ButtonChangeText = ({ firstText, twoText }) => {
  return (
    <div class="buttons">
      <button class="btn">
        <span></span>
        <p
          data-start="good luck!"
          data-text={twoText}
          data-title={firstText}
        ></p>
      </button>
    </div>
  );
};

export default ButtonChangeText;
