import React from 'react'
import { Link } from 'react-router-dom'
import './composeMail.css'
const ComposeMail = () => {
  return (
    <div>
      <div>
        {/* <link href="https://maxcdn.bootstrapcdn.com/font-awesome/4.3.0/css/font-awesome.min.css" rel="stylesheet" /> */}
        <br />
        <br />
        <div className="container bootdey">
          <div className="email-app">
            {/* <nav>
          <a href="#" className="btn btn-danger btn-block">New Email</a>
          <ul className="nav">
            <li className="nav-item">
              <a className="nav-link" href="#"><i className="fa fa-inbox" /> Inbox <span className="badge badge-danger">4</span></a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="#"><i className="fa fa-star" /> Stared</a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="#"><i className="fa fa-rocket" /> Sent</a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="#"><i className="fa fa-trash-o" /> Trash</a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="#"><i className="fa fa-bookmark" /> Important</a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="#"><i className="fa fa-inbox" /> Inbox <span className="badge badge-danger">4</span></a>
            </li>
          </ul>
        </nav> */}
            <main>
              <p className="text-center">New Message</p>
              <form>
                <div className="form-row mb-3">
                  <label htmlFor="to" className="col-2 col-sm-1 col-form-label">
                    To:
                  </label>
                  <div className="col-10 col-sm-11">
                    <input type="email" className="form-control" id="to" placeholder="Type email" />
                  </div>
                </div>
                <div className="form-row mb-3">
                  <label htmlFor="cc" className="col-2 col-sm-1 col-form-label">
                    CC:
                  </label>
                  <div className="col-10 col-sm-11">
                    <input type="email" className="form-control" id="cc" placeholder="Type email" />
                  </div>
                </div>
                <div className="form-row mb-3">
                  <label htmlFor="bcc" className="col-2 col-sm-1 col-form-label">
                    BCC:
                  </label>
                  <div className="col-10 col-sm-11">
                    <input
                      type="email"
                      className="form-control"
                      id="bcc"
                      placeholder="Type email"
                    />
                  </div>
                </div>
              </form>
              <div className="row">
                <div className="col-sm-11 ml-auto">
                  <div className="toolbar" role="toolbar">
                    <div className="btn-group">
                      <button type="button" className="btn btn-light">
                        <span className="fa fa-bold" />
                      </button>
                      <button type="button" className="btn btn-light">
                        <span className="fa fa-italic" />
                      </button>
                      <button type="button" className="btn btn-light">
                        <span className="fa fa-underline" />
                      </button>
                    </div>
                    <div className="btn-group">
                      <button type="button" className="btn btn-light">
                        <span className="fa fa-align-left" />
                      </button>
                      <button type="button" className="btn btn-light">
                        <span className="fa fa-align-right" />
                      </button>
                      <button type="button" className="btn btn-light">
                        <span className="fa fa-align-center" />
                      </button>
                      <button type="button" className="btn btn-light">
                        <span className="fa fa-align-justify" />
                      </button>
                    </div>
                    <div className="btn-group">
                      <button type="button" className="btn btn-light">
                        <span className="fa fa-indent" />
                      </button>
                      <button type="button" className="btn btn-light">
                        <span className="fa fa-outdent" />
                      </button>
                    </div>
                    <div className="btn-group">
                      <button type="button" className="btn btn-light">
                        <span className="fa fa-list-ul" />
                      </button>
                      <button type="button" className="btn btn-light">
                        <span className="fa fa-list-ol" />
                      </button>
                    </div>
                    <button type="button" className="btn btn-light">
                      <span className="fa fa-trash-o" />
                    </button>
                    <button type="button" className="btn btn-light">
                      <span className="fa fa-paperclip" />
                    </button>
                    <div className="btn-group">
                      <button
                        type="button"
                        className="btn btn-light dropdown-toggle"
                        data-toggle="dropdown"
                      >
                        <span className="fa fa-tags" />
                        <span className="caret" />
                      </button>
                      <div className="dropdown-menu">
                        <a className="dropdown-item" href="#">
                          add label <span className="badge badge-danger"> Home</span>
                        </a>
                        <a className="dropdown-item" href="#">
                          add label <span className="badge badge-info"> Job</span>
                        </a>
                        <a className="dropdown-item" href="#">
                          add label <span className="badge badge-success"> Clients</span>
                        </a>
                        <a className="dropdown-item" href="#">
                          add label <span className="badge badge-warning"> News</span>
                        </a>
                      </div>
                    </div>
                  </div>
                  <div className="form-group mt-4">
                    <textarea
                      className="form-control"
                      id="message"
                      name="body"
                      rows={12}
                      placeholder="Click here to reply"
                      defaultValue={''}
                    />
                  </div>
                  <div className="form-group">
                    <button type="submit" className="btn btn-success">
                      Send
                    </button>
                    <button type="submit" className="btn btn-light">
                      Draft
                    </button>
                    <Link to="/messages">
                      {' '}
                      <button type="submit" className="btn btn-danger">
                        Discard
                      </button>{' '}
                    </Link>
                  </div>
                </div>
              </div>
            </main>
          </div>
        </div>
      </div>
    </div>
  )
}

export default ComposeMail
