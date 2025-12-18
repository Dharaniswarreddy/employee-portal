import React from 'react';

export default function Wallet({ user }) {
  return (
    <div className="page-content">
      <div className="page-header">
        <h2>My Wallet</h2>
        <p>Manage your financial information</p>
      </div>

      <div className="wallet-balance">
        <div className="balance-card">
          <div className="balance-label">Current Balance</div>
          <div className="balance-amount">₹45,250.00</div>
          <div className="balance-meta">Updated today</div>
        </div>

        <div className="balance-card">
          <div className="balance-label">Year-to-Date Earnings</div>
          <div className="balance-amount">₹5,42,000.00</div>
          <div className="balance-meta">Till this month</div>
        </div>
      </div>

      <div className="card">
        <h3>Recent Transactions</h3>
        <div className="transaction-item">
          <div className="transaction-info">
            <div className="transaction-desc">Monthly Salary</div>
            <div className="transaction-date">15 Dec, 2025</div>
          </div>
          <div className="transaction-amount positive">+₹45,000.00</div>
        </div>
        <div className="transaction-item">
          <div className="transaction-info">
            <div className="transaction-desc">Bonus</div>
            <div className="transaction-date">10 Dec, 2025</div>
          </div>
          <div className="transaction-amount positive">+₹5,000.00</div>
        </div>
        <div className="transaction-item">
          <div className="transaction-info">
            <div className="transaction-desc">Tax Deduction</div>
            <div className="transaction-date">15 Dec, 2025</div>
          </div>
          <div className="transaction-amount negative">-₹2,750.00</div>
        </div>
      </div>
    </div>
  );
}
