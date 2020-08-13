import React, {Component} from 'react';
import logo from './logo.svg';
import './main-page.css';
import Header from './header';
import FeaturedHouse from './featured-house';

class App extends Component {

  // easy way to create  a state object
  state = {}

  // componentDidMount() triggers just after render() function is executed
  // good for doing all the initializatoins
  componentDidMount() {
    this.fetchHouses();
  }
  
  fetchHouses = () => {
    fetch('/houses.json')
    .then(response => response.json())
    .then(allHouses => {
      this.allHouses = allHouses;
      this.determineFeaturedHouse();
    })
  }

  determineFeaturedHouse = () => {
    if(this.allHouses) {
      const randomIndex = Math.floor(Math.random() * this.allHouses.length);
      const featuredHouse = this.allHouses[randomIndex];
      this.setState({ featuredHouse });
    };
  }

  // RENDER FUNCTION OF THE APP COMPONENT
  render(){
    return (
      <div className="container">
        <Header subtitle= "Providing houses all over the world"/>
        <FeaturedHouse house={ this.state.featuredHouse }/>
      </div>

    );
  }
}

export default App;
