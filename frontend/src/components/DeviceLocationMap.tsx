import React from 'react';

const DeviceLocationMap: React.FC = () => {
  return (
    <div className="map-container">
      <div style={{ 
        position: 'absolute', 
        top: '50%', 
        left: '50%', 
        transform: 'translate(-50%, -50%)',
        textAlign: 'center',
        color: '#7f8c8d'
      }}>
        <p>Interactive Device Location Map</p>
        <p style={{ fontSize: '14px', marginTop: '8px' }}>
          Map integration would be implemented here
        </p>
      </div>
      
      {/* Simulated map markers */}
      <div style={{
        position: 'absolute',
        top: '30%',
        left: '20%',
        width: '8px',
        height: '8px',
        backgroundColor: '#2ecc71',
        borderRadius: '50%',
        border: '2px solid white',
        boxShadow: '0 2px 4px rgba(0,0,0,0.2)'
      }}></div>
      
      <div style={{
        position: 'absolute',
        top: '40%',
        left: '60%',
        width: '8px',
        height: '8px',
        backgroundColor: '#2ecc71',
        borderRadius: '50%',
        border: '2px solid white',
        boxShadow: '0 2px 4px rgba(0,0,0,0.2)'
      }}></div>
      
      <div style={{
        position: 'absolute',
        top: '60%',
        left: '80%',
        width: '8px',
        height: '8px',
        backgroundColor: '#2ecc71',
        borderRadius: '50%',
        border: '2px solid white',
        boxShadow: '0 2px 4px rgba(0,0,0,0.2)'
      }}></div>
    </div>
  );
};

export default DeviceLocationMap;
