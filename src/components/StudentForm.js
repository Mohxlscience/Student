import React, { useState, useEffect } from 'react';
import axios from '../axios';
import '../styles/StudentForm.css'; // Importation du CSS

const StudentForm = ({ fetchStudents, editingStudent, setEditingStudent }) => {
  const [student, setStudent] = useState({
    first_name: '',
    last_name: '',
    class: '',
    status: 'présent',
    email: '',
    phone: ''
  });

  useEffect(() => {
    if (editingStudent) {
      setStudent(editingStudent);
    }
  }, [editingStudent]);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setStudent({
      ...student,
      [name]: value
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (editingStudent) {
      axios.put(`/api/students/${editingStudent.id}`, student)
        .then(() => {
          fetchStudents();
          setEditingStudent(null);
          setStudent({ first_name: '', last_name: '', class: '', status: 'présent', email: '', phone: '' });
        });
    } else {
      axios.post('/api/students', student)
        .then(() => {
          fetchStudents();
          setStudent({ first_name: '', last_name: '', class: '', status: 'présent', email: '', phone: '' });
        });
    }
  };

  return (
    <div className="form-container">
      <h2>{editingStudent ? 'Modifier l\'étudiant' : 'Ajouter un étudiant'}</h2>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          name="first_name"
          value={student.first_name}
          onChange={handleChange}
          placeholder="Prénom"
          required
        />
        <input
          type="text"
          name="last_name"
          value={student.last_name}
          onChange={handleChange}
          placeholder="Nom"
          required
        />
        <input
          type="text"
          name="class"
          value={student.class}
          onChange={handleChange}
          placeholder="Classe"
          required
        />
        <select name="status" value={student.status} onChange={handleChange}>
          <option value="présent">Présent</option>
          <option value="absent">Absent</option>
          <option value="excusé">Excusé</option>
        </select>
        <input
          type="email"
          name="email"
          value={student.email}
          onChange={handleChange}
          placeholder="Email"
          required
        />
        <input
          type="text"
          name="phone"
          value={student.phone}
          onChange={handleChange}
          placeholder="Téléphone"
          required
        />
        <button type="submit">{editingStudent ? 'Mettre à jour' : 'Ajouter'}</button>
      </form>
    </div>
  );
};

export default StudentForm;
