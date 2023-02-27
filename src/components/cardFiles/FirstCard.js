import React from "react";
import { Link } from "react-router-dom";
const FirstCard = (props) => {
  return (
    <>  <div
      className="col-md-12 col-lg-4 mb-4 mb-lg-0"
      style={{ backgroundColor: "#eee", border: "1px", marginTop: "10px", alignItems: 'revert', textAlign: 'right' }}
    >
      <div style={{ marginTop: "10px" }}>
        <Link to="/labdetails">
          <div>
            <div
              className=" rounded-circle d-flex align-items-center justify-content-center text-align-left shadow-1-strong my-1"
              style={{
                width: 35,
                height: 35,
                position: "absolute",
                zIndex: "5",
                backgroundColor: 'rgba(103, 128, 159, 0.8'


              }}
            >
              <p className="text-white mb-0 " >
                <i aria-hidden="true" style={{ color: '#2741f7' }}><b>Fetures</b></i>
              </p>
            </div>
            {/* <div
        className="bg-secondary rounded-circle d-flex align-items-center justify-content-center shadow-1-strong"
        style={{
          width: 35,
          height: 35,
          position: "absolute",
          zIndex: "5",
          marginLeft: "375px",
        }}
      >
        <p className="text-white mb-0 small">
          <i class="fa fa-heart-o" aria-hidden="true"></i>
        </p>
      </div> */}
            {/* <div
        className=" rounded-pill d-flex align-items-center justify-content-center shadow-1-strong"
        style={{
          width: 130,
          height: 50,
          position: "absolute",
          zIndex: "5",
          marginTop: "195px",
          backgroundColor:'rgba(103, 128, 159, 0.6)'
        
        }}
      >
        <p className="text-white mb-0 small" style={{ color: "black",textAlign:'right' }}>
          {props.banner}
        </p>
      </div> */}
            <div style={{ position: "absolute", textAlign: 'right' }} >
              <button style={{ width: '100' }}>asdasdas</button>
            </div>
            <img
              style={{ width: "100%", height: "250px" }}
              src={"" + props.image}
              alt="Laptop"
            />
          </div>
        </Link>
      </div>
      <div className="card-body">
        <div
          className="d-flex justify-content-between"
          style={{ fontFamily: "serif" }}
        >
          <h5>Visit Our Lab</h5>
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
            <h6>Monthly</h6>
            <h6>$2250</h6>

          </div>
          <div class="col">
            <h1>Test</h1>
            <h5>1200</h5>
            {/* <h5>12</h5> */}
          </div>
          <div class="col">

            <h1>Visit</h1>
          </div>
        </div>
      </div>
    </div></>
  );
};

export default FirstCard;
