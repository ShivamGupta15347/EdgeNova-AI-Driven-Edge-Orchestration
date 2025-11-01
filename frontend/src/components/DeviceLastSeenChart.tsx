import React from 'react';
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, ResponsiveContainer } from 'recharts';

const data = [
  { name: '< 30 mins', value: 4, color: '#2ecc71' },
  { name: '> 30 mins & < 24 hrs', value: 1, color: '#f39c12' },
  { name: '> 24 hrs', value: 14173, color: '#e74c3c' },
  { name: 'Unprovisioned', value: 27411, color: '#34495e' }
];

const DeviceLastSeenChart: React.FC = () => {
  return (
    <div className="chart-container">
      <ResponsiveContainer width="100%" height="100%">
        <BarChart data={data} margin={{ top: 20, right: 30, left: 20, bottom: 60 }}>
          <CartesianGrid strokeDasharray="3 3" stroke="#ecf0f1" />
          <XAxis 
            dataKey="name" 
            tick={{ fontSize: 12, fill: '#7f8c8d' }}
            angle={-45}
            textAnchor="end"
            height={80}
          />
          <YAxis tick={{ fontSize: 12, fill: '#7f8c8d' }} />
          <Bar 
            dataKey="value" 
            fill="#3498db"
            radius={[4, 4, 0, 0]}
          />
        </BarChart>
      </ResponsiveContainer>
      
      <div style={{ display: 'flex', justifyContent: 'center', gap: '20px', marginTop: '20px', flexWrap: 'wrap' }}>
        {data.map((item, index) => (
          <div key={index} style={{ display: 'flex', alignItems: 'center', gap: '8px', fontSize: '12px' }}>
            <div 
              style={{ 
                width: '12px', 
                height: '12px', 
                backgroundColor: item.color, 
                borderRadius: '2px' 
              }}
            />
            <span style={{ color: '#7f8c8d' }}>{item.name}</span>
          </div>
        ))}
      </div>
    </div>
  );
};

export default DeviceLastSeenChart;
