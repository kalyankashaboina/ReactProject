// HostelFinder.js

import React from 'react';
import { Container, Card, Button } from 'react-bootstrap';

const HostelStyle = () => {
  return (
    <Container className="mt-5">
      <h1 className="mb-4">Hostel Finder</h1>
      <div className="row">
        <div className="col-md-4">
          <Card className="mb-4">
            <Card.Img variant="top" src="https://tse4.mm.bing.net/th?id=OIP.vjaF1hRQqC32T0ENCpbRvQHaKx&pid=Api&P=0&h=220" />
            <Card.Body>
              <Card.Title>Hostel Name</Card.Title>
              <Card.Text>
                Description of the hostel. Lorem ipsum dolor sit amet, consectetur adipiscing elit.
              </Card.Text>
              <Button variant="primary">View Details</Button>
            </Card.Body>
          </Card>
        </div>
        {/* Add more hostel cards as needed */}
      </div>
    </Container>
  );
};

export default HostelStyle;
