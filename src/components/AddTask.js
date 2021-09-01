import { useState } from 'react'


function AddTask({ onAdd }) {
    const [text, setText] = useState('')
    const [day, setDay] = useState('')
    const [reminder, setReminder] = useState(false)

    const newTask = (e) => {
        //clear a default behavior of submit
        e.preventDefault();

        if(text === ''){
            alert("you must put the name of the task")
            return
        }

        onAdd({text, day, reminder})

        setText('')
        setDay('')
        setReminder(false)
    }

    return (
        <form className="add-form" onSubmit={newTask}>
          <div className="form-control">
            <label htmlFor="task">Task</label>
            <input type="text" id="task" placeholder="Task" value={text}
            //how change the value of the state from form
            onChange={(e)=> setText(e.target.value)} />
          </div>  
          <div className="form-control">
            <label htmlFor="day">Day</label>
            <input type="text" id="day" placeholder="Day and Time" value={day}
            //how change the value of the state from form
            onChange={(e)=> setDay(e.target.value)}  />
          </div>  
          <div className="form-control form-control-check">
            <label htmlFor="reminder">Reminder</label>
            <input type="checkbox"checked={reminder} id="reminder" value={reminder}
            //how change the value of the state from form
            onChange={(e)=> setReminder(e.target.checked)} />
          </div>

          <input type="submit" className="btn btn-block" style={{background:"green"}}/>
        </form>
    )
}

export default AddTask
