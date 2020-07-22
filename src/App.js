import React from 'react';
import classes from './App.module.css'
import TaskBuilder from './Containers/TasksBuilder/TaskBuilder'
function App() {
    return <div className={classes.App}>
     <TaskBuilder/>
     </div>
}

export default App;
