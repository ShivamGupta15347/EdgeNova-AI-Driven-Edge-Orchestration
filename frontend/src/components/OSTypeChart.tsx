import React from 'react';

const osData = [
  { name: 'ANDROID', count: 41578, percentage: 99.94, color: '#a4c639' },
  { name: 'APPLE', count: 16, percentage: 0.04, color: '#2c3e50' },
  { name: 'LINUX', count: 8, percentage: 0.02, color: '#f39c12' },
  { name: 'WINDOWS', count: 2, percentage: 0.00, color: '#3498db' }
];

const OSTypeChart: React.FC = () => {
  return (
    <div className="os-distribution">
      {osData.map((os, index) => (
        <div key={index} className="os-item">
          <div className="os-label">
            <span>{os.name} ({os.count})</span>
          </div>
          <div className="os-bar">
            <div 
              className={`os-fill ${os.name.toLowerCase()}`}
              style={{ width: `${Math.max(os.percentage, 2)}%` }}
            />
          </div>
          <div className="os-percentage">
            {os.percentage.toFixed(2)}%
          </div>
        </div>
      ))}
    </div>
  );
};

export default OSTypeChart;
