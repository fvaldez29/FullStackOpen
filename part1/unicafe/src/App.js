import { useState } from "react";


const App = () => {
const [clicks, setClicks] = useState({
    left: 0, right: 0, counter: 0
  })

  const handleLeftClick = () =>
  setClicks({ ...clicks, left: clicks.left + 1, counter: clicks.counter + 1})

const handleRightClick = () =>
  setClicks({ ...clicks, right: clicks.right + 1, counter: clicks.counter + 1})

 
  return (
    <div>
      {clicks.left}
      <button onClick={handleLeftClick}>left</button>
      <button onClick={handleRightClick}>right</button>
      {clicks.right}
      <p>Clicks totales: {clicks.counter}</p>
    </div>
  )
}

export default App;