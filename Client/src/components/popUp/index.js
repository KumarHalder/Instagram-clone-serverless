import React, { Component } from "react";
import "./PopUp.css"
import CreatePost from "../createPost"
export default class PopUp extends Component {
  togglePop(data) {
   this.props.toggle(data);
  };
  refresh= async ()=>{
    console.log("conveying through popup")
    await this.props.refreshPosts()
  }
render() {
    console.log("pop-up: ", this.props.data);
  return (
   <div className="modal">
       <div> 
       <span className="close" onClick={() =>this.togglePop({userId:'',postId:'',caption:''})}>&times;    </span>
           <CreatePost 
           avatar="https://homepages.cae.wisc.edu/~ece533/images/girl.png" 
           deleteOption={true} data={this.props.data}
           toggle={(data) => this.togglePop(data)}
           refreshPosts={async ()=> await this.refresh()}
           /> 
           </div>
     {/* <div className="modal_content">
     <span className="close" onClick={() =>this.handleClick()}>&times;    </span>
     <p>I'm A Pop Up!!!</p>
    </div> */}
   </div>
  );
 }
}
