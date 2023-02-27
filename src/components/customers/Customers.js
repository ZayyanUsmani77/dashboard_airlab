import React from 'react'
import './customers.css'
import { useEffect, useRef, useState } from 'react'
import axios from 'axios'

const Customers = () => {
  const [bookings, setbooking] = useState([])

  let bookingsList = []

  let user_email = 'zayyanusmani6@gmail.com'
  let labId = 0

  const getLabs = () => {
    axios
      .get('http://3.139.66.50:8000/api/lab/')
      .then((response) => {
        // console.log('Arhi hai lab')
        const data = response.data
        // console.log(`GET labs`, data)
        for (let i = 0; i < data.length; i++) {
          // console.log('data[i].email', data[i].email)
          if (data[i].email == user_email) {
            // console.log('User ki email', data[i].email)
            // console.log('User ki lab id', data[i].id)
            labId = data[i].id
          }
        }
        //  console.log("certification: ",labs[0].certification);
        //  console.log("lab_description: ",labs[0].lab_description);
        //  console.log("otherservice: ",labs[0].otherservice);
        //  console.log("Rating: ", labs[0].rating);
      })
      .catch((error) => console.error('Nhi arhi labasd', error))
  }

  const getBookLab = () => {
    axios
      .get('http://3.139.66.50:8000/api/booklab/')
      .then((response) => {
        console.log('Arha hai bookings')
        const data = response.data
        console.log(`GET bookings `, data)
        for (let i = 0; i < data.length; i++) {
          console.log('data[i].lab_id', data[i].lab_id)
          console.log('labId', labId)
          if (data[i].lab_id == labId) {
            console.log('Ye lab sey user ki lab id', labId)
            const parsedBookings = {
              submitter_email: data[i].submitter_email,
              lab_id: data[i].lab_id,
              service_status: data[i].service_status,
              sender_contactperson: data[i].sender_contactperson,
              submitter_companyname: data[i].submitter_companyname,
            }
            bookingsList.push(parsedBookings)
          }
          setbooking(bookingsList)
        }
      })
      .catch((error) => console.error('Nhi arhi bookinglabs', error))
  }
  function callFunctions() {
    getLabs()
    getBookLab()
  }

  useEffect(() => {
    callFunctions()
  }, [])

  return (
    <div style={{ color: 'black' }}>
      <>
        <link
          href="https://maxcdn.bootstrapcdn.com/font-awesome/4.7.0/css/font-awesome.min.css"
          rel="stylesheet"
        />
        <div className="container">
          <div className="row">
            {bookings.map((p, index) => (
              <div key={index} className="col-md-6">
                <div className="card m-b-30">
                  <div className="card-body">
                    <div className="media">
                      <img
                        className="d-flex mr-3 rounded-circle img-thumbnail thumb-lg"
                        src="https://bootdey.com/img/Content/avatar/avatar2.png"
                        alt="Generic placeholder image"
                      />
                      <div className="media-body ">
                        <h5 className="mt-0 font-18 mb-1">{index.sender_contactperson}</h5>
                        <p className="  font-14">Webdeveloper</p>
                        <ul className="social-links list-inline mb-0">
                          <li className="list-inline-item">
                            <a
                              title=""
                              data-placement="top"
                              data-toggle="tooltip"
                              className="tooltips"
                              href=""
                              data-original-title="Facebook"
                            >
                              <i className="fa fa-facebook" />
                            </a>
                          </li>
                          <li className="list-inline-item">
                            <a
                              title=""
                              data-placement="top"
                              data-toggle="tooltip"
                              className="tooltips"
                              href=""
                              data-original-title="Twitter"
                            >
                              <i className="fa fa-twitter" />
                            </a>
                          </li>
                          <li className="list-inline-item">
                            <a
                              title=""
                              data-placement="top"
                              data-toggle="tooltip"
                              className="tooltips"
                              href=""
                              data-original-title={1234567890}
                            >
                              <i className="fa fa-phone" />
                            </a>
                          </li>
                          <li className="list-inline-item">
                            <a
                              title=""
                              data-placement="top"
                              data-toggle="tooltip"
                              className="tooltips"
                              href=""
                              data-original-title="@skypename"
                            >
                              <i className="fa fa-skype" />
                            </a>
                          </li>
                          <li className="list-inline-item">
                            <a
                              title=""
                              data-placement="top"
                              data-toggle="tooltip"
                              className="tooltips"
                              href=""
                              data-original-title="Email"
                            >
                              <i className="fa fa-envelope-o" />
                            </a>
                          </li>
                          <>
                            {/* Example single danger button */}
                            <div className="btn-group" style={{ marginTop: ' 10px ' }}>
                              <button
                                type="button"
                                className="btn btn-secondary dropdown-toggle"
                                data-bs-toggle="dropdown"
                                aria-expanded="false"
                              >
                                Status
                              </button>
                              <ul className="dropdown-menu">
                                <li>
                                  <a className="dropdown-item" href="#">
                                    Progressing
                                  </a>
                                </li>
                                <li>
                                  <a className="dropdown-item" href="#">
                                    Delivered
                                  </a>
                                </li>
                                <li>
                                  <a className="dropdown-item" href="#">
                                    Pending
                                  </a>
                                </li>
                                <li>
                                  <a className="dropdown-item" href="#">
                                    Cancelled
                                  </a>
                                </li>
                              </ul>
                            </div>
                          </>
                        </ul>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            ))}

            {/* end col */}
          </div>
        </div>
      </>
    </div>
  )
}

export default Customers
