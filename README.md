# react-tooltip-bubble-chart

A multi-selector component for the sandbox project MIP. You can freely customize the `select-all` function and `select-one` and inside the pannel. This project was made using `react-multi-select-component` open source.

[![NPM](https://img.shields.io/npm/v/react-multi-select-component.svg)](https://github.com/ire4564/react-tooltip-bubble-chart)

## ✨ Features

- ✌ Written TypeScript
- ✅ Available in React
- 🌀 Available Interactive motion
- 💕 Can Custom each bubble chart object
- 🌟 Can check the contents of the object as a tooltip

## 🔧 Installation

```bash
npm install react-tooltip-bubble-chart #npm
```

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

## 👀 Props

| Prop              | Description                                                | Type      | Test          |
| ----------------- | ---------------------------------------------------------- | --------- | ------------- |
| `bubblesData`     | value for `aria-labelledby`                                | `array`   | bubblesData[] |
| `move`            | options for dropdown                                       | `boolean` | true          |
| `width`           | pre-selected rows                                          | `number`  | 700           |
| `height`          | toggle 'Select All' option                                 | `number`  | 470           |
| `backgroundColor` | show spinner on select                                     | `string`  | white         |
| `textFillColor`   | toggle dropdown on hover option                            | `string`  | #717C84       |
| `minValue`        | [localization ↗](stories/recipes/localization.stories.mdx) | `number`  | 1             |
| `maxValue`        | onChange callback                                          | `number`  | 150           |

|

## ⭕ Test

## 📜 License

MIT &copy; [harshzalavadiya](https://github.com/harshzalavadiya)
