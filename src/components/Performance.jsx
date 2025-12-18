import React from 'react';

export default function Performance({ user }) {
  const metrics = [
    { label: 'Overall Score', value: '92%', color: '#667eea' },
    { label: 'Productivity', value: '88%', color: '#764ba2' },
    { label: 'Quality', value: '95%', color: '#f093fb' },
    { label: 'Teamwork', value: '90%', color: '#4facfe' },
  ];

  return (
    <div className="page-content">
      <div className="page-header">
        <h2>My Performance</h2>
        <p>View your performance metrics and ratings</p>
      </div>

      <div className="metrics-grid">
        {metrics.map((metric, idx) => (
          <div key={idx} className="metric-card" style={{ borderTopColor: metric.color }}>
            <div className="metric-label">{metric.label}</div>
            <div className="metric-value" style={{ color: metric.color }}>{metric.value}</div>
            <div className="metric-bar">
              <div className="metric-fill" style={{ width: metric.value, backgroundColor: metric.color }}></div>
            </div>
          </div>
        ))}
      </div>

      <div className="card">
        <h3>Recent Feedback</h3>
        <div className="feedback-item">
          <div className="feedback-header">Great work on the latest project!</div>
          <div className="feedback-date">5 days ago</div>
        </div>
        <div className="feedback-item">
          <div className="feedback-header">Keep up the excellent communication with the team</div>
          <div className="feedback-date">10 days ago</div>
        </div>
      </div>
    </div>
  );
}
