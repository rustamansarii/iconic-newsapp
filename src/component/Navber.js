import React from 'react'

export default function Navber(props) {
  return (
    <div >
      <nav className="navbar navbar-expand-lg bg-body-tertiary" data-bs-theme="dark">
    <div className="container-fluid">
    <img src="https://uploads-ssl.webflow.com/5966ea9a9217ca534caf139f/596d33f36607b12cfdaf8ad2_LogoWhite.png" alt="" width="40" className="failory-logo-image"/> <a className="navbar-brand" href="/">{props.Name}</a>
      <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
        <span className="navbar-toggler-icon"></span>
      </button>
      <div className="collapse navbar-collapse" id="navbarSupportedContent">
        <ul className="navbar-nav me-auto mb-2 mb-lg-0">
          <li className="nav-item">
            <a className="nav-link active" aria-current="page" href="/">{props.Home}</a>
          </li>
          <li className="nav-item">
            <a className="nav-link active" aria-current="page" href="/sports">{props.News}</a>
          </li>
          <li className="nav-item">
            <a className="nav-link active" aria-current="page" href="/aboutus">{props.About}</a>
          </li>
         
        </ul>
       
      </div>
    </div>
  </nav>
    </div>
  )
}
