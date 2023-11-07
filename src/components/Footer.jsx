import React from 'react';
import NewsletterSignupForm from './NewsLetterSignupForm';

function Footer() {
  return (
    <footer style={footerStyle}>
      <div style={formContainerStyle}>
        <p style={textStyle}>
          For updates on the latest recipes, please subscribe to our newsletter:
        </p>
        <NewsletterSignupForm />
      </div>
    </footer>
  );
}

const footerStyle = {
  backgroundColor: 'gray',
  padding: '80px',
  textAlign: 'center',
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center',
  minHeight: '150px',
};

const formContainerStyle = {
  background: 'gray', // Set the background color to a lighter shade of gray
  padding: '40px',
  borderRadius: '10px',
  boxShadow: '0 2px 4px rgba(0, 0, 0, 0.2)',
};

const textStyle = {
  marginBottom: '20px',
  color: 'white',
};

export default Footer;
