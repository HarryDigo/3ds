import { NavLink } from 'react-router-dom';

import { UseCounterContext } from '../../hooks';

import { Counter } from './Counter';
import { HeaderLink } from './HeaderLink';

import styles from './Header.module.css';

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
        <HeaderLink route='/' text='Home' />
        <div className={styles.divider} />
        <HeaderLink route='/counter' text='Contador' />
        <div className={styles.divider} />
        <HeaderLink route='/users' text='Usuários' />
      </nav>
    </header>
  );
}

export { Header };
