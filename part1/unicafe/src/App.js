import { useState } from 'react';
import Button from './Button';
import Statistics from './Statistics';


const App = () => {
  // save clicks of each button to its own state
  const [good, setGood] = useState(0)
  const [neutral, setNeutral] = useState(0)
  const [bad, setBad] = useState(0)

  const handleGoodClick = () => {
      setGood(good + 1);
  }
  const handleNeutralClick = () => {
      setNeutral(neutral + 1);
  }
  const handleBadClick = () => {
      setBad(bad+ + 1);
  }

  return (
    <div>
      <h1>Give Feedback</h1>
      <Button handleClick={handleGoodClick} title={'Good'} />
      <Button handleClick={handleNeutralClick} title={'Neutral'} />
      <Button handleClick={handleBadClick} title={'Bad'} />
      <Statistics good={good} neutral={neutral} bad={bad}/>
    </div>
  )
}

export default App;
