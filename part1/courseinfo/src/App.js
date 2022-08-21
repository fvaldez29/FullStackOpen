const Header = (props) => {
  return <h1>{props.course}</h1>
}

const Part = (props) => {
  console.log(props)
  return (
    <div>
      <p>{props.content.name} {props.content.exercises}</p>
    </div>
  )
}


const Content = (props) => {
  return (
    <div>
      <p></p>value="Give feedback"
      <Part content={props.content[0]} />
      <Part content={props.content[1]} />
      <Part content={props.content[2]} />
    </div>
  )
}

const Total = (props) => {
    return (
      <div>
        <p>Total {props.total[0].exercises + props.total[1].exercises + props.total[2].exercises}.</p>
      </div>
    )
}


const App = () => {
  const course = {
    name: 'Half Stack application development',
    parts: [
      {
        name: 'Fundamentals of React',
        exercises: 10
      },
      {
        name: 'Using props to pass data',
        exercises: 7
      },
      {
        name: 'State of a component',
        exercises: 14
      }
    ]
  }

  return (
    <div>
      <Header course={course.name} />
      <Content content={course.parts} />
      <Total total={course.parts}/>
    </div>
  )
}

export default App