import React, { Component } from "react";

export class NewsItem extends Component {
  render() {
    let {title,discription,imageUrl,newsUrl}=this.props
    return (
      <div className="my-3">
        <div className="card" style={{width:'18rem'}}>
          <img src={!imageUrl?"https://upload.wikimedia.org/wikipedia/commons/thumb/4/49/A_black_image.jpg/2560px-A_black_image.jpg":imageUrl} className="card-img-top" alt="..." />
          <div className="card-body">
            <h5 className="card-title">{title}...</h5>
            <p className="card-text">
             {discription}
            </p>
            <a rel="noreferrer" href={newsUrl}target="_balnk" className="btn btn-primary">
              Read more
            </a>
          </div>
        </div>
      </div>
    );
  }
}

export default NewsItem;
