import React, { FC } from 'react'

interface PageLayoutProps {
    children: React.ReactNode
}

const PageLayout:FC<PageLayoutProps>= ({children}) => {
  return (
    <div>
        <div>
            <Header />
        </div>
        <div className="children">
            {children}
        </div>
        <div className="footer">
            <Footer />
        </div>
    </div>
  )
}

export default PageLayout