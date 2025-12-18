import React, { useEffect, useState } from 'react';
import { clockIn, clockOut, getDayRecord } from '../storage.js';
import { formatPrettyDate, formatPrettyTime, getISTNow } from '../utils/date.js';
import StatusCard from './StatusCard.jsx';
import ClockPanel from './ClockPanel.jsx';

export default function Dashboard({ user, onLogout }) {
  const [now, setNow] = useState(getISTNow());
  const [record, setRecord] = useState(getDayRecord(user.id, now));

  useEffect(() => {
    const id = setInterval(() => setNow(getISTNow()), 1000 * 30);
    return () => clearInterval(id);
  }, []);

  useEffect(() => {
    setRecord(getDayRecord(user.id, now));
  }, [user.id, now]);

  function handleClockIn() {
    const rec = clockIn(user.id, new Date());
    setRecord({ ...rec });
  }

  function handleClockOut() {
    const rec = clockOut(user.id, new Date());
    setRecord({ ...rec });
  }

  return (
    <div className="page-content">
      <div className="page-header">
        <h2>Welcome back, {user?.name}!</h2>
        <p>Here's your overview for today and this month</p>
      </div>

      <div className="card today-status-card">
        <div className="card-header">
          <h3>Today's Status</h3>
          <div className="clock-icon">🕐</div>
        </div>
        <div className="date-text">{formatPrettyDate(now)}</div>
        <div className="stats">
          <div className="stat">
            <div className="stat-label">Login Time</div>
            <div className="stat-value">{formatPrettyTime(record.loginTime)}</div>
          </div>
          <div className="stat">
            <div className="stat-label">Logout Time</div>
            <div className="stat-value">{formatPrettyTime(record.logoutTime)}</div>
          </div>
          <div className="stat">
            <div className={`badge ${record.status.toLowerCase()}`}>{record.status}</div>
            <div className="status-message">
              {record.status === 'Present' && 'Login Recorded'}
              {record.status === 'Absent' && 'Not Yet Checked In'}
              {record.status === 'Partial' && 'Partial Day'}
            </div>
          </div>
        </div>
      </div>

      <div className="dashboard-grid">
        <ClockPanel
          canClockIn={!record.loginTime}
          canClockOut={!!record.loginTime && !record.logoutTime}
          onClockIn={handleClockIn}
          onClockOut={handleClockOut}
        />

        <StatusCard record={record} />
      </div>

      <div className="metrics-section">
        <div className="metric-card">
          <div className="metric-header">
            <div className="metric-title">Present Days</div>
            <div className="metric-icon">✓</div>
          </div>
          <div className="metric-value">14</div>
        </div>

        <div className="metric-card">
          <div className="metric-header">
            <div className="metric-title">Absent Days</div>
            <div className="metric-icon">✕</div>
          </div>
          <div className="metric-value">0</div>
        </div>

        <div className="metric-card">
          <div className="metric-header">
            <div className="metric-title">Performance Score</div>
            <div className="metric-icon">⭐</div>
          </div>
          <div className="metric-value">9.5</div>
        </div>
      </div>
    </div>
  );
}
