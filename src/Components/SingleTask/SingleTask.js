import { faGrip } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React from 'react';
import './SIngleTask.css';

const SingleTask = () => {
    return (
        <div className='task-container col-md-4'>
            <div className="project-top-area">
                <p className='title-text'>Web Design</p>
                <p title='Delete task'><FontAwesomeIcon icon={faGrip} /></p>
            </div>
            <div className="project-area-center">
                <p>Lorem ipsum dolor sit.</p>
            </div>
        </div>
    );
};

export default SingleTask;