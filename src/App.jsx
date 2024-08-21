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
    <ul
      style={{ listStyle: 'none' }}
      className="cards-container">
      {questions.map((question) => (
        <li
          onClick={() => setSelectedId(question.id)}
          key={question.id}
          className={`card ${selectedId === question.id ? 'backside' : ''}`}>
          <p>
            {question.id === selectedId ? question.answer : question.question}
          </p>
        </li>
      ))}
    </ul>
  );
}

export default App;
