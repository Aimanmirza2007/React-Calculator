import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import React from "react";

function App() {
  const [inputvalue, setValue] = useState("");

  // value get function
  function getValue(event) {
    setValue(inputvalue + event.target.value);
  }

  // calculate function
  function calculateValue() {
    try {
      setValue(eval(inputvalue));
    } catch {
      setValue("Syntax Error");
    }
  }

  // input value clear function
  function clearValue() {
    setValue("");
  }

  // last value delete function
  function deleteLast() {
    setValue(inputvalue.slice(0, -1));
  }
  return (
    <>
      <div className="container">
        <div className="main">
          <input type="text" className="input" value={inputvalue} />
          <div className="space">
            <button className="btn btn2" value="AC" onClick={clearValue}>
              AC
            </button>
            <button className="btn btn2" value="Del" onClick={deleteLast}>
              Del
            </button>
            <button className="btn btn2" value="/" onClick={getValue}>
              /
            </button>
            <button className="btn btn2" value="%" onClick={getValue}>
              %
            </button>
          </div>
          <div className="space">
            <button className="btn" value="7" onClick={getValue}>
              7
            </button>
            <button className="btn" value="8" onClick={getValue}>
              8
            </button>
            <button className="btn" value="9" onClick={getValue}>
              9
            </button>
            <button className="btn btn2" value="*" onClick={getValue}>
              *
            </button>
          </div>
          <div className="space">
            <button className="btn" value="4" onClick={getValue}>
              4
            </button>
            <button className="btn" value="5" onClick={getValue}>
              5
            </button>
            <button className="btn" value="6" onClick={getValue}>
              6
            </button>
            <button className="btn btn2" value="-" onClick={getValue}>
              -
            </button>
          </div>
          <div className="space">
            <button className="btn" value="1" onClick={getValue}>
              1
            </button>
            <button className="btn" value="2" onClick={getValue}>
              2
            </button>
            <button className="btn" value="3" onClick={getValue}>
              3
            </button>
            <button className="btn btn2" value="+" onClick={getValue}>
              +
            </button>
          </div>
          <div className="space">
            <button className="btn" value="0" onClick={getValue}>
              0
            </button>
            <button className="btn" value="00" onClick={getValue}>
              00
            </button>
            <button className="btn btn2" value="." onClick={getValue}>
              .
            </button>
            <button className="btn btn2" value="=" onClick={calculateValue}>
              =
            </button>
          </div>
        </div>
      </div>
    </>
  );
}

export default App;
