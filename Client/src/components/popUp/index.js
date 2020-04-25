import React, { Component } from "react";
import "./PopUp.css"
import CreatePost from "../createPost"
export default class PopUp extends Component {
  handleClick() {
   this.props.toggle();
  };
render() {
    console.log("pop-up: ", this.props.caption);
  return (
   <div className="modal">
       <div> 
       <span className="close" onClick={() =>this.handleClick()}>&times;    </span>
           <CreatePost avatar="https://homepages.cae.wisc.edu/~ece533/images/girl.png" deleteOption={true} caption={this.props.caption}/> 
           </div>
     {/* <div className="modal_content">
     <span className="close" onClick={() =>this.handleClick()}>&times;    </span>
     <p>I'm A Pop Up!!!</p>
    </div> */}
   </div>
  );
 }
}
