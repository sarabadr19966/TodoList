import React from 'react'
import classes from './Cockpit.module.css'
import Aux from '../../Hoc/Auxiliary/Auxiliary'
const cockpit =props=>(
    <Aux>
        <h1  className={classes.head}>Todo List <i className="fas fa-heart"></i></h1>
        <div className={classes.line}></div>
    </Aux>
)

export default cockpit;