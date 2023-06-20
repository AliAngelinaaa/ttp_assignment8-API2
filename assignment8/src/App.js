import React, { Component } from 'react';
import SearchField from './components/searchField';
import GifCard from './components/gifCard';
import API_KEY from './config';
import './App.css';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      gifs: []
    };
  }

  componentDidMount() {
    // Fetch trending gifs when the app mounts
    this.fetchTrendingGifs();
  }

  fetchTrendingGifs = async () => {
    try {
      const response = await fetch(`http://api.giphy.com/v1/gifs/trending?api_key=${API_KEY}`);
      const data = await response.json();
      this.setState({ gifs: data.data });
    } catch (error) {
      console.error('Error fetching trending gifs:', error);
    }
  };

  handleSearch = async (searchTerm) => {
    try {
      const response = await fetch(`http://api.giphy.com/v1/gifs/search?q=${searchTerm}&api_key=${API_KEY}`);
      const data = await response.json();
      this.setState({ gifs: data.data });
    } catch (error) {
      console.error('Error searching gifs:', error);
    }
  };

  render() {
    const { gifs } = this.state;

    return (
      <div>
        <h1>GIF Search App</h1>
        <SearchField onSearch={this.handleSearch} />
        <div className="gif-container">
          {gifs.map((gif) => (
            <GifCard key={gif.id} gif={gif} />
          ))}
        </div>
      </div>
    );
  }
}

export default App;
