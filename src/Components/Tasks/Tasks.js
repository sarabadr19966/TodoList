import React from 'react'
import Task from './Task/Task'
import classes from './Tasks.module.css'

const tasks=props=>(
    <div className={classes.Tasks}>
 {   props.tasks.map((task,i)=>{

        return <Task content={task.content} done={task.done} key={i}  clickedDone={()=>{props.clickedDone(i)}}
         clickedRemove={()=>{props.clickedRemove(i)} } toggle={()=>{ props.toggle(i)}} modal={props.modal}
         save={()=>{props.save(i)}} num={i}  tasks={props.tasks}/>
    })}
    </div>

    
)

export default tasks;
