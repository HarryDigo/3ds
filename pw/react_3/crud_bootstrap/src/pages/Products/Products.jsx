import { useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom'

import { api } from '@services'

import DataTable from 'datatables.net-react'
import $ from 'jquery'

import { Button } from 'react-bootstrap'

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
      <DataTable id='productsTable' className='table table-striped'>
        <thead>
          <tr>

          </tr>
        </thead>
      </DataTable>
    </div>
  )
}
