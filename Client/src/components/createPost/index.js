// src/components/createPost/index.js
import React, { Component } from "react";
import ReactDOM from "react-dom";

import "./createPost.css";

class CreatePost extends Component {

  handleClick() {
    const data = {
        caption : '',
        image : '',
        postId:'',
        userId:''
    }
    this.props.toggle(data);
    
    console.log(data)
   };
  createPost = async (postBar, url) => {
    try {
      let postData = {
        userId: 'd',
        postId: 'sd',
        name: postBar.value,
        attahmentURL: url
      }
      const response = await fetch(
        'https://y12cb4g5ec.execute-api.us-east-1.amazonaws.com/dev/posts', {
        method: 'POST',
        mode: 'cors',
        body: JSON.stringify(postData)
      }
      )
      const data = await response.json();
      console.log("Post created:  ", data)
      alert("post submitted");
      postBar.value = "";
      await this.props.refreshPosts();
    }
    catch{
      alert("Fetching Posts failed")
    }

  }

  deletePost = async (userId, postId) => {
    try {
      let postData = {
        userId: userId
        
      }
      console.log("trying to delete post",userId,postId);
      const response = await fetch(
        `https://y12cb4g5ec.execute-api.us-east-1.amazonaws.com/dev/posts/${postId}`, {
        method: 'DELETE',
        mode: 'cors',
        body: JSON.stringify(postData)
      }
      )
      const data = await response.json();
      console.log("Post Deleted:  ", data);
      //alert("Post Deleted");
      this.handleClick();
      await this.props.refreshPosts();
    }
    catch{
      alert("Fetching Posts failed")
    }

  }


  

  render() {
    let caption='',userId='',postId='';
    if (this.props.data!==undefined){
     caption = this.props.data.caption;
     userId = this.props.data.userId;
     postId = this.props.data.postId;
    }
    console.log("createPost: ", this.props.data)
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

                <textarea className="Create-post-input" placeholder=".. my post" defaultValue={caption} ref="postContent"></textarea>

                {/* <input type="submit" value="Submit" /> */}
              </div>
            </div>
          </header>
          <div className="ButtonSection">
            {deleteOption ? null : <button className="ButtonClass">Photo</button>}
            <button className="ButtonClass" onClick={async () => await this.createPost(ReactDOM.findDOMNode(this.refs.postContent), "")}>Post</button>
            {deleteOption ? <button className="ButtonClass" onClick={async ()=> await this.deletePost(userId,postId)}>Delete</button> : null}
          </div>
        </div>

      </article>
    );
  }
}
export default CreatePost;