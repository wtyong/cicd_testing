import { useState } from 'react';
import './App.css';

function App() {
  const [name, setName] = useState('');
  const [submittedName, setSubmittedName] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    setSubmittedName(name);
  };

  return (
    <div className="App">
      <header className="App-header">
        <form onSubmit={handleSubmit}>
          <input
            type="text"
            value={name}
            onChange={(e) => setName(e.target.value)}
            placeholder="Enter your name"
            style={{
              padding: '10px 15px',
              fontSize: '16px',
              borderRadius: '5px',
              border: 'none',
              marginRight: '10px'
            }}
          />
          <button
            type="submit"
            style={{
              padding: '10px 20px',
              fontSize: '16px',
              borderRadius: '5px',
              border: 'none',
              backgroundColor: '#61dafb',
              cursor: 'pointer'
            }}
          >
            Enter
          </button>
        </form>
        {submittedName && (
          <p style={{ marginTop: '20px' }}>
            Hello, {submittedName}!
          </p>
        )}
      </header>
    </div>
  );
}

export default App;
