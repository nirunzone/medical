import React, {useState} from 'react'
import { Link } from 'react-router-dom'

function HeaderComponents() {
  const [isClick,setIsClick]=useState(false);
  const handleClick=event=>{
    setIsClick(current=>!current);
  }
  return (
    <React.Fragment>
         {/* Topbar Start */}
         <div className="container-fluid bg-light ps-5 pe-0 d-none d-lg-block">
          <div className="row gx-0">
            <div className="col-md-4 text-center text-lg-start mb-2 mb-lg-0">
             <div className="row gx-0">
              <div className="col-md-6 text-center text-lg-start mb-2 mb-lg-0">
              <div className="d-inline-flex align-items-center">
                <small className="py-2">Reg No. 299974/079/080</small>
              </div>
              </div>
              <div className="col-md-6 text-center text-lg-start mb-2 mb-lg-0">
              <div className="d-inline-flex align-items-center">
                <small className="py-2">PAN/VAT No. 610375752</small>
              </div>
              </div>
              </div>
            </div>
            <div className="col-md-8 text-center text-lg-end">
              <div className="position-relative d-inline-flex align-items-center bg-primary text-white top-shape px-5">
                <div className="me-3 pe-3 border-end py-2">
                  <p className="m-0"><i className="fa fa-envelope-open me-2" /><a href="mailto:alphamediconcern@gmail.com" className='text-white'>alphamediconcern@gmail.com</a></p>
                </div>
                <div className="py-2">
                  <p className="m-0"><i className="fa fa-phone-alt me-2" /><a href="tel:+97714992321" className='text-white'>+977 14992321 </a>,<a href="tel:9841085714" className='text-white'>+977 9841085714</a></p>
                </div>
              </div>
            </div>
          </div>
        </div>
        {/* Topbar End */}
        {/* Navbar Start */}
        <nav className="navbar navbar-expand-lg bg-white navbar-light shadow-sm px-5 py-3 py-lg-0">
          <Link to="./" className="navbar-brand p-0">
             <img src="../../../public/logo.jpg" width="70px" alt="" />
          </Link>
          <button className={isClick? "navbar-toggler":"navbar-toggler collapsed"} onClick={()=>handleClick()} type="button" data-bs-toggle="collapse" data-bs-target="#navbarCollapse" aria-expanded={isClick?'true':'false'}>
            <span className="navbar-toggler-icon" />
          </button>
          <div className={isClick?"collapse navbar-collapse show":"collapse navbar-collapse"} id="navbarCollapse">
            <div className="navbar-nav ms-auto py-0">
              <Link to="/" className="nav-item nav-link active">Home</Link>
              <Link to="/about-us" className="nav-item nav-link">About</Link>
              <Link  to="/service" className="nav-item nav-link">Service</Link>
              <Link  to="/contact-us" className="nav-item nav-link">Contact</Link>
            </div>
            <Link to="/carrier" className="btn btn-primary py-2 px-4 ms-3">Carieer</Link>
          </div>
        </nav>
        {/* Navbar End */}
        {/* Full Screen Search Start */}
        <div className="modal fade" id="searchModal" tabIndex={-1}>
          <div className="modal-dialog modal-fullscreen">
            <div className="modal-content" style={{background: 'rgba(9, 30, 62, .7)'}}>
              <div className="modal-header border-0">
                <button type="button" className="btn bg-white btn-close" data-bs-dismiss="modal" aria-label="Close" />
              </div>
              <div className="modal-body d-flex align-items-center justify-content-center">
                <div className="input-group" style={{maxWidth: '600px'}}>
                  <input type="text" className="form-control bg-transparent border-primary p-3" placeholder="Type search keyword" />
                  <button className="btn btn-primary px-4"><i className="bi bi-search" /></button>
                </div>
              </div>
            </div>
          </div>
        </div>
        {/* Full Screen Search End */}

       
   </React.Fragment>
  )
}


export default HeaderComponents