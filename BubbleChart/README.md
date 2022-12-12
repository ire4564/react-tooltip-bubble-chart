# react-tooltip-bubble-chart

![FILES](https://img.shields.io/github/directory-file-count/ire4564/react-tooltip-bubble-chart?style=for-the-badge)
![LICENSE](https://img.shields.io/npm/l/react-tooltip-bubble-chart?style=for-the-badge)
![DOWNLOADS](https://img.shields.io/npm/dt/react-tooltip-bubble-chart?style=for-the-badge)

This is a bubble chart component that includes a tooltip using `d3`. I created a component based on `React` and `Typescript` by referring to the open source [Draw a bubble chart](https://medium.com/react-courses/who-doesnt-like-charts-draw-a-bubble-chart-with-react-d3-typescript-2faf998109e2). When the mouse `hovers` over the bubble chart object, the contents inside the bubble chart are displayed as a `tooltip`. You can also customize the movement of the bubble chart through the `move` setting. This library can be an excellent choice for data visualization. I hope this is what you were looking for.

<br/>

## ✨ Features

- ✌ Written TypeScript
- ✅ Available in React
- 💬 Possible Fine text alignment
- 🌀 Available Interactive motion
- 💅 Can Custom each bubble chart object
- 🌟 Can check the contents of the object as a tooltip

<br/>

## 🔧 Installation

```bash
npm install react-tooltip-bubble-chart #npm
```

<br/>

## 📦 Example

![Example](https://user-images.githubusercontent.com/97079582/206947747-24172c87-2aff-412a-b317-2ce39753107f.gif)

```tsx
import "./App.css";
import BubbleChart from "react-tooltip-bubble-chart";

function Example() {
  const bubbleData = [
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
        bubblesData={bubbleData}
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

export default Example;
```

## ✔ Bubble Chart DataType

```tsx
export namespace BubbleChartTypes {
  export type Data = {
    fillColor: string;
    id: number;
    name: string;
    size: number;
    dYdX1: { dy: number; dx: number };
    dYdX2: { dy: number; dx: number };
    dYdX3: { dy: number; dx: number };
  };
}
```

<br/>

## 👀 Props

| Prop              | Description                                                  | Type      | Test          |
| ----------------- | ------------------------------------------------------------ | --------- | ------------- |
| `bubblesData`     | An array of text and `setting values` ​​for the bubble chart | `array`   | bubblesData[] |
| `move`            | Bubble chart `animation` settings dropdown                   | `boolean` | true          |
| `width`           | `Width` of the entire area of ​​the bubble chart             | `number`  | 700           |
| `height`          | `Height` of the entire area of ​​the bubble chart            | `number`  | 470           |
| `backgroundColor` | Set `background color` behind bubble chart                   | `string`  | white         |
| `textFillColor`   | Change the `color of the text` inside the bubble chart       | `string`  | #717C84       |
| `minValue`        | Bubble chart `minimum` weight value                          | `number`  | 1             |
| `maxValue`        | Bubble chart `maximum` weight value callback                 | `number`  | 150           |

<br/>

## ⭕ Test

If you need intuitive usage, you can try this library right away through Storybook. You can check the operation more intuitively. Please refer to the information below.

<br/>

## 📜 License

MIT &copy;
