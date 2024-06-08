import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import AddButtons from "./AddButtons";

const AddTasks = () => {
  return (
    <Container className="mt-5">
      <div className="d-flex justify-content-center align-items-center center my-4">
        <i
          className="bi bi-plus-circle"
          style={{
            fontSize: "2rem",
            marginBottom: "0.5rem",
            marginRight: "0.5rem",
            color: "#0096C8",
          }}
        ></i>
        <h2>Add Your Listing</h2>
      </div>
      <Row>
        <Col xs={12} md={6}>
          <AddButtons
            title="People"
            description="An Individual or Organization. Teacher, Coach, Professional or Online Seller. Company, Business or Association."
            icon="bi-people-fill"
            iconColor="#6f42c1"
          />
        </Col>
        <Col xs={12} md={6}>
          <AddButtons
            title="Place"
            description="An Address. Classroom, Shop, Performance or Event Venue, Sports Arena, Play Area, Studio, School or Campus."
            icon="bi-geo-alt-fill"
            iconColor="#198754"
          />
        </Col>
        <Col xs={12} md={6}>
          <AddButtons
            title="Product"
            description="An Item that you can Book, Buy or Rent. Appointment, Ticket, or Voucher. Equipment, Instrument or Activity Kit."
            icon="bi-cart-fill"
            iconColor="#dc3545"
          />
        </Col>
        <Col xs={12} md={6}>
          <AddButtons
            title="Program"
            description="An Event with Venue and Date. Meetup, Workshop or Webinar. Exhibition, Performance or Competition."
            icon="bi-calendar-event-fill"
            iconColor="#0dcaf0"
          />
        </Col>
      </Row>
    </Container>
  );
};

export default AddTasks;
