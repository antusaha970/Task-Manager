import { faClock } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React, { useContext, useEffect, useState } from 'react';
import { TaskContext } from '../../App';
import CompletedTask from '../CompletedTask/CompletedTask';
import './RightSIdeBar.css';
import { useDate } from './USeDate';
const RightSideBar = () => {
    const { date, time, wish } = useDate();
    const [taskList, setTaskList, completedTask, setCompletedTask] = useContext(TaskContext);
    const [count, setCount] = useState({ mod: 0, imp: 0 });

    useEffect(() => {
        const modCount = taskList.filter(task => task.priority === 'Moderate');
        const impCount = taskList.filter(task => task.priority === 'Important');
        setCount({ imp: impCount.length, mod: modCount.length });
    }, [taskList])

    return (
        <div className="right">
            <div className="show-time d-flex justify-content-around align-items-center">
                <div className="icon">
                    <FontAwesomeIcon icon={faClock} className='clock' />
                </div>
                <div className="time">
                    <p className='font-style-right'>{date}</p>
                    <p className='font-style-right'>{time}</p>
                    <p className='font-style-right'>{wish}</p>
                </div>
            </div>
            <div className="audit mt-5 ">
                <h6 className='font-style-right mb-2'>Tasks</h6>
                <div className="row">
                    <div className="col-md-6">
                        <div className="total-project">
                            <small className='text-muted'>Total</small>
                            <p className='font-style-right t-p'>{taskList.length}</p>
                        </div>
                    </div>
                    <div className="col-md-6">
                        <div className="important-project total-project">
                            <small className='text-muted'>Important</small>
                            <p className='font-style-right t-p'>{count.imp}</p>
                        </div>
                    </div>
                    <div className="col-md-6 mt-3">
                        <div className="mod-project total-project">
                            <small className='text-muted'>Moderate</small>
                            <p className='font-style-right t-p'>{count.mod}</p>
                        </div>
                    </div>
                    <div className="col-md-6 mt-3">
                        <div className="total-project cmp-project">
                            <small className='text-muted'>Completed</small>
                            <p className='font-style-right t-p'>{completedTask.length}</p>
                        </div>
                    </div>
                </div>
            </div>
            <div className="qoute mt-4">
                <h4>“The shorter way to do many things is to only do one thing at a time.” -Mozart</h4>
            </div>
        </div>
    );
};

export default RightSideBar;