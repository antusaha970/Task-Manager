import { faCirclePause, faFilter, faPlus, faStream } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React, { useContext } from 'react';
import { Container } from 'react-bootstrap';
import { Link, Route } from 'react-router-dom';
import { TaskContext } from '../../App';
import RightSideBar from '../RightSideBar/RightSideBar';
import SingleTask from '../SingleTask/SingleTask';
import './ProjectArea.css';

const ProjectArea = () => {
    const [tasksList, setTaskList] = useContext(TaskContext);

    return (
        <Container fluid>
            <div className="d-flex gap">
                <div className="left">
                    <div className='project-container'>
                        <div className="title-area">
                            <div className="top-title">
                                <h4 className='heading'>Tasks</h4>
                                <FontAwesomeIcon icon={faFilter} className='ms-auto pt-3' />
                                <Link to={'/make_Project'}><button className='btn project-btn ms-3'>Create Task</button></Link>
                            </div>
                            <div className="row mt-4">
                                <div className="col-md-4 d-flex justify-content-between">
                                    <p className='grayText'>Started</p>
                                    <FontAwesomeIcon icon={faPlus} />
                                </div>
                                <div className="col-md-4">
                                    <Link to={'/important_tasks'} className='d-flex justify-content-between text-decoration-none '>
                                        <p className='grayText'>View Important tasks</p>
                                        <FontAwesomeIcon icon={faPlus} className='font-animation' />
                                    </Link>
                                </div>
                                <div className="col-md-4">
                                    <Link to={'/completed_task'} className='d-flex justify-content-between text-decoration-none '>
                                        <p className='grayText'>Completed</p>
                                        <FontAwesomeIcon icon={faPlus} className='font-animation' />
                                    </Link>
                                </div>
                            </div>
                            <div className="row gap mt-3">
                                {
                                    tasksList.map((task, ind) => <SingleTask key={ind} task={task}></SingleTask>)
                                }
                            </div>
                        </div>
                    </div>
                </div>
                <div>
                    <RightSideBar></RightSideBar>
                </div>
            </div>
        </Container>
    );
};

export default ProjectArea;