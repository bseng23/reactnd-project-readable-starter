import React, { Component } from 'react';
import '../App.css';
import { Route } from 'react-router-dom'
import MainPage from './MainPage'
import DetailPost from './DetailPost'


class App extends Component {

  render() {
    return (
      <div>
        <Route exact path="/" render={() => (
          <MainPage />
        )} />
        <Route exact path="/detailpost" render={( {history} ) => (
          <DetailPost />
        )} />
     </div>      
    );
  }
}

export default App

//export default connect(mapStateToProp, mapDispatchToProps)(App);
