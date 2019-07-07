import React, { Component } from 'react';
import Track from '../components/Track';
import Header from '../components/Header';

const API = 'https://itunes.apple.com/us/rss/topsongs/limit=100/json';

class Page extends Component {
  state = {
    hitsArray: [],
  };

  componentDidMount() {
    fetch(API)
      .then(response => response.json())
      .then(data => this.setState({ hitsArray: data.feed.entry }));
  }

  render() {
    const { hitsArray } = this.state;

    return (
      <div className="main">
        <Header/>
        <ul className="main-list">
          {hitsArray.map((hit, index) => <Track key={hit.id.attributes['im:id']} item={hit} index={index} /> )}
        </ul>
      </div>
    );
  }
}

export default Page;
