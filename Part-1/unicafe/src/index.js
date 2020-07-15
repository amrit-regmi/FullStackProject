import React, { useState } from 'react'
import ReactDOM from 'react-dom'

const Button = ({onClick,text}) => (
  <button onClick = {onClick}> 
    {text}
  </button>
)


const App = () => {
  // save clicks of each button to own state
  const [good, setGood] = useState(0)
  const [neutral, setNeutral] = useState(0)
  const [bad, setBad] = useState(0)

  const handleClick = (which) => {
    const handler = () => {
      if (which === "good") {
        setGood (good+1)
      }

      if (which === "neutral") {
        setNeutral (neutral+1)
      }
      if (which === "bad") {
        setBad(bad+1)
      }
    }

    return handler
  }

  return (
    <div>
    <div><h1>Give Feedback</h1></div>
      <Button onClick = {handleClick('good')} text = "good" />
      <Button onClick = {handleClick('neutral')} text = "neutral" />
      <Button onClick = {handleClick('bad')} text = "bad" />

    <div><h1>Statistics</h1>  </div>
    <div> Good: {good} </div>
    <div>Neutral: {neutral} </div>
    <div> Bad: {bad} </div>


    </div>
  )
}

ReactDOM.render(<App />, 
  document.getElementById('root')
)