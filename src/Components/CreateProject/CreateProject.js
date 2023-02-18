import React, { useContext, useRef,useState } from 'react';
import { Container } from 'react-bootstrap';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import { Link } from 'react-router-dom';
import { TaskContext } from '../../App';
import './CreateProject.css';

const CreateProject = () => {
    const [taskList,setTaskList] = useContext(TaskContext);
    const titleRef = useRef();
    const descriptionRef = useRef();
    const prograssedRef = useRef();
    const [added,setAdded] = useState(false);

    const handleSubmit = (e)=> {
        const title = titleRef.current.value;
        const description = descriptionRef.current.value;
        const progression  = prograssedRef.current.value;
        const newList = {
            title: title,
            description: description,
            progressed: progression,
            id: taskList.length+1
        }
        setTaskList([...taskList,newList]);
        titleRef.current.value = "";
        descriptionRef.current.value ="";
        prograssedRef.current.value ="";
        setAdded(true);
        e.preventDefault();
    }

    setTimeout(()=>{
        if(added){
            setAdded(false);
        }
    },5000)


    return (
        <Container className='project-container'>
            <Form onSubmit={handleSubmit}>
                <Form.Group className="mb-3" controlId="formBasicEmail">
                    <Form.Label>Title</Form.Label>
                    <Form.Control type="text" placeholder="Enter Title" ref={titleRef}  />
                    <Form.Text className="text-muted">
                        Title must be short and specific one.
                    </Form.Text>
                </Form.Group>

                <Form.Group className="mb-3" controlId="formBasicDes">
                    <Form.Label>Desciptcription </Form.Label>
                    <Form.Control type="text" placeholder="Enter Desciptcription"  ref={descriptionRef} />
                </Form.Group>

                <Form.Group className="mb-3" controlId="fromBasicProgressed">
                    <Form.Label>Progressed? </Form.Label>
                    <Form.Control type="progress" ref={prograssedRef} />
                    <Form.Text className="text-muted">
                        Enter your progression in percentage
                    </Form.Text>
                </Form.Group>
                <Button variant="primary" type="submit">
                    Submit
                </Button>
            </Form>
            <Link to={'/'}  style={{textDecoration:'none'}}>
                <Button variant="danger" type="btn" className='d-block m-auto'>
                Back
                </Button>
            </Link>
              {added && <p className='text-center task-added'>Task Added</p>}
        </Container>
    );
};

export default CreateProject;