import { useEffect, useState } from 'react';
import { UserCard } from './components';
import './App.module.css';

function App() {
  const [users, setUsers] = useState([]);

  useEffect(() => {
    fetch('http://localhost:3001/people')
      .then((res) => res.json())
      .then((data) => setUsers(data))
      .catch((err) => console.error('Erro ao buscar usuários', err));
  }, []);

  return (
    <div>
      <h1>Dashboard de usuários</h1>
      <p>Total de Usuários: {users.length}</p>
      <div className='user-container'>
        {users.map((user) => (
          <UserCard key={user.id} user={user}/>
        ))}
      </div>
    </div>
  )
}

export default App;
