import React, { useState } from "react";
import "../index.css";
import { login } from "../auth.js";

function LoginForm() {
  const [formData, setFormData] = useState({ email: "", password: "" });
  const [error, setError] = useState("");
  const [success, setSuccess] = useState("");

  const predefinedUser = { email: "admin@example.com", password: "admin123" };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setError("");
    setSuccess("");

    if (formData.email === predefinedUser.email && formData.password === predefinedUser.password) {
      setSuccess("Login successful!");
      login("Admin User", formData.email);
    } else {
      setError("Invalid email or password.");
    }
  };

  const emailHasError = error && !success; // simple demo logic
  const passwordHasError = error && !success;

  return (
    <div className="page">
      <div className="login-container">
        <h2 className="login-title">Login</h2>

        <form className="login-form" onSubmit={handleSubmit} noValidate>
          <div className="form-field">
            <label className="form-label" htmlFor="email">Email</label>
            <input
              id="email"
              type="text"
              name="email"
              className={`form-input ${emailHasError ? "error" : ""}`}
              placeholder="you@example.com"
              value={formData.email}
              onChange={handleChange}
            />
            {emailHasError && <p className="error-text">Please check your email.</p>}
          </div>

          <div className="form-field">
            <label className="form-label" htmlFor="password">Password</label>
            <input
              id="password"
              type="password"
              name="password"
              className={`form-input ${passwordHasError ? "error" : ""}`}
              placeholder="••••••"
              value={formData.password}
              onChange={handleChange}
            />
            {passwordHasError && <p className="error-text">Please check your password.</p>}
          </div>

          <div className="helper-row">
            <a className="helper-link" href="#">Forgot password?</a>
          </div>

          <button className="submit-btn" type="submit">Sign in</button>

          {error && <p className="error-text" style={{ marginTop: 12 }}>{error}</p>}
          {success && <p className="success-text" style={{ marginTop: 12 }}>{success}</p>}
        </form>
      </div>
    </div>
  );
}

export default LoginForm;
