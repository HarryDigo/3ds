import styles from './userCard.module.css'

const UserCard = (props) => {
  const { index, user } = props

  return (
    <li key={index} className={styles.card}>
      {user.name} - {user.email}
    </li>
  );
}

export { UserCard }