import { useState } from "react";


const App = () => {
  const [left, setLeft] = useState(0)
  const [right, setRight] = useState(0)
  const [allClicks, setAll] = useState([])

  const [value, setValue] = useState(0)

  const hello = () => {
    const handler = () => console.log('hello world')
    return handler
  }

 
  const handleLeftClick = () => {
    setAll(allClicks.concat('L'))
    setLeft(left + 1)
  }

  const handleRightClick = () => {
    setAll(allClicks.concat('R'))
    setRight(right + 1)
  }

  const History = (props) => {
  
    if (props.allClicks.length === 0){
      return (
        <div>
          the app is used by pressing the button
        </div>
      )
    } 

    return (
      <div>
        button press history: {props.allClicks.join(' ')}
      </div>
    )
  }

  const Button = ({onClick, text}) => {
    return (
    <button onClick={onClick}>
      {text}
    </button>
    )
  }

  return (
    <div>
      {left}
      <Button onClick={handleLeftClick} text='left' />
      <Button onClick={handleRightClick} text='right'/>
      {right}
      <History allClicks={allClicks}/>
      
      {value}
      <button onClick={hello()}>button</button>
    
    </div>
  )
}

export default App;