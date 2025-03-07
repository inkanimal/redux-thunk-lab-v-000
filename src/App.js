import React, { Component } from 'react';
import {Navbar} from 'react-bootstrap'
import { connect } from 'react-redux';
import { fetchCats } from './actions/catActions.js';

import CatList from './CatList';


class App extends Component {   
  
  componentDidMount() {
     this.props.fetchCats();
    }
  

  render() {
    return (
      <div className="App">
        <Navbar>
          <Navbar.Header>
            <Navbar.Brand>
              
            </Navbar.Brand>
          </Navbar.Header>
        </Navbar>
        <CatList catPics={this.props.catPics}/>
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  return { catPics: state.cats.pictures}
}

 
export default connect(mapStateToProps, { fetchCats})(App)

