import React from 'react'
import { useState, useEffect, useRef, useContext } from 'react'
import { useAuth } from '../contexts/AuthContext';
import { db } from '../firebase';
import { collection, doc, getDoc, setDoc, updateDoc } from "firebase/firestore";
import Header from '../components/Header'
import Footer from '../components/Footer'
import CardTask from '../components/CardTask'
import ModalAdd from '../components/ModalAdd'
import { ThemeContext } from '../contexts/ThemeContext'
import { useData } from '../contexts/DataContext';

function Home() {
    const { theme } = useContext(ThemeContext)
    const { logout, currentUser, loading } = useAuth();
    

    const handleLogout = async () => {
        try {
            await logout();
            navigate('/login');
        } catch {
            console.log('Failed to log out');
        }
    }

    const [statusModalAdd, setStatusModalAdd] = useState(false)

    const { tasks, handleAddTask} = useData()

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
                                        task={task}
                                        index={index}
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