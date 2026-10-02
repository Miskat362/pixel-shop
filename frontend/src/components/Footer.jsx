import React from 'react'
import { Container, Row, Col } from 'react-bootstrap'

function Footer() {
    const currentYear = new Date().getFullYear()
  return (
    <footer className='bg-dark text-white py-4'>
      <Container>
        <Row>
          <Col className='text-center'>
            <p>&copy; {currentYear} Pro Shop. All rights reserved.</p>
          </Col>
        </Row>
      </Container>
    </footer>
  )
}

export default Footer