import { NavLink } from 'react-router-dom';

import styles from './HeaderLink.module.css';

const HeaderLink = (props) => {
  const { route, text } = props;

  return (
    <NavLink 
      to={route} 
      className={({ isActive }) => isActive ? styles.active : styles.link}
    >
      {text}
    </NavLink>
  )
}

export { HeaderLink };