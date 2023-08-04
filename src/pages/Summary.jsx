import React from "react";
import Button from "../components/Button";
import { planOptions } from "../hooks/PlanOptions";

const Summary = ({
  goForward,
  goBackward,
  formData,
  setFormData,
  handleSubmit,
}) => {
  // DESTRUCTURE NG OBJECTS SA LOOB NG FORM DATA
  const { isOnline, isLargerStorage, isCustomizable } = formData;

  const totalPlanCost = formData.planLength
    ? planOptions[formData.selectedPlanValue].yearly
    : planOptions[formData.selectedPlanValue].monthly;

  console.log(totalPlanCost);

  const onlineServiceCost = formData.planLength
    ? planOptions.onlineServices.yearly
    : planOptions.onlineServices.monthly;

  const largerStorageCost = formData.planLength
    ? planOptions.largerStorage.yearly
    : planOptions.largerStorage.monthly;

  const customizableProfileCost = formData.planLength
    ? planOptions.customizableProfile.yearly
    : planOptions.customizableProfile.monthly;

  const addOnsCost = () => {
    let totalCost = 0;


    if (isOnline) {
      totalCost += onlineServiceCost;
    }

    if (isLargerStorage) {
      totalCost += largerStorageCost;
    }

    if (isCustomizable) {
      totalCost += customizableProfileCost;
    }
    return totalCost;
  };

  const totalAddonsCost = addOnsCost();

  const totalValue = (totalPlanCost, totalAddonsCost) => {
    return totalPlanCost + totalAddonsCost;
  };
  const totalValueResult = totalValue(totalPlanCost, totalAddonsCost);

  return (
    <form>
      <div>
        <h1 className="flex flex-col">
          Finishing up
          <span>Double-check everything looks OK before confirming.</span>
        </h1>
      </div>

      <div>
        <div className="PLAN">
          <div>
            {formData.selectedPlanValue}
            <span>{formData.planLength ? "(Yearly)" : "(Monthly)"} </span>
          </div>
          <div>${totalPlanCost}</div>
        </div>

        <div className="ADDONS">
          {isOnline && (
            <div>
              Online service <span>{onlineServiceCost}</span>
            </div>
          )}
          {isLargerStorage && (
            <div>
              Larger storage <span>{largerStorageCost}</span>
            </div>
          )}
          {isCustomizable && (
            <div>
              Customizable Profile <span>{customizableProfileCost}</span>
            </div>
          )}
        </div>

      <div className="TOTAL">{totalValueResult}</div>
      </div>

      <div className="buttons">
        <Button type="button" onClick={goBackward}>
          Back
        </Button>
        <Button type="button" onClick={goForward}>
          Next Step
        </Button>
      </div>
    </form>
  );
};

export default Summary;
