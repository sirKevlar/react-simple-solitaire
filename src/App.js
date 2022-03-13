import './App.css';
import { useState } from 'react';
import Table from './components/Table';
import Login from './components/Login';

function App() {
  const [currentUser, setCurrentUser] = useState(null);

  return (
    <div className='App'>
      {currentUser ? (
        <Table currentUser={currentUser} />
      ) : (
        <Login setCurrentUser={setCurrentUser} />
      )}
    </div>
  );
}

export default App;
