import React from 'react';
import './App.css';
import EmailPanel from '../EmailPanel/EmailPanel';

function App() {
  return (
    <div className="app user-select-none d-flex justify-content-center align-items-center flex-column body-text p-4" style={{ minHeight: '100vh' }}>
      <EmailPanel />
    </div>
  );
}

export default App;
