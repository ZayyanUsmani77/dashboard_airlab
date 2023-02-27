import React from 'react'
import { Editor } from 'react-draft-wysiwyg'
import 'react-draft-wysiwyg/dist/react-draft-wysiwyg.css'
import { Link } from 'react-router-dom'

import jQuery from 'jquery'
import Func from './Func'
import Dragdrop from './Dragdrop'
import Todolist1 from '../toDolist/Todolist1'
import Todolist2 from '../toDolist/Todolist2'
import Todolist3 from '../toDolist/Todolist3'
import Drag from './Dragdrop'
import Dropzone from './dropzone/Dropzone'
const AddServices = () => {
  ;(function ($) {
    $(function () {
      var todoListItem = $('.todo-list')
      var todoListInput = $('.todo-list-input')
      $('.todo-list-add-btn').on('click', function (event) {
        event.preventDefault()

        var item = $(this).prevAll('.todo-list-input').val()

        if (item) {
          todoListItem.append(
            "<li><div className='form-check'><label className='form-check-label'><input className='checkbox' type='checkbox'/>" +
              item +
              "<i className='input-helper'></i></label></div><i className='remove mdi mdi-close-circle-outline'></i></li>",
          )
          todoListInput.val('')
        }
      })

      todoListItem.on('change', '.checkbox', function () {
        if ($(this).attr('checked')) {
          $(this).removeAttr('checked')
        } else {
          $(this).attr('checked', 'checked')
        }

        $(this).closest('li').toggleclassName('completed')
      })

      todoListItem.on('click', '.remove', function () {
        $(this).parent().remove()
      })
    })
  })(jQuery)

  return (
    <>
      <div className="container my-3 " style={{paddingBottom:'50px'}}>
        <div
          className="row"
          style={{
            backgroundColor: '',
          }}
        >
         
          <div className="container-fluid">
            <section className="row">
              <div className="row">
                <div className="col-9  ">
                  <div style={{ paddingBottom: '30px',marginTop:'20px', textAlign:'left' }}>
                    <h2
                      className=""
                      style={{ color: 'black',  fontSize: '30px',paddingLeft:'30px' }}
                    >
                      Add New Services
                    </h2>

                    <h1 className="" style={{ color: 'grey', fontSize: '17px' ,paddingLeft:'30px'}}>
                      Add your new service for lab
                    </h1>
                  </div>
                </div>
                <div className="col-3 ">
                  <Link to='/'><button
                    style={{
                      padding: '8px',
                      marginTop: '20px',
                      float: 'right',
                      backgroundColor: '#2741f7',
                      color: 'white',
                    }}
                    type="button"
                    className="btn  btn-lg "
                  >
                    Back
                  </button></Link>
                </div>
              </div>

              {/* <div className="page-header">
                <div className="pull-center">
                <h1 className="" style={{ color: "black", fontWeight: "bolder", fontSize: "35px" }}>
                  Add New Services
                </h1>
                
                <h1 className=""style={{ color: "black", fontSize: "px" }}>
                  Add your new service for lab
                </h1>
                </div>
                <div className="pull-right col-md-4 col-sm-12">

                  <Link to="/firstspace" style={{ textDecoration: 'none' }}><button
                    style={{padding:'8px', float: "right", backgroundColor: '#2741f7' }}
                    type="button"
                    className="btn  btn-lg "
                  >
                    Back to listing
                  </button></Link>              
                 

                </div>

              </div> */}
            </section>
          </div>

          <div
            style={{
             
              marginTop: '5px',
              marginBottom: '10px',
              border:'1px solid lightgrey',
              padding:'15px'
            }}
          >
            <h2 style={{fontSize:'23px',textAlign:'left',color:'black',marginBottom:'20px'}}>Select Category</h2  >
            <select
              className="form-select form-select-lg mb-3"
              aria-label=".form-select-lg example"
              style={{height:'41px',fontSize:'16px'}}
            >
              <option value="" disabled selected >
                Select
              </option>
              <option value={1}>Agricultural</option>
              <option value={2}>Chemical</option>
              <option value={3}>Diagnostics</option>
              <option value={2}>Educational</option>
              <option value={3}>Food</option>
              <option value={2}>Government</option>
              <option value={3}>Oil/Gas</option>
              <option value={3}>Pathology</option>
              <option value={2}>Pharmaceutical</option>
              <option value={3}>Veterinary</option>
            </select>
          </div>
          <div
            style={{
              backgroundColor: 'white',
              marginTop: '5px',
              marginBottom: '10px',
              border:'1px solid lightgrey',
              padding:'15px'
            }}
          >
            <h2 style={{fontSize:'23px',textAlign:'left',color:'black',marginBottom:'20px'}}>Select Service</h2>
            <select
              className="form-select form-select-lg mb-3"
              aria-label=".form-select-lg example"
              style={{height:'41px',fontSize:'16px'}}
              
            >
              <option value="" disabled selected hidden>
                Select
              </option>
              <option value={1}></option>
              <option value={2}></option>
              <option value={3}></option>
              <option value={2}></option>
              <option value={3}></option>
              <option value={2}></option>
              <option value={3}></option>
              <option value={3}></option>
            </select>
          </div>
          <Todolist1/>
          <Todolist2/>
          
          
          {/* <Func/> */}
          <div
            style={{
              backgroundColor: 'white',
              marginTop: '20px',
              textAlign: 'left',
              marginBottom: '10px',
              border:'1px solid lightgrey',
              padding:'15px'
            }}
          >
            <div
              style={{
               
                fontSize: '23px',
                fontWeight: 'bold',
              }}
            >
              Listing Details
            </div>
            <br></br>

            <div
              style={{
                fontSize: '15px',
               
                marginTop: '10px',
                marginBottom: '10px',
              }}
            >
              Test/Analyses name
            </div>

            <textarea className="form-control" rows="2" id="comment"></textarea>

            <div
              style={{
                fontSize: '15px',
      
                marginTop: '10px',
                marginBottom: '10px',
              }}
            >
              Test Method
            </div>

            <textarea
              style={{ marginBottom: '10px' }}
              className="form-control"
              rows="2"
              id="comment"
            ></textarea>

            <div className="row">
              <div className="col-sm-4" style={{ float: 'left' }}>
                <div
                  style={{
                   
                    fontSize: '23px',
                    fontWeight: 'bold',
                  }}
                >
                  Releasing of Results
                </div>
                <div>
                  <label
                    style={{
                      marginTop: '10px',
                      fontSize: '15px',
                    
                    }}
                  >
                    Electronic
                  </label>
                  <div style={{ float: 'right', marginTop: '10px' }}>
                    <div className="form-check form-check-inline" style={{}}>
                      <input
                        className="form-check-input"
                        type="radio"
                        name="inlineRadioOptions"
                        id="inlineRadio1"
                        defaultValue="option1"
                      />
                      <label className="form-check-label" htmlFor="inlineRadio1">
                        Yes
                      </label>
                    </div>
                    <div className="form-check form-check-inline">
                      <input
                        style={{ color: '#2741f7' }}
                        className="form-check-input"
                        type="radio"
                        name="inlineRadioOptions"
                        id="inlineRadio2"
                        defaultValue="option2"
                      />
                      <label className="form-check-label" htmlFor="inlineRadio2">
                        No
                      </label>
                    </div>
                  </div>
                </div>
                <div>
                  <label
                    style={{
                      marginTop: '10px',
                      fontSize: '15px',
                      
                    }}
                  >
                    Paper
                  </label>
                  <div style={{ textAlign: 'right', marginTop: '-20px' }}>
                    <div className="form-check form-check-inline">
                      <input
                        className="form-check-input"
                        type="radio"
                        name="inlineRadioOptions1"
                        id="inlineRadio1"
                        defaultValue="option1"
                      />
                      <label className="form-check-label" htmlFor="inlineRadio1">
                        Yes
                      </label>
                    </div>
                    <div className="form-check form-check-inline">
                      <input
                        className="form-check-input"
                        type="radio"
                        name="inlineRadioOptions1"
                        id="inlineRadio2"
                        defaultValue="option2"
                      />
                      <label className="form-check-label" htmlFor="inlineRadio2">
                        No
                      </label>
                    </div>
                  </div>
                </div>
                <div className="row" style={{ marginTop: '14px' }}>
                  <div className="col-6">
                    <label
                      style={{
                        // marginTop: '10px',
                        fontSize: '15px',
                       
                      }}
                    >
                      Other
                    </label>
                  </div>
                  <div className="col-6">
                    <input
                      type="text"
                      className="form-control"
                      placeholder="Specify"
                      style={{
                        float: 'right',

                        marginBottom: '20px',
                        width: '120px',
                        height: '20px',
                      }}
                    />
                  </div>
                </div>
              </div>
              <div className="col-sm-4" style={{ float: 'left' }}>
                <div
                  style={{
               
                    fontSize: '23px',
                    fontWeight: 'bold',
                  }}
                >
                  Test request form<br/><br/>
                 
                </div>
                <input type='file' className='small' id='small' style={{display:'block'}} />
                <div className="mb-4">
                  <input
                    style={{ marginTop: '2px', marginBottom: '10px', color: 'black' }}
                    className="form-control"
                    type="file"
                    id="formFile"
                  />
                </div>
              </div>
              <div className="col-md-3 col-sm-4" style={{ float: 'right' }}>
                <div
                  style={{
                    
                    fontSize: '23px',
                    fontWeight: 'bold',
                  }}
                >
                  Availability:
                </div>
                <input
                  style={{ marginTop: '18px', marginBottom: '20px', color: 'black' }}
                  className="form-control"
                  type="date"
                />
              </div>
            </div>
          </div>

          <div
            style={{
              backgroundColor: 'white',
              marginTop: '20px',
              textAlign: 'left',
              marginBottom: '10px',
              border:'1px solid lightgrey',
              padding:'15px'
            }}
          >
            <div
              style={{
               
                fontSize: '23px',
                fontWeight: 'bold',
               
              }}
            >
              Listing Price
            </div>
            <br></br>
            <div className="row">
              <div className="">
                <div
                  style={{
                    fontSize: '15px',
                    fontWeight: 'bold',
                    marginTop: '10px',
                    marginBottom: '10px',
                  }}
                >
                  Select Type
                </div>

                <select
                  style={{ marginBottom: '5px' }}
                  className="form-select form-select-sm"
                  aria-label=".form-select-sm example"
                >
                  <option selected>Hourly </option>
                  <option value="1">Weekly </option>
                  <option value="2">Monthly </option>
                  <option value="3">Yearly </option>
                  <option value="4"> Per Test </option>
                </select>
               

               
                <div
                  style={{
                    fontSize: '15px',
                    fontWeight: 'bold',
                    marginTop: '10px',
                    marginBottom: '10px',
                  }}
                >
                  Price
                </div>
                <div className="mb-3">
                  <input type="text" className="form-control"placeholder='$20' id="exampleFormControlInput1" />
                </div>
              </div>

              {/* <div className="col-md-6">
                <label
                  style={{
                    fontSize: "15px",
                    fontWeight: "bold",
                    marginTop: "15px",
                    marginBottom: "10px",
                  }}
                >
                  Attach your custom test request form here,if you have one
                </label>
                <div className="mb-3">
                  <input
                    style={{ marginTop: "18px" }}
                    className="form-control"
                    type="file"
                    id="formFile"
                  />
                </div>
              </div> */}
            </div>
          </div>
          <div
            style={{
              backgroundColor: 'white',
              marginTop: '20px',
              textAlign: 'left',
              marginBottom: '10px',
              border:'1px solid lightgrey',
              padding:'15px'
            }}
          >
            <div
              style={{
            
                fontSize: '23px',
                fontWeight: 'bold',
              }}
            >
              Listing description
            </div>
            <br></br>
            <div className="row" style={{ marginTop: '5px', marginBottom: '5px' }}>
              <div className="col-md-12 col-sm-12 col-xl-12">
                <Editor
                  toolbarclassName="toolbarclassName"
                  wrapperclassName="wrapperclassName"
                  editorclassName="editorclassName"
                  wrapperStyle={{ width: '100%', border: '1px solid black' }}
                />
              </div>
            </div>
          </div>

          <div
            style={{
              backgroundColor: 'white',
              marginTop: '20px',
              textAlign: 'left',
              marginBottom: '5px',
              border:'1px solid lightgrey',
              padding:'15px'
            }}
          >
            <div
              style={{
                marginTop: '5px',
                
                fontSize: '25px',
                fontWeight: 'bold',
             
              }}
            >
              Additional Lab Services (Lab tests, methods, equipments, expertise etc.)
            </div>
            <br></br>
            {/* <div
              className="row"
              style={{ marginTop: "20px", marginBottom: "20px" }}
            >
              <div className="col-md-3">
              <input
                  style={{ fontWeight: "bolder" }}
                  type="text"
                  placeholder=""
                />
              </div>
              <div className="col-md-3">
              <input
                  style={{ fontWeight: "bolder" }}
                  type="text"
                  placeholder=""
                />
              </div>
              <div className="col-md-3">
              <input
                  style={{ fontWeight: "bolder" }}
                  type="text"
                  placeholder=""
                />
              </div>
              <div className="col-md-3">
              <input
                  style={{ fontWeight: "bolder" }}
                  type="text"
                  placeholder=""
                />          
                

              </div>
            </div> */}
             <Todolist3/>
          </div>

          <div
            style={{
              backgroundColor: 'white',
              marginTop: '20px',
              textAlign: 'left',
              marginBottom: '10px',
              border:'1px solid lightgrey',
              padding:'15px'
            }}
          >
            <div
              style={{
                color: 'black',
                fontSize: '23px',
                fontWeight: 'bolder',
              }}
            >
              Photos
              <Drag/>
            </div>
            <br></br>
            <div>
           
            </div>
          
          </div>
        </div>
        {/* <Dropzone/> */}
        <button
              style={{ marginTop: '10px', marginBottom: '20px', backgroundColor: '#2741f7',float:'right' }}
              type="button"
              className="btn btn-primary"
            >
              Submit Listing
            </button>
        {/* style={{marginRight:'875px', fontSize:'18px', color:'gray'}} */}
        {/* style={{marginRight:'850px', fontSize:'30px', fontWeight:'bolder'}} */}
      </div>
   
    </>
  )
}

export default AddServices
