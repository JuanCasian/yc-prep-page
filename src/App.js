import React, { useState } from "react";
import logo from "./logo.svg";
import "./App.css";

const preguntas = [
  "Why did you get together?",
  "What's the biggest bottleneck right now?",
  "What was a difficult decision that you took? ",
  "Where do you see yourselves in 1 year? 5 years?",
  "Why it hasn't been automated?",
  "Is the approval/process instant?",
  "What tools/technologies are you using for model-training?",
  "What decision algorithms are you using?",
  "How did you meet each other?",
  "How does your technology works? What's your tech stack?",
  "How it works?",
  "What is the biggest mistake you have made?",
  "What problems or hurdles are you anticipating? How will you overcome them? Six months from now, what would be your biggest problem?",
  "Are you open to change your idea?",
  "What's your next hire?",
  "What does each founder do on the team? ",
  "If your startup succeeds, what additional areas might you be able to expand into? ",
  "Do you have the chicken and egg problem?",
  "In what ways are you resourceful? Will your team stick at this?",
];

function App() {
  const [disabled, setDisabled] = useState(false);
  const [counter, setCounter] = useState(0);
  const [tiempoFuera, setTiempoFuera] = useState(true);
  return (
    <div className="App">
      <h1>{tiempoFuera ? "TIEMPO TERMINADO" : preguntas[counter]}</h1>
      <button
        disabled={disabled}
        onClick={() => {
          setCounter(Math.floor(Math.random() * Math.floor(preguntas.length)));
          setDisabled(true);
          setTiempoFuera(false);
          setTimeout(() => {
            setDisabled(false);
            setTiempoFuera(true);
          }, 15000);
        }}
      >
        Pregúntame
      </button>
      <button
        disabled={disabled}
        onClick={() => {
          setDisabled(true);
          setTiempoFuera(false);
          setTimeout(() => {
            setDisabled(false);
            setTiempoFuera(true);
          }, 15000);
        }}
      >
        Repetir
      </button>
    </div>
  );
}

export default App;
