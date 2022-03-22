import React, { Component } from 'react'
import NewsItem from './NewsItem'

export class News extends Component {
  render() {
    return (
        <div className="container my-5">
            <h1 className="my-5">News App - Top Headlines</h1>
            <div className="row">
                <div className="col-md-4">
                    <NewsItem />
                </div>
                <div className="col-md-4">
                    <NewsItem />
                </div>
                <div className="col-md-4">
                    <NewsItem />
                </div>
            </div>
        </div>
    )
  }
}

export default News
