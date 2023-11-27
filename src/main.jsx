import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import { BrowserRouter } from 'react-router-dom'
import "../src/assets/lib/owlcarousel/assets/owl.carousel.min.css"
import "../src/assets/lib/animate/animate.min.css"
import "../src/assets/lib/tempusdominus/css/tempusdominus-bootstrap-4.min.css"
import "../src/assets/lib/twentytwenty/twentytwenty.css"
import "../src/assets/css/bootstrap.min.css"
import "../src/assets/css/style.css"


ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
 
    <BrowserRouter>
    <App />
    </BrowserRouter>
  </React.StrictMode>,
)
