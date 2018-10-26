import React from "react";
// import {Link} from "react-router-dom";
import axios from "axios";
import Saved from "./Saved.js";
import Search from "./Search.js";
import Results from "./Results.js";



class Home extends React.Component {
  state = {
    subject: "",
    beginYear: "",
    endYear: "",
    articles: [],
    savedArticles: []
  };

  componentDidMount(){
    this.displaySaveArticle();
  }

  handleSubject = (event) => {
    this.setState({ subject: event.target.value })
  };

  handleBeginYear = (event) => {
    this.setState({ beginYear: event.target.value })
  };

  handleEndYear = (event) => {
    this.setState({ endYear: event.target.value })
  };

  handleSaveArticle = (id) => {
    const articleID = this.state.articles.find((item) => item._id === id);
    axios.post("api/articles/", {title:articleID.headline.main, date: articleID.pub_date, url: articleID.web_url})
    .then(this.displaySaveArticle());
      
  }

  handleDelete = (id) => {
    axios.delete(`api/articles/${id}`)
    .then(this.displaySaveArticle());
  }


  displaySaveArticle = () =>{
    axios.get("api/articles/").then((res) => {
      this.setState({
        savedArticles: res.data
      })
    })
  }

  searchArticle = () => {
    const apiKey = "d0254c65766f4633a68e2a83973f20e6";
    const queryUrl = "https://api.nytimes.com/svc/search/v2/articlesearch.json?api-key=" +
      apiKey + "&q=" + this.state.subject + "&begin_date=" + this.state.beginYear + "0101&end_date=" + this.state.endYear + "0101";

    return axios.get(queryUrl).then((res) => {
      console.log(res);
      this.setState({ articles: res.data.response.docs });
    });
  }


  handleSubmit = (event) => {
    event.preventDefault();
    this.searchArticle();

  }

  render() {
    return (
      <div>
        <Search
          handleSubject={this.handleSubject}
          handleBeginYear={this.handleBeginYear}
          handleEndYear={this.handleEndYear}
          handleSubmit={this.handleSubmit}
        />
        <h2>Search Results</h2>
        {this.state.articles.map(item => (
          <Results
            _id={item._id}
            key={item._id}
            title={item.headline.main}
            snippet={item.snippet}
            date={item.pub_date}
            url={item.web_url}
            handleSaveArticle={this.handleSaveArticle}
          />
        ))}
        
        <h2>Saved Articles</h2>
        {this.state.savedArticles.map(item => (
        <Saved 
          _id={item._id}
          key={item._id}
          title={item.title}
          snippet={item.snippet}
          date={item.date}
          url={item.url}
          displaySaveArticle={this.displaySaveArticle}
          handleDelete={this.handleDelete}
          />
        ))}
      </div>
    );
  }
}

export default Home;



