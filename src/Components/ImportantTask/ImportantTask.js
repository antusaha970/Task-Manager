import { faPlus } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React, { useContext, useState, useEffect } from 'react';
import { Container } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import { TaskContext } from '../../App';
import SingleTask from '../SingleTask/SingleTask';

const ImportantTask = () => {
    const [taskList, setTaskList, completedTask, setCompletedTask] = useContext(TaskContext);
    const [importantTaskList, setImportantTaskList] = useState([]);
    useEffect(() => {
        const List = taskList.filter(task => task.priority === 'Important');
        setImportantTaskList(List);
    }, [taskList])

    return (
        <Container>
            <div className="project-container">
                <div className="row">
                    <div className="col-md-4">
                        <Link to={'/'} className='d-flex justify-content-between text-decoration-none'>
                            <p className='grayText'>View On Going Tasks</p>
                            <FontAwesomeIcon icon={faPlus} />
                        </Link>
                    </div>
                </div>
                <div className="row gap">
                    {
                        importantTaskList.map((task, index) => <SingleTask task={task}></SingleTask>)
                    }
                </div>
            </div>

        </Container>
    );
};

export default ImportantTask;