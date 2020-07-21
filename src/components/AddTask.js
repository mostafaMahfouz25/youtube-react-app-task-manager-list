import React,{useState,useContext} from 'react'
import {TaskContext} from '../context/TaskContext'

import TaskList from './TaskList';

export default function AddTask() 
{
    const {addTask} = useContext(TaskContext);
    const [title,setTitle] = useState('')

    const handleSubmit = (e)=>
    {
        e.preventDefault()
        addTask({title:title,id:Math.floor(Math.random() * 100000)})
        setTitle('')
    }

    const handleChange = (e)=>{
        setTitle(e.target.value)
        
    }
    return (
        <>
        <form className="border p-3 my-3 " onSubmit={handleSubmit}>
            <h1 className="text-center display-4">Add New Task</h1>
            <div className="form-group">
                <input type="text" className="form-control" onChange={handleChange} value={title} placeholder="Type Title of Task" />
            </div>
            <button type="submit" className="btn btn-success btn-block">Submit</button>
        </form>
        <TaskList />
        </>
    )
}
