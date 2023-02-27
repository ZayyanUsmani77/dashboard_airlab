import React from 'react'
import {
  FaAngleLeft,
  FaAngleRight,
  FaArrowDown,
  FaFileAlt,
  FaSearch,
  FaSync,
  FaTrashAlt,
} from 'react-icons/fa'
const EmailTopBar = () => {
  return (
    <div class="email-header d-xl-flex align-items-center">
      <div class="d-flex align-items-center">
        <div class="email-toggle-btn">
          <i class="bx bx-menu"></i>
        </div>
        <div class="btn btn-white">
          <input class="form-check-input" type="checkbox" />
        </div>
        <div class="">
          <button type="button" class="btn btn-white ms-2">
            <FaSync />
          </button>
        </div>
        <div class="">
          <button type="button" class="btn btn-white ms-2">
            {/* <i class='bx bx-downvote me-0'></i> */}
            <FaArrowDown />
          </button>
        </div>
        <div class="d-none d-md-flex">
          <button type="button" class="btn btn-white ms-2">
            {/* <i class='bx bx-file me-0'></i> */}
            <FaFileAlt />
          </button>
        </div>
        <div class="">
          <button type="button" class="btn btn-white ms-2">
            {/* <i class='bx bx-trash me-0'></i> */}
            <FaTrashAlt />
          </button>
        </div>
      </div>
      <div class="flex-grow-1 mx-xl-2 my-2 my-xl-0">
        <div class="input-group">
          <span class="input-group-text bg-transparent">
            {/* <i class='bx bx-search'></i> */}
            <FaSearch />
          </span>
          <input type="text" class="form-control" placeholder="Search mail" />
        </div>
      </div>
      <div class="ms-auto d-flex align-items-center">
        <button class="btn btn-sm btn-light">1-50 of 8,740</button>
        <button class="btn btn-white px-2 ms-2">
          {/* <i class='bx bx-chevron-left me-0'></i> */}
          <FaAngleLeft />
        </button>
        <button class="btn btn-white px-2 ms-2">
          {/* <i class='bx bx-chevron-right me-0'></i> */}
          <FaAngleRight />
        </button>
      </div>
    </div>
  )
}

export default EmailTopBar
