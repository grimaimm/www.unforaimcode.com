import React from 'react';
import { Container } from "@/common/components/elements/Container";
import SocialMediaList from './SocialMediaList';
import ContactForm from './ContactForm';

const Contact = () => {
  return (
    <>
      <section className='space-y-6'>
        <SocialMediaList />
        <div className='space-y-5'>
          <h3 className='text-lg font-medium'>Or send me a message</h3>
          <ContactForm />
        </div>
      </section>
    </>
  );
}

export default Contact;
