import styles from './userCard.module.css'

const UserCard = (props) => {
  const { user } = props

  return (
    <div className={styles.card}>
      {user.name} - {user.email}
    </div>
  );
}

export { UserCard }