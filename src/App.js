import React from 'react';
import './index.css';
import Cruddata from './Cruddata'
import TeacherData from './TeacherData';
import Register from './Register';
import { Button } from '@mui/material';

import {
  BrowserRouter,
  Routes,
  Route,
  Link,
  useNavigate
} from 'react-router-dom';

export default function App() {
  return (
    <div className="dashboard">
      <BrowserRouter>
        <Routes>

          <Route path="/" element={<Dashboard />}></Route>
          <Route path="/teachersdata" element={<TeachersData />}></Route>
          <Route path="/studentsdata" element={<StudentsData />}></Route>
          <Route path="/registerstudent" element={<Register />}></Route>
        </Routes>
      </BrowserRouter>
    </div>
  )
}

function Dashboard() {
  return (
    <div className="admin">
      <div>
        <h1>Admin Login Page</h1>
      </div>
      <div>
        <Button variant="contained" component={Link} to="/teachersdata">Teacher's Details</Button> &nbsp;
        <Button variant="contained" component={Link} to="/studentsdata">Student's Details</Button> &nbsp;
      </div>
    </div>
  )
}

function TeachersData() {
  const navigate = useNavigate();
  return (
    <>
      <br />&nbsp;<button onClick={() => navigate(-1)}> Back</button>&nbsp;
      <TeacherData />
    </>
  )
}

function StudentsData() {
  const navigate = useNavigate();
  return (
    <>
      <br />&nbsp;<button onClick={() => navigate(-1)}> Back</button>&nbsp;

      <Cruddata />

    </>
  )
}