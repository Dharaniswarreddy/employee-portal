import React from 'react';

export default function Holidays({ user }) {
  const holidays = [
    { name: 'New Year', date: '01-Jan-2026', day: 'Wednesday' },
    { name: 'Republic Day', date: '26-Jan-2026', day: 'Monday' },
    { name: 'Holi', date: '14-Mar-2026', day: 'Saturday' },
    { name: 'Good Friday', date: '03-Apr-2026', day: 'Friday' },
    { name: 'Independence Day', date: '15-Aug-2026', day: 'Friday' },
    { name: 'Diwali', date: '24-Oct-2026', day: 'Saturday' },
  ];

  return (
    <div className="page-content">
      <div className="page-header">
        <h2>Holidays</h2>
        <p>View company holidays for 2026</p>
      </div>

      <div className="card">
        <table className="holidays-table">
          <thead>
            <tr>
              <th>Holiday Name</th>
              <th>Date</th>
              <th>Day</th>
            </tr>
          </thead>
          <tbody>
            {holidays.map((holiday, idx) => (
              <tr key={idx}>
                <td className="holiday-name">{holiday.name}</td>
                <td>{holiday.date}</td>
                <td>{holiday.day}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      <div className="card">
        <h3>Holiday Statistics</h3>
        <div className="stats-grid">
          <div className="stat-box">
            <div className="stat-number">6</div>
            <div className="stat-label">Total Holidays</div>
          </div>
          <div className="stat-box">
            <div className="stat-number">4</div>
            <div className="stat-label">Weekday Holidays</div>
          </div>
          <div className="stat-box">
            <div className="stat-number">2</div>
            <div className="stat-label">Weekend Holidays</div>
          </div>
        </div>
      </div>
    </div>
  );
}
