import React, { useState } from 'react';

const App = () => {
  const [appointments, setAppointments] = useState([]);
  const [patientName, setPatientName] = useState('');
  const [doctorName, setDoctorName] = useState('');
  const [appointmentDate, setAppointmentDate] = useState('');

  const handleSubmit = e => {
    e.preventDefault();
    setAppointments([...appointments, { patientName, doctorName, appointmentDate }]);
    setPatientName('');
    setDoctorName('');
    setAppointmentDate('');
  };

  return (
    <div>
      <h1>医院预约系统</h1>
      <form onSubmit={handleSubmit}>
        <div>
          <label>患者姓名:</label>
          <input type="text" value={patientName} onChange={e => setPatientName(e.target.value)} />
        </div>
        <div>
          <label>医生姓名:</label>
          <input type="text" value={doctorName} onChange={e => setDoctorName(e.target.value)} />
        </div>
        <div>
          <label>预约日期:</label>
          <input type="date" value={appointmentDate} onChange={e => setAppointmentDate(e.target.value)} />
        </div>
        <button type="submit">预约</button>
      </form>
      <h2>预约列表</h2>
      <ul>
        {appointments.map((appointment, index) => (
          <li key={index}>
            患者姓名: {appointment.patientName} | 医生姓名: {appointment.doctorName} | 预约日期: {appointment.appointmentDate}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default App;
