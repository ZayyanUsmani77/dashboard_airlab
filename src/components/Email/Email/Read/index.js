import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import { url } from '../../../../Url'
import DashboardContainer from '../../../dashboard/DashboardContainer'
import EmailContainer from '../../Shared/EmailContainer'
const EmailPageContainer = () => {
  const { id } = useParams()
  const [message, setMessage] = useState({})
  useEffect(() => {
    axios.get(`${url}/email/${id}`).then((res) => {
      // console.log(res.data);
      setMessage(res.data)
    })
  }, [setMessage])

  const userImage =
    'https://images.pexels.com/photos/220453/pexels-photo-220453.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500'
  return (
    <DashboardContainer>
      <EmailContainer>
        <div class="email-read-box p-3" style={{ overflowY: 'auto' }}>
          <h4>It is a long established fact that a reader will be distracted.</h4>
          <hr />
          <div class="d-flex align-items-center">
            <img src={userImage} width="42" height="42" class="rounded-circle" alt="" />
            <div class="flex-grow-1 ms-2">
              <p class="mb-0 font-weight-bold">Himalaya India</p>
              <div class="dropdown">
                <div class="dropdown-toggle" data-bs-toggle="dropdown">
                  to me
                </div>
                <div class="dropdown-menu">
                  <a class="dropdown-item" href="/">
                    Settings
                  </a>
                  <div class="dropdown-divider"></div>
                  <a class="dropdown-item" href="/">
                    Help & Feedback
                  </a>
                  <a class="dropdown-item" href="/">
                    Enable Split View Mode
                  </a>
                  <a class="dropdown-item" href="/">
                    Keyboard Shortcuts
                  </a>
                  <div class="dropdown-divider"></div>
                  <a class="dropdown-item" href="/">
                    Sign Out
                  </a>
                </div>
              </div>
            </div>
            <p class="mb-0 chat-time ps-5 ms-auto">{message.date}</p>
          </div>
          <div class="email-read-content px-md-5 py-5">
            <p>{message.message}</p>
          </div>
        </div>
      </EmailContainer>
    </DashboardContainer>
  )
}

export default EmailPageContainer
