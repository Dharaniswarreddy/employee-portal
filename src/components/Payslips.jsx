import React from 'react';

export default function Payslips({ user }) {
  const payslips = [
    { month: 'November 2025', date: '01-Dec', amount: '₹45,000.00', status: 'Downloaded' },
    { month: 'October 2025', date: '01-Nov', amount: '₹45,000.00', status: 'Downloaded' },
    { month: 'September 2025', date: '01-Oct', amount: '₹45,000.00', status: 'Available' },
  ];

  return (
    <div className="page-content">
      <div className="page-header">
        <h2>My Payslips</h2>
        <p>Download and view your payslips</p>
      </div>

      <div className="card">
        <table className="payslips-table">
          <thead>
            <tr>
              <th>Month</th>
              <th>Date</th>
              <th>Amount</th>
              <th>Status</th>
              <th>Action</th>
            </tr>
          </thead>
          <tbody>
            {payslips.map((slip, idx) => (
              <tr key={idx}>
                <td>{slip.month}</td>
                <td>{slip.date}</td>
                <td className="amount">{slip.amount}</td>
                <td>
                  <span className="status-badge available">{slip.status}</span>
                </td>
                <td>
                  <button className="action-btn">📥 Download</button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}
