
import './App.css';
import Stars from './components/Stars'
import Button from './components/button';
import { Component } from 'react';
import Circles from './components/Circles';



class App extends Component {
  render() {
    return (
      <div className='contain'>
        <div className='square'>

          <div className='star'>
          <Stars/>
          </div>

          <div className='row text-container'>
            <h2>How did we do</h2>
            <p>lorem ipsum etc etc</p>
          </div>

          <div className='stars d-flex justify-content-center '>
            <Circles/>
          </div>

          <Button />
        </div>
      </div>
    );
  }
}

export default App;
