import React from "react";
import {
  Bar,
  BarChart,
  CartesianGrid,
  Legend,
  Tooltip,
  XAxis,
  YAxis,
} from "recharts";
import { useFrontPageHelper } from "./frontPage.hook";
import { YearSlider, Card } from "@/components";

export const FrontPageScreen: React.FC = () => {
  const { chartData } = useFrontPageHelper();

  return (
    <div className="flex justify-between">
      <div className="flex justify-center w-full gap-40">
        <BarChart width={1200} height={250} data={chartData}>
          <CartesianGrid strokeDasharray="3 3" />
          <XAxis dataKey="name" />
          <YAxis />
          <Tooltip />
          <Legend />
          <Bar dataKey="morgage" fill="#d80056" />
          <Bar dataKey="creditCard" fill="#050404" />
          <Bar dataKey="internet" fill="#3235fc" />
          <Bar dataKey="water" fill="#2b69c6" />
          <Bar dataKey="eletricity" fill="#c7db18" />
          <Bar dataKey="gas" fill="#5cceb9" />
          <Bar dataKey="condominiumDues" fill="#b447d8" />
          <Bar dataKey="condominiumConstructionDues" fill="#a60fd8" />
          <Bar dataKey="salaryAfterExpenses" fill="#82ca9d" />
        </BarChart>
        {/* TODO: CREATE THE FORM TO ADD DATA */}
        <Card>
          <input type="radio" id="html" name="fav_language" value="HTML" />
          <input placeholder="valor" />
        </Card>
      </div>
      <div>
        <YearSlider />
      </div>
    </div>
  );
};
