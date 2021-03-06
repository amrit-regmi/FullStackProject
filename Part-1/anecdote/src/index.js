import React, { useState } from 'react'
import ReactDOM from 'react-dom'



const App = (props) => {
  const [selected, setSelected] = useState(0)
  const [vote,setVote]=useState(new Array(props.anecdotes.length).fill(0))

  const handleClick  = () =>{
      const randomNum = Math.floor(Math.random() * props.anecdotes.length)
      setSelected(randomNum)
  }

  const updateVote = () =>{
    const  voteState = [...vote]
    voteState[selected]+=1
    setVote(voteState)
  }

  const getMaxVoteIndex = () =>{
    const index= vote.indexOf(Math.max.apply( Math, vote ))
    return index
  }

  return (
    <div>
      <h1>Anecdote of the day </h1>
      <p> {props.anecdotes[selected]} <br></br> has {vote[selected]} votes.</p> 
      <button onClick ={updateVote}>Vote</button>
      <button onClick = {handleClick} >Next Anecdote</button>
      <h1>Anecdote with most Votes </h1>
      <p>{props.anecdotes[getMaxVoteIndex()]}<br></br> has {vote[getMaxVoteIndex()]} votes.</p>
    </div>
  )
}



const anecdotes = [
  'If it hurts, do it more often',
  'Adding manpower to a late software project makes it later!',
  'The first 90 percent of the code accounts for the first 90 percent of the development time...The remaining 10 percent of the code accounts for the other 90 percent of the development time.',
  'Any fool can write code that a computer can understand. Good programmers write code that humans can understand.',
  'Premature optimization is the root of all evil.',
  'Debugging is twice as hard as writing the code in the first place. Therefore, if you write the code as cleverly as possible, you are, by definition, not smart enough to debug it.'
]

ReactDOM.render(
  <App anecdotes={anecdotes} />,
  document.getElementById('root')
)