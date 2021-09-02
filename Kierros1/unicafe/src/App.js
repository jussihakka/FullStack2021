import React, { useState } from 'react'

const Button = ({ handleClick, text }) => (
  <button onClick={handleClick}>
    {text}
  </button>
)
const Header = ({text}) => <h1>{text}</h1>
const StatisticLine = (props) => <li> {props.text} {props.value} </li>


const Statistics = ({parts}) => {
  const totalCount = parts.reduce( (prevAmount, currentAmount) => prevAmount + currentAmount.type, 0 )
  const totalScore = parts[0].type - parts[2].type   
  const positive = (parts[0].type / totalCount)*100
  if (totalCount == 0) return 'No feedback given'
  return (
    <div>
      <StatisticLine text = {parts[0].name} value = {parts[0].type} />
      <StatisticLine text = {parts[1].name} value = {parts[1].type} />
      <StatisticLine text = {parts[2].name} value = {parts[2].type} />
      <StatisticLine text = {'all'} value = {totalCount} />
      <StatisticLine text = {'average'} value = {totalScore / totalCount} />
      <StatisticLine text = {'positive'} value = {`${positive}%`}/>
    </div>
  )  
} 

const Statistics2 = ({parts}) => {
  const totalCount = parts.reduce( (prevAmount, currentAmount) => prevAmount + currentAmount.type, 0 )
  const totalScore = parts[0].type - parts[2].type   
  const positive = (parts[0].type / totalCount)*100
  if (totalCount == 0) return 'No feedback given'
  return (
    <table>
      <tr>
        <td>{parts[0].name}</td>
        <td>{parts[0].type}</td>

      </tr>
      <tr>
        <td>{parts[1].name}</td>
        <td>{parts[1].type}</td>

      </tr>
      <tr>
        <td>{parts[2].name}</td>
        <td>{parts[2].type}</td>

      </tr>
      <tr>
        <td>all</td>
        <td>{totalCount}</td>

      </tr>
      <tr>
        <td>average</td>
        <td>{totalScore / totalCount}</td>
      </tr>
      <tr>
        <td>positive</td>
        <td>{`${positive}%`}</td>
      </tr>
    </table>
  )  
}



const App = () => {
  const [good, setGood] = useState(0)
  const [neutral, setNeutral] = useState(0)
  const [bad, setBad] = useState(0)

  const feedbacks = [
     {name: 'good', type: good},
     {name: 'neutral', type: neutral},
     {name: 'bad', type: bad}
  ]

  return (
    <div>
      <Header text = {'give feedback'} />
      <Button handleClick = {() => setGood(good + 1)} text = {'good'}/>
      <Button handleClick = {() => setNeutral(neutral + 1)} text = {'neutral'}/>
      <Button handleClick = {() => setBad(bad + 1)} text = {'bad'}/>
      <Header text = {'statistics'} />
      <Statistics2 parts = {feedbacks} />
    </div>
  )
}

export default App