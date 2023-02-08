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
  
   const {robots,searchField} = this.state;
   const filteredRobots=robots.filter(robot=>{
    return robot.name.toLowerCase().includes(searchField.toLowerCase())
  }) 


   
  return !robots.length ? 
  <h1 className="tc"> Robots are Loading...</h1>
  :
  (
    <div className='tc'>
      <h1 className="f2">Crazy Bots!</h1>
      <SearchBox searchChange={this.handleChange} />
      <Scroll>
        <CardList sendingRobotsToSearch={filteredRobots} />
      </Scroll>
    </div>
  );

  }

}

export default App;
