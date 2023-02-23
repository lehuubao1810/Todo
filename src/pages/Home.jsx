import React from 'react'
import Nav from '../components/Nav'
import CardTask from '../components/CardTask'

function Home() {
    const tasks = [
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
    ]

    return (
        <>
            <Nav />
            <div className="container">
                <div className="tasks">
                    {tasks.map((task, index) => (
                        <div key={index}>
                            <CardTask
                                task={task}
                            />
                        </div>
                    ))}
                </div>
            </div>
            <button className="btnAddTask">
                <i className="fa-solid fa-plus"></i>
            </button>
        </>
    )
}

export default Home