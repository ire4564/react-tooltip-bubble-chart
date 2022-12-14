import "./App.css";
import BubbleChart from "react-tooltip-bubble-chart";

function App() {
  const data = [
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
  ];

  return (
    <div>
      <BubbleChart
        key={`bubble-chart`}
        bubblesData={data}
        width={700}
        height={470}
        textFillColor="#717C84"
        backgroundColor="white"
        minValue={1}
        maxValue={150}
        move={true}
      />
    </div>
  );
}

export default App;
