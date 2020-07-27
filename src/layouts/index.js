import React from 'react'
import Header from './Header'

const HeaderMemo = React.memo(Header)

const Layout = ({
  children
}) => {
  console.log('Layout Rendered')
  return(
    <div>
      <HeaderMemo />
      <div className="position-relative p-3">
        {children}
      </div>
    </div>
  )
}

export default Layout
