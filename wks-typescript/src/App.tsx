import React, { useState } from "react";
import logo from "./logo.svg";
import "./App.css";

interface AppProps {
  title: string;
}

const App = ({ title }: AppProps) => {
  const [counter, setCounter] = useState(0);

  return (
    <div>
      <h3>Henry Workshop - {title}</h3>
      <hr></hr>
      <button
        onClick={() => setCounter(counter === 10 ? counter : counter + 1)}
        disabled={counter === 10 ? true : false} 
      >
        Increment
      </button>
      <button
        onClick={() => setCounter(counter < 1 ? counter : counter - 1)}
        disabled={counter === 0 ? true : false}
      >
        Decrement
      </button>
      <br></br>
      <span>{counter}</span>
    </div>
  );
};

export default App;
