import { useEffect, useState } from 'react';
import './App.css';

function App() {
  const [message, setMessage] = useState('Loading...');
  const [error, setError] = useState(null);

  useEffect(() => {
    fetch('http://localhost:3000/api/health')
      .then((response) => {
        if (!response.ok) {
          throw new Error('Backend response was not OK');
        }
        return response.json();
      })
      .then((data) => {
        setMessage(data.message || 'No message returned from backend');
      })
      .catch((err) => {
        setError(err.message);
      });
  }, []);

  return (
    <div className="app-container">
      <header>
        <h1>TECHXSPERTS React Frontend</h1>
        <p className="subtitle">Connected to backend health endpoint</p>
      </header>

      <section className="health-card">
        <h2>Backend Health Message</h2>
        <p className="health-message">{error ? `Error: ${error}` : message}</p>
      </section>
    </div>
  );
}

export default App;
