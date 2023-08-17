import React from 'react';
import './assets/styles/index.scss';

function App() {
  return (
    <div className="App">
      {/* index page */}
      <div className="card">
        <div className="card__score">
          <div className="card__score__header"></div>
          <div className="card__score__circle">
            <div className="card__score__circle__points"></div>
            <div className="card__score__circle__total"></div>
          </div>
          <div className="card__score__header"></div>
          <p className="card__score__paragraph"></p>
        </div>
        <div className="card__summary"></div>
      </div>
    </div>
  );
}

export default App;
