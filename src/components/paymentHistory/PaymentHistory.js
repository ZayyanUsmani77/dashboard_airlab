import React from 'react'
import './paymentHistory.css'
import axios from 'axios'
import { useEffect, useRef, useState } from 'react'

const PaymentHistory = () => {
  const [bookedLabs, setBookedLabs] = useState([])

  const bookings = []

  const getLabs = () => {
    axios
      .get('http://3.139.66.50:8000/api/booklab/')
      .then((response) => {
        // console.log('Arhi hai lab')
        const data = response.data
        // console.log(`GET users`, data)

        for (let i = 0; i < data.length; i++) {
          if (data[i].lab_visibility == 'Delivered') {
            console.log('These are the paid labs', data[i])
            const parsedBookings = {
            sender_contactperson: data[i].sender_contactperson,
            service_status: data[i].service_status,
            submitter_country: data[i].submitter_country,
            submitter_companyname: data[i].submitter_companyname,
            startdate: data[i].startdate,
            enddate: data[i].enddate,
            submitter_email: data[i].submitter_email,
            test_name: data[i].test_name,
            }

            bookings.push(parsedBookings)
          }
        }
        setBookedLabs(bookings)
      })
      .catch((error) => console.error('Nhi arhi lab', error))
  }

  // uncomment this function
  // getLabs()

  return (
    <div style={{ color: 'black' }}>
      <div className="container">
        <div className="container-fluid p-0">
          <div className="row">
            <div className="col-xl-8">
              <div className="card">
                <div className="card-header pb-0">
                  <div className="card-actions float-right">
                    <div className="dropdown show">
                      <a href="#" data-toggle="dropdown" data-display="static">
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
                          className="feather feather-more-horizontal align-middle"
                        >
                          <circle cx={12} cy={12} r={1} />
                          <circle cx={19} cy={12} r={1} />
                          <circle cx={5} cy={12} r={1} />
                        </svg>
                      </a>
                      <div className="dropdown-menu dropdown-menu-right">
                        <a className="dropdown-item" href="#">
                          Action
                        </a>
                        <a className="dropdown-item" href="#">
                          Another action
                        </a>
                        <a className="dropdown-item" href="#">
                          Something else here
                        </a>
                      </div>
                    </div>
                  </div>
                  <h5 className="card-title mb-0">Payment History</h5>
                </div>
                <div className="card-body">
                  <table className="table table-striped" style={{ width: '100%' }}>
                    <thead>
                      <tr>
                        <th>#</th>
                        <th>Name</th>
                        <th>Company</th>
                        <th>Email</th>
                        <th>Payment Method</th>
                      </tr>
                    </thead>
                    <tbody>
                      {bookedLabs.map((p, index) => (
                        <div key={index}>
                          <tr>
                            <td>
                              <img
                                src="https://bootdey.com/img/Content/avatar/avatar1.png"
                                width={32}
                                height={32}
                                className="rounded-circle my-n1"
                                alt="Avatar"
                              />
                            </td>
                            <td>{index.sender_contactperson}</td>
                            <td>{index.submitter_companyname}</td>
                            <td>{index.submitter_email}</td>
                            <td>
                              { index.service_status == "Pending" ?
                              <span className="badge bg-danger">Pending</span>: null }

                                { index.service_status == "Progressing" ?
                              <span className="badge bg-danger">Progressing</span>: null }
                                
                                { index.service_status == "Delivered" ?
                              <span className="badge bg-danger">Delivered</span>: null }
                              
                                { index.service_status == "Cancelled" ?
                              <span className="badge bg-danger">Cancelled</span>: null }
          
                            </td>
                          </tr>
                        </div>
                      ))}
                    </tbody>
                  </table>
                </div>
              </div>
            </div>

            {/* <div className="col-xl-4">
              <div className="card">
                <div className="card-header">
                  {/* <div className="card-actions float-right">
                    <div className="dropdown show">
                      <a href="#" data-toggle="dropdown" data-display="static">
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
                          className="feather feather-more-horizontal align-middle"
                        >
                          <circle cx={12} cy={12} r={1} />
                          <circle cx={19} cy={12} r={1} />
                          <circle cx={5} cy={12} r={1} />
                        </svg>
                      </a>
                      <div className="dropdown-menu dropdown-menu-right">
                        <a className="dropdown-item" href="#">
                          Action
                        </a>
                        <a className="dropdown-item" href="#">
                          Another action
                        </a>
                        <a className="dropdown-item" href="#">
                          Something else here
                        </a>
                      </div>
                    </div>
                  </div> 
                  <h5 className="card-title mb-0">Angelica Ramos</h5>
                </div>
                <div className="card-body">
                  <div className="row g-0">
                    <div className="col-sm-3 col-xl-12 col-xxl-3 text-center">
                      <img
                        src="https://bootdey.com/img/Content/avatar/avatar3.png"
                        width={64}
                        height={64}
                        className="rounded-circle mt-2"
                        alt="Angelica Ramos"
                      />
                    </div>
                    <div className="col-sm-9 col-xl-12 col-xxl-9">
                      <strong>Booking details</strong>
                      <p>
                        Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod
                        tempor incididunt ut labore et dolore magna aliqua.
                      </p>
                    </div>
                  </div>
                  <table className="table table-sm mt-2 mb-4">
                    <tbody>
                      <tr>
                        <th>Name</th>
                        <td>Angelica Ramos</td>
                      </tr>
                      <tr>
                        <th>Company</th>
                        <td>The Wiz</td>
                      </tr>
                      <tr>
                        <th>Email</th>
                        <td>angelica@ramos.com</td>
                      </tr>
                      <tr>
                        <th>Phone</th>
                        <td>+1234123123123</td>
                      </tr>
                      <tr>
                        <th>Status</th>
                        <td>
                          <span className="badge bg-success">Active</span>
                        </td>
                      </tr>
                    </tbody>
                  </table>

                   <strong>Activity</strong>
                  <ul className="timeline mt-2 mb-0">
                    <li className="timeline-item">
                      <strong>Signed out</strong>
                      <span className="float-right   text-sm">30m ago</span>
                      <p>Nam pretium turpis et arcu. Duis arcu tortor, suscipit...</p>
                    </li>
                    <li className="timeline-item">
                      <strong>Created invoice #1204</strong>
                      <span className="float-right   text-sm">2h ago</span>
                      <p>Sed aliquam ultrices mauris. Integer ante arcu...</p>
                    </li>
                    <li className="timeline-item">
                      <strong>Discarded invoice #1147</strong>
                      <span className="float-right   text-sm">3h ago</span>
                      <p>Nam pretium turpis et arcu. Duis arcu tortor, suscipit...</p>
                    </li>
                    <li className="timeline-item">
                      <strong>Signed in</strong>
                      <span className="float-right   text-sm">3h ago</span>
                      <p>Curabitur ligula sapien, tincidunt non, euismod vitae...</p>
                    </li>
                    <li className="timeline-item">
                      <strong>Signed up</strong>
                      <span className="float-right   text-sm">2d ago</span>
                      <p>Sed aliquam ultrices mauris. Integer ante arcu...</p>
                    </li>
                  </ul>
                </div>
              </div>
            </div> */}
          </div>
        </div>
      </div>
    </div>
  )
}

export default PaymentHistory
