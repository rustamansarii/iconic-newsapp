import React, { useState, useEffect } from 'react';

export default function Home() {
  const [data, setData] = useState([]);

  const fetchInfo = () => {
    return fetch(`https://newsapi.org/v2/top-headlines?sources=techcrunch&apiKey=ad15d7ea1e2f4f8c82d692794148e00e`)
      .then((res) => res.json())
      .then((d) => setData(d.articles || [])) // Use d.articles here to set the data or set to an empty array if it's falsy
  }

  useEffect(() => {
    fetchInfo();
  }, []);

  return (
    <div>
      <div id="carouselExampleInterval" className="carousel slide" data-bs-ride="carousel">
        <div className="carousel-inner">
          {Array.isArray(data) && data.map((dataObj, index) => {
            return (
              <div className={`carousel-item ${index === 0 ? 'active' : ''}`} data-bs-interval="10000" key={index}>
                <img src={dataObj.urlToImage} className="d-block w-100" alt="News" onClick={fetchInfo} style={ {height : "500px"}} />
              </div>
            );
          })}
        </div>
        <button className="carousel-control-prev" type="button" data-bs-target="#carouselExampleInterval" data-bs-slide="prev">
          <span className="carousel-control-prev-icon" aria-hidden="true"></span>
          <span className="visually-hidden">Previous</span>
        </button>
        <button className="carousel-control-next" type="button" data-bs-target="#carouselExampleInterval" data-bs-slide="next">
          <span className="carousel-control-next-icon" aria-hidden="true"></span>
          <span className="visually-hidden">Next</span>
        </button>
      </div>
    </div>
  )
}
