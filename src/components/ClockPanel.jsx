import React from 'react';

export default function ClockPanel({ canClockIn, canClockOut, onClockIn, onClockOut }) {
  return (
    <div className="card">
      <h2 className="card-title">Clock In/Out</h2>
      <div className="row gap">
        <button className="btn primary" disabled={!canClockIn} onClick={onClockIn}>
          Clock In
        </button>
        <button className="btn" disabled={!canClockOut} onClick={onClockOut}>
          Clock Out
        </button>
      </div>
      <div className="hint">
        {canClockIn && 'You have not clocked in yet.'}
        {!canClockIn && !canClockOut && 'You have completed your day.'}
        {!canClockIn && canClockOut && 'You are clocked in. Clock out to finish.'}
      </div>
    </div>
  );
}
