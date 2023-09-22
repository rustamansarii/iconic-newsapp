import React from 'react'

export default function Newsitem(props) {
    const truncatedTitle = props.title ? props.title.slice(0, 50) : '';
    const truncatedDescription = props.description ? props.description.slice(0, 100) : '';
  
  return (
    
    <>
      <div className="card mx-3 my-3"  >
  <img src={!props.img ? "https://image.cnbcfm.com/api/v1/image/107175208-1673023141129-gettyimages-1442239937-dscf2185_a1ea2d6d-0333-4f8a-b53c-04fbb8e4ae0c.jpeg?v=1692633786&w=1920&h=1080":props.img } className="card-img-top" alt="..."/>
  <div className="card-body">
    <h5 className="card-title">{truncatedTitle}...</h5>
    <p className="card-text">{truncatedDescription}...</p>
    <a href={props.url} className="btn btn-primary">Go somewhere</a>
  </div>
</div>
    </>
  )
}
