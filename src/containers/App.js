import React from 'react';
import './App.css';
import SearchBox from '../components/SearchBox';
import CardList from '../components/CardList';

class App extends React.Component{

  constructor(){
    super()

  }
  
  handleChange=()=>{

  }

  render(){
  return(
    <div className='tc'>
      Robo Project !
      <SearchBox searchchange={this.handleChange} />
      <CardList  />
    </div>
  )

  }

}

export default App;
