import React from 'react';
import { 
  BarChart3, 
  Settings, 
  Users, 
  FileText, 
  Smartphone, 
  Bell, 
  Map, 
  Activity,
  Key,
  GitBranch,
  Terminal
} from 'lucide-react';
import './Sidebar.css';

interface SidebarProps {
  onOpenCommandPrompt: () => void;
}

const Sidebar: React.FC<SidebarProps> = ({ onOpenCommandPrompt }) => {
  const menuItems = [
    { icon: BarChart3, label: 'Dashboard', active: true },
    { icon: Settings, label: 'Provisioning Methods' },
    { icon: Users, label: 'Devices & Groups' },
    { icon: FileText, label: 'Blueprints Manager' },
    { icon: Smartphone, label: 'Apps' },
    { icon: FileText, label: 'Content Management' },
    { icon: Activity, label: 'Activity Feed', badge: 'BETA' },
    { icon: Bell, label: 'Alerts' },
    { icon: Map, label: 'Geofence' },
    { icon: GitBranch, label: 'Pipelines' },
    { icon: FileText, label: 'Reports', badge: 'NEW' },
    { icon: Settings, label: 'Esper Software Updates' },
    { icon: Key, label: 'API Key Management' }
  ];

  return (
    <div className="sidebar">
      <div className="sidebar-header">
        <div className="logo">
          <div className="logo-icon">
            <div className="cube-icon">
              <div className="cube-face"></div>
              <div className="cube-face"></div>
              <div className="cube-face"></div>
            </div>
          </div>
          <span className="logo-text">esper</span>
        </div>
      </div>
      
      <nav className="sidebar-nav">
        {menuItems.map((item, index) => (
          <div 
            key={index} 
            className={`nav-item ${item.active ? 'active' : ''}`}
          >
            <item.icon size={20} />
            <span className="nav-label">{item.label}</span>
            {item.badge && (
              <span className={`nav-badge ${item.badge.toLowerCase()}`}>
                {item.badge}
              </span>
            )}
          </div>
        ))}
        
        <div className="nav-item command-prompt" onClick={onOpenCommandPrompt}>
          <Terminal size={20} />
          <span className="nav-label">Prompt The Device</span>
        </div>
      </nav>
    </div>
  );
};

export default Sidebar;
