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
      <div>
        {children}
      </div>
    </div>
  )
}

export default Layout
