// src/components/Post/index.js
import React, { Component } from "react";
//import PopUp from "../popUp"
import "./Post.css";

class Post extends Component {
    constructor(props) {
        super(props);
        this.state = { seen: false};
      }
    shoot(a) {
        alert(a);
    }
    
    // togglePop() {
    //     this.setState({
    //         seen: !this.state.seen
    //     });
    //     console.log(this.state)
    // };
    handleClick() {
        const data = {
            caption : this.props.caption,
            image : this.props.image
        }
        this.props.toggle(data);
        
        //console.log(data)
       };

    render() {
        const nickname = this.props.nickname;
        const avatar = this.props.avatar;
        const image = this.props.image;
        //console.log(image==="")
        const caption = this.props.caption;

        return (
            <article className="Post" ref="Post">
                <header>
                    <div className="Post-user">
                        <div className="Post-user-avatar">
                            <img src={avatar} alt="Chris" />
                        </div>
                        <div className="Post-user-nickname">
                            <span>{nickname}</span>
                        </div>
                        <button className="optionButton" onClick={() =>this.handleClick()}>...</button>
                    </div>
                    {/* <div>{this.state.seen ? <PopUp toggle={() =>this.togglePop()} /> : null}</div> */}
                    
                </header >
            <div className="Post-image">
                <div className="Post-image-bg">
                    {image!=="" ? <img alt="Icon Living" src={image} /> : null} 
                </div>
            </div>
            <div className="Post-caption">
                <strong>{nickname}</strong> {caption}
            </div>
            </article >
        );
    }
}
export default Post;