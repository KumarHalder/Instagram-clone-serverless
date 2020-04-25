import React, { Component } from 'react';
import './App.css';
import Header from './components/Header';
import Post from './components/Post';
import PopUp from "./components/popUp"
import CreatePost from './components/createPost'
class App extends Component {
  constructor(props) {
    super(props);
    this.state = { seen: false };
    this.caption = "";
    
  }
  togglePop(data) {
    this.setState({
      seen: !this.state.seen
      
    });
    if (data){
        this.caption = data.caption
    }
    console.log(this.caption)
  };
  render() {
    return <div className="App">
       <div>{this.state.seen ? <PopUp toggle={(data) => this.togglePop(data)} caption={this.caption}/> : null}</div>
      <Header />
       

      <section className="App-main">

         <CreatePost avatar="https://homepages.cae.wisc.edu/~ece533/images/girl.png" /> 
        <Post nickname="Chris Mattblack" avatar="https://homepages.cae.wisc.edu/~ece533/images/girl.png" caption="Moving the community sdkjashd asdkjhask dkajssahdadkjash dkj kashd kasjh dkajshd kasj daskd askjd sakdhask askdhdhjkas dhasdjkash dkhsadkjs!" image="https://homepages.cae.wisc.edu/~ece533/images/girl.png" toggle={(data) =>this.togglePop(data)} />
        <Post nickname="OG" avatar="https://homepages.cae.wisc.edu/~ece533/images/girl.png" caption="doing some work" image="https://homepages.cae.wisc.edu/~ece533/images/girl.png" toggle={(data) =>this.togglePop(data)}/> 


        
      </section> 
    </div>;
  }
}

export default App;