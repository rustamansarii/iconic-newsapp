import React, { useEffect, useState } from 'react';
import Newsitem from './Newsitem';
import Spinner2 from './Spinner2';
import PropTypes from 'prop-types'


export default function News1(props) {
  const [news, setNews] = useState([]);
  const [page, setPage] = useState(1);
  const [loading, setLoading] = useState(false);
  const [totalResults, setTotalResults] = useState();

  const fetchNewsData = () => {

    fetch(`https://newsapi.org/v2/top-headlines?country=${props.country}&category=${props.category}&apiKey=ad15d7ea1e2f4f8c82d692794148e00e&page=${page}&pageSize=16`)
      .then(response => response.json())
      .then(data => {
        setLoading(true);
        setNews(data.articles);
        setTotalResults(data.totalresults);
        
      });
      setLoading(false);
  };

  useEffect(() => {
    fetchNewsData();
   
  }, []);
  const Nextpage= async () => {
    if (page+1 >Math.ceil(totalResults/props.pageSize)){
  }   else{
   
      fetch(`https://newsapi.org/v2/top-headlines?country=${props.country}&category=${props.category}&apiKey=ad15d7ea1e2f4f8c82d692794148e00e&page=${page+1 }&pageSize=16`)
      .then(response => response.json())
      .then(data => {
        setLoading(true);
        setNews(data.articles);
        setTotalResults(data.totalResults);
      });
      console.log("next");
    setPage(page+1);
    setLoading(false);
    }
    
  
  }
 const Pageback= async()=>{
  fetch(`https://newsapi.org/v2/top-headlines?country=${props.country}&category=${props.category}&apiKey=ad15d7ea1e2f4f8c82d692794148e00e&page=${page-1}&pageSize=16`)
      .then(response => response.json())
      .then(data => {
        setNews(data.articles);
        setLoading(true);
      });
      console.log("Pageback");
    setPage(page-1);
    setLoading(false);
 }
  return (
     <div className="container">
      <div className="container text-center ">
      <h1>Top-Headline</h1> </div>
      {!loading&&<Spinner2/>}
      <div className='d-flex justify-content-between' >
      
      <button type="button" disabled={page<=1} className="btn btn-dark" onClick={Pageback} >&larr; Previous </button>
      <button type="button" disabled={page+1 > Math.ceil(totalResults/20)} className="btn btn-dark" onClick={Nextpage} >  Next &rarr;</button>
      </div>
      <div className="row">
        {loading && news.map((article, url) => (
          <div className="col-md-4" key={url}>
            <Newsitem  img={article.urlToImage}  title={article.title} description={article.description} url={article.url}/>
           
          </div>
        ))}
      </div>
     
    </div>
  )
}




News1.defaultProps = {
  countery: "in",
  pageSize: 12,
  category: "sports",
};

News1.propTypes = {
  countery: PropTypes.string,
  pageSize: PropTypes.number,
  category: PropTypes.string,
};

