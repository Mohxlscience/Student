import React from 'react';
import '../styles/StudentList.css'; // Importation du CSS

const StudentList = ({ students, editStudent, deleteStudent }) => {
  return (
    <div className="table-container">
      <table>
        <thead>
          <tr>
            <th>Prénom</th>
            <th>Nom</th>
            <th>Classe</th>
            <th>Statut</th>
            <th>Email</th>
            <th>Téléphone</th>
            <th>Ajout</th>
            <th>Mise à jour</th>
            <th>Actions</th>
          </tr>
        </thead>
        <tbody>
          {students.map((student) => (
            <tr key={student.id}>
              <td>{student.first_name}</td>
              <td>{student.last_name}</td>
              <td>{student.class}</td>
              <td>{student.status}</td>
              <td>{student.email}</td>
              <td>{student.phone}</td>
              <td>{new Date(student.created_at).toLocaleDateString()}</td> {/* Date d'ajout formatée */}
              <td>{new Date(student.updated_at).toLocaleDateString()}</td> {/* Date de mise à jour formatée */}
              <td>
                <button className="edit-btn" onClick={() => editStudent(student)}>Modifier</button>
                <button className="delete" onClick={() => deleteStudent(student.id)}>Supprimer</button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default StudentList;
