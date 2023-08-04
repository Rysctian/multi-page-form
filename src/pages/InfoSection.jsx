import React from "react";
import { useFormik } from "formik";
import * as Yup from "yup";
import InputForms from "../components/InputForms";
import useMultiForm from "../hooks/useMultiForm";
import Button from "../components/Button";

const InfoSection = ({ formData, setFormData, goForward }) => {
  const validationSchema = Yup.object({
    name: Yup.string().required("Name is required"),
    email: Yup.string()
      .email("Invalid email address")
      .required("Email is required"),
    phoneNumber: Yup.string()
      .matches(/^\d{11}$/, "Phone number must be 11 digits")
      .required("Phone number is required"),
  });

  const formik = useFormik({
    initialValues: formData,
    validationSchema: validationSchema,
    validateOnBlur: false,
    validateOnChange: false,
    onSubmit: (values) => {
      setFormData(values); // Update the form data in the parent component
      goForward();
    },
  });
  return (
    <form
      className="flex flex-col font-ubuntu h-[30rem]"
      onSubmit={formik.handleSubmit}
    >
      <div className="flex flex-col  font-ubuntu text-primary-marineBlue text-4xl font-extrabold ">
        Personal Info
        <span className="font-ubuntu text-sm text-neutral-lightGray font-light">
          Please provide your name, email address, and phone number.
        </span>
      </div>

      <div className="flex flex-col mt-7">
        <div className="inputs flex flex-col gap-3">
          <InputForms
            name={formik.values.name}
            email={formik.values.email}
            phoneNumber={formik.values.phoneNumber}
            nameError={formik.errors.name}
            emailError={formik.errors.email}
            phoneError={formik.errors.phoneNumber}
            handleChange={formik.handleChange}
          />
        </div>

      </div>
      <div className=" place-self-end mt-20">
          <Button type="submit">Next Page</Button>
        </div>
    </form>
  );
};

export default InfoSection;

// Siyempre, walang problema!

// Ang React.cloneElement ay isang function na ginagamit upang kopyahin ang isang React element at magdagdag o magbago ng mga props nito. Ito'y ginagamit kung gusto mong magpadala ng additional na mga props sa isang komponente na hindi mo direktang kontrolado.

// Sa iyong kaso, gusto mong ipasa ang goForward function bilang isang prop sa currentStep component. Dahil dito, ginagamit mo ang React.cloneElement.

// Tignan natin ang linya ng code na ito:

// jsx
// Copy code
// const currentStepWithProps = React.cloneElement(currentStep, { goForward });
// Ito ang simple at diretso sa puntong paliwanag:

// Tinatawag mo ang React.cloneElement function.
// Binibigay mo ang currentStep bilang unang argumento. Ito ang element na gusto mong kopyahin o "i-clone".
// Ang pangalawang argumento { goForward } ay isang object na naglalaman ng mga props na gusto mong idagdag sa currentStep element. Sa kasong ito, gusto mong magdagdag ng goForward prop.
// Kung ano ang ibabalik ng React.cloneElement ay eksaktong kopya ng currentStep pero may dagdag na goForward prop.

// Ito ay napakalaking tulong lalo na kung ang component ay hindi mo direktang kontrolado (halimbawa, ito ay ibinabalik ng ibang function, tulad sa iyong kaso kung saan currentStep ay ibinabalik ng iyong custom hook na useMultiForm). Sa ganitong paraan, maaari kang magpadala ng additional na mga props na kinakailangan ng komponente upang maipatupad ang gusto mong functionality.

// ----------------ANOTHER WAY

// // useMultiForm.js
// import { useState } from "react";

// const useMultiForm = (formSteps) => {
//   //... Your existing code...

//   const currentStepWithProps = React.cloneElement(formSteps[currentIndex], { goForward });

//   return {
//     currentIndex,
//     currentStep: currentStepWithProps, // Use currentStepWithProps here
//     formSteps,
//     goBackward,
//     goForward,
//     isFirstStep,
//     isLastStep
//   };
// };

// export default useMultiForm;

// // InfoSection.js
// import React from "react";
// import { useFormik } from "formik";
// import * as Yup from "yup";
// //...

// const InfoSection = ({ goForward }) => { // Accept goForward as a prop here
//   //... Your existing code...

//   const formik = useFormik({
//     //... Your existing code...

//     onSubmit: (values) => {
//       goForward(); // Use goForward here
//     },
//   });

//   //... Your existing code...
// };

// export default InfoSection;
