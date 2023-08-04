import React from "react";
import Button from "../components/Button";
import { useEffect } from "react";
import { planOptions } from "../hooks/PlanOptions";

const AddOns = ({
  goForward,
  goBackward,
  formData,
  setFormData,
  handleSubmit,
}) => {
  const handleAddOnsChange = (event) => {
    const addOnName = event.target.name;
    setFormData((prevFormData) => ({
      ...prevFormData,
      [addOnName]: !prevFormData[addOnName],
    }));
  };

  return (
    <form className="h-[30rem] flex flex-col " onSubmit={handleSubmit}>
      <div className="flex flex-col font-ubuntu text-primary-marineBlue text-4xl font-extrabold ">
        Pick add-ons
        <span className="font-ubuntu text-sm text-neutral-lightGray font-light">
          Add-ons help enhance your gaming experience.
        </span>
      </div>

      <div className="flex flex-col gap-5 mt-10 place-self-center">
        <div className="flex font-ubuntu h-[5rem] w-[27.6rem] rounded-lg hover:border-black  border border-neutral-coolGray">
          <input
            type="checkbox"
            name="isOnline"
            id="isOnline"
            onChange={handleAddOnsChange}
            checked={formData.isOnline}
          />
          <label htmlFor="isOnline" className="flex gap-[9.8rem] items-center">
            <h1 className="flex flex-col">
              Online Service
              <span className=" text-neutral-coolGray text-sm">Access to Multiplayer Games</span>
            </h1>
            <p className=" font-medium text-primary-purplishBlue">
              ${" "}
              {formData.planLength
                ? planOptions.onlineServices.yearly
                : planOptions.onlineServices.monthly}
              / {formData.planLength ? "yr" : "mo"}
            </p>
          </label>
        </div>
        <div className="flex place-content-center font-ubuntu h-[5rem] w-[27.6rem] rounded-lg  hover:border-black  border border-neutral-coolGray">
          <input
            type="checkbox"
            name="isLargerStorage"
            id="isLargerStorage"
            onChange={handleAddOnsChange}
            checked={formData.isLargerStorage}
          />
          <label htmlFor="isLargerStorage" className="flex gap-[11.8rem] items-center">
            <h1 className="flex flex-col">
              Larger Storage
              <span className=" text-neutral-coolGray text-sm">Extra 1 TB of cloud save</span>
            </h1>
            <p className=" font-medium text-primary-purplishBlue" >
              $
              {formData.planLength
                ? planOptions.largerStorage.yearly
                : planOptions.largerStorage.monthly}
              / {formData.planLength ? "yr" : "mo"}
            </p>
          </label>
        </div>
        <div className="flex pl-4 font-ubuntu h-[5rem] w-[27.6rem] rounded-lg  hover:border-black  border border-neutral-coolGray">
          <input
            type="checkbox"
            name="isCustomizable"
            id="isCustomizable"
            onChange={handleAddOnsChange}
            checked={formData.isCustomizable}
            className="mr-4 border-2 h-5 w-5  text-primary-purplishBlue
             bg-gray-100 border-gray-300 focus:ring-primary-purplishBlue
              dark:focus:ring-primary-purplishBlue dark:ring-offset-gray-800 
              focus:ring-2 "
          />
          <label htmlFor="isCustomizable" className="flex gap-[9.3rem] items-center">
            <h1 className="flex flex-col w-fit">
              Customizable Options
              <span className=" text-neutral-coolGray text-sm">Custom theme of your profile</span>
            </h1>
            <p className=" font-medium text-primary-purplishBlue">
              ${" "}
              {formData.planLength
                ? planOptions.customizableProfile.yearly
                : planOptions.customizableProfile.monthly}
              / {formData.planLength ? "yr" : "mo"}
            </p>
          </label>
        </div>
      </div>

      <div className="buttons mt-16 ">
        <button
          className="h-10 w-28 rounded-lg font-ubuntu hover:text-primary-marineBlue font-medium"
          type="button"
          onClick={goBackward}
        >
          Go Back
        </button>
        <Button type="button" onClick={goForward}>
          Next Step
        </Button>
      </div>
    </form>
  );
};

export default AddOns;
