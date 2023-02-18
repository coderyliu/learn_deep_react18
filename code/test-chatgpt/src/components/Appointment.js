import React, { useState, useEffect } from "react";
import axios from "axios";

function Appointment() {
  const [doctors, setDoctors] = useState([]);
  const [selectedDoctor, setSelectedDoctor] = useState("");
  const [appointmentDate, setAppointmentDate] = useState("");

  useEffect(() => {
    axios.get("/api/doctors").then((res) => {
      setDoctors(res.data);
    });
  }, []);

  const handleAppointment = (e) => {
    e.preventDefault();
    // TODO: 处理挂号逻辑
  };

  return (
    <div className="container mt-5">
      <h1>挂号预约</h1>
      <form onSubmit={handleAppointment}>
        <div className="mb-3">
          <label htmlFor="doctor" className="form-label">
            选择医生
          </label>
          <select
            id="doctor"
            className="form-select"
            value={selectedDoctor}
            onChange={(e) => setSelectedDoctor(e.target.value)}
          >
            <option value="">请选择</option>
            {doctors.map((doctor) => (
              <option key={doctor.id} value={doctor.id}>
                {doctor.name}
              </option>
            ))}
          </select>
        </div>
        <div className="mb-3">
          <label htmlFor="date" className="form-label">
            选择日期
          </label>
          <input
            type="date"
            id="date"
            className="form-control"
            value={appointmentDate}
            onChange={(e) => setAppointmentDate(e.target.value)}
          />
        </div>
        <button type="submit" className="btn btn-primary">
          提交
        </button>
      </form>
    </div>
  );
}

export default Appointment;
