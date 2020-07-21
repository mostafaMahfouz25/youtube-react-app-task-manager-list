import React,{useState,useContext,useEffect} from 'react'
import {TaskContext} from '../context/TaskContext'

import TaskList from './TaskList';

export default function EditTask() 
{
    const {editTask,item} = useContext(TaskContext);
    const [title,setTitle] = useState('')


    useEffect(()=>{
        if(item !== null)
        {
            setTitle(item.title)
        }
    },[item])

    const handleSubmit = (e)=>
    {
        e.preventDefault()
        editTask({title:title,id:item.id})
        setTitle('')
    }

    const handleChange = (e)=>{
        setTitle(e.target.value)
        
    }
    return (
        <>
        <form className="border p-3 my-3 " onSubmit={handleSubmit}>
            <h1 className="text-center display-4">Edit Task</h1>
            <div className="form-group">
                <input type="text" className="form-control" onChange={handleChange} value={title} placeholder="Type Title of Task" />
            </div>
            <button type="submit" className="btn btn-success btn-block">Submit</button>
        </form>
        </>
    )
}
