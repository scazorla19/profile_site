import React from "react";

// core components
import IndexNavbar from "components/Navbars/IndexNavbar";
import ContactPageHeader from "components/Headers/ContactPageHeader";
import ContactForm from "components/ContactForm/ContactForm";

const ContactPage = () => {
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
      <ContactPageHeader />
      <ContactForm />
    </>
  );
}

export default ContactPage;
