import React from 'react'
import ReactDOM from 'react-dom'

const Header =  (props) => { 
  return(
    <>
    <h1>{props.courseName}</h1>
    </>
  )
}

const Part = (props) =>{
  return(<p>{props.part} {props.noOfexercise}</p>)
}

const Content = (props) => {
  return(
    <div>
      <Part part={props.parts.part1} noOfexercise={props.parts.noOfExercise1}/>
      <Part part={props.parts.part2} noOfexercise={props.parts.noOfExercise2}/>
      <Part part={props.parts.part3} noOfexercise={props.parts.noOfExercise3}/>
    </div>
  )
}

const Total =  (props) => { 
  return(
    <>
    <p>Number of Exercises = {props.total}</p>
    </>
  )
  }
  
  const App = () => {
  const course = 'Half Stack application development'
  const part1 = 'Fundamentals of React'
  const exercises1 = 10
  const part2 = 'Using props to pass data'
  const exercises2 = 7
  const part3 = 'State of a component'
  const exercises3 = 14

  
  return (
    <div>
      <Header courseName= { course }/>
      <Content parts={{part1:part1, part2:part2, part3:part3, noOfExercise1:exercises1, noOfExercise2:exercises2, noOfExercise3:exercises3}}/>
      <Total total= {exercises1 + exercises2 + exercises3} />
    </div>
  )
}

ReactDOM.render(<App />, document.getElementById('root'))