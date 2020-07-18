import React from 'react'

const Total = ({ parts }) => {
    const sum = parts.reduce((s,p)=> s+p.exercises,0)
    return(
      <p>Number of exercises {sum}</p>
    ) 
  }

const Header = ({ course }) => {
    return (
      <h1>{course.name}</h1>
    )
  }
  
  
  const Part = ({part}) => {
    return (
      <p>
        {part.name} {part.exercises}
      </p>    
    )
  }
  
  const Content = ({ parts }) => { 
    return (
      <div>
        {parts.map((part)=> <Part key={part.id} part={part} />)}
      </div>
    )
  }
  
  

const Course = ({course}) => {
    return (
        <div>
          <Header course={course} />
          <Content parts={course.parts} />
          <Total parts={course.parts}></Total>
        </div>
      )
}
export default Course

