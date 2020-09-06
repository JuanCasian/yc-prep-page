import React, { useState } from "react";
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
  "You seem to have everything solved; capital, technology, risk... What is stopping you?",
  "How many merchants?",
  "What was your growth like in August?",
  "Why don't do an asset-light model?",
  "What experience do you have in the industry?",
  "What if Affirm or Addi comes to LATAM?",
  "Why they don't simply wait and save?",
  "Why they don't simply get a credit card?",
  "How is the partnership going?",
  "Is it ecommerce or retail?",
  "What is the subset of most desperate users? What is the common element in your users?",
  "Why bicycles? ",
  "What is your growth like? What is your user growth rate?",
  "What are you building? (What is Atrato?) In one sentence",
  "How much money could you make per year? How does this become a multi-billion dollar company?",
  "What are they doing now? What are alternatives and substitutes?",
  "Why now?",
  "How do you know they need it? ",
  "What, exactly, makes you different from existing options? What's new of what you are making?",
  "How will customers and/or users find out about you?  Distribution strategy and how will you grow?",
  "What are the key things about your field that outsiders don't understand? What do you understand that others don't? Do you understand the market? Key insight?",
  "How many users do you have? How many users are paying?",
  "Why isn't someone already doing this? ",
  "Why do your users need you?",
  "How much does user acquisition costs? (CAC)",
  "How large is the market that you are going after? ",
  "What is your conversion rate? Acquisition funnel and conversion rate?",
  "How much do you make per loan?",
  "Who are your competitors? Who might become competitors? How much are competitors making? How many users do competitors have?",
  "Why focus only on bikes?",
  "Why do the reluctant users hold back? What resistance will users have to trying you and how will you overcome it? How are you overcoming it?",
  "Are you launched?",
  "What is the typical business/merchant you have?",
  "What are your most important metrics? ",
  "What has surprised you about user behavior?",
  "What are the top things your user wants?",
  "Total costs? Burn?",
  "Why did you choose this idea? What is your personal involvement? What is your domain expertise? Why do you want to dedicate your life working on this?",
  "What makes new users try you?",
  "Tell us something surprising/impressive you have done?",
  "What is your revenue?",
  "How are you understanding customer needs?",
  "Why such a low default rate?",
  "Why it's so high?",
  "Why do you think you can predict risk ?",
  "How is COVID-19 affecting your business?",
  "What's your edge in detecting risk?",
  "What data do you use?",
  "Isn't it risky?",
  "So they are at the point of sale applying and the whole process?",
  "What's your default rate?",
  "What are your economics like?",
  "How do you evaluate the risk?",
  "How do you do your underwriting?",
  "What interest rate do you charge?",
  "Where's the rocket science here?",
  "What measures did you take with covid?",
  "How was your loan book affected with the pandemic?",
  "Funny story/anecdote",
  "What if they don't want to pay you?",
  "How will you make money?",
  "What have you learned so far from working on it?",
];

const valorDeI = preguntas.length - 1;
for (let i = valorDeI; i > 0; i--) {
  if (i === 1) {
    console.log("shuffled");
  }
  const j = Math.floor(Math.random() * i);
  const temp = preguntas[i];
  preguntas[i] = preguntas[j];
  preguntas[j] = temp;
}

function App() {
  const [disabled, setDisabled] = useState(false);
  const [counter, setCounter] = useState(-1);
  const [tiempoFuera, setTiempoFuera] = useState(true);
  return (
    <div className="App">
      <h1>{tiempoFuera ? "TIEMPO TERMINADO" : preguntas[counter]}</h1>
      <button
        disabled={disabled}
        onClick={() => {
          setCounter(counter + 1);
          setDisabled(true);
          setTiempoFuera(false);
          console.log(counter);
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
          console.log(counter);
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
