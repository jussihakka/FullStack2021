import React, { useState } from 'react'

const Button = ({ handleClick, text }) => (
  <button onClick={handleClick}>
    {text}
  </button>
)

const Content = (props) => (
  <p> 
    {props.anecdote} 
    <br></br>
    has {props.votes} votes
  </p>
)
const Header = (props) => (
  <h1>{props.text}</h1>

)

const App = () => {
  const anecdotes = [
    'If it hurts, do it more often.',
    'Adding manpower to a late software project makes it later!',
    'The first 90 percent of the code accounts for the first 90 percent of the development time...The remaining 10 percent of the code accounts for the other 90 percent of the development time.',
    'Any fool can write code that a computer can understand. Good programmers write code that humans can understand.',
    'Premature optimization is the root of all evil.',
    'Debugging is twice as hard as writing the code in the first place. Therefore, if you write the code as cleverly as possible, you are, by definition, not smart enough to debug it.',
    'Programming without an extremely heavy use of console.log is same as if a doctor would refuse to use x-rays or blood tests when dianosing patients.'
  ]
  
  const length = anecdotes.length
  const [selected, setSelected] = useState(0)
  const [votes, setAll] = useState(new Array(length).fill(0))
  const copy = [...votes]
  const mostVotes = Math.max.apply(null, votes )

  return (
    <div>
      <Header text = 'Anecdote of the day' />
      <Content anecdote = {anecdotes[selected]} votes = {votes[selected]} />
      <Button 
        handleClick = { () => { copy[selected] += 1; setAll(copy) } } 
        text = 'vote' />
      <Button 
        handleClick = {() => setSelected( Math.floor( Math.random() * length ) )} 
        text = {'next anecdote'} />
      <Header text = 'Anecdote with most votes' />
      <Content anecdote = {anecdotes[votes.indexOf(mostVotes)]} votes = {mostVotes} />
    </div>
  )
}

export default App