import { UseCounterContext } from "../hooks"

import { CustomButton, MainCounter } from "../components"

const Counter = () => {
  const { increment, reset } = UseCounterContext();

  return (
    <>
      <h1>Contador :3 ^w^</h1>
      <MainCounter />
      <div style={{ display: 'flex', gap: '1rem', marginTop: '3rem' }}>
        <CustomButton onClick={increment} variant='green'>Incrementar !!!!!</CustomButton>
        <CustomButton onClick={reset} variant='red'>Reiniciar ):</CustomButton>
      </div>
    </>
  );
}

export { Counter }