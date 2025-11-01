import React from 'react';
import { HelpCircle, AlertTriangle } from 'lucide-react';

const AlertsSection: React.FC = () => {
  return (
    <div>
      <div className="card-header">
        <h2 className="card-title">
          Alerts
          <HelpCircle size={16} className="info-icon" />
        </h2>
        <span style={{ fontSize: '14px', color: '#7f8c8d' }}>Last 7 Days</span>
      </div>
      
      <div className="alerts-section">
        <h3>No Recent Alerts</h3>
        <p>No alerts were triggered in the last 7 days.</p>
        <button className="alert-button">View Alert</button>
        
        <div className="alert-warning">
          <AlertTriangle size={16} color="#856404" />
          <span>Alerts notify you when one of your devices meets the set thresholds.</span>
        </div>
      </div>
    </div>
  );
};

export default AlertsSection;
