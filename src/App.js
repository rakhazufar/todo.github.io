import { useState } from "react"
import Header from './components/Header'
import Tasks from './components/Tasks'
import AddTask from './components/AddTask'


function App() {
  const [showAdd, setShowAdd] = useState(false)

  const [tasks, setTasks] = useState([])

    //add task
    const addTask = (task) => {
      const id = Math.ceil(Math.random() * 2000) + 1

      const taskBaru = {id, ...task}

      setTasks([...tasks, taskBaru])
    }

    //delete task
  const deleteTask = (id) => {
   setTasks(tasks.filter((task)=> task.id !== id))
  }

  const reminder = (id) => {
    setTasks(tasks.map((task)=> task.id === id ? {...task, reminder: !task.reminder} : task))
  }

  return (
    <div className="container">
      <Header onAdd={()=>setShowAdd(!showAdd)} button={showAdd}/>
      {showAdd && <AddTask onAdd={addTask} />}
      {tasks.length > 0 ? <Tasks tasks={tasks} onDelete={deleteTask} reminder={reminder} /> : "You don't have a task"}
    </div>
  );
}


export default App;
