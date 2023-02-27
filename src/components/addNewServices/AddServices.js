import React from 'react'
import { Editor } from 'react-draft-wysiwyg'
import 'react-draft-wysiwyg/dist/react-draft-wysiwyg.css'
import { Link } from 'react-router-dom'
import './AddServices.css'
import Todolist1 from '../toDolist/Todolist1'
import Todolist2 from '../toDolist/Todolist2'
import Todolist3 from '../toDolist/Todolist3'
// import Imgupload from './Imgupload'
import Drag from '../../components/Listing/Dragdrop'
import jQuery from 'jquery'
import { useEffect, useRef, useState } from 'react'
// import { EditorState } from 'draft-js'
// import { convertToHTML } from 'draft-convert'

const AddServices = () => {
  const [electronic, setElectronic] = useState('false')
  const [paper, setPaper] = useState('false')

  function onChangeValueElectronic(event) {
    setElectronic(event.target.value)
    console.log(event.target.value)
  }

  function checkDescription() {
    console.log('listing_description', document.getElementById('listing_description').value)
  }

  function onChangeValuePaper(event) {
    setPaper(event.target.value)
    console.log(event.target.value)
  }

  const checkData = async () => {
    const service = {
      service_category: document.getElementById('service_category').value,
      select_service: document.getElementById('select_service').value,
      test_name: document.getElementById('test_name').value,
      test_method: document.getElementById('test_method').value,
      electronic: electronic,
      papers: paper,
      test_request_form: document.getElementById('test_request_form').value,
      service_date: document.getElementById('service_date').value,
      other_method_for_result: document.getElementById('other_method_for_result').value,
      listing_type: document.getElementById('listing_type').value,
      service_price: document.getElementById('service_price').value,
      addtional_lab_services: document.getElementById('addtional_lab_services').value,
      service_image: document.getElementById('service_image').value,
    }

    console.log(service)
  }

  const sendData = async () => {
    return fetch('http://3.139.66.50:8000/api/service/', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        // 'X-CSRFToken': csrftoken,
      },
      body: JSON.stringify(data),
    })
      .then((response) => response.json())
      .catch((error) => console.error(error))
  }

  const data = {
    service_category: 'asasd',
    select_service: 'asd',
    new_category: 'any',
    new_service: 'asd',
    test_name: 'asd',
    test_method: 'asd',
    electronic: true,
    papers: true,
    test_request_form: 'http://3.139.66.50:8000/media/my_file/Screenshot_2.png',
    service_date: '2023-01-11',
    other_method_for_result: 'asd',
    listing_type: 'asd',
    service_price: 'asd',
    listing_description: 'sad',
    addtional_lab_services: 'asd',
    service_image: 'C:/Users/SOC/Pictures/Screenshots/Screenshot_2.png',
  }

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

  const handleSubmit = (event) => {
    console.log('Checkkkk', document.getElementById('test_request_form').files)
    event.preventDefault()
    console.log('event.target', event.target)
    const formData = new FormData(event.target)
    console.log('zayyan', formData.get('test_request_form').name)

    console.log('THIS > IMAGES', event.target.test_request_form)

    // for(let i=0; i <document.getElementById("test_request_form").files.length; i++){
    //   // console.log("")
    //   formData.append(i,document.getElementById("test_request_form").files[i])
    // }
    console.log('FORM DATA', formData)
    // You can also append additional data to the form data
    //formData.append('additionalField', 'additionalValue')

    fetch('http://127.0.0.1:8000/api/service/', {
      method: 'POST',
      body: formData,
    })
      .then((response) => {
        console.log(response)
      })
      .catch((error) => {
        console.error(error)
      })
  }
  // const [editorState, setEditorState] = useState(() => EditorState.createEmpty())
  // const [convertedContent, setConvertedContent] = useState(null)

  // useEffect(() => {
  //   let html = convertToHTML(editorState.getCurrentContent())
  //   setConvertedContent(html)
  // }, [editorState])

  // console.log(convertedContent)

  return (
    <>
      <form onSubmit={handleSubmit}>
        <div className="container my-3 " style={{ paddingBottom: '50px' }}>
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
                    <div style={{ paddingBottom: '30px', marginTop: '20px', textAlign: 'left' }}>
                      <h2
                        className=""
                        style={{ color: 'black', fontSize: '30px', paddingLeft: '30px' }}
                      >
                        Add New Services
                      </h2>

                      <h1
                        className=""
                        style={{ color: 'grey', fontSize: '17px', paddingLeft: '30px' }}
                      >
                        Add your new service for lab
                      </h1>
                    </div>
                  </div>
                  <div className="col-3 ">
                    <Link to="/">
                      <button
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
                      </button>
                    </Link>
                  </div>
                </div>
              </section>
            </div>

            <div
              style={{
                marginTop: '5px',
                marginBottom: '10px',
                border: '1px solid lightgrey',
                padding: '15px',
              }}
            >
              <h2
                style={{
                  fontSize: '23px',
                  textAlign: 'left',
                  color: 'black',
                  marginBottom: '20px',
                }}
              >
                Select Category
              </h2>
              <select
                id="service_category"
                name="service_category"
                className="form-select form-select-lg mb-3"
                aria-label=".form-select-lg example"
                style={{ height: '41px', fontSize: '16px' }}
              >
                <option value="" disabled selected>
                  Select
                </option>
                <option value={'Agricultural'}>Agricultural</option>
                <option value={'Chemical'}>Chemical</option>
                <option value={'Diagnostics'}>Diagnostics</option>
                <option value={'Educational'}>Educational</option>
                <option value={'Food'}>Food</option>
                <option value={'Government'}>Government</option>
                <option value={'Oil/Gas'}>Oil/Gas</option>
                <option value={'Pathology'}>Pathology</option>
                <option value={'Pharmaceutical'}>Pharmaceutical</option>
                <option value={'Veterinary'}>Veterinary</option>
              </select>

              <div
                style={{
                  fontSize: '15px',
                  fontWeight: 'bold',
                  marginTop: '10px',
                  marginBottom: '10px',
                }}
              >
                Or add a new Category
              </div>

              <div className="mb-3">
                <input
                  name="new_category"
                  type="text"
                  className="form-control"
                  placeholder=""
                  id="new_category"
                />
              </div>
            </div>
            <div>
              <input
                name="lab_id"
                style={{ display: 'none' }}
                className="form-control"
                type="number"
                value={localStorage.getItem('current_users_lab')}
                id="lab_id"
              />
            </div>
            <div
              style={{
                backgroundColor: 'white',
                marginTop: '5px',
                marginBottom: '10px',
                border: '1px solid lightgrey',
                padding: '15px',
              }}
            >
              <h2
                style={{
                  fontSize: '23px',
                  textAlign: 'left',
                  color: 'black',
                  marginBottom: '20px',
                }}
              >
                Select Service
              </h2>
              <select
                id="select_service"
                name="select_service"
                className="form-select form-select-lg mb-3"
                aria-label=".form-select-lg example"
                style={{ height: '41px', fontSize: '16px' }}
              >
                <option value="" disabled selected hidden>
                  Select
                </option>
                {/* get the services from the lab from database */}
                <option value={'Agricultural'}>Agricultural</option>
                <option value={'Chemical'}>Chemical</option>
                <option value={'Diagnostics'}>Diagnostics</option>
                <option value={'Educational'}>Educational</option>
                <option value={'Food'}>Food</option>
                <option value={'Government'}>Government</option>
                <option value={'Oil/Gas'}>Oil/Gas</option>
                <option value={'Pathology'}>Pathology</option>
                <option value={'Pharmaceutical'}>Pharmaceutical</option>
                <option value={'Veterinary'}>Veterinary</option>
              </select>
              <div
                style={{
                  fontSize: '15px',
                  fontWeight: 'bold',
                  marginTop: '10px',
                  marginBottom: '10px',
                }}
              >
                Or add a new Service
              </div>

              <div className="mb-3">
                <input
                  name="new_service"
                  type="text"
                  className="form-control"
                  placeholder=""
                  id="new_service"
                />
              </div>
            </div>

            {/* I am commenting the following components bcs they make no fin sense */}

            {/* <Todolist1/>
          <Todolist2/> */}

            {/* <Func/> */}
            <div
              style={{
                backgroundColor: 'white',
                marginTop: '20px',
                textAlign: 'left',
                marginBottom: '10px',
                border: '1px solid lightgrey',
                padding: '15px',
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

              <textarea
                name="test_name"
                className="form-control"
                rows="2"
                id="test_name"
              ></textarea>

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
                name="test_method"
                style={{ marginBottom: '10px' }}
                className="form-control"
                rows="2"
                id="test_method"
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

                    <div
                      onChange={onChangeValueElectronic}
                      style={{ float: 'right', marginTop: '10px' }}
                    >
                      <div className="form-check form-check-inline" style={{}}>
                        <input
                          className="form-check-input"
                          type="radio"
                          name="electronic"
                          id="electronic"
                          value="true"
                          checked={true === 'true'}
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
                          name="electronic"
                          id="electronic"
                          value="false"
                          checked={false === 'false'}
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

                    <div
                      onChange={onChangeValuePaper}
                      style={{ textAlign: 'right', marginTop: '-20px' }}
                    >
                      <div className="form-check form-check-inline">
                        <input
                          className="form-check-input"
                          type="radio"
                          name="papers"
                          id="papers"
                          value="true"
                          defaultValue="true"
                          checked={true === 'true'}
                        />
                        <label className="form-check-label" htmlFor="inlineRadio1">
                          Yes
                        </label>
                      </div>
                      <div className="form-check form-check-inline">
                        <input
                          className="form-check-input"
                          type="radio"
                          name="papers"
                          id="papers"
                          value="false"
                          defaultValue="false"
                          checked={false === 'false'}
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
                        name="other_method_for_result"
                        id="other_method_for_result"
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
                    Test request form
                    <br />
                    <br />
                  </div>
                  {/* <input type="file" className="small" id="small" style={{ display: 'block' }} /> */}
                  <div className="mb-3">
                    <input
                      name="test_request_form"
                      style={{
                        marginTop: '2px',
                        marginBottom: '10px',
                        color: 'black',
                        display: 'block',
                      }}
                      className="form-control"
                      type="file"
                      id="test_request_form"
                      multiple
                    />
                  </div>
                  {/* <div className="mb-4">
                    <input
                      name="service_image"
                      style={{ marginTop: '2px', marginBottom: '10px', color: 'black' }}
                      className="form-control"
                      type="file"
                      id="test_request_form"
                    />
                  </div> */}
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
                    name="service_date"
                    id="service_date"
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
                border: '1px solid lightgrey',
                padding: '15px',
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
                    id="listing_type"
                    name="listing_type"
                    style={{ marginBottom: '5px' }}
                    className="form-select form-select-sm"
                    aria-label=".form-select-sm example"
                  >
                    <option selected>Hourly </option>
                    <option value="Weekly">Weekly </option>
                    <option value="Monthly">Monthly </option>
                    <option value="Yearly">Yearly </option>
                    <option value="Per Test"> Per Test </option>
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
                    <input
                      name="service_price"
                      type="text"
                      className="form-control"
                      placeholder="$20"
                      id="service_price"
                    />
                  </div>
                </div>
              </div>
            </div>

            <div
              style={{
                backgroundColor: 'white',
                marginTop: '20px',
                textAlign: 'left',
                marginBottom: '10px',
                border: '1px solid lightgrey',
                padding: '15px',
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

              <div style={{ marginTop: '-15px' }}>
                <textarea
                  className="form-control"
                  id="listing_description"
                  name="listing_description"
                  row="4"
                  style={{ textAlign: 'justify', height: '200px' }}
                  placeholder="Extended description"
                ></textarea>
              </div>

              {/* <div className="row" style={{ marginTop: '5px', marginBottom: '5px' }}>
                <div className="col-md-12 col-sm-12 col-xl-12">
                  <Editor
                    // editorState={editorState}
                    name="listing_description"
                    id="listing_description"
                    toolbarclassName="toolbarclassName"
                    wrapperclassName="wrapperclassName"
                    editorclassName="editorclassName"
                    wrapperStyle={{ width: '100%', border: '1px solid black' }}
                  />
                </div>
              </div> */}
            </div>

            <div
              style={{
                backgroundColor: 'white',
                marginTop: '20px',
                textAlign: 'left',
                marginBottom: '5px',
                border: '1px solid lightgrey',
                padding: '15px',
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

              <div
                style={{
                  fontSize: '15px',
                  fontWeight: 'bold',
                  marginTop: '10px',
                  marginBottom: '10px',
                }}
              >
                Add aditional lab services
              </div>
              <div className="mb-3">
                <input
                  name="addtional_lab_services"
                  type="text"
                  className="form-control"
                  placeholder=""
                  id="addtional_lab_services"
                />
              </div>
            </div>

            <div
              style={{
                backgroundColor: 'white',
                marginTop: '20px',
                textAlign: 'left',
                marginBottom: '10px',
                border: '1px solid lightgrey',
                padding: '15px',
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
              </div>
              <br></br>
              {/* <Imgupload /> */}
              <div className="mb-3">
                <input
                  name="service_image"
                  style={{
                    marginTop: '2px',
                    marginBottom: '10px',
                    color: 'black',
                    display: 'block',
                  }}
                  className="form-control"
                  type="file"
                  id="service_image"
                />
              </div>
              {/* <div>
                <Drag />
              </div> */}
            </div>
          </div>
          <button
            style={{
              marginTop: '10px',
              marginBottom: '20px',
              backgroundColor: '#2741f7',
              float: 'right',
            }}
            type="submit"
            className="btn btn-primary"
          >
            Submit Listing
          </button>
          {/* style={{marginRight:'875px', fontSize:'18px', color:'gray'}} */}
          {/* style={{marginRight:'850px', fontSize:'30px', fontWeight:'bolder'}} */}
        </div>
      </form>
    </>
  )
}

export default AddServices
