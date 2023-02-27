import React from 'react'
import './imageCard.css'
const ImageCard = () => {
  return (
    <>
      <link
        rel="stylesheet"
        href="https://cdnjs.cloudflare.com/ajax/libs/material-design-iconic-font/2.2.0/css/material-design-iconic-font.min.css"
        integrity="sha256-3sPp8BkKUE7QyPSl6VfBByBroQbKxKG7tsusY2mhbVY="
        crossOrigin="anonymous"
      />
      <div className="container">
        <div className="row"></div>
        <div className="row justify-content-center">
          <div className="col-md-6 col-lg-4 mb-30">
            <div className="team-item">
              <div className="mb-30 position-relative d-flex align-items-center">
                <span className="socials d-inline-block">
                  <a href="#" className="zmdi zmdi-facebook" />
                  <a href="#" className="zmdi zmdi-twitter" />
                  <a href="#" className="zmdi zmdi-google" />
                  <a href="#" className="zmdi zmdi-instagram" />
                </span>
                <span className="img-holder d-inline-block">
                  <img src="https://bootdey.com/img/Content/avatar/avatar1.png" alt="Team" />
                </span>
              </div>
              <div className="team-content">
                <h5 className="mb-2">Shaikh Rohan</h5>
                <p className="text-uppercase mb-0">Senior Developer</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default ImageCard
