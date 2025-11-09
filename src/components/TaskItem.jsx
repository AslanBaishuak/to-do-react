import React from "react";
import Button from "./Button";

const TaskItem = ({task, checkHandler, deleteTask, backgroundColor, editTask}) => {
    return (
        <div className="task-item" style={{backgroundColor}}>
            <input className="task-checkbox" type="checkbox" checked={task.completed} 
            onChange={(e) => checkHandler(task.id, e.target.checked)} />

            <span className={`task-text ${task.completed ? "completed" : ""}`}>{task.name}</span>
            <span>{task.priority}</span>
            <Button className="edit-button" value ="edit" onClick={() => editTask(task.id) }/>
            <Button className="delete-button" value="Delete" 
            onClick={() => deleteTask(task.id)} />
        </div>
    )
}

export default TaskItem;