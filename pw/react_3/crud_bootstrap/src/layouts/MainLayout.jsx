import { Outlet } from 'react-router-dom'

import { Header, Sidebar } from '../components'

const MainLayout = () => {
  return (
    <div>
      <Header />
      <div className='d-flex'>
        <Sidebar />
        <div className='flex-grow-1 p-3'>
          <Outlet />
        </div>
      </div>
    </div>
  )
}

export { MainLayout }