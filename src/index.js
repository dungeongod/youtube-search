import React, { Component }  from 'react';
import ReactDom from 'react-dom';

import YTSearch from 'youtube-api-search';
import SearchBar from './components/search_bar';
import VideoList from './components/video_list';
import VideoDetail from './components/video_detail';

const API_KEY = 'AIzaSyCNy7rPrKlRpPo69dDphQAiRmLIDmAytAo';


class App extends React.Component {
  constructor(props) {
    super(props);

    this.state = { videos: [] };
    YTSearch({
      key:API_KEY, term:'surfboards'}, (videos) => {
        this.setState({ videos });
//this.setState({videos: videos});
    });
  }

render() {
  return (
    <div>
        <SearchBar />
        <VideoDetail video={this.state.video}/>
        <VideoList videos = {this.state.videos} />
    </div>

  );
}
}

ReactDom.render(<App />, document.querySelector('.container'));
