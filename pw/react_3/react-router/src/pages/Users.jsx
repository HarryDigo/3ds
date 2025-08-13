import { useEffect, useState } from 'react'

import { UserList } from '../components/'

const Users = () => {
  const [users, setUsers] = useState([])

  useEffect(() => {
    fetch('https://jsonplaceholder.typicode.com/users')
      .then(response => response.json())
      .then(data => setUsers(data))
  }, [])

  return (
    <>
      <h1>Lista de Usuários</h1>
      <UserList users={users} />
    </>
  )
}

export { Users }