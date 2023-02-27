import React from 'react'
import './orders.css'
import axios from 'axios'
import { useEffect, useRef, useState } from 'react'

const Orders = () => {
  const [bookedLabs, setBookedLabs] = useState([])
  const [noOfOrders, setNoOfOrders] = useState()

  const bookings = []

  const getLabs = () => {
    axios
      .get('http://3.139.66.50:8000/api/booklab/')
      .then((response) => {
        // console.log('Arhi hai lab')
        const data = response.data
        // console.log(`GET users`, data)
        setNoOfOrders(data.length)
        for (let i = 0; i < data.length; i++) {
          console.log('Ye booked lab', data[i])
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
        setBookedLabs(bookings)
      })
      .catch((error) => console.error('Nhi arhi lab', error))
  }

  // uncomment this function
  getLabs()

  return (
    <div style={{ color: 'black' }}>
      <link
        rel="stylesheet"
        href="https://cdnjs.cloudflare.com/ajax/libs/boxicons/2.1.0/css/boxicons.min.css"
        integrity="sha512-pVCM5+SN2+qwj36KonHToF2p1oIvoU3bsqxphdOIWMYmgr4ZqD3t5DjKvvetKhXGc/ZG5REYTT6ltKfExEei/Q=="
        crossOrigin="anonymous"
        referrerPolicy="no-referrer"
      />
      <link
        rel="stylesheet"
        href="https://cdnjs.cloudflare.com/ajax/libs/MaterialDesign-Webfont/5.3.45/css/materialdesignicons.css"
        integrity="sha256-NAxhqDvtY0l4xn+YVa6WjAcmd94NNfttjNsDmNatFVc="
        crossOrigin="anonymous"
      />
      <div className="container">
        <div className="row align-items-center">
          <div className="col-md-6">
            <div className="mb-3">
              <h5 className="card-title">
                Order List <span className="  fw-normal ms-2">{noOfOrders}</span>
              </h5>
            </div>
          </div>
          <div className="col-md-6">
            <div className="d-flex flex-wrap align-items-center justify-content-end gap-2 mb-3">
              <div>
                <ul className="nav nav-pills">
                  <li className="nav-item">
                    <a
                      aria-current="page"
                      href="#"
                      className="router-link-active router-link-exact-active nav-link active"
                      data-bs-toggle="tooltip"
                      data-bs-placement="top"
                      title=""
                      data-bs-original-title="List"
                      aria-label="List"
                    >
                      <i className="bx bx-list-ul" />
                    </a>
                  </li>
                  <li className="nav-item">
                    <a
                      href="#"
                      className="nav-link"
                      data-bs-toggle="tooltip"
                      data-bs-placement="top"
                      title=""
                      data-bs-original-title="Grid"
                      aria-label="Grid"
                    >
                      <i className="bx bx-grid-alt" />
                    </a>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
        <div className="row">
          <div className="col-lg-12">
            <div className="">
              <div className="table-responsive">
                <table className="table project-list-table table-nowrap align-middle table-borderless">
                  <thead style={{ color: 'black' }}>
                    <tr>
                      <th scope="col" className="ps-4"></th>
                      <th scope="col">Contract Details</th>
                      <th scope="col">Status</th>
                      <th scope="col">Country</th>
                      <th scope="col">Company Name</th>
                      <th scope="col">Lab Name</th> {/* ismey lab ka naam ayega */}
                      <th scope="col">Dates</th>
                      <th scope="col">Email</th>
                    </tr>
                  </thead>

                  {bookedLabs.map((p, index) => (
                    <div key={index}>
                      <tbody style={{ color: 'black' }}>
                        <tr>
                          <th scope="row" className="ps-4"></th>
                          <td style={{ color: 'black' }}>
                            <a href="#" className="  ">
                              {item.sender_contactperson}
                            </a>
                          </td>
                          <td>
                            <>
                              <div className="btn-group" style={{ marginTop: ' -2px ' }}>
                                <button
                                id="statusButton"
                                  type="button"
                                  className="btn btn-secondary dropdown-toggle"
                                  data-bs-toggle="dropdown"
                                  aria-expanded="false"
                                  style={{ backgroundColor: 'white' }}
                                >
                              {item.service_status}
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
                          </td>
                          <td>
                            <p>                              {item.submitter_country}
</p>
                          </td>
                          {/* <td>Lorem Institute</td> */}
                          <td>
                            {/* Order Details means the<br></br> details relating to the Order. */}
                            {item.sample_description}
                          </td>
                          <td>
                            <>
                              {/* starting data   - ending date */}
                              <p>{item.startdate} - {item.enddate} </p>
                              {/* <input type="date" className="form-control " id="exampleColorInput" /> */}
                            </>
                          </td>
                          <td>{item.submitter_email}</td>
                        </tr>
                      </tbody>
                    </div>
                  ))}
                </table>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Orders
