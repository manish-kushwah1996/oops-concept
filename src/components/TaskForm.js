import {StatusCodes} from 'http-status-codes'
import { useState } from 'react'
import {Alert,Button,Col,Container,Form,Row}from 'react-bootstrap';
import { saveTask } from '../services/TaskService';
import { Header } from './Header';

export function TaskForm(){
    const [formData,setFormData]=useState({});
    const [isTaskCreated,setIsTaskCreated]=useState(false);
     const [isError,setIsError]=useState(false);
     const handleChange=(e)=>{
        setFormData({...formData,[e.target.name]:e.target.value})
     }
     const handleSubmit=async(e)=>{
        e.preventDefault();
        const response=await saveTask(formData)
        if(response.status==StatusCodes.CREATED){
            setIsTaskCreated(true)
        }
        setTimeout(()=>{
            setIsTaskCreated(false)
        },2000);
     }
     return(
     <>
     <Container className="mt-5 text-center">
         <Alert>Add a new Task</Alert>
     </Container>
     <Container className='mt-3'>
         <Form onSubmit={handleSubmit}>
             <Row>
                 <Col lg={6}>
                     <Form.Group className="mb-3" controlId="formBasicPassword">
                         <Form.Label>Task Name</Form.Label>
                         <Form.Control type="text" name="name" placeholder="Enter task name" onChange={handleChange} />
                     </Form.Group>
                 </Col>
                 <Col lg={6}>
                     <Form.Group className="mb-3" controlId='formBasicPassword'>
                         <Form.Label>Description</Form.Label>
                         <Form.Control type="text" name="descrption" placeholder="Enter description" onChange={handleChange} />
                     </Form.Group>
                 </Col>
                 <Col lg={6}>
                     <Form.Group className="mb-3">
                         <Form.Label>deadline</Form.Label>
                         <Form.Control type="data" name="deadline" onChange={handleChange} />
                     </Form.Group>
                 </Col>
                
             </Row>
             <Button type="submit" classname='btn btn-success'>Created Task</Button>
         </Form>
     </Container>
     {
         isTaskCreated ? <Header alertText='task created successfully'></Header>:null
         

     }
     {
        isError?<Container>
            <Alert variant ='danger'>
                Error in creating task ...please try aain later 
            </Alert>
        </Container>:null
     }
 
 </>
 )
}