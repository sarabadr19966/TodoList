import React from 'react'
import classes from './Task.module.css'
import EditTask from './EditTask/EditTask'

const task=props=>{

   return <div className={classes.TaskWrapper}>
        <div className={[classes.TaskContent,props.done ? classes.done : null].join(' ')}>{props.content}</div>
        <div>
            <span className={classes.check} onClick={props.clickedDone} ><i className=" fas fa-check" ></i></span>
            <EditTask   save={props.save} num={props.num} tasks={props.tasks}/>
            <span className={classes.remove} onClick={props.clickedRemove} ><i className=" fas fa-times"></i></span>
        </div>
    </div>
}
export default task;