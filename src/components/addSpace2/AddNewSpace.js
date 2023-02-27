import React from 'react'

const AddNewSpace = () => {
  return (
    <>
      {/* <div className="container">
        <nav
          className="navbar navbar-expand-lg navbar-light bg-white "
          style={{ margin: '2% 5% 5% 5%' }}
        >
          <div className="container-fluid">
            <form className="d-flex">
              <button style={{ color: 'white' }} className="btn btn-primary" type="submit">
                <i className="fa fa-home" aria-hidden="true"></i>
              </button>
            </form>
            <form className="d-flex">
              <button
                style={{ backgroundColor: 'gray', color: 'white' }}
                className="btn"
                type="submit"
              >
                Cancel
              </button>
            </form>
          </div>
        </nav>
      </div> */}
      <div className="main">
        <p>
          What kind of laboratory are
          <br /> you listing?
        </p>
        <div className="row">
          <select className="form-select form-select-lg mb-3" aria-label=".form-select-lg example">
            <option selected="">Pathodology</option>
            <option value={1}>One</option>
            <option value={2}>Two</option>
            <option value={3}>Three</option>
          </select>
        </div>
        <div className="row-copy">
          <select className="form-select form-select-lg mb-3" aria-label=".form-select-lg example">
            <option selected="">Consulting</option>
            <option value={1}>---</option>
            <option value={2}>Two</option>
            <option value={3}>Three</option>
          </select>
        </div>
        <h5 className="h5" style={{ marginRight: '27%' }}>
          Accreditation
        </h5>
        <div className="row">
          {/* Default radio */}
          <div className="form-check" style={{ textAlign: 'left' }}>
            <input
              className="form-check-input"
              type="radio"
              name="flexRadioDefault"
              id="flexRadioDefault1"
            />
            <label className="form-check-label" htmlFor="flexRadioDefault1">
              {' '}
              Yes{' '}
            </label>
          </div>
          {/* Default checked radio */}
          <div className="form-check" style={{ textAlign: 'left' }}>
            <input
              className="form-check-input"
              type="radio"
              name="flexRadioDefault"
              id="flexRadioDefault2"
              defaultChecked=""
            />
            <label className="form-check-label" htmlFor="flexRadioDefault2">
              {' '}
              No{' '}
            </label>
          </div>
        </div>
        <div className="row">
          <div className="d-grid gap-2">
            <button className="btn btn-primary" type="button">
              Next
            </button>
          </div>
        </div>
      </div>
    </>
  )
}

export default AddNewSpace
