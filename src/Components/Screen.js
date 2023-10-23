import React from "react";
import { Container } from "react-bootstrap";
import Nav from "./ui/Nav";
import Header from "./Header/Header";
import About from "./About/About";
import OutreachPartOne from "./Outreach/OutreachPartOne";
import PrayerAndTestimonials from "./PrayerAndTestimony/PrayerAndTestimonials";
import ContactContainer from "./Contact/ContactContainer";
import Footer from "./Footer/Footer"


const Screen = () => {
  // const location = useLocation();

  // let showContactText;
  // if (location.pathname === "/conference") {
  // // if (location.pathname === "/tmp/jermainekee.com/conference") {
  //   showContactText = true;
  // } else {
  //   showContactText = false;
  // }

  return (
    <>
      <Container className="p-0">
        <Nav />
        <Header />
          <About />
            <OutreachPartOne />
            <PrayerAndTestimonials />
            <ContactContainer />
            <Footer/>
      </Container>
    </>
  );
};
export default Screen;
