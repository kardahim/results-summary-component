import React from 'react';
import './assets/styles/index.scss';
import skills from './data/data.json';

// components
import SkillPanel from './components/SkillPanel';
import Button from './components/Button';

// icons
import Reaction from './assets/icons/icon-reaction.svg';
import Memory from './assets/icons/icon-memory.svg';
import Verbal from './assets/icons/icon-verbal.svg';
import Visual from './assets/icons/icon-visual.svg';

function App() {

  const icons = [Reaction, Memory, Verbal, Visual]
  const colors: string[] = ['red', 'yellow', 'green', 'blue']

  // calculate average score
  const total = skills.map(skill => skill.score).reduce((acc, c) => acc + c, 0) / skills.length;

  return (
    <div className="App">
      {/* index page */}
      <div className="card">
        <div className="card__score">
          <div className="card__score__header">
            your result
          </div>
          <div className="card__score__circle">
            <span className="card__score__circle__points">{total.toFixed(0)}</span>
            <span className="card__score__circle__total">of 100</span>
          </div>
          <div className="card__score__paragraph_title">Great</div>
          <p className="card__score__paragraph">
            You scored higher thean 65% of the people who have taken these tests.
          </p>
        </div>
        <div className="card__summary">
          <div className="card__summary__header">Summary</div>
          {skills.map((skill, idx) =>
            <SkillPanel
              key={`SkillPanel__${idx}`}
              category={skill.category}
              score={skill.score}
              // i cant load icons dynamically
              // the path in json isnt necessary
              icon={icons[idx]}
              color={colors[idx]}
            />
          )}
          <Button text='Continue' />
        </div>
      </div>
    </div>
  );
}

export default App;
