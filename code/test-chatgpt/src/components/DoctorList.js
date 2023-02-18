import React, { useState, useEffect } from "react";
import axios from "axios";

function DoctorList() {
  const [doctors, setDoctors] = useState([]);

  useEffect(() => {
    axios.get("/api/doctors").then((res) => {
      setDoctors(res.data);
    });
  }, []);

  return (
    <div className="container mt-5">
      <h1>医生信息</h1>
      <table className="table table-striped">
        <thead>
          <tr>
            <th>姓名</th>
            <th>职称</th>
            <th>科室</th>
            <th>挂号费</th>
          </tr>
        </thead>
        <tbody>
          {doctors.map((doctor) => (
            <tr key={doctor.id}>
              <td>{doctor.name}</td>
              <td>{doctor.title}</td>
              <td>{doctor.department}</td>
              <td>{doctor.registrationFee}元</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default DoctorList;
