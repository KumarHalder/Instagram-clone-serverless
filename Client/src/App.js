import React from 'react';
import './App.css';
import NavBar from "./components/login/NavBar";

import PostManager from './postManager/PostManager'
import Header from './components/Header';
import { useAuth0 } from "./react-auth0-spa";

//import Post from './components/Post';
//import PopUp from "./components/popUp"
// class App extends Component {


//   render() {
//     return <div className="App">
//       <Header />
//       <section className="App-main">
//           <PostManager/>
//             {/* <Post nickname="o" avatar="https://homepages.cae.wisc.edu/~ece533/images/girl.png" caption="Moving the communit!" image='' toggle={(data) =>this.togglePop(data)} /> */}
//       </section> 
//     </div>;
//   }
// }

const App = () => {

  const { loading,user,idToken } = useAuth0();

  if (loading) {
    return <div>Loading...</div>;
  }
  console.log(idToken);
  if (user === undefined){
  return <div className="App">
    <header>
      <Header />
      <NavBar />
    </header>
  </div>;
}
else {return <div className="App">
<header>
  <Header />
  <NavBar />
</header>
<section className="App-main">
  <PostManager token={idToken} user={user}/>
  {/* <Post nickname="o" avatar="https://homepages.cae.wisc.edu/~ece533/images/girl.png" caption="Moving the communit!" image='' toggle={(data) =>this.togglePop(data)} /> */}
</section>
</div>;
}
}

export default App;