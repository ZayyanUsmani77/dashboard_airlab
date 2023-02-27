import React from 'react'



const Dropzone = () => {
  return (
	<div>
	    <div className="db-wrapper">
        <div className="db-content">
          <div className="container-fluid">
            <div className="row">
              <div className="col-xl-12 col-lg-12 col-md-12 col-sm-12 col-12">
                <div className="row">
                  <div className="col-xl-12 col-lg-12 col-md-12 col-sm-12 col-12">
                    <div className="db-card listing-photo">
                      <div className="db-card-header">
                        <h3 className="db-card-header-title">Photos</h3>
                      </div>
                      <div className="db-card-body">							
                        <div className="row">
                          <div className="col-xl-12 col-lg-12 col-md-12 col-sm-12 col-12">
                            <div className="dropzone dz-clickable " action="/file-upload">
                            </div>
                          </div>
                        </div>	
                      </div>
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

export default Dropzone
