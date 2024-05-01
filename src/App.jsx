import { useState } from "react"
import Filter from "./components/Filter"
import Header from "./components/Header"
import TodoForm from "./components/TodoForm"
import TodoItem from "./components/TodoItem"

function App() {
  const [tasks, setTasks] = useState([])

  const handleAddTask = (task) => {
    setTasks(prev => [...prev, task])
    console.log(task)
  }


  return (
    <>
      <div className='container mx-auto max-w-[600px] text-gray-200 flex flex-col justify-center p-4'>
        <Header />
        <TodoForm onAddTask={handleAddTask} />
        <Filter />
        {!tasks.length ? 'No tasks' : tasks.map((task, index) => <TodoItem key={task.id} task={task.activity} status={task.status} position={index + 1} />)}
      </div>
    </>
  )
}

export default App
