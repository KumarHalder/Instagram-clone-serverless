import React, { Component } from 'react';
import './App.css';
import PostManager from './postManager/PostManager'
import Header from './components/Header';
//import Post from './components/Post';
//import PopUp from "./components/popUp"
class App extends Component {
  constructor(props) {
    super(props);
    this.state = { seen: false };
    
  }

async componentDidMount() {
  // this.getRecipes();
}
  render() {
    return <div className="App">
       
      <Header />
       

      <section className="App-main">
          
          <PostManager toggle={(data) =>this.togglePop(data) }/>

            {/* <Post nickname="o" avatar="https://homepages.cae.wisc.edu/~ece533/images/girl.png" caption="Moving the communit!" image='' toggle={(data) =>this.togglePop(data)} /> */}

        

       
        
      </section> 
    </div>;
  }
}

export default App;