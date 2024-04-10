import CreatePost from "./CreatePost";
import React from 'react';
import './Feed.css'; 
import DisplayPosts from "./DisplayPosts";

const Feed = ({ receiveData }) => {
  return (
    <div className="feed-container">
        <CreatePost receiveDataFromFeed={receiveData}/>
        <DisplayPosts/>
    </div>
  );
};

export default Feed;
