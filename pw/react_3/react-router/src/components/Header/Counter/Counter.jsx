import styles from './Counter.module.css'

import { UseCounterContext } from '../../../hooks'

const Counter = () => {
  const { count, increment } = UseCounterContext();

  return count > 0 && (
    //não tenho a minima ideia do porque, mas a fonte só funcionou no inline e não no style ????
    <span style={{fontFamily: "Comic Sans MS, cursive, sans-serif" }} className={styles.counter} onClick={increment}>
      {count}
    </span>
  )
}

export { Counter }