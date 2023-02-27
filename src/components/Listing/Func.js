import React from 'react'
import jQuery from 'jquery'
const Func = () => {
	
  return (
	<div>
	   <div
            style={{
              backgroundColor: 'white',
              marginTop: '5px',
              marginBottom: '10px',
              border:'1px solid lightgrey',
              padding:'15px'
            }}
          >
           <h4 style={{fontSize:'25px',fontWeight:'bold',textAlign:'left',color:'black'}}>New service?</h4>
            <div className='col-md-12'>
            <div class="" style={{marginTop: "10px"}}>
                <div>
                  <div className="add-itemsa d-flex " style={{}}>
                    {" "}
                    <input
                      type="text"
                      className="form-control todo-list-inputa"
                      placeholder="Additional?"
                      width="100%"
                    />{" "}
                     <button
                        className="add btn btn-primary font-weight-bold todo-lista-add-btna"
                        style={{ backgroundColor: '#2741f7' }}
                      >
                        Add
                      </button>{' '}
                    
                  </div>
                  <div className="list-wrapper">
                    <ul className="d-flex flex-column-reverse todo-list"></ul>
                  </div>
                </div>
              </div>
          </div>
          </div>
	</div>
  )
}

export default Func
