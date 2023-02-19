import { faPlus } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React, { useContext } from 'react';
import { Container } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import { TaskContext } from '../../App';
import SingleTask from '../SingleTask/SingleTask';
import './CompletedTask.css';


const CompletedTask = () => {
    const [taskList, setTaskList, completedTask, setCompletedTask] = useContext(TaskContext);

    return (
        <Container >
            <div className="project-container">
                <div className="row">
                    <div className="col-md-4">
                        <Link to={'/'}  className='d-flex justify-content-between text-decoration-none'>
                            <p className='grayText'>View On Going Tasks</p>
                            <FontAwesomeIcon icon={faPlus} />
                        </Link>
                    </div>
                </div>
                <div className="row gap ">
                    {
                        completedTask.map((task, index) => <SingleTask task={task} key={index * 100}></SingleTask>)
                    }
                </div>
            </div>
        </Container>
    );
};

export default CompletedTask;