import React from 'react'
import classes from './Status.module.css'

const status=props=>(
    <div className={classes.Status}>
        <p>Tasks : <span>{props.count}</span></p>
        <p>Completed : <span>{props.completed}</span></p>
    </div>
)
export default status;