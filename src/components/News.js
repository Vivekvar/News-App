import React, { Component } from 'react'
import NewsItem from './NewsItem'
import Spinner from './Spinner'
import PropTypes from 'prop-types'
import InfiniteScroll from "react-infinite-scroll-component"
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

    async componentDidMount() {
        this.props.setProgress(10);
        const url = `https://newsapi.org/v2/top-headlines?country=in&category=${this.props.category}&apiKey=033ef238766340e78f8d33eaf871e79b&page=${this.state.page}&pageSize=${this.state.pageSize}`;
        this.setState({
            loading: true
        })
        let data = await fetch(url);
        this.props.setProgress(50);
        let parsedData = await data.json();
        this.props.setProgress(70);
        this.setState({
            articles: parsedData.articles,
            totalResults: parsedData.totalResults,
            loading: false
        })
        this.props.setProgress(100);
    }

    capitalize = (category) => {
        return category[0].toUpperCase() + category.slice(1);
    }

    fetchMoreData = async () => {
        this.setState({
            page: this.state.page + 1
        })
        const url = `https://newsapi.org/v2/top-headlines?country=in&category=${this.props.category}&apiKey=033ef238766340e78f8d33eaf871e79b&page=${this.state.page}&pageSize=${this.state.pageSize}`;
        let data = await fetch(url);
        let parsedData = await data.json();
        this.setState({
            articles: this.state.articles.concat(parsedData.articles),
            totalResults: parsedData.totalResults,
        })
    }
    
    render() {
        return (
            <>
                <h1 className="text-center my-5">News App - Top {this.capitalize(this.props.category)} Headlines</h1>
                {this.state.loading && <Spinner />}
                <InfiniteScroll
                    dataLength={this.state.articles.length}
                    next={this.fetchMoreData}
                    hasMore={this.state.articles.length !== this.state.totalResults}
                    loader={<Spinner />}
                >
                <div className="container">
                    <div className="row">
                        {this.state.articles.filter((article) => {
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
                </div>
                </InfiniteScroll>
            </>
        )
    }

}

export default News
