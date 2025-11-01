import React from 'react';

const securityData = [
  { label: 'High Risk', count: 0, percentage: '0.00%', color: '#e74c3c' },
  { label: 'Medium Risk', count: 0, percentage: '0.00%', color: '#f39c12' },
  { label: 'Low Risk', count: 0, percentage: '0.00%', color: '#f1c40f' },
  { label: 'No Risk', count: 0, percentage: '0.00%', color: '#2ecc71' },
  { label: 'Undetermined Risk', count: 14214, percentage: '100.00%', color: '#95a5a6' }
];

const DeviceSecurityChart: React.FC = () => {
  return (
    <div className="security-risks">
      {securityData.map((risk, index) => (
        <div key={index} className="risk-item">
          <div className="risk-label">
            <div className={`risk-dot ${risk.label.toLowerCase().replace(' ', '-').replace(' ', '-')}`}></div>
            <span>{risk.label}</span>
          </div>
          <div className="risk-count">
            {risk.count} | {risk.percentage}
          </div>
        </div>
      ))}
    </div>
  );
};

export default DeviceSecurityChart;
