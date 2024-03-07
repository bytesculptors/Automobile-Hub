import React, {Fragment} from 'react'
import { Link } from 'react-router-dom'
import Header from './Home_Components/Header/Header'
import Footer from './Home_Components/Footer/Footer'
import Routers from './routers/Routers'
function Home() {
  return (
    <Fragment>
      <Header/>
      <div>
        <Routers/>
      </div>
      <Footer/>
    </Fragment>
  )
}

export default Home
