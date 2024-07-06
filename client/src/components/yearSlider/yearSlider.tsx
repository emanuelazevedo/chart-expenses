import React, { useState } from "react";
import { useDidMount } from "@/hooks";
import { YEARS } from "@/constants";

export const YearSlider = () => {
  const [yearsList, setYearList] = useState<number[]>();

  useDidMount(() => {
    setYearList(YEARS);
  });

  return (
    <>
      <div className="max-h-96 overflow-y-auto">
        <div className="flex flex-col divide-y divide-solid w-60 content-center justify-center">
          {yearsList &&
            yearsList.map((year) => (
              <div className="text-cyan-300 p-4">{year}</div>
            ))}
        </div>
      </div>
    </>
  );
};
