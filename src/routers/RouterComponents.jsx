import React from 'react'
import { Routes,Route} from 'react-router-dom'
import HomeComponents from '../components/pages/homepage/HomeComponents'
import AboutUsComponents from '../components/pages/aboutUsPage/AboutUsComponents'
import ServicesComponents from '../components/pages/servicesPage/ServicesComponents'
import ContactComponents from '../components/pages/contactPage/ContactComponents'
import CarieerComponents from '../components/pages/carieerPage/CarieerComponents'
function RouterComponents() {
  return (
    <React.Fragment>
       <Routes>
          <Route path='/' element={<HomeComponents/>}/>
          <Route path='/about-us' element={<AboutUsComponents />}/>
          <Route path='/service' element={<ServicesComponents />} />
          <Route path='/contact-us' element={<ContactComponents />} />
          <Route path='/carrier' element={<CarieerComponents />} />
       </Routes>
    </React.Fragment>
  )
}

export default RouterComponents