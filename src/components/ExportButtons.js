import React from 'react';
import axios from '../axios';


const ExportButtons = () => {
  const exportExcel = () => {
    axios.get('/api/students/export/excel', { responseType: 'blob' })
      .then(response => {
        const url = window.URL.createObjectURL(new Blob([response.data]));
        const link = document.createElement('a');
        link.href = url;
        link.setAttribute('download', 'students.xlsx');
        document.body.appendChild(link);
        link.click();
      });
  };

  const exportWord = () => {
    axios.get('/api/students/export/word', { responseType: 'blob' })
      .then(response => {
        const url = window.URL.createObjectURL(new Blob([response.data]));
        const link = document.createElement('a');
        link.href = url;
        link.setAttribute('download', 'students.docx');
        document.body.appendChild(link);
        link.click();
      });
  };

  return (
    <div>
      <button className="export-excel" onClick={exportExcel}>Exporter en Excel</button>
      <button className="export-word" onClick={exportWord}>Exporter en Word</button>
    </div>
  );
};

export default ExportButtons;
