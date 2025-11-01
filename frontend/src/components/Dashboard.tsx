import React from 'react';
import { HelpCircle, MessageSquare } from 'lucide-react';
import DeviceLastSeenChart from './DeviceLastSeenChart';
import DeviceSecurityChart from './DeviceSecurityChart';
import OSTypeChart from './OSTypeChart';
import DeviceLocationMap from './DeviceLocationMap';
import AlertsSection from './AlertsSection';
import RecentPipelines from './RecentPipelines';

const Dashboard: React.FC = () => {
  return (
    <div className="dashboard">
      <div className="dashboard-header">
        <h1 className="dashboard-title">Dashboard</h1>
        <button className="support-button">
          <MessageSquare size={16} />
          Support
        </button>
      </div>

      <div className="dashboard-grid">
        <div className="card">
          <div className="card-header">
            <h2 className="card-title">Device Last Seen</h2>
          </div>
          <DeviceLastSeenChart />
        </div>

        <div className="card">
          <div className="card-header">
            <h2 className="card-title">
              Device Security
              <HelpCircle size={16} className="info-icon" />
            </h2>
          </div>
          <DeviceSecurityChart />
        </div>
      </div>

      <div className="dashboard-grid">
        <div className="card">
          <div className="card-header">
            <h2 className="card-title">OS Type</h2>
          </div>
          <OSTypeChart />
        </div>

        <div className="card">
          <div className="card-header">
            <h2 className="card-title">
              Device Location
              <HelpCircle size={16} className="info-icon" />
            </h2>
          </div>
          <DeviceLocationMap />
        </div>
      </div>

      <div className="bottom-grid">
        <div className="card">
          <AlertsSection />
        </div>

        <div className="card">
          <RecentPipelines />
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
