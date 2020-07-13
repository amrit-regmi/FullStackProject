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
      <Part part={props.parts.part1.name} noOfexercise={props.parts.part1.exercises}/>
      <Part part={props.parts.part2.name} noOfexercise={props.parts.part2.exercises}/>
      <Part part={props.parts.part3.name} noOfexercise={props.parts.part3.exercises}/>
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
  const part1 = {
    name: 'Fundamentals of React',
    exercises: 10
  }
  const part2 = {
    name: 'Using props to pass data',
    exercises: 7
  }
  const part3 = {
    name: 'State of a component',
    exercises: 14
  }

  
  return (
    <div>
      <Header courseName= { course }/>
      <Content parts={{part1:part1, part2:part2, part3:part3}}/>
      <Total total= {part1.exercises + part2.exercises + part3.exercises} />
    </div>
  )
}

ReactDOM.render(<App />, document.getElementById('root'))