import 'bootstrap/dist/css/bootstrap.min.css';
import { createContext, useState } from 'react';
import { BrowserRouter, Route, Router, RouterProvider, Routes } from 'react-router-dom';
import './App.css';
import CompletedTask from './Components/CompletedTask/CompletedTask';
import CreateProject from './Components/CreateProject/CreateProject';
import ImportantTask from './Components/ImportantTask/ImportantTask';
import LeftNav from './Components/LeftNav/LeftNav';
import ProjectArea from './Components/ProjectArea/ProjectArea';

export const TaskContext = createContext();



function App() {
  const [taskList, setTaskList] = useState([{
    id: 1,
    title: 'Demo Task',
    description: 'lorem ipusm lotit done lorem ipsum jita poita jani',
    priority: 'Moderate',
    isCompleted: false
  }]);
  let isMobile = false;
  if (window.innerWidth < 500) {
    isMobile = true;
  }

  const [completedTask, setCompletedTask] = useState([]);

  return (
    <TaskContext.Provider value={[taskList, setTaskList, completedTask, setCompletedTask]}>
      {
        isMobile && <h5>Please Use this website on computer</h5>
      }

      <BrowserRouter>
        <LeftNav></LeftNav>
        <Routes>
          <Route path='/' element={<ProjectArea></ProjectArea>} />
          <Route path='/make_Project' element={<CreateProject></CreateProject>} />
          <Route path='/completed_task' element={<CompletedTask></CompletedTask>} />
          <Route path='/important_tasks' element={<ImportantTask></ImportantTask>} />
        </Routes>
      </BrowserRouter>
    </TaskContext.Provider>
  );
}

export default App;
