import { faTrash } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React, { useContext } from 'react';
import { TaskContext } from '../../App';
import './SIngleTask.css';




const SingleTask = ({ task }) => {
    
    const { title, description, prograssed,id } = task;

    const [taskList,setTaskList,completedTask,setCompletedTask] = useContext(TaskContext);

    const handleDeleteTask = (id) => {
        const newTaskList = taskList.filter(task => task.id !== id);
        const taskForDelete = taskList.find(task => task.id === id);
        const editTask = {...taskForDelete,isCompleted: true};
        setTaskList(newTaskList);
        setCompletedTask([...completedTask,editTask]);
    }
    return (
        <div className='task-container col-md-4'>
            <div className="project-top-area">
                <p className='title-text'>{title}</p>
                <p title='Delete task' onClick={()=> handleDeleteTask(id)}><FontAwesomeIcon icon={ faTrash} /></p>
            </div>
            <div className="project-area-center">
                <p>{description}</p>
            </div>
            <div className="project-area-end">
                <div className="loader">
                    <div className="loaderBar"></div>
                </div>
            </div>
        </div>
    );
};

export default SingleTask;