import React from 'react'
import HeaderComponents from '../../layouts/HeaderComponents'
import FooterComponents from '../../layouts/FooterComponents'
import { Link } from 'react-router-dom'


function HomeComponents() {
  return (
    <React.Fragment>
      <HeaderComponents />
        
        {/* Carousel Start */}
        <div className="container-fluid p-0">
          <div id="header-carousel" className="carousel slide carousel-fade" data-bs-ride="carousel">
            <div className="carousel-inner">
              <div className="carousel-item active">
                <img className="w-100" src="../../../../public/img/carousel-1.jpg" alt="Image" />
                <div className="carousel-caption d-flex flex-column align-items-center justify-content-center">
                  <div className="p-3" style={{maxWidth: '900px'}}>
                    <h5 className="text-white text-uppercase mb-3 animated slideInDown">True Happiness Comes From Within</h5>
                    <h1 className="display-1 text-white mb-md-4 animated zoomIn"><small>Alpha Medi Concern Pvt Ltd.</small></h1>
                    <Link to='/carieer' className="btn btn-primary py-md-3 px-md-5 me-3 animated slideInLeft">Carieer</Link>
                    <Link to='/contact-us' className="btn btn-secondary py-md-3 px-md-5 animated slideInRight">Contact Us</Link>
                  </div>
                </div>
              </div>
            
            </div>
          </div>
        </div>
        {/* Carousel End */}
        {/* Banner Start */}
        <div className="container-fluid banner mb-5">
          <div className="container">
            <div className="row gx-0">
              <div className="col-lg-4 wow zoomIn animated slideInTop" data-wow-delay="1s">
                <div className="bg-primary d-flex flex-column p-3" style={{height: '300px'}}>
                  <h3 className="text-white mb-3">BOD & Shareowners</h3>
                  <div className="d-flex justify-content-between text-white mb-4">
                    <h6 className="text-white mb-0"><i className="fa fa-check-circle text-secondary me-2" />Bimal Khatri </h6>
                    <p className="mb-0"> :Director/ Chairman of BOD</p>
                  </div>
                  <div className="d-flex justify-content-between text-white mb-3">
                    <h6 className="text-white mb-0"><i className="fa fa-check-circle text-secondary me-2" />Rajan Karki </h6>
                    <p className="mb-0"> :Director/ Operations Manager</p>
                  </div>
                  <div className="d-flex justify-content-between text-white mb-3">
                    <h6 className="text-white mb-0"><i className="fa fa-check-circle text-secondary me-2" />Sujan Kumar Poudel </h6>
                    <p className="mb-0">  :Shareowner</p>
                  </div>
                  <div className="d-flex justify-content-between text-white mb-3">
                    <h6 className="text-white mb-0"><i className="fa fa-check-circle text-secondary me-2" />Purna Dhoj Karki </h6>
                    <p className="mb-0">  :Shareowner</p>
                  </div>
            
                </div>
              </div>
              <div className="col-lg-4 wow zoomIn animated slideInBottom" data-wow-delay="2s">
                <div className="bg-dark d-flex flex-column p-4" style={{height: '300px'}}>
                  <h3 className="text-white mb-3">Accomplishments</h3>
                 
                  <p className="mb-0"><i className="fa fa-check-circle text-primary me-2" /> Successfully supplied of medicine and surgical materials at different municipalities of Kavrepalanchowk and Sindhupalchowk including Bhumlu Rural Municipality, Sunkoshi Rural Municipality, Tripurasundari Rural Municipality, Indrawati Rural Municipality, Barhabise Municipality.</p>
                </div>
              </div>
              <div className="col-lg-4 wow zoomIn animated slideInTop" data-wow-delay="3s">
                <div className="bg-secondary d-flex flex-column p-4" style={{height: '300px'}}>
                  <h3 className="text-white mb-2">Upcoming Project</h3>
                  <p style={{color: '#091E3E '}}><i className="fa fa-check-circle  me-2" style={{color: '#091E3E '}} />URM/RCH/MedicineGoods/NCB/07/2080/08, The Procurement of Supply, Delivery of essential medicines and surgical materials of Umakunda Rural Municipality, Ramechhap. (Tender awarded)</p>
                  <p style={{color: '#091E3E '}}><i className="fa fa-check-circle  me-2" style={{color: '#091E3E '}} />Various supplies of medicines and surgical materials to different municipalities through quotation.</p>
                </div>
              </div>
            </div>
          </div>
        </div>
        {/* Banner Start */}
        {/* About Start */}
        <div className="container-fluid py-5 wow fadeInUp" data-wow-delay="0.1s">
          <div className="container">
            <div className="row g-5">
              <div className="col-lg-7">
                <div className="section-title mb-4">
                  <h5 className="position-relative d-inline-block text-primary text-uppercase">About Us</h5>
                  <h1 className="display-5 mb-0"  style={{fontSize:'20px'}}>The Procurement of Supply, Delivery of essential medicines and surgical materials </h1>
                </div>
                <h4 className="text-body fst-italic mb-4" style={{fontSize:'18px'}}> we will try to improve the national health status by increasing access to health products and services</h4>
                <p className="mb-4">Alpha Medi Concern Pvt Ltd is registered as Private Limited Company at the Company Registrar Office under the Company Act 2021 B.S. (1965 AD). The company was registered at the Company Registrar Office on 25th September 2022. Alpha Medi Concern Pvt. Ltd. has 4 shareholders with shareholding from private sector. The 2 member Board of Directors are nominated from the shareholder every four years on rotation basis. After obtaining permission from the Department of Drug Administration on 28th ...
                <Link to='./about-us' className="btn btn-secondary py-md-2 px-md-2 animated slideInRight">Read More</Link>
                </p>
                <div className="row g-3">
                  <div className="col-sm-6 wow zoomIn" data-wow-delay="0.3s">
                    <h5 className="mb-3"><i className="fa fa-check-circle text-primary me-3" />4 Shareholders </h5>
                    <h5 className="mb-3"><i className="fa fa-check-circle text-primary me-3" />Professional Staff</h5>
                  </div>
                  <div className="col-sm-6 wow zoomIn" data-wow-delay="0.6s">
                    <h5 className="mb-3"><i className="fa fa-check-circle text-primary me-3" />24/7 Opened</h5>
                    <h5 className="mb-3"><i className="fa fa-check-circle text-primary me-3" />Fair Prices</h5>
                  </div>
                </div>
                <Link to="./appointment" className="btn btn-primary py-3 px-5 mt-4 wow zoomIn animated slideInLeft" data-wow-delay="0.9s">Appointment</Link>
              </div>
              <div className="col-lg-5" style={{minHeight: '500px'}}>
                <div className="position-relative h-100">
                  <img className="position-absolute w-100 h-100 rounded wow zoomIn" data-wow-delay="0.9s" src="img/about.jpg" style={{objectFit: 'cover'}} />
                </div>
              </div>
            </div>
          </div>
        </div>
        {/* About End */}
        
        {/* Service Start */}
        <div className="container-fluid py-5 wow fadeInUp" data-wow-delay="0.1s">
          <div className="container">
            <div className="row g-5 mb-5">
              <div className="col-lg-5 wow zoomIn" data-wow-delay="0.3s" style={{minHeight: '400px'}}>
                <div className="twentytwenty-container position-relative h-100 rounded overflow-hidden">
                  <img className="position-absolute w-100 h-100" src="img/before.jpg" style={{objectFit: 'cover'}} />
                  <img className="position-absolute w-100 h-100" src="img/after.jpg" style={{objectFit: 'cover'}} />
                </div>
              </div>
              <div className="col-lg-7">
                <div className="section-title mb-5">
                  <h5 className="position-relative d-inline-block text-primary text-uppercase">Our Services</h5>
                  <h1 className="display-5 mb-0">We Offer The Best Quality Medical Equipments</h1>
                </div>
                <div className="row g-5">
                  <div className="col-md-6 service-item wow zoomIn" data-wow-delay="0.6s">
                    <div className="rounded-top overflow-hidden">
                      <img className="img-fluid" src="img/service-1.jpg" alt="" />
                    </div>
                    <div className="position-relative bg-light rounded-bottom text-center p-4">
                      <h5 className="m-0">EKG monitor in intra aortic balloon pump machine</h5>
                    </div>
                  </div>
                  <div className="col-md-6 service-item wow zoomIn" data-wow-delay="0.9s">
                    <div className="rounded-top overflow-hidden">
                      <img className="img-fluid" src="img/service-2.jpg" alt="" />
                    </div>
                    <div className="position-relative bg-light rounded-bottom text-center p-4">
                      <h5 className="m-0">Digital Instruments Accessories</h5>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="row g-5 wow fadeInUp" data-wow-delay="0.1s">
              <div className="col-lg-7">
                <div className="row g-5">
                  <div className="col-md-6 service-item wow zoomIn" data-wow-delay="0.3s">
                    <div className="rounded-top overflow-hidden">
                      <img className="img-fluid" src="img/service-3.jpg" alt="" />
                    </div>
                    <div className="position-relative bg-light rounded-bottom text-center p-4">
                      <h5 className="m-0">Doctor Tools</h5>
                    </div>
                  </div>
                  <div className="col-md-6 service-item wow zoomIn" data-wow-delay="0.6s">
                    <div className="rounded-top overflow-hidden">
                      <img className="img-fluid" src="img/service-4.jpg" alt="" />
                    </div>
                    <div className="position-relative bg-light rounded-bottom text-center p-4">
                      <h5 className="m-0">Dental Equipments</h5>
                    </div>
                  </div>
                </div>
              </div>
              <div className="col-lg-5 service-item wow zoomIn" data-wow-delay="0.9s">
                <div className="position-relative bg-primary rounded h-100 d-flex flex-column align-items-center justify-content-center text-center p-4">
                  <h3 className="text-white mb-3">Make Appointment</h3>
                  <p className="text-white mb-3">Get the desired medical equipments</p>
                  <h2 className="text-white mb-0">9841085714</h2>
                </div>
              </div>
            </div>
          </div>
        </div>
        {/* Service End */}
        {/* Offer Start */}
        <div className="container-fluid bg-offer my-5 py-5 wow fadeInUp" data-wow-delay="0.1s">
          <div className="container py-5">
            <div className="row justify-content-center">
              <div className="col-lg-7 wow zoomIn" data-wow-delay="0.6s">
                <div className="offer-text text-center rounded p-5">
                  <h1 className="display-5 text-white">Save 10% On Your First Medical Equipments</h1>
                  <p className="text-white mb-4">If you could save up to 10% on equipment for your hospital,  your can purchase  visits with our medi care . </p>
                  <Link to='/' className="btn btn-dark py-3 px-5 me-3">Appointment</Link>
                  <Link to ='/about-us' className="btn btn-light py-3 px-5">Read More</Link>
                </div>
              </div>
            </div>
          </div>
        </div>
        {/* Offer End */}
        {/* Pricing Start */}
        <div className="container-fluid py-5 wow fadeInUp" data-wow-delay="0.1s">
          <div className="container">
            <div className="row g-5">
              <div className="col-lg-5">
                <div className="section-title mb-4">
                  <h5 className="position-relative d-inline-block text-primary text-uppercase">Pricing Plan</h5>
                  <h1 className="display-5 mb-0">We Offer Fair Prices for Medical Equipments</h1>
                </div>
                <p className="mb-4">...</p>
                <h5 className="text-uppercase text-primary wow fadeInUp" data-wow-delay="0.3s">You Can Order</h5>
                <h1 className="wow fadeInUp" data-wow-delay="0.6s">+977 9841085714</h1>
              </div>
              <div className="col-lg-7">
                <div className="owl-carousel price-carousel wow zoomIn" data-wow-delay="0.9s">
                  <div className="price-item pb-4">
                    <div className="position-relative">
                      <img className="img-fluid rounded-top" src="img/price-1.jpg" alt="" />
                      <div className="d-flex align-items-center justify-content-center bg-light rounded pt-2 px-3 position-absolute top-100 start-50 translate-middle" style={{zIndex: 2}}>
                        <h2 className="text-primary m-0">$35</h2>
                      </div>
                    </div>
                    <div className="position-relative text-center bg-light border-bottom border-primary py-5 p-4">
                      <h4>Teeth Whitening</h4>
                      <hr className="text-primary w-50 mx-auto mt-0" />
                      <div className="d-flex justify-content-between mb-3"><span>Modern Equipment</span><i className="fa fa-check text-primary pt-1" /></div>
                      <div className="d-flex justify-content-between mb-3"><span>Professional Dentist</span><i className="fa fa-check text-primary pt-1" /></div>
                      <div className="d-flex justify-content-between mb-2"><span>24/7 Call Support</span><i className="fa fa-check text-primary pt-1" /></div>
                      <a href="appointment.html" className="btn btn-primary py-2 px-4 position-absolute top-100 start-50 translate-middle">Appointment</a>
                    </div>
                  </div>
                  <div className="price-item pb-4">
                    <div className="position-relative">
                      <img className="img-fluid rounded-top" src="img/price-2.jpg" alt="" />
                      <div className="d-flex align-items-center justify-content-center bg-light rounded pt-2 px-3 position-absolute top-100 start-50 translate-middle" style={{zIndex: 2}}>
                        <h2 className="text-primary m-0">$49</h2>
                      </div>
                    </div>
                    <div className="position-relative text-center bg-light border-bottom border-primary py-5 p-4">
                      <h4>Dental Implant</h4>
                      <hr className="text-primary w-50 mx-auto mt-0" />
                      <div className="d-flex justify-content-between mb-3"><span>Modern Equipment</span><i className="fa fa-check text-primary pt-1" /></div>
                      <div className="d-flex justify-content-between mb-3"><span>Professional Dentist</span><i className="fa fa-check text-primary pt-1" /></div>
                      <div className="d-flex justify-content-between mb-2"><span>24/7 Call Support</span><i className="fa fa-check text-primary pt-1" /></div>
                      <a href="appointment.html" className="btn btn-primary py-2 px-4 position-absolute top-100 start-50 translate-middle">Appointment</a>
                    </div>
                  </div>
                  <div className="price-item pb-4">
                    <div className="position-relative">
                      <img className="img-fluid rounded-top" src="img/price-3.jpg" alt="" />
                      <div className="d-flex align-items-center justify-content-center bg-light rounded pt-2 px-3 position-absolute top-100 start-50 translate-middle" style={{zIndex: 2}}>
                        <h2 className="text-primary m-0">$99</h2>
                      </div>
                    </div>
                    <div className="position-relative text-center bg-light border-bottom border-primary py-5 p-4">
                      <h4>Root Canal</h4>
                      <hr className="text-primary w-50 mx-auto mt-0" />
                      <div className="d-flex justify-content-between mb-3"><span>Modern Equipment</span><i className="fa fa-check text-primary pt-1" /></div>
                      <div className="d-flex justify-content-between mb-3"><span>Professional Dentist</span><i className="fa fa-check text-primary pt-1" /></div>
                      <div className="d-flex justify-content-between mb-2"><span>24/7 Call Support</span><i className="fa fa-check text-primary pt-1" /></div>
                      <a href="appointment.html" className="btn btn-primary py-2 px-4 position-absolute top-100 start-50 translate-middle">Appointment</a>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        {/* Pricing End */}
    
     
     
        <FooterComponents />

        </React.Fragment>
  )
}

export default HomeComponents