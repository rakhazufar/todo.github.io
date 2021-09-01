import { FaTimes } from 'react-icons/fa'

function Task({ task, onDelete, reminder }) {
    return (
        <div className={`task ${task.reminder ? 'reminder' : ''}`} onDoubleClick={()=>reminder(task.id)}>
            <h3>{task.text} <FaTimes className="icons" onClick={()=> onDelete(task.id)}/></h3>
            <p>{task.day}</p>
        </div>
    )
}

export default Task
