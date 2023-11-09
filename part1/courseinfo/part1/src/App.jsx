import Header from "./Header"
import Content from "./Content"
import Total from "./Total"

const App = () => {
  const course = 'Half Stack Application Development'
  const parts = ['Fundamentals of React','Using Props to Pass Data','State of a Component']
  const exercises = [10,7,14]

  return (
    <div>
      <Header course={course}/>
      <Content parts={parts} exercises={exercises}/>
      <Total exercises={exercises}/>
    </div>
  )
}

export default App
