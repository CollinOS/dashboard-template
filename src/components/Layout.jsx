import React from "react"
import Header from "./Header"
import Footer from "./Footer"

const Layout = ({children}) => {
  return(
    <div>
      <main className="flex flex-col justify-center">
        <Header />
          {children}
        <Footer />
      </main>
    </div>
  )
}

export default Layout