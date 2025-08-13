import { NavLink } from 'react-router-dom'

import styles from './HeaderLink.module.css'

const HeaderLink = (props) => {
  const { route, children } = props

  return (
    <NavLink 
      to={route} 
      className={({ isActive }) => isActive ? styles.active : styles.link}
    >
      {children}
    </NavLink>
  )
}

export { HeaderLink }