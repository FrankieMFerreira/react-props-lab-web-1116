import React from 'react';
import ReactDOM from 'react-dom';

class Spaceship extends React.Component {
  render() {
    return (
      <div className="Spaceship">
        <h2>{this.props.name}</h2>
        <small>Speed: {this.props.speed}</small>
        <small>Does this spaceship have rockets: {this.props.hasRockets}</small>
        <small>colors: {this.props.colors}</small>
      </div>
    )
  }
}

Spaceship.defaultProps = {
  hasRockets: false,
  colors: ['black', 'red']
};

module.exports = Spaceship;


ReactDOM.render(
  <Spaceship />,
  document.getElementById('main')
);
