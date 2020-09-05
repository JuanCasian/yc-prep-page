import React, { useState } from "react";
import logo from "./logo.svg";
import "./App.css";

const preguntas = [
  "What are you building? (What is Atrato?) In one sentence",
  "Why bicycles? ",
  "How it works?",
  "So they are at the point of sale applying and the whole process? ",
  "Why they don't simply get a credit card?",
  "Why they don't simply wait and save?",
  "Is the approval/process instant?",
  "Why it hasn't been automated?",
  "What's the biggest bottleneck right now?",
  "You seem to have everything solved; capital, technology, risk... What is stopping you?",
  "What interest rate do you charge?",
  "Why it's so high?",
  "How do you evaluate the risk/loans?",
  "What's your default rate?",
  "Why such a low default rate?",
  "How was your loan book affected with the pandemic?",
  "What's your edge in detecting risk?",
  "Why don't do an asset-light model?",
  "Why do you think you can predict risk if none vintages have been closed?",
  "How is COVID-19 affecting your business?",
  "What measures did you take with covid?",
  "What is the typical business you have?",
  "How is the partnership going?",
  "Is it ecommerce or retail?",
  "Why do your users need you?",
  "Are you launched?",
  "How many users do you have? How many users are paying?",
  "How many merchants?",
  "What is the subset of most desperate users? What is the common element in your users?",
  "What does each founder do on the team? ",
  "",
  "",
  "Why did you get together?",
  "",
  "What was a difficult decision that you took? CHECKPOINT",
  "How did you meet each other? AQUI NOS QUEDAMOS!!!",
  "What have you learned so far from working on it? ",
  "Why did you choose this idea? What is your personal involvement? What is your domain expertise? Why do you want to dedicate your life working on this?",
  "If your startup succeeds, what additional areas might you be able to expand into? ",
  "How large is the market that you are going after? ",
  "What are the key things about your field that outsiders don’t understand? What do you understand that others don't? Do you understand the market? Key insight?",
  "What experience do you have in the industry?",
  "Why isn’t someone already doing this? ",
  "How will customers and/or users find out about you?  Distribution strategy and how will you grow?",
  "What, exactly, makes you different from existing options? What's new of what you are making?",
  "What are they doing now? What are alternatives and substitutes?",
  "Why focus only on bikes?",
  "How do you know they need it? ",
  "How will you make money?",
  "How much money could you make per year? How does this become a multi-billion dollar company?",
  "How much does user acquisition costs? (CAC)",
  "How much do you make per loan?",
  "What makes new users try you?",
  "Why do the reluctant users hold back? What resistance will users have to trying you and how will you overcome it? How are you overcoming it?",
  "What is your growth like? What is your user growth rate?",
  "What was your growth like in August?",
  "Where do you see yourselves in 1 year? 5 years?",
  "What is your conversion rate? Acquisition funnel and conversion rate?",
  "How are you understanding customer needs?",
  "What are the top things your user wants?",
  "What has surprised you about user behavior?",
  "What problems or hurdles are you anticipating? How will you overcome them? Six months from now, what would be your biggest problem?",
  "Do you have the chicken and egg problem?",
  "Where's the rocket science here?",
  "What's your next hire?",
  "Tell us something surprising/impressive you have done?",
  "In what ways are you resourceful? Will your team stick at this?",
  "What is the biggest mistake you have made?",
  "Are you open to change your idea?",
  "What is your revenue?",
  "What are your most important metrics? ",
  "Total costs? Burn?",
  "Who are your competitors? Who might become competitors? How much are competitors making? How many users do competitors have?",
  "Funny story/anecdote",
  "What if they don't want to pay you?",
  "Why now?",
  "How does your technology works? What's your tech stack?",
  "What if Affirm or Addi comes to LATAM?",
  "What decision algorithms are you using?",
  "What tools/technologies are you using for model-training?",
];

function App() {
  const [pregunta, setPregunta] = useState(
    "Presiona el botón para poner una pregunta"
  );
  const [disabled, setDisabled] = useState(false);
  return (
    <div className="App">
      <h1>{pregunta}</h1>
      <button
        disabled={disabled}
        onClick={() => {
          const num = Math.floor(Math.random() * Math.floor(preguntas.length));
          setPregunta(preguntas[num]);
          console.log(num);
          setDisabled(true);
          setTimeout(() => {
            setPregunta("TIEMPO TERMINADO");
            setDisabled(false);
          }, 15000);
        }}
      >
        Pregúntame
      </button>
    </div>
  );
}

export default App;
