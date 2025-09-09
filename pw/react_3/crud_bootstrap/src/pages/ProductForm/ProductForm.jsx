import { useEffect, useState } from 'react'
import { useNavigate, useParams } from 'react-router-dom'

import { api } from '../../services'

import { Button, Form } from 'react-bootstrap'

const ProductForm = () => {
  const { id } = useParams()
  const navigate = useNavigate()
  const [product, setProduct] = useState({
    name: '',
    price: 0,
    active: true,
    created_at: new Date().toISOString().split('T')[0],
    last_updated: new Date().toISOString().split('T')[0],
  })

  useEffect(() => {
    if (id) {
      api.get(`/products/${id}`).then((res) => {setProduct(res.data)})
    }
  }, [id])

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target
    setProduct({ ...product, [name]: type === 'checkbox' ? checked : value})
  }

  const handleSubmit = async (e) => {
    e.preventDefault()
    if (id) {
      await api.put(`/products/${id}`, product)
    } else {
      await api.post('/products', product)
    }
    navigate('/products')
  }

  return (
    <div className='container mt-4'>
      <h2>{id ? 'Edit product' : 'New product'}</h2>
      <Form onSubmit={handleSubmit}>
        <Form.Group className='mb-3'>
          <Form.Label>Name</Form.Label>
          <Form.Control type='text' name='name' value={product.name}
            onChange={handleChange} required
          />
        </Form.Group>

        <Form.Group className='mb-3'>
          <Form.Label>Price (USD)</Form.Label>
          <Form.Control type='number' step='0.01' name='price' 
            value={product.price} onChange={handleChange} required
          />
        </Form.Group>

        <Form.Group className='mb-3'>
          <Form.Check type='checkbox' label='Active' name='active'
            checked={product.active} onChange={handleChange}
          />
        </Form.Group>

         <Button type='submit' variant='success'>Save</Button>
      </Form>
    </div>
  )
}

export { ProductForm }
