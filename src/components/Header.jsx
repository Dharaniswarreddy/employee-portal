import React from 'react';

export function Header({ user, onLogout, onToggleSidebar }) {
  return (
    <header className="header">
      <div className="header-left">
        <button className="sidebar-toggle" onClick={onToggleSidebar}>
          ☰
        </button>
        <div className="header-title">
          <h1>TeamHub</h1>
          <p>Employee Portal</p>
        </div>
      </div>

      <div className="header-right">
        <div className="header-icons">
          <button className="icon-btn">🔔</button>
          <button className="icon-btn">☀️</button>
        </div>

        <div className="user-profile">
          <div className="user-avatar">👤</div>
          <div className="user-info">
            <div className="user-name">{user?.name || 'Employee'}</div>
            <div className="user-role">Employee</div>
          </div>
        </div>

        <button className="logout-btn" onClick={onLogout}>
          ➜ Logout
        </button>
      </div>
    </header>
  );
}
