const Header = (props) => {
  return (
    <h1>{props.course}</h1>
  )
}

const Part = ({part, exercises}) => {
  return (
    <div>
      <p>{part} {exercises}</p>
    </div>
  )
}

const Content = (props) => {
  console.log(props)
  return (
    <div>
    <Part part={props.part1} exercises={props.exercises1} />
    <Part part={props.part2} exercises={props.exercises2} />
    <Part part={props.part3} exercises={props.exercises3} />
    </div>
  ) 
}

const Total = ({ total }) => {
  return (
    <div>
      Number of exercises {total}
    </div>
  )
}

const App = () => {
  const course = 'Half Stack application development'
  const part1 = 'Fundamentals of React'
  const exercises1 = 10
  const part2 = 'Using props to pass data'
  const exercises2 = 7
  const part3 = 'State of a component'
  const exercises3 = 14

  return (
    <div>
    <Header course={course}/>
    <Content part1={part1} exercises1={exercises1} 
      part2={part2} exercises2={exercises1}
      part3={part3} exercises3={exercises1}
    />

    <Total total={exercises1 + exercises2 + exercises3}/>
    </div>
  )
}

export default App
