import React from 'react';
import ReactDom from 'react-dom';

const VideoDetail = ({video}) => {
  if (!video) {
    return <p>Loading</p>;
  }
  const videoId = video.id.videoId;//
  const url = `https://wwww.youtube.com/embed/${videoId}`;
  //const url ="https://www.youtube.com/embed/" + videoId;
  return (
    <div className ="video-detail col-md-8">
      <div className = "embed-responsive embed-responsice-16by9">
      <iframe className ="embed-responsive-item" src={url}></iframe>
      </div>
      <div className="details">
      <div>{video.snippet.title}</div>
      <div>{video.snippet.description}</div>
      </div>
    </div>
  );
};
export default VideoDetail;
