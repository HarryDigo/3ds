import './userList.module.css'

import { UserCard } from './UserCard'

const UserList = (props) => {
  const { users } = props
  
  return (
    <ul>
      {users.map(user => (
        <li key={user.id}>
          <UserCard user={user} />
        </li>
      ))}
    </ul>
  )
}

export { UserList }