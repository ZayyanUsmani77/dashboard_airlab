/* eslint-disable no-script-url */
/* eslint-disable jsx-a11y/anchor-is-valid */
import axios from 'axios'
import React, { useState } from 'react'
import { useSelector } from 'react-redux'
import { url } from '../../../Url'

const ComposeEmail = ({ isOpen, setIsOpen }) => {
  const {
    token,
    user: { id: userId },
  } = useSelector((state) => state.auth)
  const [to, setTo] = useState('')
  const [subject, setSubject] = useState('')
  const [message, setMessage] = useState('')

  const sendMessage = () => {
    let form_data = new FormData()
    form_data.append('sender_id', userId)
    form_data.append('subject', subject)
    form_data.append('receiver', to)
    form_data.append('message', message)
    axios.post(`${url}/send/email/`, form_data).then((res) => {
      alert(`mail sent to ${res.data.receiver}`)
      window.location.href = '/dashboard/email/'
    })
  }
  return (
    <div class="compose-mail-popup" style={{ display: isOpen ? 'block' : 'none' }}>
      <div class="card">
        <div class="card-header bg-dark text-white py-2 cursor-pointer">
          <div class="d-flex align-items-center">
            <div class="compose-mail-title">New Message</div>
            <div class="compose-mail-close ms-auto" onClick={() => setIsOpen(false)}>
              x
            </div>
          </div>
        </div>
        <div class="card-body">
          <div class="email-form">
            <div class="mb-3">
              <input
                type="text"
                class="form-control"
                placeholder="To"
                onChange={(e) => setTo(e.target.value)}
              />
            </div>
            <div class="mb-3">
              <input
                type="text"
                class="form-control"
                placeholder="Subject"
                onChange={(e) => setSubject(e.target.value)}
              />
            </div>
            <div class="mb-3">
              <textarea
                class="form-control"
                placeholder="Message"
                rows="10"
                cols="10"
                onChange={(e) => setMessage(e.target.value)}
              ></textarea>
            </div>
            <button className="btn btn-primary" onClick={sendMessage}>
              Send
            </button>
          </div>
        </div>
      </div>
    </div>
  )
}

export default ComposeEmail
