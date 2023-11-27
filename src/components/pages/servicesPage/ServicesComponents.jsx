import React from 'react'
import HeaderComponents from '../../layouts/HeaderComponents'
import FooterComponents from '../../layouts/FooterComponents'

function ServicesComponents() {
  return (
    <React.Fragment>
        <HeaderComponents />
        {/* Banner Start */}
        <div className="container-fluid banner mb-5" style={{marginTop:'50px', padding:'5px'}}>
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
        <FooterComponents />
    </React.Fragment>
  )
}

export default ServicesComponents