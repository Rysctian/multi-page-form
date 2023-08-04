import React, { useState } from 'react';
import sidebarImage from '../assets/images/bg-sidebar-desktop.svg';


const StepCard = ({ currentIndex }) => {
  const steps = [
    { step: 1, description: "YOUR INFO" },
    { step: 2, description: "SELECT PLAN" },
    { step: 3, description: "ADD-ONS" },
    { step: 4, description: "SUMMARY" }
  ];

  
  return (
    <div className=" m-4 steps-container rounded-lg bg-center bg-no-repeat bg-cover" 
        style={{ backgroundImage: `url(${sidebarImage})` }}>
      
      <div className="ul-steps">
        {steps.map((step) => (
          <div className="li-steps-container" key={step.step}>
            <div
              className={`step-circle ${currentIndex === step.step -1 ? 'bg-primary-pastelBlue ' : 'text-neutral-white'}`}
            >
              {step.step}
            </div>
            <div className="flex flex-col">
              <span className="font-base text-xs text-neutral-coolGray">
                STEP {step.step}
              </span>
              <span className="text-md font-semibold text-neutral-white">
                {step.description}
              </span>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default StepCard;
