import React, { useMemo } from 'react';
import { formatPrettyTime } from '../utils/date.js';

export default function StatusCard({ record }) {
  const summary = useMemo(() => {
    const login = formatPrettyTime(record.loginTime);
    const logout = formatPrettyTime(record.logoutTime);
    if (record.status === 'Absent') return 'No activity recorded for today.';
    if (record.status === 'Partial') return `Partial activity: Login ${login}, Logout ${logout}.`;
    return `Present: Logged in at ${login}${logout !== '--:--' ? `, logged out at ${logout}` : ''}.`;
  }, [record]);

  return (
    <div className="card">
      <h2 className="card-title">Summary</h2>
      <p className="summary-text">{summary}</p>
    </div>
  );
}
