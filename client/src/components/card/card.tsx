import React from "react";
import { CardProps } from "./card.types";

export const Card: React.FC<CardProps> = ({ children, style }) => {
  return (
    <div
      className="rounded-md w-fit h-fit p-4 border-2 border-blue-500"
      style={{ ...style }}
    >
      {children}
    </div>
  );
};
