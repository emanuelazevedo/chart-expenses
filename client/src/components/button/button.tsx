import React from "react";
import { ButtonProps } from "./button.types";

export const Button: React.FC<ButtonProps> = ({ children, onPress }) => {
  return (
    <>
      <div className="rounded-md w-fit bg-blue-500 p-0.5">
        <div className="px-2 bg-blue-500 rounded-md border-2">
          <button className="text-white px-1" onClick={onPress}>
            {children}
          </button>
        </div>
      </div>
    </>
  );
};
