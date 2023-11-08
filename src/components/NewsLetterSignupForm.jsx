import React, { useState } from 'react';

function NewsletterSignupForm() {
  //useState används för hantering state för e-post och e-postvalidering
  const [email, setEmail] = useState('');
  const [isValidEmail, setIsValidEmail] = useState(true);

  const handleEmailChange = (e) => {
    //Funktion för hantera ändring i e-postfältet
    const inputEmail = e.target.value;
    setEmail(inputEmail);

    // Implement av valudering av e-post
    const emailPattern = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/;
    setIsValidEmail(emailPattern.test(inputEmail));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (isValidEmail) {
      // Hantera insädning av formulär eller API-Anrop för nyhetsavregistering
      alert(`Subscribed with email: ${email}`);
      setEmail('');
    }
  };

  return (
    //Skapa ett formulär för nyhetsbrev
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
