import React from 'react';
import './App.css';
import SearchBox from '../components/SearchBox';
import CardList from '../components/CardList';
import Scroll from '../components/Scroll';
class App extends React.Component{

  constructor(){
    super()
    this.state={
      robots:[],
      searchField:" ",
    }
    

  }
  
  componentDidMount(){
    fetch('https://jsonplaceholder.typicode.com/users')
    .then(resp=>{
       return resp.json();
    })
    .then(users=>{
        this.setState({robots:users})
    })

  }

  handleChange=(event)=>{
  this.setState({searchField:event.target.value})
 
  }
 

  render(){
  

  return(
    <div className='tc'>
    console.log(this.state.searchField)

      <h1 className="f2">Crazy Bots!</h1>
      <SearchBox searchChange={this.handleChange} />
      <Scroll>
        
        <CardList  />

      </Scroll>
    </div>
  )

  }

}

export default App;
