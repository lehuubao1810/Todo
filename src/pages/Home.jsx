import React from 'react'
import { useState, useEffect, useRef } from 'react'
import Header from '../components/Header'
import Footer from '../components/Footer'
import CardTask from '../components/CardTask'
import ModalAdd from '../components/ModalAdd'

function Home() {
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

    // const tasks = [
    //     {
    //         title: 'Learn React',
    //         description: 'Learn React from the official documentation',
    //         status: 'Completed',
    //     },
    //     {
    //         title: 'Learn JavaScript',
    //         description: 'Learn JavaScript from the official documentation',
    //         status: 'Incomplete',
    //     },
    //     {
    //         title: 'Learn CSS',
    //         description: 'Learn CSS from the official documentation',
    //         status: 'Incomplete',
    //     },
    //     {
    //         title: 'Learn HTML',
    //         description: 'Learn HTML from the official documentation',
    //         status: 'Incomplete',
    //     }
    // ]

    // useEffect(() => {
    //     setTasks([
    //         {
    //             title: 'Learn React',
    //             description: 'Learn React from the official documentation',
    //             status: 'Completed',
    //         },
    //         {
    //             title: 'Learn JavaScript',
    //             description: 'Learn JavaScript from the official documentation',
    //             status: 'Incomplete',
    //         },
    //         {
    //             title: 'Learn CSS',
    //             description: 'Learn CSS from the official documentation',
    //             status: 'Incomplete',
    //         },
    //         {
    //             title: 'Learn HTML',
    //             description: 'Learn HTML from the official documentation',
    //             status: 'Incomplete',
    //         }
    //     ])
    // }, [])
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
        <>
            <Header />
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
        </>
    )
}

export default Home