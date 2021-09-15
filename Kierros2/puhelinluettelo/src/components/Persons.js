import React from 'react'

const Persons = ({data, filter}) => {
    return(
       <div>
            {data.filter(person => person.name.toLowerCase().startsWith(filter.toLowerCase())).
                map(person => <Person key = {person.name} name = {person.name} number = {person.number} />)}
        </div>
    )
}
const Person = (props) =>  <div> {props.name} {props.number} </div> 

export default Persons