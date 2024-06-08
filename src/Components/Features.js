import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap-icons/font/bootstrap-icons.css";
import "./Features.css";
import FeatureCard from "./FeatureCard";

const Features = () => {
  return (
    <div className="mx-5 top-div">
      <div className="row row-cols-1 row-cols-md-2 g-4">
        <FeatureCard
          icon="bi-people-fill"
          title="People"
          text="Find a teacher, coach, or expert for your hobby interest in your locality. Find a partner, teammate, accompanist or collaborator."
          buttonText="Connect"
          iconColor="#8064A2"
        />
        <FeatureCard
          icon="bi-geo-alt-fill"
          title="Place"
          text="Find a class, school, playground, auditorium, studio, shop or an event venue. Book a slot at venues that allow booking through hobbycue."
          buttonText="Meet up"
          iconColor="#77933C"
        />
        <FeatureCard
          icon="bi-bag-fill"
          title="Product"
          text="Find equipment or supplies required for your hobby. Buy, rent or borrow from shops, online stores or from community members."
          buttonText="Get it"
          iconColor="#C0504D"
        />
        <FeatureCard
          icon="bi-calendar-check-fill"
          title="Program"
          text="Find events, meetups and workshops related to your hobby. Register or buy tickets online."
          buttonText="Attend"
          iconColor="#0096C8"
        />
      </div>
    </div>
  );
};

export default Features;
