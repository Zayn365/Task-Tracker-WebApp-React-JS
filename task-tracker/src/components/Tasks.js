import Task from "./Task";
import React from "react";

const Tasks = ({tasks , Delete, onToggle}) => {
    if(tasks.length === 0) {
        return <h5 style={{textAlign: "center"}}>There are no Tasks Found!</h5>
    }
  return (
      tasks.map( (task) =>
          (<Task
              key={task.id}
              task={task}
              onToggle={onToggle}
              onDelete={Delete} />)
      )
  )
}

export default Tasks
