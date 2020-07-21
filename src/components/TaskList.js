import React,{useContext} from 'react'
import {TaskContext} from '../context/TaskContext'
import Task from './Task'
import NotFound from './NotFound'
import EditTask from './EditTask'

export default function TaskList() {

    const {tasks,item} = useContext(TaskContext);


    return (
        <>
        {item ?<EditTask /> : ''}
        <h1 className="text-center display-4 my-3">All Tasks</h1>
        <ul className="list-unstyled p-3 m-3 rounded border">
            {tasks.length ? tasks.map((item,index)=>{
                return (<Task item={item} key={index} />)
            }) : <NotFound />}
            
        </ul>
        </>
    )
}
