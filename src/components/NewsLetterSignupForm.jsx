import React, { useState } from 'react';

function NewsletterSignupForm() {
  const [email, setEmail] = useState('');
  const [isValidEmail, setIsValidEmail] = useState(true);

  const handleEmailChange = (e) => {
    const inputEmail = e.target.value;
    setEmail(inputEmail);

    // You can implement a simple email validation here
    const emailPattern = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/;
    setIsValidEmail(emailPattern.test(inputEmail));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (isValidEmail) {
      // Handle form submission or API call for newsletter signup
      alert(`Subscribed with email: ${email}`);
      setEmail('');
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <label>
        Email:
        <input
          type="email"
          value={email}
          onChange={handleEmailChange}
          style={{ borderColor: isValidEmail ? '' : 'red' }}
        />
      </label>
      <button type="submit" disabled={!isValidEmail}>
        Subscribe
      </button>
    </form>
  );
}

export default NewsletterSignupForm;
