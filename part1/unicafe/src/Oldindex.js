import React, { useState } from 'react'
const Header = (props) => {
  return <h1>Counter Machine</h1>
}

const Hello = ({name, age}) => {
  //Adivina el año de nacimiento de la persona. 
  const bornYear = () =>  new Date().getFullYear() - age
  return (
    <div>
      <p>
        Hello {name}, You are {age} years old 
      </p>
      <p>so you were probably born in {bornYear()}</p>
      
    </div>
  )
} 

const Display = (props) => {
  return (
    <div className='counter'>{props.counter}</div>
  )
}

const Button = ({handleClick, text}) => {
  return (
    <button onClick={handleClick}>
      {text}
    </button>
  )
}

const Text = ({parNumber}) => {
  return (
    <p>{parNumber}</p>
  )
}

const  App = () => {
  const [ counter, setCounter ] = useState(0)
  const increaseByOne = () => setCounter(counter + 1)
  const decreaseByOne = () => setCounter(counter - 1)
  const setToZero = () => setCounter(0)
  const isEven = counter % 2 === 0
  const parNumber = isEven ? 'Es par' : 'No es par'


  return (
    <div className="App">
      <Header/>
      <Display counter={counter}/>
      <Text parNumber={parNumber}/>
      <Button handleClick={increaseByOne} text='Up' />
      <Button handleClick={decreaseByOne} text='Down' />
      <Button handleClick={setToZero} text='reset' />
    </div>
  );
}




