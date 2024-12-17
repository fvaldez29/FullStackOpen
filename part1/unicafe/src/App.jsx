import { useState } from "react"
import { Display } from "./components/Display"
import { Button } from "./components/Button"


const App = () => {

  const [counter, setCounter] = useState(0)

  const plus = () => setCounter(counter + 1)
  const decreaseByOne = () => setCounter(counter - 1)
  const zero = () => setCounter(0)


  console.log('rendering...', counter)

  return (
    <>
      <Display counter={counter} />
      <Button onClick={plus}
        text='plus'
      />
      <Button onClick={decreaseByOne}
        text='DecreaseByOne'
      />
       <Button onClick={zero}
        text='Zero'
      />
    </>
  )
}

export default App
