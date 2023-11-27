import React from 'react'
import HeaderComponents from '../../layouts/HeaderComponents'
import FooterComponents from '../../layouts/FooterComponents'
import { Link } from 'react-router-dom'

function AboutUsComponents() {
  return (
    <React.Fragment>
        <HeaderComponents />
         {/* Hero Start */}
  <div className="container-fluid bg-primary py-5 hero-header mb-5">
    <div className="row py-3">
      <div className="col-12 text-center">
        <h1 className="display-3 text-white animated zoomIn">About Us</h1>
        <a href="" className="h4 text-white">
          Home
        </a>
        <i className="far fa-circle text-white px-2" />
        <a href="" className="h4 text-white">
          About
        </a>
      </div>
    </div>
  </div>
  {/* Hero End */}
  {/* About Start */}
  <div className="container-fluid py-5 wow fadeInUp" data-wow-delay="0.1s">
    <div className="container">
      <div className="row g-5">
        <div className="col-lg-7">
          <div className="section-title mb-4">
            <h5 className="position-relative d-inline-block text-primary text-uppercase">
              About Us
            </h5>
            <h1 className="display-5 mb-0"  style={{fontSize:'20px'}}>The Procurement of Supply, Delivery of essential medicines and surgical materials </h1>
          </div>
          <h4 className="text-body fst-italic mb-4" style={{fontSize:'18px'}}> we will try to improve the national health status by increasing access to health products and services</h4>
                <p className="mb-4">
                Alpha Medi Concern Pvt Ltd is registered as Private Limited Company at the Company Registrar Office under the Company Act 2021 B.S. (1965 AD). The company was registered at the Company Registrar Office on 25th September 2022. Alpha Medi Concern Pvt. Ltd. has 4 shareholders with shareholding from private sector. The 2 member Board of Directors are nominated from the shareholder every four years on rotation basis. After obtaining permission from the Department of Drug Administration on 28th September 2022, this company has been distributing wholesale allopathic medicines produced by companies registered in the Department of Drug Administration. In addition, it has been selling and distributing all surgical materials and health related equipment. Its registered office is at Kageshwari Manohara-7, Harhar Mahadev, Kathmandu. This company sells and distributes medicines, surgical materials and health supplies which are provided free of charge by the local government i.e. rural municipalities /municipalities of Nepal to their local residents. Municipalities call for the purchase of such materials through open bidding or quotations. This company was established in order to contribute to the sensitive and very important health sector and to distribute quality materials. Also, we will try to improve the national health status by increasing access to health products and services.
                </p>
          <div className="row g-3">
            <div className="col-sm-6 wow zoomIn" data-wow-delay="0.3s">
              <h5 className="mb-3">
                <i className="fa fa-check-circle text-primary me-3" />
                4 Shareholders
              </h5>
              <h5 className="mb-3">
                <i className="fa fa-check-circle text-primary me-3" />
                Professional Staff
              </h5>
            </div>
            <div className="col-sm-6 wow zoomIn" data-wow-delay="0.6s">
              <h5 className="mb-3">
                <i className="fa fa-check-circle text-primary me-3" />
                24/7 Opened
              </h5>
              <h5 className="mb-3">
                <i className="fa fa-check-circle text-primary me-3" />
                Fair Prices
              </h5>
            </div>
          </div>
          <Link
           to='/'
            className="btn btn-primary py-3 px-5 mt-4 wow zoomIn"
            data-wow-delay="0.6s"
          >
            Make Appointment
          </Link>
        </div>
        <div className="col-lg-5" style={{ minHeight: 500 }}>
          <div className="position-relative h-100">
            <img
              className="position-absolute w-100 h-100 rounded wow zoomIn"
              data-wow-delay="0.9s"
              src="img/about.jpg"
              style={{ objectFit: "cover" }}
            />
          </div>
        </div>
      </div>
    </div>
  </div>
  {/* About End */}
  <FooterComponents />
    </React.Fragment>
  )
}

export default AboutUsComponents