import { useNavigate } from "react-router-dom";
import { supabase } from "../lib/supabase";
import { useState } from "react";

export default function AdminDashboard() {
  const navigate = useNavigate();
  const [sidebarOpen, setSidebarOpen] = useState(true);

  const logout = async () => {
    await supabase.auth.signOut();
    navigate("/login");
  };

  return (
    <div className="admin-layout">

      {/* Sidebar */}
      <aside className={`sidebar ${sidebarOpen ? "open" : "closed"}`}>

        <div className="sidebar-logo">
          <div className="logo-icon">
            A
          </div>

          {sidebarOpen && (
            <div>
              <h2>Admin Portal</h2>
              <span>Management System</span>
            </div>
          )}
        </div>

        <nav className="sidebar-menu">

          <button className="menu-item active">
            <span>📊</span>
            {sidebarOpen && <span>Dashboard</span>}
          </button>

          <button
            className="menu-item"
            onClick={() => navigate("/students")}
          >
            <span>👨‍🎓</span>
            {sidebarOpen && <span>Students</span>}
          </button>

          <button className="menu-item">
            <span>👨‍🏫</span>
            {sidebarOpen && <span>Trainers</span>}
          </button>

          <button className="menu-item">
            <span>📚</span>
            {sidebarOpen && <span>Semesters</span>}
          </button>

          <button className="menu-item">
            <span>🎓</span>
            {sidebarOpen && <span>Specializations</span>}
          </button>

          <button className="menu-item">
            <span>📋</span>
            {sidebarOpen && <span>Reports</span>}
          </button>

          <button className="menu-item">
            <span>⚙️</span>
            {sidebarOpen && <span>Settings</span>}
          </button>

        </nav>

        <div className="sidebar-bottom">

          <button
            className="menu-item logout"
            onClick={logout}
          >
            <span>🚪</span>
            {sidebarOpen && <span>Logout</span>}
          </button>

        </div>

      </aside>

      {/* Main */}
      <main className="admin-main">

        {/* Header */}
        <header className="admin-header">

          <button
            className="sidebar-toggle"
            onClick={() => setSidebarOpen(!sidebarOpen)}
          >
            ☰
          </button>

          <div className="header-right">

            <button className="notification-btn">
              🔔
              <span className="notification-dot"></span>
            </button>

            <div className="admin-profile">

              <div className="profile-avatar">
                A
              </div>

              <div className="profile-info">
                <strong>Admin</strong>
                <span>Administrator</span>
              </div>

            </div>

          </div>

        </header>

        {/* Content */}
        <section className="dashboard-content">

          <div className="welcome-section">

            <div>
              <h1>Welcome back, Admin 👋</h1>

              <p>
                Here's what's happening with your system today.
              </p>
            </div>

            <button className="primary-button">
              + Add New
            </button>

          </div>

          {/* Statistics */}
          <div className="stats-grid">

            <div className="stat-card">

              <div className="stat-icon students-icon">
                👨‍🎓
              </div>

              <div>
                <p>Total Students</p>
                <h2>120</h2>
                <span className="positive">
                  ↑ 12% this month
                </span>
              </div>

            </div>

            <div className="stat-card">

              <div className="stat-icon trainer-icon">
                👨‍🏫
              </div>

              <div>
                <p>Total Trainers</p>
                <h2>12</h2>
                <span className="positive">
                  ↑ 4% this month
                </span>
              </div>

            </div>

            <div className="stat-card">

              <div className="stat-icon course-icon">
                📚
              </div>

              <div>
                <p>Active Courses</p>
                <h2>18</h2>
                <span className="positive">
                  ↑ 8% this month
                </span>
              </div>

            </div>

            <div className="stat-card">

              <div className="stat-icon seminar-icon">
                📋
              </div>

              <div>
                <p>Seminars</p>
                <h2>24</h2>
                <span className="positive">
                  ↑ 15% this month
                </span>
              </div>

            </div>

          </div>

          {/* Bottom Section */}
          <div className="dashboard-grid">

            {/* Recent Activity */}
            <div className="dashboard-card">

              <div className="card-header">
                <div>
                  <h2>Recent Activity</h2>
                  <p>Latest system activities</p>
                </div>

                <button className="view-button">
                  View All
                </button>
              </div>

              <div className="activity-list">

                <div className="activity-item">

                  <div className="activity-avatar">
                    👨‍🎓
                  </div>

                  <div>
                    <strong>
                      New student registered
                    </strong>

                    <p>
                      Rahul Kumar registered successfully
                    </p>

                    <span>
                      10 minutes ago
                    </span>
                  </div>

                </div>

                <div className="activity-item">

                  <div className="activity-avatar">
                    👨‍🏫
                  </div>

                  <div>
                    <strong>
                      Trainer added
                    </strong>

                    <p>
                      New trainer account created
                    </p>

                    <span>
                      1 hour ago
                    </span>
                  </div>

                </div>

                <div className="activity-item">

                  <div className="activity-avatar">
                    📚
                  </div>

                  <div>
                    <strong>
                      Course updated
                    </strong>

                    <p>
                      Java Full Stack course updated
                    </p>

                    <span>
                      3 hours ago
                    </span>
                  </div>

                </div>

              </div>

            </div>

            {/* Quick Actions */}
            <div className="dashboard-card">

              <div className="card-header">
                <div>
                  <h2>Quick Actions</h2>
                  <p>Frequently used actions</p>
                </div>
              </div>

              <div className="quick-actions">

                <button>
                  <span>👨‍🎓</span>
                  Add Student
                </button>

                <button>
                  <span>👨‍🏫</span>
                  Add Trainer
                </button>

                <button>
                  <span>📚</span>
                  Add Course
                </button>

                <button>
                  <span>📊</span>
                  View Reports
                </button>

              </div>

            </div>

          </div>

        </section>

      </main>

    </div>
  );
}