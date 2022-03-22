import React, { Component } from 'react'

export class NewsItem extends Component {

    render() {
        let {title, description, urlToImage, url, author, publishedAt, source} = this.props;
        return (
            <div className="card">
                <span className="position-absolute top-0 translate-middle badge rounded-pill bg-danger" style={{left:"70%", top:"-2%", zIndex:1}}>{source}</span>
                <img className="card-img-top" src={urlToImage} alt="Card cap"/>
                <div className="card-body">
                <h5 className="card-title">{title}...</h5>
                <p className="card-text">{description}...</p>
                <p className="card-text text-info">By: {author} on {new Date(publishedAt).toGMTString()}</p>
                <a href={url} target="_blank" rel="noopener noreferrer" className="btn btn-primary btn-dark">Read Article</a>
                </div>
            </div>
        )
    }

}

export default NewsItem
