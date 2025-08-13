import { UseCounterContext } from '../../hooks'

import './mainCounter.module.css'

const MainCounter = () => {
  const { count } = UseCounterContext();

  return (
    //não tenho a minima ideia do porque, mas a fonte só funcionou no inline e não no style ????
    <span style={{fontFamily: "Comic Sans MS, cursive, sans-serif" }}>
      {count}
    </span>
  );
}

export { MainCounter };