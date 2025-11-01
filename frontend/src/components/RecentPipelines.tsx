import React from 'react';
import { HelpCircle } from 'lucide-react';

const RecentPipelines: React.FC = () => {
  return (
    <div>
      <div className="card-header">
        <h2 className="card-title">
          Recent Pipelines
          <HelpCircle size={16} className="info-icon" />
        </h2>
      </div>
      
      <div style={{ 
        textAlign: 'center', 
        padding: '40px 20px',
        color: '#7f8c8d'
      }}>
        <p>No recent pipeline activities</p>
        <p style={{ fontSize: '14px', marginTop: '8px' }}>
          Pipeline executions will appear here
        </p>
      </div>
    </div>
  );
};

export default RecentPipelines;
