import React from 'react'
import { Col, Container, Row } from 'react-bootstrap';
import '../sass/Banner.scss';

function Banner() {
  return (
    <Container fluid>
        <Row>
            <Col className='banner-col1'>
                <h1 className='banner-h1'>clock for health, beauty & happiness (deaging african heritage)</h1>
            </Col>
        </Row>
    </Container>
  )
}

export default Banner
