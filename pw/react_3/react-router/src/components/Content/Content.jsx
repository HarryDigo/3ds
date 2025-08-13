import styles from './content.module.css'

const Content = (props) => {
  const { children } = props

  return (
    <div className={styles.content}>
      {children}
    </div>
  )
}

export { Content }