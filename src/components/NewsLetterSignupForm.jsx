import React, { useState } from 'react';

function NewsletterSignupForm() {
  const [email, setEmail] = useState('');
  const [isValidEmail, setIsValidEmail] = useState(true);

  const handleEmailChange = (e) => {
    const inputEmail = e.target.value;
    setEmail(inputEmail);
    const emailPattern = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/;
    setIsValidEmail(emailPattern.test(inputEmail));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (isValidEmail) {
      alert(`Subscribed with email: ${email}`);
      setEmail('');
    }
  };

  // Inline styles for responsiveness
  const responsiveFormStyle = {
    display: 'flex',
    flexDirection: 'column', // This ensures elements stack vertically
    alignItems: 'center',
    justifyContent: 'center',
    gap: '10px', // Adds space between elements
    margin: '0 auto', // Centers the form in the page
    padding: '20px',
    maxWidth: '400px', // Max width for the form
  };

  const inputAndButtonStyle = {
    width: '100%', // Ensures input and button expand to fill form width
    padding: '10px',
    margin: '5px 0', // Adds a little space above and below each input/button
  };

  return (
    <form onSubmit={handleSubmit} style={responsiveFormStyle}>
      <label>Email:</label>
      <input
        type="email"
        value={email}
        onChange={handleEmailChange}
        style={{ ...inputAndButtonStyle, borderColor: isValidEmail ? 'initial' : 'red' }}
      />
      <button type="submit" disabled={!isValidEmail} style={inputAndButtonStyle}>
        Subscribe
      </button>
    </form>
  );
}

export default NewsletterSignupForm;
