import React, { useState } from 'react'
import emailjs from '@emailjs/browser';
import toast, { Toaster } from 'react-hot-toast';

const App = () => {

  const [nom, setNom] = useState("")
  const [email, setEmail] = useState("")
  const [message, setMessage] = useState("")

  const handleChange = (e) =>{
    setNom(e.target.value)
  }

  const handleChangeMessage = (e) =>{
    setMessage(e.target.value)
  }

  const handleChangeEmail = (e) =>{
    setEmail(e.target.value)
  }

  const sendMessage = (e) => {
    e.preventDefault()

    let data = {
      from_name: nom,
      from_email: email,
      message: message
    }

    emailjs.send("service_9bzt0dj", "template_qajhs5m", data, "anFyUvw_eWb5tOVSE");

    setNom("")
    setEmail("")
    setMessage("")

    toast.success("Votre message a ete envoye avec succes")
  }

  return (
    <>
    <Toaster/>
      <div className="container">
        <div className="row mt-5">
          <div className="col-md-6 offset-md-3">
              <div className="card">
                <div className="card-header">
                  <h5>Contactez-nous</h5>
                </div>
                <div className="card-body">
                  <form onSubmit={sendMessage}>
                    <div className="form-group mb-3">
                      <label htmlFor="name">Name</label>
                      <input type="text" name="name" id="name" className="form-control" value={nom} onChange={handleChange} />
                    </div>

                    <div className="form-group mb-3">
                      <label htmlFor="email">Email</label>
                      <input type="text" name="email" id="email" className="form-control" value={email} onChange={handleChangeEmail} />
                    </div>

                    <div className="form-group mb-3">
                      <label htmlFor="message">Message</label>
                      <textarea rows={5} name="message" id="message" className="form-control" value={message} onChange={handleChangeMessage}></textarea>
                    </div>

                    <button className="btn btn-primary">Envoyer le message</button>
                  </form>
                </div>
              </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default App