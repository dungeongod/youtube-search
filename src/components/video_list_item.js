import React from 'react';
import ReactDom from 'react-dom';

const VideoListItem = ({video}) => {  //es6 syntax
const imageUrl = video.snippet.thumbnails.default.url;
  //const video = props.video;
  return (
    <li className ="list-group-item">
      <div className="video-list media">
        <div className ="media-left">
        <img className = "media-object" src={imageUrl} />

        <div className = "media-body">
            <div className ="media-heading">{video.snippet.title}</div>
        </div>
        </div>
      </div>
    </li>
  );
};

export default VideoListItem;
