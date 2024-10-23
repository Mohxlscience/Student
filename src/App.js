import React, { useState, useEffect } from 'react';
import axios from './axios';
import './App.css';
import StudentForm from './components/StudentForm';
import StudentList from './components/StudentList';
import ExportButtons from './components/ExportButtons';


const App = () => {
  const [students, setStudents] = useState([]);
  const [editingStudent, setEditingStudent] = useState(null);

  const fetchStudents = () => {
    axios.get('/api/students')
      .then((response) => setStudents(response.data));
  };

  const deleteStudent = (id) => {
    axios.delete(`/api/students/${id}`)
      .then(() => fetchStudents());
  };

  const editStudent = (student) => {
    setEditingStudent(student);
  };

  useEffect(() => {
    fetchStudents();
  }, []);

  return (
    <div>
      <h1>Gestion des étudiants</h1>
      <StudentForm fetchStudents={fetchStudents} editingStudent={editingStudent} setEditingStudent={setEditingStudent} />
      <StudentList students={students} editStudent={editStudent} deleteStudent={deleteStudent} />
      <ExportButtons />
    </div>
  );
};

export default App;
