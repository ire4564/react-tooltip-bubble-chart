import React from "react";
import PropTypes from "prop-types";
import "./BubbleChart/BubbleChartStyle.scss";
import BubbleChart from "./BubbleChart/BubbleChart";

export const BubbleChartComponent = ({
  bubblesData,
  width,
  height,
  backgroundColor,
  textFillColor,
  minValue,
  maxValue,
  move,
  ...props
}) => {
  {
    return (
      <>
        <BubbleChart
          bubblesData={bubblesData}
          width={width}
          height={height}
          textFillColor={textFillColor}
          backgroundColor={backgroundColor}
          minValue={minValue}
          maxValue={maxValue}
          move={move}
        />
      </>
    );
  }
};

BubbleChartComponent.propTypes = {
  bubblesData: PropTypes.array,
  width: PropTypes.number,
  height: PropTypes.number,
  backgroundColor: PropTypes.string,
  textFillColor: PropTypes.string,
  minValue: PropTypes.number,
  maxValue: PropTypes.number,
  move: PropTypes.bool,
};

BubbleChartComponent.defaultProps = {
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
      id: 0,
      name: "Setting\nthis\nCharts",
      size: 100,
    },
    {
      fillColor: "#f2c3c3",
      id: 0,
      name: "Setting\nme",
      size: 50,
      dYdX1: { dy: -2, dx: -3 },
      dYdX2: { dy: 8, dx: -20 },
    },
  ],
  width: 700,
  height: 470,
  backgroundColor: "white",
  textColor: "#717C84",
  minValue: 1,
  maxValue: 150,
  move: true,
};
