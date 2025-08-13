import { Route, Routes } from 'react-router-dom'

import { Layout } from './layouts'

import { Counter, Error, Home, Users } from './pages'

const Router = () => {
  return (
    <Routes>
      <Route path='/' element={<Layout />} >
        <Route path='/' element={<Home />} />
        <Route path='/counter' element={<Counter />} />
        <Route path='/users' element={<Users />} />
        <Route path='*' element={<Error />} />
      </Route>
    </Routes>
  )
}

export { Router }