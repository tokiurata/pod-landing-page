import { useState, useEffect } from 'react';
import Modal from '../UI/Modal';
import Button from '../UI/Button';
import ErrorMessage from './ErrorMessage';
import './HeroForm.scss';

const HeroForm = () => {
  const [enteredEmail, setEnteredEmail] = useState('');
  const [errorMessage, setErrorMessage] = useState('');
  const [isValidEmail, setIsValidEmail] = useState(false);
  const [validEmails, setValidEmails] = useState([]);

  useEffect(() => {
    const emails = JSON.parse(localStorage.getItem('emails'));
    if (emails) {
      setValidEmails(emails);
    }
  }, []);

  useEffect(() => {
    localStorage.setItem('emails', JSON.stringify(validEmails));
  }, [validEmails]);

  const isEmail = (email) =>
    /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(email);

  const addEmailHandler = (event) => {
    event.preventDefault();

    if (enteredEmail.trim().length === 0) {
      setErrorMessage('Oops! Please add your email');
      return;
    } else if (!isEmail(enteredEmail.trim())) {
      setErrorMessage('Oops! Please check your email');
      return;
    } else if (validEmails.includes(enteredEmail)) {
      setErrorMessage('This email already has granted access');
      return;
    }

    setIsValidEmail(true);
    setValidEmails([...validEmails, enteredEmail]);

    setEnteredEmail('');
    setErrorMessage('');
  };

  const emailChangeHandler = (event) => {
    setEnteredEmail(event.target.value);
  };

  const blurHandler = (event) => {
    if (event.target.value.trim().length === 0) {
      setErrorMessage('');
    }
  };

  const closeModalHandler = () => {
    setIsValidEmail(false);
  };

  return (
    <>
      {isValidEmail && (
        <Modal
          title="Success!"
          subtitle="Access granted. Check your email for more details."
          onClick={closeModalHandler}
        />
      )}
      <form className="hero-form" onSubmit={addEmailHandler}>
        <input
          className="hero-form__input"
          type="text"
          placeholder="Email address"
          onChange={emailChangeHandler}
          onBlur={blurHandler}
          value={enteredEmail}
        />
        <Button
          className="button button--form"
          type="submit"
          onClick={closeModalHandler}
        >
          Request Access
        </Button>
        {errorMessage && <ErrorMessage message={errorMessage} />}
      </form>
    </>
  );
};

export default HeroForm;
