import React from 'react'

const NewsItem =(props)=> {
    let {title,description,imageurl,newsurl, author, date,source} = props;
    return (
      <div className='my-3'>
       <div className="card">
        <div style={{display:'flex',justifyContent:'flex-end',position:"absolute",right:"0"}}>
       <span className=" badge rounded-pill bg-primary">
        {source}</span></div>
    <img src={imageurl ? imageurl : "https://static.toiimg.com/photo/msid-102116495/102116495.jpg?pl=21300"} className="card-img-top" alt="..." />
     <div className="card-body">
    <h5 className="card-title">{title}</h5>
    <p className="card-text">{description}</p>
    <p className="card-text"><small className="text-body-secondary"><b>By {author?author:"Unknown"} on {new Date(date).toString()}</b></small></p>
    <a rel="noreferrer" href={newsurl} target='_blank' className="btn btn-sm btn-primary">Read More</a>
    </div>
    </div>
      </div>
    )
}

export default NewsItem
