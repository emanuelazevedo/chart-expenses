import React, { useState } from "react";
import { useDidMount } from "@/hooks";
import { ChartDataProps } from "@/types";
import data from "./data.json";

export const useFrontPageHelper = () => {
  const [chartData, setChartData] = useState<ChartDataProps[]>();

  useDidMount(() => {
    // const copyArrayData = MONTHS.map((month: any) => ({
    //   name: month,
    //   creditCard: 500,
    //   morgage: 500,
    //   internet: 30,
    //   water: 30,
    //   eletricity: 11,
    // }));
    const copyArrayData = data.data.map((moneyPerData) => ({
      name: `${moneyPerData.name} - ${moneyPerData.year}`,
      creditCard: moneyPerData.creditCard,
      morgage: moneyPerData.morgage,
      internet: moneyPerData.internet,
      water: moneyPerData.water,
      eletricity: moneyPerData.eletricity,
      gas: moneyPerData.gas,
      condominiumDues: moneyPerData.condominiumDues,
      condominiumConstructionDues: moneyPerData.condominiumConstructionDues,
      salaryAfterExpenses: calcSalaryAfterExpenses(moneyPerData),
    }));

    setChartData(copyArrayData);
    // setChartData([
    //   { name: MONTHS[0], cc: 200, hipoteca: 500 },
    //   { name: "feb", cc: 50, hipoteca: 450 },
    //   { name: "mar", cc: 100, hipoteca: 450 },
    // ]);
  });

  return {
    chartData,
  };
};
function calcSalaryAfterExpenses(data: ChartDataProps) {
  return (
    data.salary -
    (data.creditCard +
      data.morgage +
      data.internet +
      data.water +
      data.eletricity +
      data.gas +
      data.condominiumDues +
      data.condominiumConstructionDues)
  ).toFixed(2);
}
