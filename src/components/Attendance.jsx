import React, { useState } from 'react';

export default function Attendance({ user }) {
  const [month, setMonth] = useState('December');

  const attendanceData = [
    { date: '18-Dec', status: 'Present', time: '09:00 AM' },
    { date: '17-Dec', status: 'Present', time: '08:45 AM' },
    { date: '16-Dec', status: 'Absent', time: '--' },
    { date: '15-Dec', status: 'Present', time: '09:15 AM' },
    { date: '14-Dec', status: 'Present', time: '08:30 AM' },
    { date: '13-Dec', status: 'Present', time: '09:00 AM' },
  ];

  return (
    <div className="page-content">
      <div className="page-header">
        <h2>My Attendance</h2>
        <p>Track your attendance records</p>
      </div>

      <div className="card">
        <div className="card-header">
          <h3>Attendance Overview - {month}</h3>
          <select value={month} onChange={(e) => setMonth(e.target.value)} className="month-select">
            <option>January</option>
            <option>February</option>
            <option>March</option>
            <option>April</option>
            <option>May</option>
            <option>June</option>
            <option>July</option>
            <option>August</option>
            <option>September</option>
            <option>October</option>
            <option>November</option>
            <option>December</option>
          </select>
        </div>

        <table className="attendance-table">
          <thead>
            <tr>
              <th>Date</th>
              <th>Status</th>
              <th>Time</th>
            </tr>
          </thead>
          <tbody>
            {attendanceData.map((record, idx) => (
              <tr key={idx}>
                <td>{record.date}</td>
                <td>
                  <span className={`status-badge ${record.status.toLowerCase()}`}>
                    {record.status}
                  </span>
                </td>
                <td>{record.time}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}
