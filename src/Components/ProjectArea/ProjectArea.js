import { faCirclePause, faFilter, faPlus, faStream } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React from 'react';
import { Container } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import SingleTask from '../SingleTask/SingleTask';
import './ProjectArea.css';

const ProjectArea = () => {
    return (
        <Container>
            <div className='project-container'>
                <div className="title-area">
                    <div className="top-title">
                        <h4 className='heading'>Projects</h4>
                        <FontAwesomeIcon icon={faFilter} className='ms-auto pt-3' />
                        <Link to={'/make_Project'}><button className='btn project-btn ms-3'>Create Project</button></Link>
                    </div>
                    <div className="row mt-4">
                        <div className="col-md-4 d-flex justify-content-between">
                            <p className='grayText'>Started</p>
                            <FontAwesomeIcon icon={ faPlus } />
                        </div>
                        <div className="col-md-4 d-flex justify-content-between">
                            <p className='grayText'>On Going</p>
                            <FontAwesomeIcon icon={ faPlus } />
                        </div>
                        <div className="col-md-4 d-flex justify-content-between">
                            <p className='grayText'>Completed</p>
                            <FontAwesomeIcon icon={ faPlus } />
                        </div>
                    </div>
                    <div className="row gap mt-3">
                        <SingleTask></SingleTask>
                        <SingleTask></SingleTask>
                        <SingleTask></SingleTask>
                    </div>
                </div>
            </div>
        </Container>
    );
};

export default ProjectArea;