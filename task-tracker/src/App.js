import React, {useEffect, useState} from 'react';
import {BrowserRouter as Router, Route, useLocation, Routes} from 'react-router-dom';
import Header from "./components/Header";
import Footer from "./components/Footer";
import Tasks from "./components/Tasks";
import AddTask from "./components/AddTask";
import About from "./components/About"


function App() {
    const [showAddTask, setAddTask] = useState(false);
    const [tasks, setTasks] = useState([]);
    useEffect(() => {
        const getTask = async () => {
            const taskFromServer = await fetchTasks();
            setTasks(taskFromServer);
        }
        getTask()
    }, [])

    // Get Tasks
    const fetchTasks = async () => {
        const res = await fetch('http://localhost:8000/tasks')
        const data = await res.json();
        return data
    }
    // Get Task
    const fetchTask = async (id) => {
        const res = await fetch(`http://localhost:8000/tasks/${id}`)
        const data = await res.json();
        return data
    }
    // Add Task func
    const addTask = async (task) => {
        const res = await fetch('http://localhost:8000/tasks', {
            method: "POST",
            headers: {'Content-type': 'application/json',},
            body: JSON.stringify(task),
        })
        const data = await res.json();
        setTasks([...tasks, data]);
        // const id = Math.floor(Math.random() * 10000) + 1
        // const newTask = { id , ...task}
        // setTasks([...tasks, newTask])


    }

    //On Delete func
    const Delete = async (id) => {
        await fetch(`http://localhost:8000/tasks/${id}`, {
            method: 'DELETE'
        })
        setTasks(tasks.filter((tasks) => tasks.id !== id))
    }
    // On Toggle func
    const toggleRemainder = async (id) => {
        const taskToToggle = await fetchTask(id);
        const updTask = {...taskToToggle, reminder: !taskToToggle.reminder}
        const res = await fetch(`http://localhost:8000/tasks/${id}`, {
            method: "PUT",
            headers: {'Content-type': 'application/json'},
            body: JSON.stringify(updTask)
        })

        const data = await res.json();

        setTasks(
            tasks.map((task) =>
                task.id === id ?
                    {...task, reminder: data.reminder}
                    : task))
    }

    return (
        <div className="container">
            <Router>
                <Header onAdd={() => setAddTask(!showAddTask)} showAdd={showAddTask}/>
                {showAddTask && <AddTask onAdd={addTask}/>}
                <Routes>
                    <Route path='/' element={<Tasks tasks={tasks} onToggle={toggleRemainder} Delete={Delete} />}  />
                    <Route path='/about' element={<About/>}/>
                </Routes>
                <Footer/>
            </Router>
        </div>
    )
}


export default App;
