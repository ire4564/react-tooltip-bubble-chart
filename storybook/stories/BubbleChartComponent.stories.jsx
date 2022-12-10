import React from "react";

import { BubbleChartComponent } from "./BubbleChartComponent";

export default {
  title: "Example/BubbleChart",
  component: BubbleChartComponent,
  argTypes: {
    backgroundColor: { control: "color" },
  },
};

const Template = (args) => <BubbleChartComponent {...args} />;

export const Move = Template.bind({});
Move.args = {
  move: true,
  bubblesData: [
    {
      fillColor: "rgb(52, 202, 173, 0.3)",
      id: 0,
      name: "Getting\nStart",
      size: 120,
      dYdX1: { dy: -2, dx: -4 },
    },
    {
      fillColor: "rgb(52, 202, 173, 0.3)",
      id: 1,
      name: "Setting\nme",
      size: 50,
      dYdX1: { dy: -2, dx: -3 },
      dYdX2: { dy: 8, dx: -20 },
    },
    {
      fillColor: "rgb(52, 202, 173, 0.3)",
      id: 2,
      name: "Getting\nStart",
      size: 120,
      dYdX1: { dy: -2, dx: -4 },
    },
    {
      fillColor: "rgb(52, 202, 173, 0.3)",
      id: 3,
      name: "Setting\nme",
      size: 50,
      dYdX1: { dy: -2, dx: -3 },
      dYdX2: { dy: 8, dx: -20 },
    },
    {
      fillColor: "rgb(52, 202, 173, 0.3)",
      id: 4,
      name: "Getting\nStart",
      size: 120,
      dYdX1: { dy: -2, dx: -4 },
    },
    {
      fillColor: "rgb(52, 202, 173, 0.3)",
      id: 5,
      name: "Setting\nme",
      size: 50,
      dYdX1: { dy: -2, dx: -3 },
      dYdX2: { dy: 8, dx: -20 },
    },
    {
      fillColor: "rgb(52, 202, 173, 0.3)",
      id: 6,
      name: "Getting\nStart",
      size: 120,
      dYdX1: { dy: -2, dx: -4 },
    },
    {
      fillColor: "rgb(52, 202, 173, 0.3)",
      id: 7,
      name: "Setting\nme",
      size: 50,
      dYdX1: { dy: -2, dx: -3 },
      dYdX2: { dy: 8, dx: -20 },
    },
  ],
};

export const Fixed = Template.bind({});
Fixed.args = {
  move: false,
  bubblesData: [
    {
      fillColor: "#d06f6f",
      id: 0,
      name: "Getting\nStart",
      size: 120,
      dYdX1: { dy: -2, dx: -4 },
    },
    {
      fillColor: "#e1c0c0",
      id: 1,
      name: "Setting\nthis\nCharts",
      size: 100,
    },
    {
      fillColor: "#f2c3c3",
      id: 2,
      name: "Setting\nme",
      size: 50,
      dYdX1: { dy: -2, dx: -3 },
      dYdX2: { dy: 8, dx: -20 },
    },
    {
      fillColor: "#d06f6f",
      id: 3,
      name: "Getting\nStart",
      size: 120,
      dYdX1: { dy: -2, dx: -4 },
    },
    {
      fillColor: "#e1c0c0",
      id: 4,
      name: "Setting\nthis\nCharts You Can show This!",
      size: 120,
      dYdX1: { dy: 0, dx: -4 },
      dYdX2: { dy: 10, dx: -30 },
    },
    {
      fillColor: "#f2c3c3",
      id: 5,
      name: "Setting\nme",
      size: 50,
      dYdX1: { dy: -2, dx: -3 },
      dYdX2: { dy: 8, dx: -20 },
    },
    {
      fillColor: "#d06f6f",
      id: 6,
      name: "Getting\nStart",
      size: 120,
      dYdX1: { dy: -2, dx: -4 },
    },
    {
      fillColor: "#e1c0c0",
      id: 7,
      name: "Setting\nthis\nCharts",
      size: 100,
    },
    {
      fillColor: "#f2c3c3",
      id: 8,
      name: "Setting\nme",
      size: 50,
      dYdX1: { dy: -2, dx: -3 },
      dYdX2: { dy: 8, dx: -20 },
    },
    {
      fillColor: "#d06f6f",
      id: 9,
      name: "Getting\nStart",
      size: 120,
      dYdX1: { dy: -2, dx: -4 },
    },
    {
      fillColor: "#e1c0c0",
      id: 10,
      name: "Setting\nthis\nCharts",
      size: 100,
    },
    {
      fillColor: "#f2c3c3",
      id: 11,
      name: "Setting\nme",
      size: 50,
      dYdX1: { dy: -2, dx: -3 },
      dYdX2: { dy: 8, dx: -20 },
    },
  ],
};
