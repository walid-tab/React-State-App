import React from 'react'
class Counter extends React.Component {
  constructor() {
    super();
    this.state={
      count:0,      
    }
  }
  componentDidMount(){
    console.log("componentDidMount");
  }

  componentDidUpdate(){
    console.log("componentDidUpdate");
  }
  componentWillUnmount(){
    console.log("componentWillUnmount");
  }
    render() { 
    return ( 
      <div>
          <h1>Counter App Class Component</h1>
        <button onClick={()=>this.setState({count:this.state.count+1})}>+</button>
        <span>{this.state.count}</span>
        <button onClick={()=>this.setState({count: 
          this.state.count>0 ? this.state.count -1 : this.state.count, })}>-</button>

      </div>

     );
  }
}
 
export default Counter;