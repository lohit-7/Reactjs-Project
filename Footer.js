import React from 'react'
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min.js';
import { FaTwitter, FaInstagram, FaFacebook } from 'react-icons/fa';

function Footer() {
  return (
    <div>
      <footer class="d-flex flex-wrap justify-content-between align-items-center py-3 my-4 border-top">
    <div class="col-md-4 d-flex align-items-center">
      <a href="/" class="mb-3 me-2 mb-md-0 text-muted text-decoration-none lh-1">
        <svg class="bi" width="30" height="24"></svg>
      </a>
      <span class="text-muted">© 2021 Company, Inc</span>
    </div>

    <ul className="nav col-md-4 justify-content-end list-unstyled d-flex">
  <li className="ms-3">
    <a className="text-muted" href="https://www.twitter.com">
      <FaTwitter size={24} />
    </a>
  </li>
  <li className="ms-3">
    <a className="text-muted" href="https://www.instagram.com">
      <FaInstagram size={24} />
    </a>
  </li>
  <li className="ms-3">
    <a className="text-muted" href="https://www.facebook.com">
      <FaFacebook size={24} />
    </a>
  </li>
</ul>
  </footer>
    </div>
  )
}

export default Footer
