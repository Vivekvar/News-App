import React, { Component } from 'react'

export class NewsItem extends Component {

    render() {
        let {title, description, urlToImage, url} = this.props;
        return (
            <div className="card">
                <img className="card-img-top" src={urlToImage} alt="Card cap"/>
                <div className="card-body">
                <h5 className="card-title">{title}...</h5>
                <p className="card-text">{description}...</p>
                <a href={url} target="_blank" rel="noopener noreferrer" className="btn btn-primary btn-dark">Read Article</a>
                </div>
            </div>
        )
    }

}

export default NewsItem
