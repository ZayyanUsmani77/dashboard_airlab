/* eslint-disable no-script-url */
/* eslint-disable jsx-a11y/anchor-is-valid */
import React from 'react'
import {
  FaBookmark,
  FaClock,
  FaEnvelope,
  FaFile,
  FaInbox,
  FaInfoCircle,
  FaPaperPlane,
  FaPlus,
  FaStar,
  FaTrash,
  FaUserFriends,
  FaVideo,
} from 'react-icons/fa'
const userImage =
  'https://images.pexels.com/photos/220453/pexels-photo-220453.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500'

const EmailSidebar = ({ setIsOpen }) => {
  return (
    <div>
      <div class="email-sidebar">
        <div class="email-sidebar-header d-grid">
          <p
            class="btn btn-primary compose-mail-btn flex justify-center items-center gap-x-3"
            style={{ display: 'flex' }}
            onClick={() => setIsOpen(true)}
          >
            <FaPlus />
            Compose
          </p>
        </div>
        <div class="email-sidebar-content">
          <div class="email-navigation">
            <div class="list-group list-group-flush">
              <a href="app-emailbox.html" class="list-group-item active d-flex align-items-center">
                <FaInbox />
                <span>Inbox</span>
                <span class="badge bg-primary rounded-pill ms-auto">7,513</span>
              </a>
              <a href="javascript:;" class="list-group-item d-flex align-items-center">
                <FaStar />
                <span>Starred</span>
              </a>
              <a href="javascript:;" class="list-group-item d-flex align-items-center">
                <FaClock />
                <span>Snoozed</span>
              </a>
              <a href="javascript:;" class="list-group-item d-flex align-items-center">
                <FaPaperPlane />
                <span>Sent</span>
              </a>
              <a href="javascript:;" class="list-group-item d-flex align-items-center">
                <FaFile />
                <span>Drafts</span>
                <span class="badge bg-primary rounded-pill ms-auto">4</span>
              </a>
              <a href="javascript:;" class="list-group-item d-flex align-items-center">
                <FaBookmark />
                <span>Important</span>
              </a>

              <a href="javascript:;" class="list-group-item d-flex align-items-center">
                <FaEnvelope />
                <span>Scheduled</span>
              </a>

              <a href="javascript:;" class="list-group-item d-flex align-items-center">
                <FaInfoCircle />
                <span>Spam</span>
              </a>
              <a href="javascript:;" class="list-group-item d-flex align-items-center">
                <FaTrash />
                <span>Trash</span>
              </a>
            </div>
          </div>
          <div class="email-meeting">
            <div class="list-group list-group-flush">
              <div class="list-group-item">
                <span>Meet</span>
              </div>
              <a href="javascript:;" class="list-group-item d-flex align-items-center">
                <FaVideo />
                <span>Start a meeting</span>
              </a>
              <a href="javascript:;" class="list-group-item d-flex align-items-center">
                <FaUserFriends />
                <span>Join a meeting</span>
              </a>
              <div class="list-group-item email-hangout cursor-pointer border-top">
                <div class="d-flex align-items-center">
                  <div class="chat-user-online  w-12 h-12 rounded-full overflow-hidden">
                    <img
                      src={userImage}
                      width="42"
                      height="42"
                      class="object-cover w-full h-full"
                      alt=""
                    />
                  </div>
                  <div class="flex-grow-1 ms-2">
                    <p class="mb-0">Jessica Doe</p>
                  </div>
                  <div class="dropdown">
                    <div
                      class="font-24 dropdown-toggle dropdown-toggle-nocaret flex items-center"
                      data-bs-toggle="dropdown"
                    >
                      <FaPlus />
                    </div>
                    <div class="dropdown-menu dropdown-menu-end">
                      <a class="dropdown-item" href="javascript:;">
                        Settings
                      </a>
                      <div class="dropdown-divider"></div>
                      <a class="dropdown-item" href="javascript:;">
                        Help & Feedback
                      </a>
                      <a class="dropdown-item" href="javascript:;">
                        Enable Split View Mode
                      </a>
                      <a class="dropdown-item" href="javascript:;">
                        Keyboard Shortcuts
                      </a>
                      <div class="dropdown-divider"></div>
                      <a class="dropdown-item" href="javascript:;">
                        Sign Out
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default EmailSidebar
