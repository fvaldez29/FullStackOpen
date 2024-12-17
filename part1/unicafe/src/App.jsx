import { useState } from "react"
import { Button } from "./components/Button"
import { Statistcs } from "./components/Statistcs"
import { Header } from "./components/Header"

const App = () => {
  const [good, setGood] = useState(0)
  const [neutral, setNeutral] = useState(0)
  const [bad, setBad] = useState(0)

  const goodReview = () => setGood(good + 1)
  const neutralReview = () => setNeutral(neutral + 1)
  const badReview = () => setBad(bad + 1)


  return (
    <>
      <Header title="give feedback" />
      <Button onClick={goodReview} text='good' />
      <Button onClick={neutralReview} text='neutral' />
      <Button onClick={badReview} text='bad' />
      <Header title='statistics' />
      <Statistcs good={good} neutral={neutral} bad={bad} />

    </>
  )
}

export default App
