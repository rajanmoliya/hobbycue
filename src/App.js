import "./App.css";
import Navbar from "./Components/Navbar";
import Home from "./Components/Home";
import Features from "./Components/Features";
import InfoCard from "./Components/InfoCard";
import Testimonial from "./Components/Testimonial";
import PreFooter from "./Components/PreFooter";
import { Footer } from "./Components/Footer";

function Landing() {
  return (
    <>
      <Navbar />
      <Home />
      <Features />
      <InfoCard
        icon="bi-plus-circle-fill"
        title="Add your own"
        text="Are you a teacher or expert? Do you sell or rent out equipment, venue or event tickets? Or, you know someone who should be on hobbycue? Go ahead and Add your Own page."
        buttonText="Add new"
        iconColor="#0096C8"
      />
      <Testimonial
        icon="bi-quote"
        title="Testimonials"
        text="In a fast growing and ever changing city like Bangalore, it sometimes becomes very difficult to find or connect with like minded people. Websites like hobbycue.com is a great service which helps me get in touch with, communicate, connect, and exchange ideas with other dancers. It also provides the extra benefit of finding products and services that I can avail, which I can be assured is going to be of great quality as it comes recommended by people of the hobbycue community. To have discussions, to get visibility, and to be able to safely explore various hobbies and activities in my city, all under one roof, is an excellent idea and I highly recommend it."
        personName="Shubha Nagarajan"
        personRole="Classical Dancer"
        personImage="/images/shubha.png"
        audioSrc="audio.mp3"
      />
      <PreFooter />
      <Footer />
    </>
  );
}

export default Landing;
