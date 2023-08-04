import React, { useState } from "react";
import InfoSection from "../pages/InfoSection";
import SelectPlan from "../pages/SelectPlan";
import Button from "./Button";
import StepCard from "./StepCard";
import Summary from "../pages/Summary";
import AddOns from "../pages/AddOns";
import useMultiForm from "../hooks/useMultiForm";
import { planOptions } from "../hooks/PlanOptions";

const MainPage = () => {
  
  const formSteps = [
    <InfoSection />,
    <SelectPlan />,
    <AddOns />,
    <Summary />,
  ];

  const { currentIndex, currentStep, goBackward, isFirstStep, isLastStep, goForward } = useMultiForm(formSteps);

  // Use state to store the form data
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phoneNumber: "",
    selectedPlanValue: "Arcade",
    planLength: false,
    isOnline: false,
    isLargerStorage: false,
    isCustomizable: false,
  });

    // DITO INUPDATE YUNG VALUE NG NAPILING PLAN KUNG ARCADE,PRO OR ADVANCE
    const updateForm = (updatedData) => {
      setFormData((prev) => {
        return { ...formData, ...updatedData };
      });
    };
  
  

  // Function to handle form submission and navigation
  const handleSubmit = () => {
    goForward();
    console.log(formData);
  };

  return (
    <div className="relative flex items-center justify-center h-screen w-screen bg-neutral-magnolia">
      <div className="main-card flex main-container relative bg-neutral-white rounded-lg ">
        <StepCard steps={formSteps} currentIndex={currentIndex} />
        <div className="right-container flex flex-col h-fit place-self-center  ">
          {React.cloneElement(currentStep, 
            { goForward, goBackward, formData, setFormData, handleSubmit, updateForm })}
        </div>
      </div>
    </div>
  );
};

export default MainPage;
