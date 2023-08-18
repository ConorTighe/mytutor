import React from 'react';
import './App.css';
import Checkbox from './components/Checkbox';
import useQuestionnaire from './hooks/questionnaire';

function App() {
  const { handleSetExperienceTypes, handleSetRange, reset, submit, selectedExperience } = useQuestionnaire();

  return (
    <div className="App">
        <h1>MyTutor</h1>
        <span className="question">What kind of tutoring experience do you have?</span>
        <div className='checkboxes'>
          <Checkbox checked={selectedExperience.includes("Online")} label="Online tutoring" value="Online" handleChange={(e) => handleSetExperienceTypes(e.target.value)} />
          <Checkbox checked={selectedExperience.includes("Home")} label="Home schooling" value="Home" handleChange={(e) => handleSetExperienceTypes(e.target.value)} />
          <Checkbox checked={selectedExperience.includes("After")} label="After school club" value="After" handleChange={(e) => handleSetExperienceTypes(e.target.value)} />
          <Checkbox checked={selectedExperience.includes("None")} label="None" value="None" handleChange={(e) => handleSetExperienceTypes(e.target.value)} />
        </div>
        <span className="question">How much overall experience do you have?</span>
        <select className="experienceDropdown" name="experienceDropdown" disabled={!selectedExperience.length} id="cars" onChange={(e) => handleSetRange(e.target.value)}>
          <option value="0,1">0-1</option>
          <option value="1,2">1-2</option>
          <option value="3,-1">3 or more</option>
          <option value="0,0">None</option>
        </select>
        <div className='controls'>
          <button onClick={reset}>Reset</button>
          <button onClick={submit}>Submit</button>
        </div>
    </div>
  );
}

export default App;
