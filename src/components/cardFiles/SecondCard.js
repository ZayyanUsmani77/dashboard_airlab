import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import './card.css'
const SecondCard = (props) => {
  const [active, setActive] = useState(false);
  const handleClick = () => {
    setActive(!active);
  };

  return (
    <>
      <div class="card carda" style={{ width: '22rem', height: '520px', padding: '0px', marginBottom: '10px', marginTop: '14px', borderRadius: '15px', boxShadow: 'rgba(0, 0, 0, 0.29) 0px 5px 15px', float: 'center' }}>
        <div style={{ height: '300px', margin: '10px', paddingTop: '8px', paddingBottom: '8px', borderRadius: '7px', backgroundImage: `url(${"" + props.image})` }}>
          <div class="container" style={{ paddingLeft: '7px' }}>
            <div class="row" >
              <div class="col" style={{ textAlign: 'left' }}>
              </div>
              <div class="col" style={{ textAlign: 'right', paddingRight: '0px' }}>
                <div >
                  <button className='btn2' onClick={handleClick} id='btnR' style={{ border: 'none', color: active ? "#C70039 " : "white", backgroundColor: 'rgba(103, 128, 159, 0.8', width: '40px', height: '40px', borderRadius: '50%' }}><i class="fa fa-heart" aria-hidden="true"></i></button>
                  <br />
                  <button className='btn3' style={{ marginTop: '150px', width: '120px', borderRadius: '10px', height: '50px', backgroundColor: 'rgba(103, 128, 159, 0.6', border: 'none', color: 'white',marginRight:"10px" }}>{props.banner}</button>
                </div>
              </div>
            </div>

          </div>
        </div>
        <Link to="/labdetails" style={{ textDecoration: 'none' }}><div class="card-body">
          <div className="card-body">
            <div
              className="d-flex justify-content-between"
              style={{}}
            >
              <h4>Visit Our Lab</h4 >
            </div>

            <div className="d-flex justify-content-between mb-3">
              <h6 style={{ color: "gray" }}>Address</h6>
            </div>

            <div style={{}}>
              <div className="ms-auto text-warning" style={{ float: "left" }}>
                <i className="fa fa-star" />
                <i className="fa fa-star" />
                <i className="fa fa-star" />
                <i className="fa fa-star" />
                <i class="fa fa-star-o" aria-hidden="true"></i>
                <span class="badge bg-success" style={{ marginLeft: "10px" }}>
                  4.0
                </span>
              </div>
              <button
                type="button"
                className="btn"
                style={{
                  backgroundColor: "#2741f7",
                  color: "white",
                  float: "right",
                }}
              >
                Book
              </button>
            </div>
          </div>
          <div
            className="conatiner"
            style={{ marginTop: "60px", marginBottom: "20px" }}
          >
            <div class="row align-items-end">
              <div class="col">
                <h6>{props.Time}</h6>
                <h6>$2250</h6>

              </div>
              <div class="col">
                <h6>Tests</h6>
                <h6>1200</h6>
                {/* <h5>12</h5> */}
              </div>
              <div class="col" style={{ paddingBottom: '5px' }}>

                <h6>Visit</h6>
                https://

              </div>
            </div>
          </div>

        </div></Link>
      </div>
    </>
  )
}

export default SecondCard