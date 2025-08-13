import './userList.module.css'

import { UserCard } from './UserCard';

const UserList = (props) => {
  const { users } = props;
  
  return (
    <ul>
      {users.map(user => (
        <UserCard index={user.id} user={user} />
      ))}
    </ul>
  )
}

export { UserList };