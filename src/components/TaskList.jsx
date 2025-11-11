import React from 'react';
import TaskItem from "./TaskItem";


const TaskList = ({tasks, checkHandler, deleteTask, editTask}) => {
    if (tasks.length === 0) return ;

    const categoryOptions = [
        { value: "personal" },
        { value: "home" },
        { value: "school" },
    ];

    return (
        <div>
            {categoryOptions.map( (category, index) => (
                <div key={index}>
                    <h4>{category.value}</h4>
                    {tasks.filter(task => task.category === category.value).map( (task) => (
                        <TaskItem task={task} 
                        checkHandler={checkHandler} 
                        deleteTask={deleteTask}
                        editTask={editTask}
                        backgroundColor={
                            task.priority === "high" ? "#ffcccc" : 
                            task.priority === "medium" ? "#fff3b0" : 
                            "#c8f7c5"} 
                        />  
                    ))}
                </div>
            ))}
        </div>
    )
}

export default TaskList;