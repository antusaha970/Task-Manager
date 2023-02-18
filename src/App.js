import 'bootstrap/dist/css/bootstrap.min.css';
import { createContext, useState } from 'react';
import { BrowserRouter, Route, Router, RouterProvider, Routes } from 'react-router-dom';
import './App.css';
import CreateProject from './Components/CreateProject/CreateProject';
import LeftNav from './Components/LeftNav/LeftNav';
import ProjectArea from './Components/ProjectArea/ProjectArea';

export const TaskContext = createContext();


function App() {
  const [taskList, setTaskList] = useState([{
    id: 1,
    title: 'Demo Task',
    description: 'lorem ipusm lotit done lorem ipsum jita poita jani',
    progressed: 30
  }]);

  const [completedTask,setCompletedTask] = useState([]);

  return (
    <TaskContext.Provider value={[taskList,setTaskList,completedTask,setCompletedTask]}>
      <BrowserRouter>
        <LeftNav></LeftNav>
        <Routes>
          <Route path='/' element={<ProjectArea></ProjectArea>} />
          <Route path='/make_Project' element={<CreateProject></CreateProject>} />
        </Routes>
      </BrowserRouter>
    </TaskContext.Provider>
  );
}

export default App;
