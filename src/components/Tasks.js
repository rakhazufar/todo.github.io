import Task from "./Task"

function Tasks({ tasks, onDelete, reminder }) {
    return (
        <>
            {tasks.map((task, i) => (
                <Task key={i} task={task} onDelete={onDelete} reminder={reminder}/>
            ))}
        </>
    )
}

export default Tasks
