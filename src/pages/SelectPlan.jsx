import React, { useEffect, useState } from "react";
import Button from "../components/Button";
import { Switch } from "@headlessui/react";
import { planOptions } from "../hooks/PlanOptions";
import arcadeIcon from "../assets/images/icon-arcade.svg";
import advancedIcon from "../assets/images/icon-advanced.svg";
import proIcon from "../assets/images/icon-pro.svg";

const SelectPlan = ({
  goForward,
  goBackward,
  formData,
  setFormData,
  updateForm,
  handleSubmit
}) => {


  const handlePlanChange = () => {
    setFormData((prevFormData) => ({
      ...prevFormData,
      planLength: !prevFormData.planLength,
    }));
  };

  useEffect(() => {
    console.log("formData:", formData);
    console.log("selectedPlanValue:", formData.selectedPlanValue);
  }, [formData]);

  return (
    <form onSubmit={handleSubmit} className="h-[30rem] flex flex-col gap-2">
      <div className="flex flex-col font-ubuntu text-primary-marineBlue text-4xl font-extrabold">
        Select your plan
        <span className="font-ubuntu text-sm text-neutral-lightGray font-light">
          You have the option of monthly or yearly billing.
        </span>
      </div>

      <div className="flex flex-col gap-10 mt-10 place-self-center">
        <div className="flex gap-8">
          {/* ---------ARCADE */}
          <div>
            <input
              id="arcade"
              name="arcade"
              type="radio"
              checked={formData.selectedPlanValue === "Arcade"}
              // onChange function para iupdate yung selectedPlanValue sa formData
              // dito ginamit natin yung updateForm function para ipasok yung new value sa formData
              // yung updateForm function ang job niya is i-update yung new value sa formData
              onChange={() => updateForm({ selectedPlanValue: "Arcade" })}
              className="hidden"
            />
            <label
              htmlFor="arcade"
              className={`hover:border-black  border border-neutral-coolGray rounded-md flex flex-col justify-center place-items-start w-[8.688rem] h-[11.25rem] p-4 cursor-pointer ${
                formData.selectedPlanValue === "Arcade"
                  ? "border-2 border-primary-purplishBlue"
                  : ""
              }`}
            >
              <div className="flex flex-col ">
                <img
                  src={arcadeIcon}
                  alt="Arcade Icon"
                  className="h-8 w-8 mb-2"
                />
                <h1 className="font-ubuntu text-primary-marineBlue text-lg font-semibold mt-8">
                  Arcade
                </h1>
                <p className="font-ubuntu text-sm text-neutral-coolGray font-light ">
                  {formData.planLength
                    ? `$${planOptions.Pro.yearly}/yr `
                    : `$${planOptions.Pro.monthly}/mo`}
                </p>
                <p className="font-ubuntu text-sm text-primary-marineBlue font-light">
                  {formData.planLength ? "2 months free" : ""}
                </p>
              </div>
            </label>
          </div>

          {/* ---------ADVANCE */}
          <div>
            <input
              id="advanced"
              name="advanced"
              type="radio"
              checked={formData.selectedPlanValue === "Advanced"}
              onChange={() => updateForm({ selectedPlanValue: "Advanced" })}
              className="hidden"
            />
            <label
              htmlFor="advanced"
              className={` hover:border-black  border border-neutral-coolGray rounded-md flex flex-col justify-center place-items-start w-[8.688rem] h-[11.25rem] p-4 cursor-pointer ${
                formData.selectedPlanValue === "Advanced"
                  ? "border-2 border-primary-purplishBlue"
                  : ""
              }`}
            >
              <div className="flex flex-col ">
                <img
                  src={advancedIcon}
                  alt="Arcade Icon"
                  className="h-8 w-8 mb-2"
                />
                <h1 className="font-ubuntu text-primary-marineBlue text-lg font-semibold mt-8">
                  Advance
                </h1>
                <p className="font-ubuntu text-sm text-neutral-coolGray font-light ">
                  {formData.planLength
                    ? `$${planOptions.Pro.yearly}/yr `
                    : `$${planOptions.Pro.monthly}/mo`}
                </p>
                <p className="font-ubuntu text-sm text-primary-marineBlue font-light">
                  {formData.planLength ? "2 months free" : ""}
                </p>
              </div>
            </label>
          </div>

          {/* --------- PRO */}
          <div className="flex flex-col">
            <input
              id="pro"
              name="pro"
              type="radio"
              checked={formData.selectedPlanValue === "Pro"}
              onChange={() => updateForm({ selectedPlanValue: "Pro" })}
              className="hidden"
            />
            <label
              htmlFor="pro"
              className={`hover:border-black border border-neutral-coolGray rounded-md flex flex-col justify-center place-items-start w-[8.688rem] p-4 h-[11.25rem] cursor-pointer ${
                formData.selectedPlanValue === "Pro"
                  ? "border-2 border-primary-purplishBlue"
                  : ""
              }`}
            >
              <div className="flex flex-col ">
                <img src={proIcon} alt="Arcade Icon" className="h-8 w-8 mb-2" />
                <h1 className="font-ubuntu text-primary-marineBlue text-lg font-semibold mt-8">
                  Pro
                </h1>
                <p className="font-ubuntu text-sm text-neutral-coolGray font-light ">
                  {formData.planLength
                    ? `$${planOptions.Pro.yearly}/yr `
                    : `$${planOptions.Pro.monthly}/mo`}
                </p>
                <p className="font-ubuntu text-sm text-primary-marineBlue font-light">
                  {formData.planLength ? "2 months free" : ""}
                </p>
              </div>
            </label>
          </div>
        </div>

        <div className="flex gap-2 place-self-center bg-neutral-magnolia w-full items-center place-content-center h-9 rounded-md ">

          <span
            className={`font-ubuntu text-sm font-semibold 
           hover:text-primary-marineBlue cursor-pointer 
           ${
             formData.planLength
               ? "text-neutral-coolGray"
               : " text-primary-marineBlue"
           }`}
          >
            Monthly
          </span>
          <Switch
            checked={formData.planLength}
            onChange={handlePlanChange}
            className={`bg-[hsl(213,96%,18%)] ${
              formData.planLength ? " bg-primary-marineBlue" : ""
            } relative inline-flex h-[24px] w-[48px] shrink-0 cursor-pointer rounded-full border-2 border-transparent transition-colors duration-200 ease-in-out focus:outline-none focus-visible:ring-2  focus-visible:ring-white focus-visible:ring-opacity-75`}
          >
            <span className="sr-only"></span>
            <span
              aria-hidden="true"
              className={`${
                formData.planLength ? "translate-x-6" : "translate-x-0"
              } pointer-events-none inline-block h-[20px] w-[20px] transform rounded-full bg-white shadow-lg ring-0 transition duration-200 ease-in-out`}
            />
          </Switch>
          <span
            className={`font-ubuntu font-semibold text-sm 
       hover:text-primary-marineBlue cursor-pointer 
       ${
         !formData.planLength
           ? "text-neutral-coolGray"
           : " text-primary-marineBlue"
       }`}
          >
            Yearly
          </span>
        </div>
      </div>
      
      <div className="buttons mt-20 ">
        <button className="h-10 w-28 rounded-lg text-neutral-coolGray font-ubuntu hover:text-primary-marineBlue font-medium" type="button" onClick={goBackward}>
          Go Back
        </button>
        <Button type="button" onClick={goForward}>
          Next Step
        </Button>
      </div>
    </form>
  );
};

export default SelectPlan;

// MANUALLY TYPE

//  {/* ---------ARCADE */}
//  <div className="flex flex-col justify-center place-items-center w-[8.688rem] bg-slate-400 h-[15.25rem]">
//  <h1>Arcade</h1>
//  <p>{formData.planLength ? "$90" : "9"}</p>
//  <input
//    id="arcade"
//    name="plan"
//    type="radio"
//    checked={formData.selectedPlanValue === "Arcade"}
//    // onChange function para iupdate yung selectedPlanValue sa formData
//    // dito ginamit natin yung updateForm function para ipasok yung new value sa formData
//    // yung updateForm function ang job niya is i-update yung new value sa formData
//    onChange={() => updateForm({ selectedPlanValue: "Arcade" })}
//  />
// </div>

// {/* --------- PRO */}
// <div className="flex flex-col justify-center place-items-center w-[8.688rem] bg-slate-400 h-[15.25rem] ">
//  <h1>Pro</h1>
//  <p>{formData.planLength ? "$120" : "12"}</p>
//  <input
//    id="pro"
//    name="plan"
//    type="radio"
//    checked={formData.selectedPlanValue === "Pro"}
//    onChange={() => updateForm({ selectedPlanValue: "Pro" })}
//  />
// </div>
// {/* ---------ADVANCE */}
// <div className="flex flex-col justify-center place-items-center w-[8.688rem] bg-slate-400 h-[15.25rem]">
//  <h1>Advance</h1>
//  <p>{formData.planLength ? "$150" : "15"}</p>
//  <input
//    id="advance"
//    name="plan"
//    type="radio"
//    checked={formData.selectedPlanValue === "Advance"}
//    onChange={() => updateForm({ selectedPlanValue: "Advance" })}
//  />
// </div>
