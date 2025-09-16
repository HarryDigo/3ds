import { Route, Routes } from 'react-router-dom'

import { Layout } from '@layouts'

import { Home } from '@pages'

export const Router = () => {
  return (
    <Routes>
      <Route path='/' element={<Layout />} >
        <Route path='/' element={<Home />} />
      </Route>
    </Routes>
  )
}