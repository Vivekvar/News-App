import React, { Component } from 'react'
import NewsItem from './NewsItem'
import Spinner from './Spinner'
import PropTypes from 'prop-types'
export class News extends Component {

    static defaultProps = {
        category: "general"
    }

    static propTypes = {
        category: PropTypes.string
    }

    constructor() {
        super();
        this.state = {
            articles: [],
            page: 1,
            totalResults: 0,
            pageSize: 12,
            loading: true
        }
    }

    async updatePage() {
        const url = `https://newsapi.org/v2/top-headlines?country=in&category=${this.props.category}&apiKey=6b52f123cfbd48a59fbee8dcff4cd78c&page=${this.state.page}&pageSize=${this.state.pageSize}`;
        this.setState({
            loading: true
        })
        let data = await fetch(url);
        let parsedData = await data.json();
        this.setState({
            articles: parsedData.articles,
            totalResults: parsedData.totalResults,
            loading: false
        })
    }

    async componentDidMount() {
        await this.updatePage();
    }

    handlePrevious = async () => {
        await this.setState({
            page: this.state.page - 1
        })
        await this.updatePage();
    }

    handleNext = async () => {
        await this.setState({
            page: this.state.page + 1
        })
        await this.updatePage();
    }

    render() {
        return (
            <div className="container my-5">
                <h1 className="text-center my-3">News App - Today's Top Headlines</h1>
                {this.state.loading && <Spinner />}
                <div className="row">
                    {!this.state.loading && this.state.articles.filter((article) => {
                        let title = article.title.toLowerCase(), query = this.props.searchQuery.toLowerCase();
                        return title.includes(query);
                    }).map((article) => {
                        return <div className="col-md-4 my-3" key={article.url}>
                            <NewsItem 
                                title={article.title?article.title.slice(0, 40):""} 
                                description={article.description?article.description.slice(0, 100):""} 
                                url={article.url}
                                urlToImage={article.urlToImage?article.urlToImage:"https://media.istockphoto.com/photos/breaking-news-world-news-with-map-backgorund-picture-id1182477852?k=20&m=1182477852&s=612x612&w=0&h=I3wdSzT_5h1y9dHq_YpZ9AqdIKg8epthr8Guva8FkPA="} 
                                author={article.author?article.author:"Unknown source"}
                                publishedAt={article.publishedAt}
                                source={article.source.name}
                            />
                        </div>
                    })}
                </div>
                <div className="d-flex justify-content-between my-5">
                    <button type="button" disabled={this.state.page<=1} onClick={this.handlePrevious} className="btn btn-dark">&larr; Previous</button>
                    <button type="button" disabled={this.state.page>=Math.ceil(this.state.totalResults/this.state.pageSize)} onClick={this.handleNext} className="btn btn-dark">Next &rarr;</button>
                </div>
            </div>
        )
    }

}

export default News
