import React from 'react'

const Course = ({course}) => {
  return (
    <div>
        <Header course={course.name} />
        <Content parts = {course.parts} />
        <Total parts = {course.parts} />
    </div>
  )
}

const Part = ({part}) => <p> {part.name} {part.exercises} </p>    
const Header = (props) => <h2> {props.course} </h2>
const Content = ({parts}) => {
    return (
        <div>
            {parts.map(part =>
                <p key={part.id}> <Part part = {part} /> </p>
            )}
        </div>
    )
}
const Total = ({parts}) => {
    return (
        <p style = {{fontWeight: 'bold'}}>
            Number of exercises { parts.reduce( (prev, current) => prev + current.exercises, 0)  } 
        </p>
    )
}

export default Course
