import { height } from '@mui/system'
import React, { useState } from 'react'
import { useDropzone } from 'react-dropzone'

function Drag() {
  const [file, setFile] = useState([])

  function uploadSingleFile(e) {
    let ImagesArray = Object.entries(e.target.files).map((e) => URL.createObjectURL(e[1]))
    console.log(ImagesArray)
    setFile([...file, ...ImagesArray])
    console.log('file', file)
  }

  function upload(e) {
    e.preventDefault()
    console.log(file)
  }

  function deleteFile(e) {
    const s = file.filter((item, index) => index !== e)
    setFile(s)
    console.log(s)
  }

  return (
    <form className="row">
      <div
        style={{ display: 'block', width: '100%' }}
        className="col-md-12 col-sm-12 form-group preview"
      >
        {file.length > 0 &&
          file.map((item, index) => {
            return (
              <div key={item}>
                <div
                  style={{
                    width: '150px',
                    height: '115px',
                    float: 'left',
                    margin: '10px',
                    textAlign: 'left',
                  }}
                >
                  <button
                    type="button"
                    onClick={() => deleteFile(index)}
                    style={{
                      border: '1px solid black',
                      paddingTop: '2px',
                      marginTop: '5px',
                      marginLeft: '5px',
                      backgroundColor: 'white',
                      width: '30px',
                      height: '30px',
                      borderRadius: '5px',
                      position: 'absolute',
                      top: '90%;',
                      //   left: "50%;",
                      //   right: "10%",
                      //   transform: " translate(-20%, -50%)",
                    }}
                  >
                    <i className="las la-times" style={{ color: 'black' }}></i>
                  </button>
                  <div>
                    <img src={item} alt="" style={{ borderRadius: '10px', width: '150px' }} />
                  </div>
                </div>
              </div>
            )
          })}
      </div>

      <div className="container">
        <label
          htmlFor="myfile"
          style={{
            width: '200px',
            // backgroundColor: "#2741f7",
            border: '1px dotted gray',
            color: 'white',
            borderRadius: '7px',
            fontSize: '14px',
            textAlign: 'center',
            justifyContent: 'center',
            padding: '100px',
            height: '30vh',
            width: '100%',
          }}
        >
          <h1 style={{ textAlign: 'center', color: 'gray' }}>Insert Image</h1>
        </label>
        <input
          style={{ display: 'none' }}
          type="file"
          id="myfile"
          name="myfile"
          disabled={file.length === 50}
          // disabled={file.length === 5}
          className="form-control"
          onChange={uploadSingleFile}
          multiple
        />
      </div>
    </form>
  )
}

export default Drag
