import { UseCounterContext } from "../hooks"

import { CustomButton, MainCounter } from "../components"

const Counter = () => {
  const { increment, reset } = UseCounterContext();

  return (
    <>
      <h1>Contador :3c ^w^</h1>
      <MainCounter />
      <div style={{ display: 'flex', gap: '1rem', marginTop: '3rem' }}>
        <CustomButton onClick={increment} variant='green'>Incrementar !!!!!</CustomButton>
        <CustomButton onClick={reset} variant='red'>Reiniciar 3:</CustomButton>
      </div>
    </>
  );
}

export { Counter };