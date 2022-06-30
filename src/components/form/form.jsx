import React, { useState } from 'react';
import './form.css'
import { useFormspark } from "@formspark/use-formspark";
import ReCAPTCHA from 'react-google-recaptcha';

export default function Form() {
  // Here we set two state variables for firstName and lastName using `useState`
  const [formState, setFormState] = useState({
    name:'',
    email:'',
    message:''
  });

  const [submit, submitting] = useFormspark({
    formId: "KMxilvGt",
  });
  
  const handleInputChange = (event) => {
    // Getting the value and name of the input which triggered the change
    const { name, value } = event.target;

    setFormState({
      ...formState,
      [name]: value,
    });
  };



  const handleFormSubmit = async(e) => {
    // Preventing the default behavior of the form submit (which is to refresh the page)
    e.preventDefault();
    await submit(formState);
    // Send message to user after submitting form
    if (!submitting) 
    return alert(`Thank you for reaching out to me, I'll get back to you asap`);

    // Clear input field after submitting
    setFormState({
      name:'',
      email:'',
      message:''
    })
  };

  return (
    <div className='formWrapper'>
      <form className="form" onSubmit={handleFormSubmit}>
        <label htmlFor="name">First Name</label>
        <input
          value={formState.name}
          name="name"
          onChange={handleInputChange}
          type="text"
          placeholder="Name"
          required
        />
        <label htmlFor="email">Email</label>
        <input
          value={formState.email}
          name="email"
          onChange={handleInputChange}
          type="email"
          placeholder="Email"
          required
        />
        <label htmlFor="message">Write a message</label>
        <textarea
          value={formState.message}
          name="message"
          onChange={handleInputChange}
          type="text"
          placeholder="your message"
          required
        />
        <button 
          disabled={submitting}
          type="submit" >
          {submitting? "Submitting..." : "Submit"}
        </button>
      </form>
    </div>
  );
}
