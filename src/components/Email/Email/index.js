import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import { url } from '../../../Url'
import DashboardContainer from '../../dashboard/DashboardContainer'
import EmailContainer from '../Shared/EmailContainer'
const EmailPageContainer = () => {
  const [message_list, setMessageList] = useState([])

  useEffect(() => {
    axios.get(`${url}/send/email/`).then((res) => {
      setMessageList(res.data)
    })
  }, [setMessageList])

  return (
    <DashboardContainer>
      <EmailContainer>
        <div class="">
          <div class="email-list">
            {message_list.map((message) => (
              <>
                <Link to={`/dashboard/email/read/${message.id}/`}>
                  <div class="d-md-flex align-items-center email-message px-3 py-1">
                    <div class="d-flex align-items-center email-actions">
                      <input class="form-check-input" type="checkbox" value="" />
                      <i class="bx bx-star font-20 mx-2 email-star"></i>
                      <p class="mb-0">
                        <b>{message.subject}</b>
                      </p>
                    </div>
                    <div class="">
                      <p class="mb-0">{message.message}</p>
                    </div>
                    <div class="ms-auto">
                      <p class="mb-0 email-time">{message.date}</p>
                    </div>
                  </div>
                </Link>
              </>
            ))}
          </div>
        </div>
      </EmailContainer>
    </DashboardContainer>
  )
}

export default EmailPageContainer
