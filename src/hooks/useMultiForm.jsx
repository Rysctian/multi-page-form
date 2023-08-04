import { useState } from "react";

// In useMultiForm.js
const useMultiForm = (formSteps) => {

    const [currentIndex, setCurrentIndex] = useState(0);
  
    const goForward = () => {
      if (currentIndex < formSteps.length - 1) {
        setCurrentIndex((prevIndex) => prevIndex + 1);
      }
    };
  
    const goBackward = () => {
      if (currentIndex > 0) {
        setCurrentIndex((prevIndex) => prevIndex - 1);
      }
    };
  
    const currentStep = formSteps[currentIndex];
    const isFirstStep = currentIndex === 0;
    const isLastStep = currentIndex === formSteps.length - 1;
  
    return {
      currentIndex,
      currentStep,
      formSteps,
      goBackward,
      goForward,
      isFirstStep,
      isLastStep
    };
  };
  
  export default useMultiForm;
  

  