import React ,{Component} from 'react'
import Tasks from '../../Components/Tasks/Tasks'
import classes from './TaskBuilder.module.css'
import Status from '../../Components/Status/Status'
import TaskControls from '../../Components/TaskControls/TaskControls'
import Cockpit from '../../Components/Cockpit/Cockpit'


class TaskBuilder extends Component{

    state={
        tasks:[
            {content:'read book' ,done:false},
            {content:'run a mile',done:false}
        ],
        count:0,
        completed:0    
    }


    doneTaskHandler=(id)=>{
        let tasks=[...this.state.tasks];
        tasks[id].done=true;
        this.setState({
            tasks:tasks
        },() => {
            this.tasksCountHandler()
            this.tasksCompletedHandler()
       
    })
    }
    removeTaskHandler=(id)=>{
        let tasks=[...this.state.tasks];
        tasks.splice(id,1)
        this.setState({
            tasks:tasks
        },() => {
            this.tasksCountHandler()
            this.tasksCompletedHandler()  
    })
       
   }
  
   saveEditHandler=(id)=>{
    let task=document.getElementById('d'+id);

    if(task.value ===' ' || task.value===''){
        return ;
    }
    else{
        let tasks=[...this.state.tasks];
        tasks[id].content=task.value;
        this.setState({
            tasks:tasks
        })
    }}

   enterKeyHandler=(event)=>{
        event.preventDefault();
        this.addTaskHandler();
      
   }
    addTaskHandler=()=>{
        const task=document.getElementById('entertask');
        const tasks=[...this.state.tasks]
        if(task.value ===' ' || task.value===''){
            return ;
        }
     
        else{
            tasks.push({
                content:task.value,done:false
            })
            this.setState({
                tasks:tasks,
            },this.tasksCountHandler)
            task.value=' '
        }
   
        
     }

     tasksCountHandler=()=>{
        let count =0;
        const tasks=this.state.tasks;
        tasks.forEach(task=>{
            if(!task.done){
                count++;
            }
        })
      this.setState({count:count})
     }
 
     tasksCompletedHandler=()=>{
        let completed =0;

        const tasks=this.state.tasks;
        tasks.forEach(task=>{
            if(task.done){
                completed++;
            }
        })
   
      this.setState({completed:completed})
     }

    render(){

        return <main className={classes.MainContent}>
            <Cockpit/>
            <Tasks tasks={this.state.tasks} 
             clickedDone={this.doneTaskHandler} clickedRemove={this.removeTaskHandler} save={this.saveEditHandler}/>   
            <TaskControls clickedAdd={this.addTaskHandler} disabled={this.state.disabled} enter={(e)=>{this.enterKeyHandler(e)}} />
            <Status count={this.state.count} completed={this.state.completed}/>
        </main>
        
    }
}
export default TaskBuilder;