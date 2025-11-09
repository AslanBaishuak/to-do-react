import { useState } from 'react'
import './App.css'
import Input from "./components/Input";
import Button from "./components/Button";
import AddTaskForm from './components/AddTaskForm';
import TaskList from './components/TaskList';
import Modal from './components/Modal';
import Dropdown from './components/Dropdown';

function App() {

  let [tasks, setTasks] = useState([]);

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
  const [isModelOpen,setIsModalOpen] = useState();
  const [taskName, setTaskName] = useState();
  const [taskCategory, setTaskCategory] = useState();
  const [taskPriority,setTaskPriority] = useState();
  const [taskId, setTaskId] = useState(null);

  function addTask (text, category, priority) {
    if (!text.trim()) return; // Не добавлять пустую задачу
    setTasks([...tasks, 
        {
          id: Date.now(),
          name: text,
          category: category,
          priority: priority,
          completed: false
        }
      ]
    );

    console.log({
          id: Date.now(),
          name: text,
          category: category,
          priority: priority,
          completed: false
        })
  }

  function toggleTask (id, completed) {
    const updatedTasks = tasks.map( (task) => {
      if (task.id === id) {
        return {
          ...task,
          completed: completed
        }
      }
      return task;
    });
    setTasks(updatedTasks);
  }

  function deleteTask (id) {
    const filteredTasks = tasks.filter( (task) => task.id !== id);
    setTasks(filteredTasks);
  }

  function openEditTaskModal (id) {
    setIsModalOpen(true);
    setTaskId(id);
    const taskToEdit = tasks.find((task) => task.id === id);
    setTaskName(taskToEdit.name);
    setTaskCategory(taskToEdit.category);
    setTaskPriority(taskToEdit.priority);
  }
  function editTaskModal (newName, newType, newPriority) {
    const updatedTasks = tasks.map((task) => {
      if (task.id === taskId) {
        return {
          ...task,
          name: newName,
          category: newType,
          priority: newPriority
        }
      }
      return task;
    })
    setTasks(updatedTasks);
    setIsModalOpen(false);
  }
  return (
    <div className="container">
     <h1 className="title">Task Manager</h1>
     <AddTaskForm addTask={addTask} />
     <TaskList tasks={tasks} checkHandler={toggleTask} deleteTask={deleteTask} editTask={openEditTaskModal}/>

    <Modal isOpen={isModelOpen} onClose={() => setIsModalOpen(false)}>
      <Input className="modal-task-input" value={taskName} onChange={(e) => setTaskName(e.target.value)}/>
      <Dropdown options={categoryOptions} onChange={(e) => setTaskCategory(e.target.value) }  value={taskCategory}/>
      <Dropdown options={priorityOptions} onChange={(e) => setTaskPriority(e.target.value)} value={taskPriority}/>
      <Button className="modal-save-button" value={"save"} onClick={() => editTaskModal(taskName,taskCategory,taskPriority)}/>
    </Modal>
    </div>
  )
}

export default App
