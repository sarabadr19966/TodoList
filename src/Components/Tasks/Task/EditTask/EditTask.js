import React,{useState} from 'react';
import { Button, Modal, ModalHeader, ModalBody, ModalFooter,Form,Input } from 'reactstrap';
import classes from '../Task.module.css'
import './EditTask.css'
import Aux from '../../../../Hoc/Auxiliary/Auxiliary'

const EditTask = (props) => {

  const [modal,setModal]=useState(false);
  const toggleModalHandler=()=>{

    const task=props.tasks[props.num];
    if(!task.done){
      setModal(!modal);

    }
  }



 
  return (
    <Aux>
      <span onClick={toggleModalHandler} className={classes.edit}><i className="fas fa-edit "></i></span>
      <Modal  onOpened= {()=>{ document.querySelector('#d'+props.num).focus()}}
 autoFocus={modal} className='my-modal' centered isOpen={modal} toggle={toggleModalHandler} >
        <ModalHeader toggle={toggleModalHandler}>Edit Task : </ModalHeader>
        <ModalBody>
        <Form id='s' onSubmit={(e)=>{e.preventDefault(); props.save(); toggleModalHandler()}}>
            <Input autoFocus type='text' id={'d'+props.num} name='edit'  />
        </Form>
        </ModalBody>
        <ModalFooter>
            <Button className='save' onClick={()=>{props.save(); toggleModalHandler()}}>Save</Button>
            <Button className='cancel' onClick={toggleModalHandler}>Cancel</Button>
        </ModalFooter>
      </Modal>
    </Aux>
  );
}

export default EditTask;