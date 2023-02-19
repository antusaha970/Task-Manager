import { faTrash } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React, { useContext } from 'react';
import { TaskContext } from '../../App';
import './SIngleTask.css';




const SingleTask = ({ task }) => {
    
    const { title, description, prograssed,id,isCompleted,priority } = task;

    const [taskList,setTaskList,completedTask,setCompletedTask] = useContext(TaskContext);

    const handleDeleteTask = (id) => {
        const newTaskList = taskList.filter(task => task.id !== id);
        const taskForDelete = taskList.find(task => task.id === id);
        taskForDelete.isCompleted = true;
        setTaskList(newTaskList);
        setCompletedTask([...completedTask,taskForDelete]);
    }
    let priorityStyle = {};

    if(priority === 'Important'){
        priorityStyle = {
            background: "#FFEFE1",
            color: "#F07D13"
        }
    }

    return (
        <div className='task-container col-md-4'>
            <div className="project-top-area">
                <p className='title-text' style={priorityStyle}>{title}</p>
                <p title='Delete task' className='mouse-point' onClick={()=> handleDeleteTask(id)}><FontAwesomeIcon icon={ faTrash} /></p>
            </div>
            <div className="project-area-center">
                <p>{description}</p>
            </div>
            <div className="project-area-end">
                {!isCompleted ? <div className="loader">
                    <div className="loaderBar"></div>
                </div>: <p>Task Finished</p>}
            </div>
        </div>
    );
};

export default SingleTask;