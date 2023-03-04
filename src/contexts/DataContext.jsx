import { createContext, useContext, useState, useEffect } from 'react';
import { db } from '../firebase';
import { doc, getDoc, updateDoc } from "firebase/firestore";
import { auth } from '../firebase';
import { useAuth } from './AuthContext';

const DataContext = createContext();
export function useData() {
    return useContext(DataContext);
}

export function DataProvider({ children }) {

    const { currentUser, loading } = useAuth();
    const [tasks, setTasks] = useState([])

    // get data from firebase
    useEffect(() => {
        const uid = currentUser.uid;
        const getTasks = async () => {
            const docRef = doc(db, "tasks", uid);
            const docSnap = await getDoc(docRef);

            if (docSnap.exists()) {
                setTasks(docSnap.data().tasks)
            } else {
                console.log("No such document!");
            }
        }
        {uid && getTasks()}
    }, [loading]);

    const updateFirebase = async (tasks) => {
        const uid = currentUser.uid;
        const docRef = doc(db, "tasks", uid);
        const docSnap = await getDoc(docRef);
        if (docSnap.exists()) {
            await updateDoc(docRef, {
                tasks: tasks
            });
        } else {
            console.log("No such document!");
        }
    }

    const handleAddTask = (task) => {
        setTasks([...tasks, task])
        updateFirebase([...tasks, task])
    }

    const handleDeleteTask = (index) => {
        const newTasks = tasks.filter((task, i) => i !== index)
        setTasks(newTasks)
        updateFirebase(newTasks)
    }
    const value = {
        tasks,
        updateFirebase,
        handleAddTask,
        handleDeleteTask,
    };
    return (
        <DataContext.Provider value={value}>
            {children}
        </DataContext.Provider>
    )
}