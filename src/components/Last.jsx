import React from "react";
import '../css/last.css'

const Last = () => {
  return (
   <div className="flex justify-center">
     <div className="last-container">
      <h1 className="last-header">Latest changes</h1>
      <div className="last-timeline">
        <div className="last-item">
          <div className="last-dot" />
          <div className="last-content">
            <p className="last-time">2 days ago</p>
            <p className="last-title">
              GitHub Copilot in VS Code May release (v1.101)
            </p>
          </div>
        </div>

        <div className="last-item">
          <div className="last-dot" />
          <div className="last-content">
            <p className="last-time">2 days ago</p>
            <p className="last-title">
              Copilot code review: Customization for all
            </p>
          </div>
        </div>

        <div className="last-item">
          <div className="last-dot" />
          <div className="last-content">
            <p className="last-time">2 days ago</p>
            <p className="last-title">
              Actions Runner Controller 0.12.0 release
            </p>
          </div>
        </div>

        <div className="last-item">
          <div className="last-dot" />
          <div className="last-content">
            <p className="last-time">2 days ago</p>
            <p className="last-title">
              CodeQL 2.22.0 improves coverage for Go and adds support for Swift 6.1.2
            </p>
          </div>
        </div>

        <a href="#" className="last-link">
          View changelog →
        </a>
      </div>
    </div>
   </div>
  );
};

export default Last;
