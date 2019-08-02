import React, { Component } from 'react';
import axios from 'axios';
import NewsItem from './NewsItem';
import Footer from './Footer';


const API_KEY = process.env.REACT_APP_NEWS_API_KEY;

class News extends Component {
    constructor(props) {
        super(props);
        this.state = {
        list: []
      };
    }

    componentDidMount = () => {
        axios.get(`https://newsapi.org/v2/everything?q=period+menstrual&apiKey=${API_KEY}&pageSize=4
             `)
             .then(response => {
                const data = response.data;
                const articles = data.articles;
          
                const list = articles.map((item, index) => {
                  return {
                    key: item.index,
                    source: item.source.name,
                    author: item.author,
                    title: item.title,
                    description: item.description,
                    url: item.url,
                    urlToImage: item.urlToImage,
                    publishedAt: item.publishedAt
                  };
                });
          
                this.setState({
                  list: list
                });
              })
              .catch(error => console.log(error))
          }
            
    
    render() {
        return (
          <div className="grid-container">
            <div>
             <h3>NEWS</h3>
              <div className="row">
                {this.state.list.map((item, index) => (
                  <div key={index} className="col-lg-6 col-6 col-md-5 list-info">
                    <NewsItem
                      source={item.source.name}
                      title={item.title}
                      author={item.author}
                      description={item.description}
                      urlToImage={item.urlToImage}
                      url={item.url}
                    />
                </div>
                ))}
              </div>
            </div>
            <div>
              <Footer />
            </div>
        </div>
        );
   }
}

export default News;