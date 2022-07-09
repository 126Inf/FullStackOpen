import Content from "./Content";
import Header from "./Header"
import Total from "./Total";

const App = () => {
  const exercises = [
    {part: 'Fundamentals of React', exercises: 10},
    {part: 'Using props to pass data', exercises: 7},
    {part: 'State of a component', exercises: 14},
  ];
  const total = exercises.reduce((acc, exercise) => {
    return acc + exercise.exercises; 
  },0);
  const course = 'Half Stack application development'

  return (
    <div>
      <Header courseName={course}/>
      {exercises.map(( exercise, index) => {
        return <Content part={exercise.part} exercises={exercise.exercises} key={index}/>
      })}
      <Total total={total} />
    </div>
  )
}

export default App