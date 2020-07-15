import React, { useState } from 'react'
import ReactDOM from 'react-dom'

const Button = ({onClick,text}) => (
  <button onClick = {onClick}> 
    {text}
  </button>
)
const Statistic = ({text,value})=>{
  
  if (text === "average"){
    return (<tr><td>average :</td><td>{(value.good * 1 + value.bad*-1)/value.total}</td></tr>)
  }
  if(text ==="positive"){
    return (<tr><td>positive:</td><td>{(value.good*100)/value.total} %</td></tr>)
  }
  
  return (<tr><td>{text}:</td><td>{value}</td></tr>)
  

}
const Statistics = ({good,neutral,bad}) => {
  const total= (good + neutral + bad)
  if (total === 0){
    return(
      <div>
        <h1>Statistics</h1>
        <p> No Feedback given </p>
      </div>)
  }
  return(
    <div>
      <h1>Statistics</h1>
      <table>
        <tbody>
          <Statistic text= "good" value = {good}/>
          <Statistic text= "neutral" value = {neutral}/>
          <Statistic text= "bad" value = {bad}/>
          <Statistic text= "total" value = {total}/>
          <Statistic text= "average" value = {{total: total, good: good, bad: bad}}/>
          <Statistic text= "positive" value = {{total: total, good: good}}/>
          </tbody>
      </table>
    </div>
  )

}


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

      <Statistics good={good} neutral={neutral} bad={bad} />

    </div>
  )
}

ReactDOM.render(<App />, 
  document.getElementById('root')
)