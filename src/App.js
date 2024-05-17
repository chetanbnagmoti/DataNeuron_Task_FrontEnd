import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './components/Home';
import Task1 from './components/Task1';
import UserTable from './components/userTable';
import './App.css';
import Header from './components/header';
import { ToastContainer} from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';


const App = () => {
  return (
    <> 
    <Router>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/task-1" element={<Task1 />} />
        <Route path="/task-2" element={<UserTable />} />
      </Routes>
    </Router>
    <ToastContainer />  
    </>
  );
};

export default App;
