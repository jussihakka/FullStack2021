import React from 'react'

const App = () => {

  const course = {
    name: 'Half Stack application development',
    parts: [
      {
        name: 'Fundamentals of React',
        exercises: 10
      },
      {
        name: 'Using props to pass data',
        exercises: 7
      },
      {
        name: 'State of a component',
        exercises: 14
      }
    ]
  }
  const Part = (props) => {
    return (
      <div>
        <p>{props.title} {props.exerciseCount}</p>
      </div>
    )
  }
  const Header = (props) => {
    return (
      <div>
        <h1>{props.course}</h1>
      </div>
    )
  }
  const Content = (props) => {
    console.log(props.parts[0])
    return (
      <div>
        <Part title = {props.parts[0].name} exerciseCount = {props.parts[0].exercises} />
        <Part title = {props.parts[1].name} exerciseCount = {props.parts[1].exercises} />
        <Part title = {props.parts[2].name} exerciseCount = {props.parts[2].exercises} />
      </div>
    )
  }
  const Total = (props) => {
    console.log(props.parts.exercises)
    return (
      <div>
        <p>
          Number of exercises { props.parts[0].exercises + props.parts[1].exercises + props.parts[2].exercises } 
        </p>
      </div>
    )
  }

  return ( 
    <div>
      <Header course={course.name} />
      <Content parts = {course.parts} />
      <Total parts = {course.parts} />
    </div>
  )
}

export default App