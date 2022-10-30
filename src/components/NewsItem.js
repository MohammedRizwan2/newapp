import React from "react";

const NewsItem =(props)=> {
  
    let {title,discription,imageUrl,newsUrl,author,date,source}=props
    return (
      <div className="my-3">
        <div className="card" style={{padding:'3px'}}>
          <div style={ {display:'flex',
          justifyContent: 'flex-end',
          position:"absolute",
          right:'0'} }>
        <span className="position-absolute top-0  translate-middle badge rounded-pill bg-danger">
    {source}
    
  </span>
         </div>
          <img src={!imageUrl?"https://upload.wikimedia.org/wikipedia/commons/thumb/4/49/A_black_image.jpg/2560px-A_black_image.jpg":imageUrl} className="card-img-top" alt="..." />
          <div className="card-body">
            <h5 className="card-title">{title} </h5>
            <p className="card-text">
             {discription}
            </p>
            <p className="card-text"><small className="text-muted">by {!author?"Unknown":author} on {new Date(date).toGMTString()}</small></p>
            <a rel="noreferrer" href={newsUrl}target="_balnk" className="btn btn-primary">
              Read more
            </a>
          </div>
        </div>
      </div>
    );
  }


export default NewsItem;
