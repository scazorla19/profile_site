import React from "react";

import { Container } from "reactstrap";
import IndexNavbar from "components/Navbars/IndexNavbar";
import ProfilePageHeader from "components/Headers/ProfilePageHeader";

const ComingSoonPage = () => {
  document.documentElement.classList.remove("nav-open");
  React.useEffect(() => {
    document.body.classList.add("contact-me");
    return function cleanup() {
      document.body.classList.remove("contact-me");
    };
  });
  return (
    <>
      <IndexNavbar />
      <ProfilePageHeader />
      <Container>
        <div className="owner">
        <h1 style={{padding:"100px"}}>Under Construction!</h1>
        </div>      
      </Container>
      
    </>
  );
};

export default ComingSoonPage;