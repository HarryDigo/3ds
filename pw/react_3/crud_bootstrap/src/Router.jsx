import { Route, Routes } from 'react-router-dom'

import { MainLayout } from './layouts'

import { Dashboard, ProductForm, Products } from './pages'

const Router = () => {
  return (
    <Routes>
      <Route path='/' element={<MainLayout />}>
        <Route path='/' element={<Dashboard />} />
        <Route path='/products' element={<Products />} />
        <Route path='/products/new' element={<ProductForm />} />
        <Route path='/products/edit:id' element={<ProductForm />} />
      </Route>
    </Routes>
  )
}

export { Router }