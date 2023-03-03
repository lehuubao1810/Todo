import React from 'react'
import { useState, useEffect, useRef, useContext } from 'react'
import { useAuth } from '../contexts/AuthContext';
import Header from '../components/Header'
import Footer from '../components/Footer'
import CardTask from '../components/CardTask'
import ModalAdd from '../components/ModalAdd'
import { ThemeContext } from '../contexts/ThemeContext'

function Home() {
    const { theme } = useContext(ThemeContext)
    const { logout, currentUser } = useAuth();

    const handleLogout = async () => {
        try {
            await logout();
            navigate('/login');
        } catch {
            console.log('Failed to log out');
        }
    }

    const [statusModalAdd, setStatusModalAdd] = useState(false)
    const [loading, setLoading] = useState(true)

    const [tasks, setTasks] = useState([])

    useEffect(() => {
        const tasks = JSON.parse(localStorage.getItem('tasks'))
        if (tasks) {
            setTasks(tasks)
        }
        setLoading(false)
    }, [])

    const saveLocalStorage = (items) => {
        localStorage.setItem('tasks', JSON.stringify(items))
    }

    const handleAddTask = (task) => {
        setTasks([...tasks, task])
        saveLocalStorage([...tasks, task])
    }
    const handleDeleteTask = (index) => {
        const newTasks = tasks.filter((task, i) => i !== index)
        setTasks(newTasks)
        saveLocalStorage(newTasks)
    }

    const handleModalAdd = () => {
        setStatusModalAdd(true)
    }
    const handleOverlay = () => {
        setStatusModalAdd(false)
    }

    return (
        <div className={`${theme}`}>
            <Header handleLogout={handleLogout} />
            <div className="container">
                {
                    loading
                        ?
                        <div class="bounce-loading">
                            <div></div>
                            <div></div>
                            <div></div>
                            <div></div>
                        </div>
                        :
                        <div className="tasks">
                            {tasks.map((task, index) => (
                                <div key={index}>
                                    <CardTask
                                        tasks={tasks}
                                        task={task}
                                        index={index}
                                        handleDeleteTask={handleDeleteTask}
                                        saveLocalStorage={saveLocalStorage}
                                    />
                                </div>
                            ))}
                        </div>
                }
            </div>
            <button
                className="btnAddTask"
                onClick={handleModalAdd}
            >
                <i className="fa-solid fa-plus"></i>
            </button>
            {
                statusModalAdd &&
                <div
                    onClick={handleOverlay}
                    className="overlay"
                >
                    <ModalAdd
                        tasks={tasks}
                        handleOverlay={handleOverlay}
                        handleAddTask={handleAddTask}
                    />
                </div>
            }
            <Footer />
        </div>
    )
}

export default Home