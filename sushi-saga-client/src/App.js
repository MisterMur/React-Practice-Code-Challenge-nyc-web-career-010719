import React, { Component } from 'react';
import SushiContainer from './containers/SushiContainer';
import Table from './containers/Table';

// Endpoint!
const API = "http://localhost:3000/sushis"

class App extends Component {
  state={
    sushis:[],
    startSushi:0,
    endSushi:4,
    balance:100,
    sushisEatten:[]

  }
  getSushi(){
    fetch(API)
      .then(res=>res.json())
      .then(sushis=>{
        // console.log('in get Sushi', this.state.startSushi)
        this.setState({sushis:sushis.slice(this.state.startSushi,this.state.endSushi)})
      })
  }

  componentDidMount(){
    this.getSushi()
  }

  handleClick=()=>{
    // console.log('in handle click',this.state)
    this.setState({startSushi:this.state.startSushi+4,endSushi:this.state.endSushi+4})
    this.getSushi()
  }
  handleSushiEat=(sushi)=>{
    if(this.state.balance>sushi.price){
      // console.log('in sushi eat',sushi)
      let newSushisEatten = [...this.state.sushisEatten,sushi]
      this.setState({
        sushisEatten:newSushisEatten,
        balance:(this.state.balance-sushi.price)
      })
      console.log('YUM YUM YUM IN MY TUM')
      return 'YUM YUM YUM IN MY TUM'
    }else if (this.state.balance<sushi.price){
      console.log('your broke gtfo')
      return 'Your Broke GTFO'
    }
   }

  render() {
    // debugger
    // console.log(this.state.sushis)
    return (
      <div className="app">
        <SushiContainer
          sushis={this.state.sushis}
          sushisEatten={this.state.sushisEatten}
          handleSushiEat={this.handleSushiEat}
          handleClick={this.handleClick}
        />
        <Table
          sushisEatten={this.state.sushisEatten}
          balance={this.state.balance}
        />
      </div>
    );
  }
}

export default App;
