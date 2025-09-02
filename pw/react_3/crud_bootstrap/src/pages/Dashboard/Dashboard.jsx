import { useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom'

import { api } from '@services'

import { Button, Card } from 'react-bootstrap'
import { FaBox } from 'react-icons/fa'

const Dashboard = () => {
  const [total, setTotal] = useState(0)
  const navigate = useNavigate()

  useEffect(() => {
    api.get('/products').then(res => setTotal(res.data.length))
  }, [])

  return (
    <div className='container mt-4'>
      <Card className='p-3 shadow'>
        <div className='d-flex align-items-center'>
          <FaBox size={40} className='me-3'/>
          <div>
            <h5>Product total</h5>
            <h2>{total}</h2>
            <Button variant='primary' onClick={() => navigate('/products')}>
              View
            </Button>
          </div>
        </div>
      </Card>
    </div>
  )
}

export { Dashboard }