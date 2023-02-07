import React from 'react';
import './App.css';
import SearchBox from '../components/SearchBox';

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
    </div>
  )

  }

}

export default App;
