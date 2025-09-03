import { useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom'

import { api } from '../../services'

import $ from 'jquery'
import 'datatables.net'

import { Button } from 'react-bootstrap'
import { FaEdit, FaTrash } from 'react-icons/fa'

const Products = () => {
  const [products, setProducts] = useState([])
  const navigate = useNavigate()

  const loadProducts = async () => {
    const res = await api.get('/products')
    setProducts(res.data)
    $('#productsTable').DataTable()
  }

  useEffect(() => {
    loadProducts()
  }, [])

  const deleteProduct = async (id) => {
    if (window.confirm("Do you wish to delete this product?")) {
      await api.delete(`/products/${id}`)
      loadProducts()
    }
  }

  return (
    <div className='container mt-4'>
      <h2>Products</h2>
      <Button className='mb-3' onClick={() => navigate('/products/new')}>
        New product
      </Button>
      <table id='productsTable' className='table table-striped'>
        <thead>
          <tr>
            <th>ID</th>
            <th>Name</th>
            <th>Price</th>
            <th>Active</th>
            <th>Created at</th>
            <th>Last updated</th>
            <th>Actions</th>
          </tr>
        </thead>
        <tbody>
          {products.map(p => (
            <tr key={p.id}>
              <td>{p.id}</td>
              <td>{p.name}</td>
              <td>${p.price} USD</td>
              <td>{p.active ? 'Yes' : 'No'}</td>
              <td>{p.created_at}</td>
              <td>{p.last_updated}</td>
              <td>
                <Button variant='warning' size='sm' className='me-2'
                  onClick={() => navigate(`/products/edit/${p.id}`)}
                >
                  <FaEdit />
                </Button>
                <Button variant='danger' size='sm'
                  onClick={() => deleteProduct(p.id)}
                >
                  <FaTrash />
                </Button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  )
}

export { Products }