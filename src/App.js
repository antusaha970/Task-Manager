import 'bootstrap/dist/css/bootstrap.min.css';
import { BrowserRouter, Route, Router, RouterProvider, Routes } from 'react-router-dom';
import './App.css';
import LeftNav from './Components/LeftNav/LeftNav';
import ProjectArea from './Components/ProjectArea/ProjectArea';
function App() {
  return (
    <div className="App">
      <BrowserRouter>
      <LeftNav></LeftNav>
      <Routes>
        <Route path='/' element={<ProjectArea></ProjectArea>} />
        <Route path='/make_Project' element={ <p>Create project</p>} />
      </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
