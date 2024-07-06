import React from "react";
import { CheckboxProps } from "./checkbox.types";

export const Checkbox: React.FC<CheckboxProps> = ({
  onPress,
  label,
  isChecked,
}) => {
  return (
    <>
      <div style={{ display: "flex", gap: "5px" }}>
        <div>{label}</div>
        {/* <div className="rounded-md bg-blue-500"> */}
        <input
          type="checkbox"
          onClick={onPress}
          checked={isChecked}
          style={{ width: "30px" }}
        />
        {/* </div> */}
      </div>
    </>
  );
};
