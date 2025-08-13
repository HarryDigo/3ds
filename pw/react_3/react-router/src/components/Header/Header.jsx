import { NavLink } from 'react-router-dom'

import { Counter } from './Counter'
import { HeaderLink } from './HeaderLink'

import styles from './Header.module.css'

const Header = () => {
  return (
    <header>
      <NavLink
        to='/'
        className={styles.brand}
      >
        Site revisão pw!!
      </NavLink>

      <Counter />

      <nav className={styles.navbar}>
        <HeaderLink route='/'>Home</HeaderLink>
        <div className={styles.divider} />
        <HeaderLink route='/counter'>Contador</HeaderLink>
        <div className={styles.divider} />
        <HeaderLink route='/users'>Usuários</HeaderLink>
      </nav>
    </header>
  );
}

export { Header }
