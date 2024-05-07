import React from 'react';
import './App.css';
import EmailPanel from '../EmailPanel/EmailPanel';

function App() {
  return (
    <div className="app user-select-none d-flex flex-column justify-content-center align-items-center body-text p-4" style={{ minHeight: '100vh', position: 'relative' }}>
      {/* Email Panel exactly centered */}
      <div className="position-relative" style={{ width: '100%' }}>
        <EmailPanel />
      </div>

      {/* Logo centered horizontally and dynamically positioned */}
      <img className="logo position-absolute" src="https://get-taskie.app/logo.png" alt="Taskie Logo" style={{ left: '50%', transform: 'translate(-50%, -50%)' }} />
    </div>
  );
}

export default App;
