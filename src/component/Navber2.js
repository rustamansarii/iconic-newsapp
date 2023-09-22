import React from "react";
// import { Link } from "react-router-dom";

export default function Navber2() {
  return (
    <div  data-bs-theme="dark">
      <ul className="nav nav-tabs p-3 " >
        <li className="nav-item">
          <a className="nav-link active" aria-current="page" href="/home">
            Home
          </a>
        </li>
        <li className="nav-item">
          <a className="nav-link text-dark " href="/Health">
            Health
          </a>
        </li>
        <li className="nav-item">
          <a className="nav-link text-dark" href="/Business">
            Business
          </a>
        </li>
        <li className="nav-item">
          <a className="nav-link text-dark" href="/Entertainment">
            Entertainment
          </a>
        </li>
        <li className="nav-item">
          <a className="nav-link text-dark" href="/Science">
            Science
          </a>
        </li>
        <li className="nav-item">
          <a className="nav-link text-dark" href="/Sports">
            Sports
          </a>
        </li>
        <li className="nav-item">
          <a className="nav-link text-dark" href="/Technology">
            Technology
          </a>
        </li>
      </ul>
    </div>
  );
}
