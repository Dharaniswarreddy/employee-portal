import React, { useState } from 'react';

export default function RequestLeave({ user }) {
  const [formData, setFormData] = useState({
    type: 'Casual',
    startDate: '',
    endDate: '',
    reason: '',
  });

  const [leaveHistory] = useState([
    { id: 1, type: 'Casual Leave', from: '10-Dec-2025', to: '12-Dec-2025', status: 'Approved', days: 3 },
    { id: 2, type: 'Sick Leave', from: '05-Dec-2025', to: '05-Dec-2025', status: 'Approved', days: 1 },
    { id: 3, type: 'Casual Leave', from: '20-Dec-2025', to: '22-Dec-2025', status: 'Pending', days: 3 },
  ]);

  const handleSubmit = (e) => {
    e.preventDefault();
    alert('Leave request submitted successfully!');
    setFormData({ type: 'Casual', startDate: '', endDate: '', reason: '' });
  };

  return (
    <div className="page-content">
      <div className="page-header">
        <h2>Request Leave</h2>
        <p>Submit your leave requests</p>
      </div>

      <div className="card">
        <h3>New Leave Request</h3>
        <form onSubmit={handleSubmit} className="leave-form">
          <div className="form-row">
            <div className="form-group">
              <label>Leave Type</label>
              <select
                value={formData.type}
                onChange={(e) => setFormData({ ...formData, type: e.target.value })}
              >
                <option>Casual Leave</option>
                <option>Sick Leave</option>
                <option>Earned Leave</option>
                <option>Maternity Leave</option>
              </select>
            </div>

            <div className="form-group">
              <label>Start Date</label>
              <input
                type="date"
                value={formData.startDate}
                onChange={(e) => setFormData({ ...formData, startDate: e.target.value })}
                required
              />
            </div>

            <div className="form-group">
              <label>End Date</label>
              <input
                type="date"
                value={formData.endDate}
                onChange={(e) => setFormData({ ...formData, endDate: e.target.value })}
                required
              />
            </div>
          </div>

          <div className="form-group">
            <label>Reason</label>
            <textarea
              value={formData.reason}
              onChange={(e) => setFormData({ ...formData, reason: e.target.value })}
              placeholder="Provide reason for leave..."
              rows={4}
            />
          </div>

          <button type="submit" className="btn primary">Submit Request</button>
        </form>
      </div>

      <div className="card">
        <h3>Leave History</h3>
        <table className="leave-table">
          <thead>
            <tr>
              <th>Type</th>
              <th>From</th>
              <th>To</th>
              <th>Days</th>
              <th>Status</th>
            </tr>
          </thead>
          <tbody>
            {leaveHistory.map((leave) => (
              <tr key={leave.id}>
                <td>{leave.type}</td>
                <td>{leave.from}</td>
                <td>{leave.to}</td>
                <td>{leave.days}</td>
                <td>
                  <span className={`status-badge ${leave.status.toLowerCase()}`}>
                    {leave.status}
                  </span>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}
