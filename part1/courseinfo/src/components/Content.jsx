import { Part } from "./Part"

export const Content = () => {

    const part1 = 'Fundamentals of React'
    const exercises1 = 10
    const part2 = 'Using props to pass data'
    const exercises2 = 7
    const part3 = 'State of a component'
    const exercises3 = 14

  return (
    <div>
       <Part part1={part1} exercises1={exercises1} />
       <Part part1={part2} exercises1={exercises2} />
       <Part part1={part3} exercises1={exercises3} />
    </div>
  )
}
