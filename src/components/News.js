import React, { Component } from 'react'
import NewsItem from './NewsItem'

export class News extends Component {
    constructor() {
        super();
        this.state = {
            articles: []
        }
    }
    async componentDidMount() {
        let url = "https://newsapi.org/v2/top-headlines?country=in&apiKey=6b52f123cfbd48a59fbee8dcff4cd78c";
        let data = await fetch(url);
        let parsedData = await data.json();
        this.setState({
            articles: parsedData.articles
        })
    }
    render() {
        return (
            <div className="container my-5">
                <h1 className="my-3">News App - Today's Top Headlines</h1>
                <div className="row">
                    {this.state.articles.map((article) => {
                        return <div className="col-md-4 my-3" key={article.url}>
                            <NewsItem 
                                title={article.title?article.title.slice(0, 40):""} 
                                description={article.description?article.description.slice(0, 100):""} 
                                url={article.url}
                                urlToImage={article.urlToImage?article.urlToImage:"https://media.istockphoto.com/photos/breaking-news-world-news-with-map-backgorund-picture-id1182477852?k=20&m=1182477852&s=612x612&w=0&h=I3wdSzT_5h1y9dHq_YpZ9AqdIKg8epthr8Guva8FkPA="} 
                            />
                        </div>
                    })}
                </div>
            </div>
        )
  }
}

export default News
