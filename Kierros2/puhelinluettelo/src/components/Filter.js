import React from 'react'

const Filter = (props) => {
    return (
      <form>
        <div> {props.text} <input value = {props.filter} onChange = {props.handler} /> </div>
      </form>
    )
  }

export default Filter