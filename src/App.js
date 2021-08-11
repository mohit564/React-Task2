import { useState } from "react";
import Color from "./components/Color";

function App() {
  const [colors, setColors] = useState([
    { id: 1, value: "red", count: 0 },
    { id: 2, value: "orange", count: 0 },
    { id: 3, value: "navy", count: 0 },
  ]);

  const resetCountHandler = () => {
    colors.map((color) => {
      color.count = 0;
      return color;
    });
    setColors([...colors]);
  };

  const incrementCountHandler = (id) => {
    const index = colors.findIndex((color) => color.id === id);
    colors[index].count++;
    setColors([...colors]);
  };

  return (
    <div className="container">
      <button className="reset-game" onClick={resetCountHandler}>
        RESET
      </button>
      <div className="content">
        {colors.map((color) => (
          <Color
            key={color.id}
            color={color}
            clickHandler={incrementCountHandler}
          />
        ))}
      </div>
    </div>
  );
}

export default App;
