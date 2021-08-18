import React from 'react'

export default function a() {
    return (
        <div>
            <header>
      <div className="bg-warning py-2"> 
        Some top header info 
      </div>
      <nav id="navbar_top" className="navbar navbar-expand-lg navbar-dark bg-primary">
        <div className="container">
          <a className="navbar-brand" href="#">Brand</a>
          <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#main_nav">
            <span className="navbar-toggler-icon" />
          </button>
          <div className="collapse navbar-collapse" id="main_nav">
            <ul className="navbar-nav ms-auto">
              <li className="nav-item"><a className="nav-link" href="#"> Menu item </a></li>
              <li className="nav-item"><a className="nav-link" href="#"> Menu item </a></li>
              <li className="nav-item"><a className="nav-link" href="#"> Menu item </a></li>
            </ul>
          </div>
        </div> 
      </nav>
    </header>
        </div>
    )
}

