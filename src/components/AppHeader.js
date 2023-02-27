import React from 'react'
import { NavLink } from 'react-router-dom'
import { useSelector, useDispatch } from 'react-redux'
import Button from '@mui/material/Button'
import Menu from '@mui/material/Menu'
import MenuItem from '@mui/material/MenuItem'
import { useState } from 'react'
import {
  CContainer,
  CHeader,
  CHeaderBrand,
  CHeaderDivider,
  CHeaderNav,
  CHeaderToggler,
  CNavLink,
  CNavItem,
  CInputGroup,
  CInputGroupText,
  CFormInput,
  CRow,
} from '@coreui/react'
import CIcon from '@coreui/icons-react'
import { cilBell, cilEnvelopeOpen, cilList, cilMenu, cilHouse } from '@coreui/icons'

import { AppBreadcrumb } from './index'
import { AppHeaderDropdown } from './header/index'
import { logo } from 'src/assets/brand/logo'

const AppHeader = () => {
  const dispatch = useDispatch()
  const sidebarShow = useSelector((state) => state.sidebarShow)
  const [anchorEl, setAnchorEl] = useState(null)
  const open = Boolean(anchorEl)
  const handleClick = (event) => {
    setAnchorEl(event.currentTarget)
  }
  const handleClose = () => {
    setAnchorEl(null)
  }

  return (
    <CHeader position="sticky" className="mb-4" style={{ marginTop: '-20px', paddingTop: '30px' }}>
      <CContainer fluid>
        <CHeaderToggler
          className="ps-1"
          onClick={() => dispatch({ type: 'set', sidebarShow: !sidebarShow })}
        >
          <CIcon icon={cilMenu} size="lg" />
        </CHeaderToggler>
        <CHeaderBrand className="mx-auto d-md-none" to="/">
          <CIcon icon={logo} height={48} alt="Logo" />
        </CHeaderBrand>
        <CHeaderNav className="d-none d-md-flex me-auto">
          {/* <CNavItem>
            <CNavLink to="/dashboard" component={NavLink} style={{ color: 'gray' }}>
              Analytical
            </CNavLink>
          </CNavItem> */}

          <div>
            {/* <Button
              id="basic-button"
              aria-controls={open ? 'basic-menu' : undefined}
              aria-haspopup="true"
              aria-expanded={open ? 'true' : undefined}
              onClick={handleClick}
              style={{ color: 'gray', marginTop: '3px' }}
            >
              <p>R</p>
              <p style={{ textTransform: 'lowercase' }}>eport</p>
            </Button> */}
            <Menu
              id="basic-menu"
              anchorEl={anchorEl}
              open={open}
              onClose={handleClose}
              MenuListProps={{
                'aria-labelledby': 'basic-button',
              }}
            >
              <MenuItem onClick={handleClose} to="/transactions/payment" component={NavLink}>
                Transactions History
              </MenuItem>
              <MenuItem onClick={handleClose} to="/transactions/paymentmethod" component={NavLink}>
                Payment Method
              </MenuItem>
            </Menu>
          </div>
          <CNavItem>
   
          </CNavItem>
          <CNavItem>
        
          </CNavItem>
      
        </CHeaderNav>
        <CHeaderNav>
          {/* <CNavItem>
            <CRow>
              <CInputGroup className="has-validation" style={{ width: '350px' }}>
                <CInputGroupText style={{ color: 'black' }}>Search</CInputGroupText>
                <CFormInput
                  type="text"
                  aria-describedby="inputGroupPrependFeedback"
                  feedbackValid="Please choose a username."
                  id="validationCustomUsername"
                  required
                />
              </CInputGroup>
            </CRow>
          </CNavItem> */}

{/*           
          <CNavItem>
            <CNavLink>
              <Button style={{ backgroundColor: '#2711f0', color: 'white', marginTop: '-10px' }}>
                Book
              </Button>
            </CNavLink>
          </CNavItem> */}

          <CNavItem>
            <CNavLink href="https://lambent-otter-48d82e.netlify.app">
              <CIcon icon={cilHouse} style={{ color: 'black' }} size="lg" />
            </CNavLink>
          </CNavItem>
{/* 
          <CNavItem>
            <CNavLink href="#">
              <CIcon icon={cilBell} style={{ color: 'black' }} size="lg" />
            </CNavLink>
          </CNavItem>

          <CNavItem>
            <CNavLink href="#">
              <CIcon icon={cilList} style={{ color: 'black' }} size="lg" />
            </CNavLink>
          </CNavItem> */}

          <CNavItem>
            <CNavLink to="/messages" component={NavLink}>
              <CIcon icon={cilEnvelopeOpen} style={{ color: 'black' }} size="lg" />
            </CNavLink>
          </CNavItem>

        </CHeaderNav>
        {/* <CHeaderNav className="ms-3">
          <AppHeaderDropdown />
        </CHeaderNav> */}

      </CContainer>
      <CHeaderDivider />
      <CContainer fluid>
        <AppBreadcrumb />
      </CContainer>
    </CHeader>
  )
}

export default AppHeader
