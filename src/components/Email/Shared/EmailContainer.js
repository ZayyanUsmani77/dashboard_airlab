/* eslint-disable no-script-url */
/* eslint-disable jsx-a11y/anchor-is-valid */
import React, { useEffect, useState } from 'react'
import useQuery from '../../../hook/useQuery'
import ComposeEmail from '../ComposeEmail'
import EmailSidebar from '../EmailSidebar'
import EmailTopbar from '../EmailTopbar'
const EmailContainer = ({ children }) => {
  const [isOpen, setIsOpen] = useState(false)

  const isCompose = useQuery('compose')

  useEffect(() => {
    setIsOpen(isCompose)
  }, [isCompose])

  return (
    <div>
      <div class="email-wrapper">
        <EmailSidebar setIsOpen={setIsOpen} />
        <EmailTopbar />
        <div class="email-content">{children}</div>

        <ComposeEmail isOpen={isOpen} setIsOpen={setIsOpen} />

        <div class="overlay email-toggle-btn-mobile"></div>
      </div>
    </div>
  )
}

export default EmailContainer
