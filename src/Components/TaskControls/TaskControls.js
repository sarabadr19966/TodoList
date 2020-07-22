import React,{useEffect} from 'react'
import { Form, Label, Input, Button,InputGroup, InputGroupAddon} from 'reactstrap';
import classes from './TaskControls.module.css'


const TaskControls=props=>{
  useEffect(()=>{
    document.getElementById('entertask').focus() 

  })
   return <div className={classes.TaskControls}>
    <Form onSubmit={props.enter}>
      <Label for='entertask' >Add A New Task :</Label>
      <InputGroup>
        <Input  type='text' id='entertask' name='entertask' />
        <InputGroupAddon addonType="append">
          <Button  onClick={props.clickedAdd} color='primary'><i className="fas fa-plus"></i></Button>
        </InputGroupAddon>
      </InputGroup> 
    </Form>
     
      
    </div>
}
export default TaskControls;

