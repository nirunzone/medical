import React from 'react'
import HeaderComponents from '../../layouts/HeaderComponents'
import FooterComponents from '../../layouts/FooterComponents'

function ContactComponents() {
  return (
    <React.Fragment>
        <HeaderComponents />
        {/* Hero Start */}
  <div className="container-fluid bg-primary py-5 hero-header mb-5">
    <div className="row py-3">
      <div className="col-12 text-center">
        <h1 className="display-3 text-white animated zoomIn">Contact Us</h1>
        <a href="" className="h4 text-white">
          Home
        </a>
        <i className="far fa-circle text-white px-2" />
        <a href="" className="h4 text-white">
          Contact
        </a>
      </div>
    </div>
  </div>
  {/* Hero End */}
  {/* Contact Start */}
  <div className="container-fluid py-5">
    <div className="container">
      <div className="row g-5">
        <div className="col-xl-4 col-lg-6 wow slideInUp" data-wow-delay="0.1s">
          <div className="bg-light rounded h-100 p-5">
            <div className="section-title">
              <h5 className="position-relative d-inline-block text-primary text-uppercase">
                Contact Us
              </h5>
              <h1 className="display-6 mb-4">Feel Free To Contact Us</h1>
            </div>
            <div className="d-flex align-items-center mb-2">
              <i className="bi bi-geo-alt fs-1 text-primary me-3" />
              <div className="text-start">
                <h5 className="mb-0">Our Office</h5>
                <span>Kageshwori Manohara 7, Harhar Mahadev KTM</span>
              </div>
            </div>
            <div className="d-flex align-items-center mb-2">
              <i className="bi bi-envelope-open fs-1 text-primary me-3" />
              <div className="text-start">
                <h5 className="mb-0">Email Us</h5>
                <span>alphamediconcern@gmail.com</span>
              </div>
            </div>
            <div className="d-flex align-items-center">
              <i className="bi bi-phone-vibrate fs-1 text-primary me-3" />
              <div className="text-start">
                <h5 className="mb-0">Call Us</h5>
                <span>+977 9841085714</span><br />
                <span>+977 9861601473</span>
              </div>
            </div>
          </div>
        </div>
        <div className="col-xl-4 col-lg-6 wow slideInUp" data-wow-delay="0.3s">
          <form>
            <div className="row g-3">
              <div className="col-12">
                <input
                  type="text"
                  className="form-control border-0 bg-light px-4"
                  placeholder="Your Name"
                  style={{ height: 55 }}
                />
              </div>
              <div className="col-12">
                <input
                  type="email"
                  className="form-control border-0 bg-light px-4"
                  placeholder="Your Email"
                  style={{ height: 55 }}
                />
              </div>
              <div className="col-12">
                <input
                  type="text"
                  className="form-control border-0 bg-light px-4"
                  placeholder="Subject"
                  style={{ height: 55 }}
                />
              </div>
              <div className="col-12">
                <textarea
                  className="form-control border-0 bg-light px-4 py-3"
                  rows={5}
                  placeholder="Message"
                  defaultValue={""}
                />
              </div>
              <div className="col-12">
                <button className="btn btn-primary w-100 py-3" type="submit">
                  Send Message
                </button>
              </div>
            </div>
          </form>
        </div>
        <div className="col-xl-4 col-lg-12 wow slideInUp" data-wow-delay="0.6s">
          <iframe
            className="position-relative rounded w-100 h-100"
            src="https://www.google.com/maps/embed?pb=!1m17!1m12!1m3!1d3532.6981755923484!2d85.38024100000001!3d27.695722!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m2!1m1!2zMjfCsDQxJzQ0LjYiTiA4NcKwMjInNDguOSJF!5e0!3m2!1sen!2snp!4v1701067021776!5m2!1sen!2snp"
            frameBorder={0}
            style={{ minHeight: 400, border: 0 }}
            allowFullScreen=""
            aria-hidden="false"
            tabIndex={0}
          />
        </div>
      </div>
    </div>
  </div>
  {/* Contact End */}
        <FooterComponents />
    </React.Fragment>
  )
}

export default ContactComponents