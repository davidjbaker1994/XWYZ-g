import React, { useState } from "react"
import { NetlifyForm, Honeypot } from 'react-netlify-forms'

const ContactForm = (props) => {
  const [showForm, setShowForm] = useState(true);
  const [showError, setShowError] = useState(false);
  const [showSuccess, setShowSuccess] = useState(true);

  if (!showForm && showSuccess) {
    return (
      <div className="modal-message">
        <div>
          <h3>Your Message Was Sent Successfully!</h3>
        </div>
        <div>
          <p>We appreciate your interest in our serivces! You should recieve a reply from us within one to two business days at the latest.</p>
        </div>
        <div>
          <div className="close-btn" onClick={() => setShowForm(true)}>
            X
          </div>
        </div>
      </div>
    );
  } else if (!showForm && showError) {
    return (
      <div className="modal-message">
        <div>
          <h3>Unfortunately, there was an error submitting your message</h3>
        </div>
        <div>
          <p>
            If this error persists, please feel free to email us directly  <a>here</a>
          </p>
        </div>
        <div>
          <div className="close-btn" onClick={() => setShowForm(true)}>
            X
          </div>
        </div>
      </div>
    );
  } else {
    return (
      <div id="contact-form-container" className={props.className}>
      <NetlifyForm
        name='Contact'
        action='/thanks'
        honeypotName='bot-field'
        onSuccess={(response, context) => {
          console.log('Successfully sent form data to Netlify Server')
          context.formRef.current.reset()
        }}
        
      >
      {({ handleChange, success, error }) => {
        if (success) {
          setShowForm(false);
          setShowSuccess(true);
        } else if (error) {
          setShowForm(false);
          setShowError(true);
        } else {
          return (
            <>
            <Honeypot />
            <div className="modal-message">
            <div>
              <h3>Your Message Was Sent Successfully!</h3>
            </div>
            <div>
              <p>We appreciate your interest in our serivces! You should recieve a reply from us within one to two business days at the latest.</p>
            </div>
            <div>
              <div className="close-btn" onClick={() => setShowForm(true)}>
                X
              </div>
            </div>
          </div>
            <div id="first-name">
              <input
                type='text'
                name='first_name'
                placeholder="First Name"
                onChange={handleChange}
              />
            </div>
            <div id="last-name">
              <input
                type='text'
                name='last_name'
                placeholder="Last Name"
                onChange={handleChange}
              />
            </div>
            <div>
              <input
                type='text'
                name='email'
                placeholder="Email"
                onChange={handleChange}
              />
            </div>
            <div>
              <input
                type='text'
                name='subject'
                placeholder="Subject"
                onChange={handleChange}
              />
            </div>
            <div>
              <textarea
                type='text'
                name='message'
                id='message'
                placeholder='Message'
                rows='6'
                onChange={handleChange}
              />
            </div>
            <div>
              <button type='submit'>
                Submit
              </button>
            </div>
          </>
          );
        }}}
      </NetlifyForm>
    </div>
    );
}

export default ContactForm;