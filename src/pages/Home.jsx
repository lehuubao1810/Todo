import React from 'react'
import { useState, useEffect, useRef } from 'react'
import Nav from '../components/Nav'
import CardTask from '../components/CardTask'
import ModalAdd from '../components/ModalAdd'

function Home() {
    const [statusModalAdd, setStatusModalAdd] = useState(false)
    
    const [tasks, setTasks] = useState([])

    // useEffect(() => {
    //     const tasks = JSON.parse(localStorage.getItem('tasks'))
    //     if (tasks) {
    //         setTasks(tasks)
    //     }
    // }, [])

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

    useEffect(() => {
        setTasks([
                {
                    title: 'Learn React',
                    description: 'Learn React from the official documentation',
                    status: 'Completed',
                },
                {
                    title: 'Learn JavaScript',
                    description: 'Learn JavaScript from the official documentation',
                    status: 'Incomplete',
                },
                {
                    title: 'Learn CSS',
                    description: 'Learn CSS from the official documentation',
                    status: 'Incomplete',
                },
                {
                    title: 'Learn HTML',
                    description: 'Learn HTML from the official documentation',
                    status: 'Incomplete',
                }
            ])
    }, [])


    const handleAddTask = (task) => {
        setTasks([...tasks, task])
    }
    const handleDeleteTask = (index) => {
        const newTasks = tasks.filter((task, i) => i !== index)
        setTasks(newTasks)
    }

    const handleModalAdd = () => {
        setStatusModalAdd(true)
    }
    const handleOverlay = () => {
        setStatusModalAdd(false)
    }

    return (
        <>
            <Nav/>
            <div className="container">
                <div className="tasks">
                    {tasks.map((task, index) => (
                        <div key={index}>
                            <CardTask
                                task={task}
                                index={index}
                                handleDeleteTask={handleDeleteTask}
                            />
                        </div>
                    ))}
                </div>
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
        </>
    )
}

export default Home