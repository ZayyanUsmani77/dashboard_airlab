import React from 'react'
import { Link } from 'react-router-dom'
import './messages.css'
import Grid from '@mui/material/Grid'
import Container from '@mui/material/Container'
import ArrowDownwardIcon from '@mui/icons-material/ArrowDownward'
import CloseIcon from '@mui/icons-material/Close'
import SyncIcon from '@mui/icons-material/Sync'
import KeyboardArrowLeftIcon from '@mui/icons-material/KeyboardArrowLeft'
import KeyboardArrowRightIcon from '@mui/icons-material/KeyboardArrowRight'
import SearchIcon from '@mui/icons-material/Search'
import NoteIcon from '@mui/icons-material/Note'
import RequestQuoteIcon from '@mui/icons-material/RequestQuote'
const Messages = () => {
  return (
    <div>
      {/* <Grid container>
        <Grid item lg={2.5}></Grid>
        <Grid item lg={9.5} style={{ marginTop: '30px' }}>
          <Grid container style={{ marginBottom: '20px' }}>
            <Grid item lg={0.7} style={{ marginTop: '10px' }}>
              <SyncIcon style={{ color: 'black' }} />
            </Grid>

            <Grid item lg={0.7} style={{ marginTop: '10px' }}>
              <ArrowDownwardIcon style={{ color: 'black' }} />
            </Grid>

            <Grid item lg={0.7} style={{ marginTop: '10px' }}>
              <NoteIcon style={{ color: 'black' }} />
            </Grid>

            <Grid item lg={0.7} style={{ marginTop: '10px' }}>
              <RequestQuoteIcon style={{ color: 'black' }} />
            </Grid>
            <Grid item lg={6} className="search_email">
              <Grid container>
                <Grid item lg={1.3} className="search_border">
                  <SearchIcon style={{ color: 'black', margin: '10px' }} />
                </Grid>
                <Grid item lg={6}>
                  <input
                    type="text"
                    placeholder="Search email"
                    style={{ border: 'none', outline: 'none', paddingTop: '10px' }}
                  />
                </Grid>
              </Grid>
            </Grid>
            <Grid item lg={0.2}></Grid>
            <Grid item lg={1.5} className="text_message">
              <p>1,23 of 3,43</p>
            </Grid>
            <Grid item lg={0.2}></Grid>
            <Grid item lg={0.7} style={{ marginTop: '10px' }}>
              <KeyboardArrowLeftIcon style={{ color: 'black' }} />
            </Grid>
            <Grid></Grid>
            <Grid item lg={0.4} style={{ marginTop: '10px' }}>
              <KeyboardArrowRightIcon style={{ color: 'black' }} />
            </Grid>
          </Grid>

          <Grid container className="message_test">
            <Grid item lg={3} className="test_p">
              <p>Test</p>
            </Grid>
            <Grid item lg={3} className="test_p">
              <p>Test</p>
            </Grid>
            <Grid item lg={3}></Grid>
            <Grid item lg={3}>
              <p style={{ paddingTop: '10px' }}>2023-02-10 98739742</p>
            </Grid>
          </Grid>
          <Grid container className="message_test1">
            <Grid item lg={3} className="test_p">
              <p>Test</p>
            </Grid>
            <Grid item lg={3} className="test_p">
              <p>Test</p>
            </Grid>
            <Grid item lg={3}></Grid>
            <Grid item lg={3}>
              <p style={{ paddingTop: '10px' }}>2023-02-10 98739742</p>
            </Grid>
          </Grid>
          <Grid container>
            <Grid item lg={3}></Grid>
            <Grid iem lg={9} className="new_massage">
              <Grid container className="new_message_text_main">
                <Grid item lg={11.2} className="new_message_text">
                  <p>New Message</p>
                </Grid>
                <Grid item lg={0.8}>
                  <CloseIcon style={{ color: 'white', marginTop: '10px' }} />
                </Grid>
              </Grid>
              <Grid container style={{ margin: '10px' }}>
                <Grid item lg={11.6} className="new_message_to">
                  <input
                    type="text"
                    placeholder="To"
                    style={{ border: 'none', outline: 'none', paddingLeft: '10px' }}
                  />
                </Grid>
              </Grid>
              <Grid container style={{ margin: '10px' }}>
                <Grid item lg={11.6} className="new_message_to">
                  <input
                    type="text"
                    placeholder="Subject"
                    style={{ border: 'none', outline: 'none', paddingLeft: '10px' }}
                  />
                </Grid>
              </Grid>
              <Grid container style={{ margin: '10px' }}>
                <Grid item lg={11.6} className="new_message_to">
                  <textarea
                    type="text"
                    placeholder="Message"
                    style={{
                      border: 'none',
                      outline: 'none',
                      paddingLeft: '10px',
                      width: '100%',
                      height: '250px',
                    }}
                  />
                </Grid>
              </Grid>
            </Grid>
          </Grid>
        </Grid>
      </Grid> */}
      <div className="container">
        {/* <div className="row inbox-wrapper">
          <div className="col-lg-12">
            <div className="card">
              <div className="card-body">
                <div className="row">
                  <div className="col-lg-3 email-aside border-lg-right">
                    <div className="aside-content">
                      <div className="aside-header">
                        <button
                          className="navbar-toggle"
                          data-target=".aside-nav"
                          data-toggle="collapse"
                          type="button"
                        >
                          <span className="icon">
                            <svg
                              xmlns="http://www.w3.org/2000/svg"
                              width={24}
                              height={24}
                              viewBox="0 0 24 24"
                              fill="none"
                              stroke="currentColor"
                              strokeWidth={2}
                              strokeLinecap="round"
                              strokeLinejoin="round"
                              className="feather feather-chevron-down"
                            >
                              <polyline points="6 9 12 15 18 9" />
                            </svg>
                          </span>
                        </button>
                        <span className="title">Mail Service</span>
                        <p className="description">amiahburton@gmail.com</p>
                      </div>
                      <div className="aside-compose">
                        <Link className="btn btn-primary btn-block" to="/compose">
                          Compose Email
                        </Link>
                      </div>
                      <div className="aside-nav collapse">
                        <ul className="nav">
                          <li className="active">
                            <a href="../../../demo_1/pages/email/inbox.html">
                              <span className="icon">
                                <svg
                                  xmlns="http://www.w3.org/2000/svg"
                                  width={24}
                                  height={24}
                                  viewBox="0 0 24 24"
                                  fill="none"
                                  stroke="currentColor"
                                  strokeWidth={2}
                                  strokeLinecap="round"
                                  strokeLinejoin="round"
                                  className="feather feather-inbox"
                                >
                                  <polyline points="22 12 16 12 14 15 10 15 8 12 2 12" />
                                  <path d="M5.45 5.11L2 12v6a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2v-6l-3.45-6.89A2 2 0 0 0 16.76 4H7.24a2 2 0 0 0-1.79 1.11z" />
                                </svg>
                              </span>
                              Inbox
                              <span className="badge badge-danger-muted text-white font-weight-bold float-right">
                                2
                              </span>
                            </a>
                          </li>
                          <li>
                            <a href="#">
                              <span className="icon">
                                <svg
                                  xmlns="http://www.w3.org/2000/svg"
                                  width={24}
                                  height={24}
                                  viewBox="0 0 24 24"
                                  fill="none"
                                  stroke="currentColor"
                                  strokeWidth={2}
                                  strokeLinecap="round"
                                  strokeLinejoin="round"
                                  className="feather feather-mail"
                                >
                                  <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z" />
                                  <polyline points="22,6 12,13 2,6" />
                                </svg>
                              </span>
                              Sent Mail
                            </a>
                          </li>
                          <li>
                            <a href="#">
                              <span className="icon">
                                <svg
                                  xmlns="http://www.w3.org/2000/svg"
                                  width={24}
                                  height={24}
                                  viewBox="0 0 24 24"
                                  fill="none"
                                  stroke="currentColor"
                                  strokeWidth={2}
                                  strokeLinecap="round"
                                  strokeLinejoin="round"
                                  className="feather feather-briefcase"
                                >
                                  <rect x={2} y={7} width={20} height={14} rx={2} ry={2} />
                                  <path d="M16 21V5a2 2 0 0 0-2-2h-4a2 2 0 0 0-2 2v16" />
                                </svg>
                              </span>
                              Important
                              <span className="badge badge-info-muted text-white font-weight-bold float-right">
                                4
                              </span>
                            </a>
                          </li>
                          <li>
                            <a href="#">
                              <span className="icon">
                                <svg
                                  xmlns="http://www.w3.org/2000/svg"
                                  width={24}
                                  height={24}
                                  viewBox="0 0 24 24"
                                  fill="none"
                                  stroke="currentColor"
                                  strokeWidth={2}
                                  strokeLinecap="round"
                                  strokeLinejoin="round"
                                  className="feather feather-file"
                                >
                                  <path d="M13 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V9z" />
                                  <polyline points="13 2 13 9 20 9" />
                                </svg>
                              </span>
                              Drafts
                            </a>
                          </li>
                          <li>
                            <a href="#">
                              <span className="icon">
                                <svg
                                  xmlns="http://www.w3.org/2000/svg"
                                  width={24}
                                  height={24}
                                  viewBox="0 0 24 24"
                                  fill="none"
                                  stroke="currentColor"
                                  strokeWidth={2}
                                  strokeLinecap="round"
                                  strokeLinejoin="round"
                                  className="feather feather-star"
                                >
                                  <polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2" />
                                </svg>
                              </span>
                              Tags
                            </a>
                          </li>
                          <li>
                            <a href="#">
                              <span className="icon">
                                <svg
                                  xmlns="http://www.w3.org/2000/svg"
                                  width={24}
                                  height={24}
                                  viewBox="0 0 24 24"
                                  fill="none"
                                  stroke="currentColor"
                                  strokeWidth={2}
                                  strokeLinecap="round"
                                  strokeLinejoin="round"
                                  className="feather feather-trash"
                                >
                                  <polyline points="3 6 5 6 21 6" />
                                  <path d="M19 6v14a2 2 0 0 1-2 2H7a2 2 0 0 1-2-2V6m3 0V4a2 2 0 0 1 2-2h4a2 2 0 0 1 2 2v2" />
                                </svg>
                              </span>
                              Trash
                            </a>
                          </li>
                        </ul>
                        <span className="title">Labels</span>
                        <ul className="nav nav-pills nav-stacked">
                          <li>
                            <a href="#">
                              <svg
                                xmlns="http://www.w3.org/2000/svg"
                                width={24}
                                height={24}
                                viewBox="0 0 24 24"
                                fill="none"
                                stroke="currentColor"
                                strokeWidth={2}
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                className="feather feather-tag text-warning"
                              >
                                <path d="M20.59 13.41l-7.17 7.17a2 2 0 0 1-2.83 0L2 12V2h10l8.59 8.59a2 2 0 0 1 0 2.82z" />
                                <line x1={7} y1={7} x2="7.01" y2={7} />
                              </svg>{' '}
                              Important{' '}
                            </a>
                          </li>
                          <li className="active">
                            <a href="#">
                              <svg
                                xmlns="http://www.w3.org/2000/svg"
                                width={24}
                                height={24}
                                viewBox="0 0 24 24"
                                fill="none"
                                stroke="currentColor"
                                strokeWidth={2}
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                className="feather feather-tag text-primary"
                              >
                                <path d="M20.59 13.41l-7.17 7.17a2 2 0 0 1-2.83 0L2 12V2h10l8.59 8.59a2 2 0 0 1 0 2.82z" />
                                <line x1={7} y1={7} x2="7.01" y2={7} />
                              </svg>{' '}
                              Business{' '}
                            </a>
                          </li>
                          <li>
                            <a href="#">
                              {' '}
                              <svg
                                xmlns="http://www.w3.org/2000/svg"
                                width={24}
                                height={24}
                                viewBox="0 0 24 24"
                                fill="none"
                                stroke="currentColor"
                                strokeWidth={2}
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                className="feather feather-tag text-info"
                              >
                                <path d="M20.59 13.41l-7.17 7.17a2 2 0 0 1-2.83 0L2 12V2h10l8.59 8.59a2 2 0 0 1 0 2.82z" />
                                <line x1={7} y1={7} x2="7.01" y2={7} />
                              </svg>{' '}
                              Inspiration{' '}
                            </a>
                          </li>
                        </ul>
                      </div>
                    </div>
                  </div>
                  <div className="col-lg-9 email-content">
                    <div className="email-head">
                      <div className="email-head-subject">
                        <div className="title d-flex align-items-center justify-content-between">
                          <div className="d-flex align-items-center">
                            <a className="active" href="#">
                              <span className="icon">
                                <svg
                                  xmlns="http://www.w3.org/2000/svg"
                                  width={24}
                                  height={24}
                                  viewBox="0 0 24 24"
                                  fill="none"
                                  stroke="currentColor"
                                  strokeWidth={2}
                                  strokeLinecap="round"
                                  strokeLinejoin="round"
                                  className="feather feather-star text-primary-muted"
                                >
                                  <polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2" />
                                </svg>
                              </span>
                            </a>
                            <span>New Project</span>
                          </div>
                          <div className="icons">
                            <a href="#" className="icon">
                              <svg
                                xmlns="http://www.w3.org/2000/svg"
                                width={24}
                                height={24}
                                viewBox="0 0 24 24"
                                fill="none"
                                stroke="currentColor"
                                strokeWidth={2}
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                className="feather feather-share  hover-primary-muted"
                                data-toggle="tooltip"
                                title
                                data-original-title="Forward"
                              >
                                <path d="M4 12v8a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2v-8" />
                                <polyline points="16 6 12 2 8 6" />
                                <line x1={12} y1={2} x2={12} y2={15} />
                              </svg>
                            </a>
                            <a href="#" className="icon">
                              <svg
                                xmlns="http://www.w3.org/2000/svg"
                                width={24}
                                height={24}
                                viewBox="0 0 24 24"
                                fill="none"
                                stroke="currentColor"
                                strokeWidth={2}
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                className="feather feather-printer "
                                data-toggle="tooltip"
                                title
                                data-original-title="Print"
                              >
                                <polyline points="6 9 6 2 18 2 18 9" />
                                <path d="M6 18H4a2 2 0 0 1-2-2v-5a2 2 0 0 1 2-2h16a2 2 0 0 1 2 2v5a2 2 0 0 1-2 2h-2" />
                                <rect x={6} y={14} width={12} height={8} />
                              </svg>
                            </a>
                            <a href="#" className="icon">
                              <svg
                                xmlns="http://www.w3.org/2000/svg"
                                width={24}
                                height={24}
                                viewBox="0 0 24 24"
                                fill="none"
                                stroke="currentColor"
                                strokeWidth={2}
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                className="feather feather-trash "
                                data-toggle="tooltip"
                                title
                                data-original-title="Delete"
                              >
                                <polyline points="3 6 5 6 21 6" />
                                <path d="M19 6v14a2 2 0 0 1-2 2H7a2 2 0 0 1-2-2V6m3 0V4a2 2 0 0 1 2-2h4a2 2 0 0 1 2 2v2" />
                              </svg>
                            </a>
                          </div>
                        </div>
                      </div>
                      <div className="email-head-sender d-flex align-items-center justify-content-between flex-wrap">
                        <div className="d-flex align-items-center">
                          <div className="avatar">
                            <img
                              src="https://bootdey.com/img/Content/avatar/avatar1.png"
                              alt="Avatar"
                              className="rounded-circle user-avatar-md"
                            />
                          </div>
                          <div className="sender d-flex align-items-center">
                            <a href="#">John Doe</a> <span>to</span>
                            <a href="#">me</a>
                            <div className="actions dropdown">
                              <a className="icon" href="#" data-toggle="dropdown">
                                <svg
                                  xmlns="http://www.w3.org/2000/svg"
                                  width={24}
                                  height={24}
                                  viewBox="0 0 24 24"
                                  fill="none"
                                  stroke="currentColor"
                                  strokeWidth={2}
                                  strokeLinecap="round"
                                  strokeLinejoin="round"
                                  className="feather feather-chevron-down"
                                >
                                  <polyline points="6 9 12 15 18 9" />
                                </svg>
                              </a>
                              <div className="dropdown-menu" role="menu">
                                <a className="dropdown-item" href="#">
                                  Mark as read
                                </a>
                                <a className="dropdown-item" href="#">
                                  Mark as unread
                                </a>
                                <a className="dropdown-item" href="#">
                                  Spam
                                </a>
                                <div className="dropdown-divider" />
                                <a className="dropdown-item text-danger" href="#">
                                  Delete
                                </a>
                              </div>
                            </div>
                          </div>
                        </div>
                        <div className="date">Nov 20, 11:20</div>
                      </div>
                    </div>
                    <div className="email-body">
                      <p>Hello,</p>
                      <br />
                      <p>
                        Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium
                        doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore
                        veritatis et quasi architecto beatae vitae dicta sunt explicabo. Nemo enim
                        ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia
                        consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt. Neque
                        porro quisquam est, qui dolorem ipsum quia dolor sit amet, consectetur,
                        adipisci velit, sed quia non numquam eius modi tempora incidunt ut labore et
                        dolore magnam aliquam quaerat voluptatem.
                      </p>
                      <br />
                      <p>
                        Quisque rutrum. Aenean imperdiet. Etiam ultricies nisi vel augue. Curabitur
                        ullamcorper ultricies nisi. Nam eget dui. Etiam rhoncus. Maecenas tempus,
                        tellus eget condimentum rhoncus, sem quam semper libero, sit amet adipiscing
                        sem neque sed ipsum. Nam quam nunc, blandit vel, luctus pulvinar, hendrerit
                        id, lorem. Maecenas nec odio et ante tincidunt tempus. Donec vitae sapien ut
                        libero venenatis faucibus. Nullam quis ante. Etiam sit amet orci eget eros
                        faucibus tincidunt. Duis leo. Sed fringilla mauris sit amet nibh. Donec
                        sodales sagittis magna.
                      </p>
                      <br />
                      <p>
                        <strong>Regards</strong>,<br /> John Doe
                      </p>
                    </div>
                    <div className="email-attachments">
                      <div className="title">
                        Attachments <span>(3 files, 12,44 KB)</span>
                      </div>
                      <ul>
                        <li>
                          <a href="#">
                            <svg
                              xmlns="http://www.w3.org/2000/svg"
                              width={24}
                              height={24}
                              viewBox="0 0 24 24"
                              fill="none"
                              stroke="currentColor"
                              strokeWidth={2}
                              strokeLinecap="round"
                              strokeLinejoin="round"
                              className="feather feather-file"
                            >
                              <path d="M13 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V9z" />
                              <polyline points="13 2 13 9 20 9" />
                            </svg>{' '}
                            Reference.zip <span className="text-muted tx-11">(5.10 MB)</span>
                          </a>
                        </li>
                        <li>
                          <a href="#">
                            <svg
                              xmlns="http://www.w3.org/2000/svg"
                              width={24}
                              height={24}
                              viewBox="0 0 24 24"
                              fill="none"
                              stroke="currentColor"
                              strokeWidth={2}
                              strokeLinecap="round"
                              strokeLinejoin="round"
                              className="feather feather-file"
                            >
                              <path d="M13 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V9z" />
                              <polyline points="13 2 13 9 20 9" />
                            </svg>{' '}
                            Instructions.zip <span className="text-muted tx-11">(3.15 MB)</span>
                          </a>
                        </li>
                        <li>
                          <a href="#">
                            <svg
                              xmlns="http://www.w3.org/2000/svg"
                              width={24}
                              height={24}
                              viewBox="0 0 24 24"
                              fill="none"
                              stroke="currentColor"
                              strokeWidth={2}
                              strokeLinecap="round"
                              strokeLinejoin="round"
                              className="feather feather-file"
                            >
                              <path d="M13 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V9z" />
                              <polyline points="13 2 13 9 20 9" />
                            </svg>{' '}
                            Team-list.pdf <span className="text-muted tx-11">(4.5 MB)</span>
                          </a>
                        </li>
                      </ul>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div> */}
      </div>
      <div className="container py-5">
        <div className="row">
          <div className="col-md-6 col-lg-5 col-xl-4 mb-4 mb-md-0">
            <h5 className="font-weight-bold mb-3 text-center text-lg-start">Member</h5>
            <div className="card">
              <div className="card-body">
                <ul className="list-unstyled mb-0">
                  <li className="p-2 border-bottom" style={{ backgroundColor: '#eee' }}>
                    <a href="#!" className="d-flex justify-content-between">
                      <div className="d-flex flex-row">
                        <img
                          src="https://mdbcdn.b-cdn.net/img/Photos/Avatars/avatar-8.webp"
                          alt="avatar"
                          className="rounded-circle d-flex align-self-center me-3 shadow-1-strong"
                          width={60}
                        />
                        <div className="pt-1">
                          <p className="fw-bold mb-0">John Doe</p>
                          <p className="small ">Hello, Are you there?</p>
                        </div>
                      </div>
                      <div className="pt-1">
                        <p className="small  mb-1">Just now</p>
                        <span className="badge bg-danger float-end">1</span>
                      </div>
                    </a>
                  </li>
                  <li className="p-2 border-bottom">
                    <a href="#!" className="d-flex justify-content-between">
                      <div className="d-flex flex-row">
                        <img
                          src="https://mdbcdn.b-cdn.net/img/Photos/Avatars/avatar-1.webp"
                          alt="avatar"
                          className="rounded-circle d-flex align-self-center me-3 shadow-1-strong"
                          width={60}
                        />
                        <div className="pt-1">
                          <p className="fw-bold mb-0">Danny Smith</p>
                          <p className="small ">Lorem ipsum dolor sit.</p>
                        </div>
                      </div>
                      <div className="pt-1">
                        <p className="small  mb-1">5 mins ago</p>
                      </div>
                    </a>
                  </li>
                  <li className="p-2 border-bottom">
                    <a href="#!" className="d-flex justify-content-between">
                      <div className="d-flex flex-row">
                        <img
                          src="https://mdbcdn.b-cdn.net/img/Photos/Avatars/avatar-2.webp"
                          alt="avatar"
                          className="rounded-circle d-flex align-self-center me-3 shadow-1-strong"
                          width={60}
                        />
                        <div className="pt-1">
                          <p className="fw-bold mb-0">Alex Steward</p>
                          <p className="small ">Lorem ipsum dolor sit.</p>
                        </div>
                      </div>
                      <div className="pt-1">
                        <p className="small  mb-1">Yesterday</p>
                      </div>
                    </a>
                  </li>
                  <li className="p-2 border-bottom">
                    <a href="#!" className="d-flex justify-content-between">
                      <div className="d-flex flex-row">
                        <img
                          src="https://mdbcdn.b-cdn.net/img/Photos/Avatars/avatar-3.webp"
                          alt="avatar"
                          className="rounded-circle d-flex align-self-center me-3 shadow-1-strong"
                          width={60}
                        />
                        <div className="pt-1">
                          <p className="fw-bold mb-0">Ashley Olsen</p>
                          <p className="small ">Lorem ipsum dolor sit.</p>
                        </div>
                      </div>
                      <div className="pt-1">
                        <p className="small  mb-1">Yesterday</p>
                      </div>
                    </a>
                  </li>
                  <li className="p-2 border-bottom">
                    <a href="#!" className="d-flex justify-content-between">
                      <div className="d-flex flex-row">
                        <img
                          src="https://mdbcdn.b-cdn.net/img/Photos/Avatars/avatar-4.webp"
                          alt="avatar"
                          className="rounded-circle d-flex align-self-center me-3 shadow-1-strong"
                          width={60}
                        />
                        <div className="pt-1">
                          <p className="fw-bold mb-0">Kate Moss</p>
                          <p className="small ">Lorem ipsum dolor sit.</p>
                        </div>
                      </div>
                      <div className="pt-1">
                        <p className="small  mb-1">Yesterday</p>
                      </div>
                    </a>
                  </li>
                  <li className="p-2 border-bottom">
                    <a href="#!" className="d-flex justify-content-between">
                      <div className="d-flex flex-row">
                        <img
                          src="https://mdbcdn.b-cdn.net/img/Photos/Avatars/avatar-5.webp"
                          alt="avatar"
                          className="rounded-circle d-flex align-self-center me-3 shadow-1-strong"
                          width={60}
                        />
                        <div className="pt-1">
                          <p className="fw-bold mb-0">Lara Croft</p>
                          <p className="small ">Lorem ipsum dolor sit.</p>
                        </div>
                      </div>
                      <div className="pt-1">
                        <p className="small  mb-1">Yesterday</p>
                      </div>
                    </a>
                  </li>
                  <li className="p-2">
                    <a href="#!" className="d-flex justify-content-between">
                      <div className="d-flex flex-row">
                        <img
                          src="https://mdbcdn.b-cdn.net/img/Photos/Avatars/avatar-6.webp"
                          alt="avatar"
                          className="rounded-circle d-flex align-self-center me-3 shadow-1-strong"
                          width={60}
                        />
                        <div className="pt-1">
                          <p className="fw-bold mb-0">Brad Pitt</p>
                          <p className="small ">Lorem ipsum dolor sit.</p>
                        </div>
                      </div>
                      <div className="pt-1">
                        <p className="small  mb-1">5 mins ago</p>
                        <span className="text-muted float-end">
                          <i className="fas fa-check" aria-hidden="true" />
                        </span>
                      </div>
                    </a>
                  </li>
                </ul>
              </div>
            </div>
          </div>
          <div className="col-md-6 col-lg-7 col-xl-8">
            <ul className="list-unstyled">
              <li className="d-flex justify-content-between mb-4">
                <img
                  src="https://mdbcdn.b-cdn.net/img/Photos/Avatars/avatar-6.webp"
                  alt="avatar"
                  className="rounded-circle d-flex align-self-start me-3 shadow-1-strong"
                  width={60}
                />
                <div className="card">
                  <div className="card-header d-flex justify-content-between p-3">
                    <p className="fw-bold mb-0">Brad Pitt</p>
                    <p className="text-muted small mb-0">
                      <i className="far fa-clock" /> 12 mins ago
                    </p>
                  </div>
                  <div className="card-body">
                    <p className="mb-0">
                      Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor
                      incididunt ut labore et dolore magna aliqua.
                    </p>
                  </div>
                </div>
              </li>
              <li className="d-flex justify-content-between mb-4">
                <div className="card w-100">
                  <div className="card-header d-flex justify-content-between p-3">
                    <p className="fw-bold mb-0">Lara Croft</p>
                    <p className="text-muted small mb-0">
                      <i className="far fa-clock" /> 13 mins ago
                    </p>
                  </div>
                  <div className="card-body">
                    <p className="mb-0">
                      Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium
                      doloremque laudantium.
                    </p>
                  </div>
                </div>
                <img
                  src="https://mdbcdn.b-cdn.net/img/Photos/Avatars/avatar-5.webp"
                  alt="avatar"
                  className="rounded-circle d-flex align-self-start ms-3 shadow-1-strong"
                  width={60}
                />
              </li>
              <li className="d-flex justify-content-between mb-4">
                <img
                  src="https://mdbcdn.b-cdn.net/img/Photos/Avatars/avatar-6.webp"
                  alt="avatar"
                  className="rounded-circle d-flex align-self-start me-3 shadow-1-strong"
                  width={60}
                />
                <div className="card">
                  <div className="card-header d-flex justify-content-between p-3">
                    <p className="fw-bold mb-0">Brad Pitt</p>
                    <p className="text-muted small mb-0">
                      <i className="far fa-clock" /> 10 mins ago
                    </p>
                  </div>
                  <div className="card-body">
                    <p className="mb-0">
                      Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor
                      incididunt ut labore et dolore magna aliqua.
                    </p>
                  </div>
                </div>
              </li>
              <li className="bg-white mb-3">
                <div className="form-outline">
                  <textarea
                    className="form-control"
                    id="textAreaExample2"
                    rows={4}
                    defaultValue={''}
                  />
                  <label className="form-label" htmlFor="textAreaExample2">
                    Message
                  </label>
                </div>
              </li>
              <button type="button" className="btn btn-info btn-rounded float-end">
                Send
              </button>
            </ul>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Messages
