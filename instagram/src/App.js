import React, { Component } from 'react';
import './App.css';

import SearchBar from './SearchBar.js';
import PostContainer from './PostContainer.js';

import postData from './application-data.js';

class App extends Component {

  constructor(props) {
    super(props);
    
    this.state = {
      allPosts: [],
      displayedPosts: []
    }

    this.filterPosts = this.filterPosts.bind(this);
  }

  componentDidMount() {
    this.setState({
      allPosts: postData,
      displayedPosts: postData
    });
  }

  filterPosts(criterion) {
    if (criterion === '') {
      this.setState({
        displayedPosts: this.state.allPosts
      });
    } else {
      const filteredPosts = this.state.allPosts.filter(post => post.username.includes(criterion));
      this.setState({
        displayedPosts: filteredPosts
      });
    }
  }

  render() {
    return (
      <div className="App">
        <header>
          <h1 className="App-title">imgram</h1>
          <SearchBar posts={this.state.displayedPosts} filterPosts={this.filterPosts}/>
        </header>
        <div className="Posts">
          {this.state.displayedPosts.map((post) => {
            return (
              <PostContainer post={post}/>        
            )
          })}
        </div>
      </div>
    );
  }
}

export default App;