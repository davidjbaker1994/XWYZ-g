import React, {useState} from "react"

const CForm = (props) => {
  const [state, setState] = useState({
    showForm: true,
    showModal: ''
  })
 
  const handleSubmit = (e) => {
    e.preventDefault()
    console.log('button seems to work');
    let myForm = document.getElementById('contact-us-form');
    let formData = new FormData(myForm)
    fetch('/', {
      method: 'POST',
      headers: { "Content-Type": "application/x-www-form-urlencoded" },
      body: new URLSearchParams(formData).toString()
    }).then(() => 
    {
      setState({
        showForm: false,
        showModal: 'success'
      });

    })
    .catch((error) => setState({ showForm: false, showModal: 'error'}));
  }

  if (!state.showForm && state.showModal === 'success') {
    return (
      <div id="contact-form-container" className={props.className}>
        <div className="modal-message">
          <div>
            <div>
              <h3>Your Message Was Sent Successfully!</h3>
            </div>
            <div>
              <p>We appreciate your interest in our serivces! You should recieve a reply from us within one to two business days at the latest.</p>
            </div>
            <div>
              <div className="close-btn" onClick={() => setState({showForm: true, showModal: ''})}>
                X
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  } else if (!state.showForm && state.showModal === 'error') {
    return (
      <div id="contact-form-container" className={props.className}>
        <div className="modal-message">
          <div>
            <div>
              <h3>Unfortunately, there was an error submitting your message</h3>
            </div>
            <div>
              <p>
                If this error persists, please feel free to email us directly  <a>here</a>
              </p>
            </div>
            <div>
              <div className="close-btn" onClick={() => setState({showForm: true, showModal: ''})}>
                X
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  } else {
    return (
      <div id="contact-form-container" className={props.className}>
      <form name="contact" id="contact-us-form" onSubmit={handleSubmit} data-netlify="true">
        <input type="hidden" name="form-name" value="contact"/>
        <div id="first-name">
          <input
            type='text'
            name='first_name'
            placeholder="First Name"
          />
        </div>
        <div id="last-name">
          <input
            type='text'
            name='last_name'
            placeholder="Last Name"
          />
        </div>
        <div>
          <input
            type='text'
            name='email'
            placeholder="Email"
          />
        </div>
        <div>
          <input
            type='text'
            name='subject'
            placeholder="Subject"
          />
        </div>
        <div>
          <textarea
            type='text'
            name='message'
            id='message'
            placeholder='Message'
            rows='6'
          ></textarea>
        </div>
        <div>
          <button type='submit'>
            Submit
          </button>
        </div>
      </form>
    </div>   
    );
  }       
}

export default CForm;