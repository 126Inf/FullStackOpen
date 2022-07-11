import { useState} from 'react'

const App = () => {
  const anecdotes = [
    'If it hurts, do it more often.',
    'Adding manpower to a late software project makes it later!',
    'The first 90 percent of the code accounts for the first 10 percent of the development time...The remaining 10 percent of the code accounts for the other 90 percent of the development time.',
    'Any fool can write code that a computer can understand. Good programmers write code that humans can understand.',
    'Premature optimization is the root of all evil.',
    'Debugging is twice as hard as writing the code in the first place. Therefore, if you write the code as cleverly as possible, you are, by definition, not smart enough to debug it.',
    'Programming without an extremely heavy use of console.log is same as if a doctor would refuse to use x-rays or blood tests when diagnosing patients.'
  ]
  const voteObj = {};
  let highestVote = 0;
  function intializeVotes() {
    anecdotes.forEach((a, index) => {
        voteObj[index] = 0;
    })
    return voteObj;
  }
  
  const [selected, setSelected] = useState(0)
  const [votes, setVotes] = useState(intializeVotes());
  const [mostVotes, setMostVotes] = useState('');

  const handleClick = () => {
    setSelected(Math.floor(Math.random() * anecdotes.length));
  }

  const handleVoteClick = () => {
    setVotes({
      ...votes,
      [selected]: votes[selected] + 1
    })
    
    Object.values(votes).forEach((vote, index) => {
        if(vote > highestVote){
          highestVote = vote;
          setMostVotes(anecdotes[index]);
        }
    })
  }
  return (
    <div>
      {anecdotes[selected]}
      <p>Has {votes[selected]} votes</p>
      <button onClick={handleClick}>next ancedote</button>
      <button onClick={handleVoteClick}>vote</button>
      <h2>Anecdote with most votes</h2>
      <p>{mostVotes}</p>
    </div>
    
  )
}

export default App
