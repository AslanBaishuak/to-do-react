import React, {useState} from 'react';
import Input from "./Input";
import Button from "./Button";
import Dropdown from "./Dropdown";

const AddTaskForm = ({addTask}) => {

     const categoryOptions = [
        { value: "personal" },
        { value: "home" },
        { value: "school" },
    ];

    const priorityOptions = [
        { value: "low" },
        { value: "medium" },
        { value: "high" } 
    ];
    
    const [taskName, setTaskName] = useState("");
    const [taskCategory, setTaskCategory] = useState(categoryOptions[0].value);
    const [taskPriority, setTaskPriority] = useState(priorityOptions[0].value);

    function handleTaskAdd () {
        addTask(taskName, taskCategory, taskPriority);
        setTaskName("");
    }

    return (
        <div className="add-task-form">
            <Input className="task-input" placeholder="Type a new task" value={taskName} onChange={(event) => setTaskName(event.target.value)} />
            <Dropdown options={categoryOptions} onChange={(e) => setTaskCategory(e.target.value)} />
            <Dropdown options={priorityOptions} onChange={(e) => setTaskPriority(e.target.value)} />
            <Button className="add-button" value="Add task" onClick={handleTaskAdd} />
        </div>
    )
}



export default AddTaskForm;