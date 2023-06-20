import React, { Component } from 'react';

class SearchField extends Component {
  constructor(props) {
    super(props);
    this.state = {
      searchTerm: ''
    };
  }

  handleSubmit = (e) => {
    e.preventDefault();
    this.search();
  };

  handleChange = (e) => {
    this.setState({ searchTerm: e.target.value });
  };

  search = () => {
    const { searchTerm } = this.state;
    this.props.onSearch(searchTerm);
    this.setState({ searchTerm: '' });
  };

  render() {
    const { searchTerm } = this.state;

    return (
      <div>
        <form onSubmit={this.handleSubmit}>
          <input
            value={searchTerm}
            onChange={this.handleChange}
            placeholder="Enter what you are looking for:"
          />
          <button onClick={this.search}>Search</button>
        </form>
      </div>
    );
  }
}

export default SearchField;
