import './App.css';
import { useState } from 'react';

function App() {
  const [reversed, setReversed] = useState(false);

  const handleClick = () => {
    setReversed(!reversed);
  };
  return (
    <div className="main-container">
      <FlashCard text="What language is React based on?" />
      <FlashCard text="What are the building blocks of React apps?" />
      <FlashCard text="What's the name of the syntax we use to describe an UI in React?" />
      <FlashCard text="How to pass data from parent to child component?" />
      <FlashCard text="How to give components memory?" />
      <FlashCard
        text="What do we call an input element that is completely synchronised with
          state?"
      />
    </div>
  );
}

function FlashCard({ text }) {
  const [reversed, setReversed] = useState(false);

  const handleClick = () => {
    setReversed(!reversed);
  };

  return (
    <div
      className={`card ${reversed ? 'backside' : ''}`}
      onClick={handleClick}>
      <p className="card-paragraph">{text}</p>
    </div>
  );
}

export default App;
