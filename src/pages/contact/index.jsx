import React from 'react';
import { Container } from "@/common/components/elements/Container";
import PageHeading from '@/common/components/elements/PageHeading';
import Contact from '@/modules/contactPage';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const PAGE_TITLE = 'Contact';
const PAGE_DESCRIPTION = "Feel free to contact me and let's discuss how we can work together.";

const ContactPage = () => {
  return (
    <>
      <Container data-aos="fade-up">
        <PageHeading title={PAGE_TITLE} description={PAGE_DESCRIPTION} />
        <Contact />
        <ToastContainer
          position="top-right"
          autoClose={3000} // Duration for which the toast will be visible
          hideProgressBar={false}
          newestOnTop={false}
          closeOnClick
          rtl={false}
          pauseOnFocusLoss
          draggable
          pauseOnHover
        />
      </Container>
    </>
  );
}

export default ContactPage;
