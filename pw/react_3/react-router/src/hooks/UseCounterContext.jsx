import { useContext } from "react";
import { counterContext } from "../contexts";

const UseCounterContext = () => {
  const context = useContext(counterContext);

  return context;
}

export { UseCounterContext };