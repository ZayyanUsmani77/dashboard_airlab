import React from 'react'
import { useSelector, useDispatch } from 'react-redux'

import { CSidebar, CSidebarBrand, CSidebarNav, CSidebarToggler } from '@coreui/react'
// import CIcon from '@coreui/icons-react'

import { AppSidebarNav } from './AppSidebarNav'

// import { logoNegative } from 'src/assets/brand/logo-negative'
// import { sygnet } from 'src/assets/brand/sygnet'

import SimpleBar from 'simplebar-react'
import 'simplebar/dist/simplebar.min.css'
import Logo from './whitelogo1.png'
// sidebar nav config
import navigation from '../_nav'
const AppSidebar = () => {
  const dispatch = useDispatch()
  const unfoldable = useSelector((state) => state.sidebarUnfoldable)
  const sidebarShow = useSelector((state) => state.sidebarShow)

  return (
    <CSidebar
      position="fixed"
      unfoldable={unfoldable}
      visible={sidebarShow}
      onVisibleChange={(visible) => {
        dispatch({ type: 'set', sidebarShow: visible })
      }}
    >
      <CSidebarBrand
        className="d-none d-md-flex"
        to="/"
        style={{ backgroundColor: 'white', color: 'white' }}
      >
        {/* <CIcon className="sidebar-brand-full" icon={logoNegative} height={35} />
        <CIcon className="sidebar-brand-narrow" icon={sygnet} height={35} /> */}
        <img
          alt="icon"
          style={{ height: '100px', width: '100%', backgroundColor: '#2711f0' }}
          src={Logo}
        ></img>
      </CSidebarBrand>
      <CSidebarNav style={{ backgroundColor: '#2711f0', color: 'white' }}>
        <SimpleBar style={{ color: 'white' }}>
          <AppSidebarNav items={navigation} />
        </SimpleBar>
      </CSidebarNav>
      <CSidebarToggler
        style={{ backgroundColor: '#2711f0', color: 'white' }}
        className="d-none d-lg-flex"
        onClick={() => dispatch({ type: 'set', sidebarUnfoldable: !unfoldable })}
      />
    </CSidebar>
  )
}

export default React.memo(AppSidebar)
