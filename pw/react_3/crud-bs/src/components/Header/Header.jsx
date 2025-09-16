import { NavLink } from 'react-router-dom'
import { Container, Navbar } from 'react-bootstrap'

export const Header = () => {
  return (
    <Navbar
     className='bg-body-tertiary mb-4'>
      <Container>
        <Navbar.Brand as={NavLink} to='/'>Lojinha de coisas</Navbar.Brand>
      </Container>
    </Navbar>
  )
}