// src/components/createPost/index.js
import React, { Component } from "react";

import "./createPost.css";

class CreatePost extends Component {

  render() {

    const caption = this.props.caption
    console.log("createPost: ",caption)
    const avatar = this.props.avatar;
    const deleteOption = this.props.deleteOption

    return (
      <article className="CreatePostDiv" ref="CreatePost">
        <div className="CreatePost">
        <header>
          <div className="Create-post-user">
            <div className="Create-post-user-avatar">
              <img src={avatar} alt="Chris" />
            </div>
            <div className="Create-post-div">
             
              <textarea className="Create-post-input" placeholder=".. my post" defaultValue={caption} ></textarea>
              
              {/* <input type="submit" value="Submit" /> */}
            </div>
          </div>
        </header>
        <div className="ButtonSection">
        {deleteOption ? null : <button className="ButtonClass">Photo</button> }
        <button className="ButtonClass">Post</button>
        {deleteOption ? <button className="ButtonClass">Delete</button> : null}
        </div>
        </div>

      </article>
    );
  }
}
export default CreatePost;