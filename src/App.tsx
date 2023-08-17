import React from 'react';
import './assets/styles/index.scss';

function App() {
  return (
    <div className="App">
      {/* index page */}
      <div className="card">
        <div className="card__score">
          <div className="card__score__header">
            your result
          </div>
          <div className="card__score__circle">
            <span className="card__score__circle__points">{76}</span>
            <span className="card__score__circle__total">of 100</span>
          </div>
          <div className="card__score__paragraph_title">Great</div>
          <p className="card__score__paragraph">
            You scored higher thean 65% of the people who have taken these tests.
          </p>
        </div>
        <div className="card__summary"></div>
      </div>
    </div>
  );
}

export default App;
