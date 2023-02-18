import React, { useContext } from 'react';
import { Container } from 'react-bootstrap';
import { TaskContext } from '../../App';
import SingleTask from '../SingleTask/SingleTask';
import './CompletedTask.css';


const CompletedTask = () => {
    const [taskList,setTaskList,completedTask,setCompletedTask] = useContext(TaskContext);

    return (
        <Container >
            <div className="project-container">
                <div className="row gap ">
                    {
                        completedTask.map((task, index) => <SingleTask task={task} key={index*100}></SingleTask>)
                    }
                </div>
            </div>
        </Container>
    );
};

export default CompletedTask;