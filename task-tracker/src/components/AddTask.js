import { useState } from 'react'
import { useLocation } from 'react-router-dom'

const AddTask = ({onAdd}) => {
    const [text , setText] = useState('')
    const [day , setDay] = useState('')
    const [reminder , setReminder] = useState(false)
    const {pathname} = useLocation();
    const isValid = pathname ==='/'
    const onSubmit = (e) => {
        e.preventDefault();

        if(!text){
            alert("Please Add a Task!!");
        }

        onAdd({ text , day , reminder})

        setText('');
        setDay('');
        setReminder(false);

    }
   return(
       <>
           { isValid ?
    <form className="add-form" onSubmit={onSubmit}>
        <div className="form-control">
            <label>Add Task</label>
            <input type="text" placeholder="Add the Task"
                   value={text}
                   onChange={(e) => setText(e.currentTarget.value)}
            />
        </div>
        <div className="form-control">
            <label>Add Day & Time</label>
            <input type="text" placeholder="Add Day & Time"
                   value={day}
                   onChange={(e) => setDay(e.target.value)}/>
        </div>
        <div className="form-control form-control-check">
            <label>Set Remainder</label>
            <input type="checkbox"
                   value={reminder}
                   onChange={(e) => setReminder(e.currentTarget.checked)}/>
        </div>
        <input type="submit" value="Save" className="btn btn-block"/>
    </form>
    : null
       }
           </>
   )
}

export default AddTask
