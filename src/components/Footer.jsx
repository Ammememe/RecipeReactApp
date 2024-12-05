import React from 'react';
import NewsletterSignupForm from './NewsLetterSignupForm';

function Footer() {
  return (
    //Avsnitt för footer (Specifik stil)
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

//Stil för footer
const footerStyle = {
  backgroundColor: 'gray',
  padding: '80px',
  textAlign: 'center',
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center',
  minHeight: '150px',
};

//Stil för NLSUPF (Holder)
const formContainerStyle = {
  background: 'gray', // Set the background color to a lighter shade of gray
  padding: '40px',
  borderRadius: '10px',
  boxShadow: '0 2px 4px rgba(0, 0, 0, 0.2)',
};
//Stil för text inom footer
const textStyle = {
  marginBottom: '20px',
  color: 'white',
};

export default Footer;
