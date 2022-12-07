import "./App.css";
import BubbleChart from "./BubbleChart/BubbleChart";

function App() {
  const data = [
    {
      fillColor: "rgb(52, 202, 173, 0.3)",
      id: 0,
      name: "블랙핑크\n지도",
      size: 120,
    },
    {
      theme: "white",
      fillColor: "white",
      id: 1,
      name: "workit",
      size: 120,
    },
    {
      fillColor: "rgb(52, 202, 173, 0.3)",
      id: 2,
      name: "안녕\n어렵다",
      size: 120,
      dYdX1: { dy: -3, dx: -2 },
      dYdX2: { dy: 14, dx: -35 },
    },
    {
      theme: "white",
      fillColor: "white",
      id: 3,
      name: "블랙핑크\n아오오",
      size: 80,
    },
    {
      fillColor: "rgb(52, 202, 173, 0.3)",
      id: 4,
      name: "want to\nspace it",
      size: 120,
      dYdX2: { dy: 12, dx: -50 },
    },
    {
      fillColor: "rgb(52, 202, 173, 0.3)",
      id: 5,
      name: "일본\n경제",
      size: 100,
    },
    {
      fillColor: "rgb(52, 202, 173, 0.3)",
      id: 5,
      name: "일본\n테스트로",
      size: 120,
    },
    {
      fillColor: "rgb(52, 202, 173, 0.3)",
      id: 5,
      name: "한국\n성공안녕",
      size: 50,
      dYdX1: { dy: -3, dx: -2 },
      dYdX2: { dy: 10, dx: -26 },
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
