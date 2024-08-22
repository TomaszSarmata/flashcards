import './App.css';
import { useState } from 'react';

const questions = [
  {
    id: 1,
    question: 'What language is React based on?"',
    answer: 'JavaScript',
  },
  {
    id: 2,
    question: 'What are the building blocks of React apps?',
    answer: 'Components',
  },
  {
    id: 3,
    question:
      "What's the name of the syntax we use to describe an UI in React?",
    answer: 'JSX',
  },
  {
    id: 4,
    question: 'How to pass data from parent to child component?',
    answer: 'Props',
  },
  {
    id: 5,
    question: 'How to give components memory?',
    answer: 'useState hook',
  },
  {
    id: 6,
    question:
      'What do we call an input element that is completely synchronised with state',
    answer: 'Controlled element',
  },
];

function App() {
  return (
    <div className="main-container">
      <FlashCards />
    </div>
  );
}

function FlashCards() {
  const [selectedId, setSelectedId] = useState(null);

  return (
    <>
      <ul
        style={{ listStyle: 'none' }}
        className="cards-container">
        {questions.map((question) => (
          <li
            onClick={() => {
              if (selectedId !== question.id) {
                setSelectedId(question.id);
              } else {
                setSelectedId(null);
              }
            }}
            key={question.id}
            className={`card ${selectedId === question.id ? 'backside' : ''}`}>
            <p>
              {question.id === selectedId ? question.answer : question.question}
            </p>
          </li>
        ))}
      </ul>
      <DateCounter />
    </>
  );
}

function DateCounter() {
  const [step, setStep] = useState(0);
  const [numOfDays, setNumOfDays] = useState(0);
  const date = new Date();
  date.setDate(date.getDate() + Number(numOfDays));

  const formattedDate = date.toLocaleDateString('en-GB', {
    weekday: 'long',
    day: '2-digit',
    month: '2-digit',
    year: 'numeric',
  });

  const handleDecrease = () => {
    if (step === 0) setNumOfDays((curr) => curr - 1);
    else setNumOfDays((curr) => curr - Number(step));
  };

  const handleIncrease = () => {
    if (step === 0) setNumOfDays((curr) => +curr + 1);
    else setNumOfDays((curr) => +curr + Number(step));
  };

  const handleReset = () => {
    setNumOfDays(0);
    setStep(0);
  };

  return (
    <div className="counter-container">
      <div className="slider-container">
        <span className="step">Step 1</span>

        <p>
          Increase the step using slider (it will multiply the
          increment/decrement of days)
        </p>
        <input
          onChange={(e) => setStep(e.target.value)}
          type="range"
          min="0"
          max="10"
          value={step}
        />
        <span className="range-output">
          Step: <output>{step}</output>
        </span>
      </div>

      <div className="buttons-container">
        <span className="step">Step 2</span>
        <p>
          Now increase the number of days using buttons or by typing in the
          number directly
        </p>
        <button onClick={handleDecrease}>-</button>
        <input
          type="text"
          value={numOfDays}
          onChange={(e) => {
            if (!isNaN(e.target.value)) setNumOfDays(+e.target.value);
          }}
        />
        <button onClick={handleIncrease}>+</button>
      </div>
      <div className="final-text-container">
        <span className="step">Step 3 - Results Below</span>
        <p>
          {!numOfDays
            ? `Today is ${formattedDate}`
            : `${numOfDays} days from today is ${formattedDate}`}
        </p>
      </div>
      {numOfDays !== 0 || step !== 0 ? (
        <button onClick={handleReset}>Reset</button>
      ) : null}
    </div>
  );
}

export default App;
