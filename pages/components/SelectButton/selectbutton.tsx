import React, { useState } from "react";

import css from "./Selectbutton.module.scss";

interface Button {
  label: string;
  value: boolean;
 
}

interface AppProps {
    labels:string[]; 
    heading:string; 
}
const generateButtons = (labels: string[]): Button[] => {
    return labels.map(label => ({ label, value: false }));
  };

  const Selectbutton: React.FC<AppProps> = ({ labels,heading }) => {
    const [buttons, setButtons] = useState<Button[]>(generateButtons(labels));
  

  const handleButtonClick = (label: string) => {
    const newButtonsState: Button[] = buttons.map(button => ({
      ...button,
      value: button.label === label
    }));
    setButtons(newButtonsState);
  };

  return (
    <div>
        <p className={css.select_button_Heading}>{heading}</p>
      <SpecialButton buttons={buttons} handleButtonClick={handleButtonClick} />
    </div>
  );
};

interface SpecialButtonProps {
  buttons: Button[];
  handleButtonClick: (label: string) => void;
}

const SpecialButton: React.FC<SpecialButtonProps> = ({
  buttons,
  handleButtonClick
}) => {
  return (
    <>
    <div className={css.Button_content}>
      {buttons.map((button, index) => (
        <button
          key={`${button.label}-${index}`}
          onClick={() => handleButtonClick(button.label)}
          className={button.value ? css.selectedButton : css.not_selectedButton}
        >
            
          {button.label.toUpperCase()}
        </button>
      ))}
      </div>
    </>
  );
};

export default Selectbutton;
