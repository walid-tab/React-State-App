import React from 'react'
import Counter from './Components/Counter';
class App extends React.Component {
  constructor() {
    super();
    this.state={
      isShow:true,
    }
  }
 
    render() { 
      
    return ( 
     
      <div>
        <button onClick={()=>this.setState({isShow:!this.state.isShow})}>
          {this.state.isShow?"Hide":"Show"}
        </button>
        {
          this.state.isShow && <Counter/>
        }
      </div>

     );
  }
}
 
export default App;