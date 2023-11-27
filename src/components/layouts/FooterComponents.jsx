import React from 'react'
import { Link } from 'react-router-dom'

function FooterComponents() {
  return (
    <React.Fragment>
          {/* Newsletter Start */}
          <div className="container-fluid position-relative pt-5 wow fadeInUp" data-wow-delay="0.1s" style={{zIndex: 1}}>
          <div className="container">
            <div className="bg-primary p-5">
              <form className="mx-auto" style={{maxWidth: '600px'}}>
                <div className="input-group">
                  <input type="text" className="form-control border-white p-3" placeholder="Your Email" />
                  <button className="btn btn-dark px-4">Sign Up</button>
                </div>
              </form>
            </div>
          </div>
        </div>
        {/* Newsletter End */}
       {/* Footer Start */}
       <div className="container-fluid bg-dark text-light py-5 wow fadeInUp" data-wow-delay="0.3s" style={{marginTop: '-75px'}}>
          <div className="container pt-5">
            <div className="row g-5 pt-4">
              <div className="col-lg-3 col-md-6">
                <h3 className="text-white mb-4">Quick Links</h3>
                <div className="d-flex flex-column justify-content-start">
                  <Link className="text-light mb-2" to='/'><i className="bi bi-arrow-right text-primary me-2" />Home</Link>
                  <Link className="text-light mb-2" to='/about-us'><i className="bi bi-arrow-right text-primary me-2" />About Us</Link>
                  <Link className="text-light mb-2" to='/service'><i className="bi bi-arrow-right text-primary me-2" />Our Services</Link>
                  <Link className="text-light" to='/contact-us'><i className="bi bi-arrow-right text-primary me-2" />Contact Us</Link>
                </div>
              </div>
    
              <div className="col-lg-6 col-md-12">
                <h3 className="text-white mb-4">Get In Touch</h3>
                <p className="mb-2"><i className="bi bi-geo-alt text-primary me-2" />Kageshwori Manohara-7,Harhar Mahadev,Kathmandu</p>
                <p className="mb-2"><i className="bi bi-envelope-open text-primary me-2" /><a href="mailto:alphamediconcern@gmail.com" className='text-white'>alphamediconcern@gmail.com</a></p>
                <p className="mb-0"><i className="bi bi-telephone text-primary me-2" /><a href="tel:+97714992321" className='text-white'>+977 14992321 </a>,<a href="tel:9841085714" className='text-white'>+977 9841085714</a></p>
              </div>
              <div className="col-lg-3 col-md-6">
                <h3 className="text-white mb-4">Follow Us</h3>
                <div className="d-flex">
                  <a className="btn btn-lg btn-primary btn-lg-square rounded me-2" href="#"><i className="fab fa-twitter fw-normal" /></a>
                  <a className="btn btn-lg btn-primary btn-lg-square rounded me-2" href="#"><i className="fab fa-facebook-f fw-normal" /></a>
                  <a className="btn btn-lg btn-primary btn-lg-square rounded me-2" href="#"><i className="fab fa-linkedin-in fw-normal" /></a>
                  <a className="btn btn-lg btn-primary btn-lg-square rounded" href="#"><i className="fab fa-instagram fw-normal" /></a>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="container-fluid text-light py-4" style={{background: '#051225'}}>
          <div className="container">
            <div className="row g-0">
              <div className="col-md-6 text-center text-md-start">
                <p className="mb-md-0">©2023 <a className="text-white border-bottom" href="#">Alpha Medi Concern Pvt. Ltd</a>. All Rights Reserved.</p>
              </div>
              <div className="col-md-6 text-center text-md-end">
                <p className="mb-0">Designed by <a className="text-white border-bottom" href="#">janak mahara</a><br />
                  Distributed by <a className="text-white border-bottom" href="#">niranjan sharma</a>              
                </p>
              </div>
            </div>
          </div>
        </div>
        {/* Footer End */}
      
      </React.Fragment>
  )
}

export default FooterComponents