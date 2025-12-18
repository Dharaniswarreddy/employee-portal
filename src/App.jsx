import React, { useEffect, useMemo, useState } from 'react';
import { getCurrentUser, logout, onAuthChange } from './auth.js';
import { Header } from './components/Header.jsx';
import Login from './components/Login.jsx';
import Dashboard from './components/Dashboard.jsx';
import Attendance from './components/Attendance.jsx';
import Performance from './components/Performance.jsx';
import Wallet from './components/Wallet.jsx';
import Payslips from './components/Payslips.jsx';
import RequestLeave from './components/RequestLeave.jsx';
import Holidays from './components/Holidays.jsx';

export default function App() {
  const [user, setUser] = useState(getCurrentUser());
  const [currentPage, setCurrentPage] = useState('dashboard');
  const [sidebarOpen, setSidebarOpen] = useState(true);

  useEffect(() => {
    const unsub = onAuthChange(setUser);
    return () => unsub();
  }, []);

  const renderPage = () => {
    switch (currentPage) {
      case 'dashboard':
        return <Dashboard user={user} onLogout={logout} />;
      case 'clock':
        return <Dashboard user={user} onLogout={logout} />;
      case 'attendance':
        return <Attendance user={user} />;
      case 'performance':
        return <Performance user={user} />;
      case 'wallet':
        return <Wallet user={user} />;
      case 'payslips':
        return <Payslips user={user} />;
      case 'leave':
        return <RequestLeave user={user} />;
      case 'holidays':
        return <Holidays user={user} />;
      default:
        return <Dashboard user={user} onLogout={logout} />;
    }
  };

  if (!user) return <Login />;

  return (
    <div className="app-wrapper">
      <aside className={`sidebar ${sidebarOpen ? 'open' : 'closed'}`}>
        <div className="sidebar-brand">
          <span className="brand-icon">📊</span>
          <span className="brand-text">TeamHub</span>
        </div>
        
        <nav className="sidebar-nav">
          <button
            className={`nav-item ${currentPage === 'dashboard' ? 'active' : ''}`}
            onClick={() => setCurrentPage('dashboard')}
          >
            <span className="nav-icon">📈</span>
            <span className="nav-label">Dashboard</span>
          </button>
          
          <button
            className={`nav-item ${currentPage === 'clock' ? 'active' : ''}`}
            onClick={() => setCurrentPage('clock')}
          >
            <span className="nav-icon">🕐</span>
            <span className="nav-label">Clock In/Out</span>
          </button>
          
          <button
            className={`nav-item ${currentPage === 'attendance' ? 'active' : ''}`}
            onClick={() => setCurrentPage('attendance')}
          >
            <span className="nav-icon">📅</span>
            <span className="nav-label">My Attendance</span>
          </button>
          
          <button
            className={`nav-item ${currentPage === 'performance' ? 'active' : ''}`}
            onClick={() => setCurrentPage('performance')}
          >
            <span className="nav-icon">📊</span>
            <span className="nav-label">My Performance</span>
          </button>
          
          <button
            className={`nav-item ${currentPage === 'wallet' ? 'active' : ''}`}
            onClick={() => setCurrentPage('wallet')}
          >
            <span className="nav-icon">💼</span>
            <span className="nav-label">My Wallet</span>
          </button>
          
          <button
            className={`nav-item ${currentPage === 'payslips' ? 'active' : ''}`}
            onClick={() => setCurrentPage('payslips')}
          >
            <span className="nav-icon">📄</span>
            <span className="nav-label">My Payslips</span>
          </button>
          
          <button
            className={`nav-item ${currentPage === 'leave' ? 'active' : ''}`}
            onClick={() => setCurrentPage('leave')}
          >
            <span className="nav-icon">✈️</span>
            <span className="nav-label">Request Leave</span>
          </button>
          
          <button
            className={`nav-item ${currentPage === 'holidays' ? 'active' : ''}`}
            onClick={() => setCurrentPage('holidays')}
          >
            <span className="nav-icon">🎉</span>
            <span className="nav-label">Holidays</span>
          </button>
        </nav>
      </aside>

      <div className="app-container">
        <Header user={user} onLogout={() => { logout(); setCurrentPage('dashboard'); }} onToggleSidebar={() => setSidebarOpen(!sidebarOpen)} />
        <main className="main-content">
          {renderPage()}
        </main>
      </div>
    </div>
  );
}
