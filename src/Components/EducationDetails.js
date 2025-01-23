import React from 'react';
import { Card, Container, Row, Col } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import './Educationstyle.css';

const EducationDetails = () => {
  const educationData = [
    {
      level: 'B.E (EEE)',
      institution: 'Knowledge Institute of Technology (KIOT), Salem',
      year: '2020 - 2024',
      per:"8.6(CGPA)"
    },
    {
      level: 'HSC',
      institution: 'Sri Vidhya Barathi Matric Hr. Sec School, Salem',
      year: '2020',
      per:"75%"
    },
    {
      level: 'SSLC',
      institution: 'Sri Vidhya Barathi Matric Hr. Sec School, Salem',
      year: '2018',
      per:"96%"
    },
  ];

  return (
    <>
    <Container className="my-5">
      <Row>
      <h2 className="edutitle">Education Details</h2>
      <br>
      </br>
      <br></br>
      <br></br>
      <br></br>

        {educationData.map((edu, index) => (
          <Col key={index} md={4} className="mb-4">
            <Card className="education-card shadow-sm">
              <Card.Body>
                <div className="d-flex justify-content-between align-items-center">
                  <Card.Title className="mb-0 text-primary">{edu.level}</Card.Title>
                  <span className="text-muted">{edu.year}</span>
                </div>
                <Card.Text className="mt-2 text-sec">{edu.institution}</Card.Text>
                <Card.Text className="mt-2 text-per">{edu.per}</Card.Text>

              </Card.Body>
            </Card>
          </Col>
        ))}
      </Row>
    </Container>
    <hr></hr>
    </>
  );
};

export default EducationDetails;
