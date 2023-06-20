import React from 'react';

class GifCard extends React.Component {
  render() {
    const { gif } = this.props;

    return (
      <div className="gif-card">
        <img src={gif.images.fixed_height.url} alt={gif.title} />
        <br />
        <h3>{gif.title}</h3>
      </div>
    );
  }
}

export default GifCard;
