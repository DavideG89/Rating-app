import React, { useState } from 'react';
import './App.css';
import Stars from './components/Stars'
import Button from './components/button';
import Circles from './components/Circles';
import iconPhone from './illustration-thank-you.svg';


function App() {

  const [isSubmitted, setSubmitted] = useState(false);
  const [numbers, setNumbers] = useState([
    { number: '1' },
    { number: '2' },
    { number: '3' },
    { number: '4' },
    { number: '5' },
  ])
  const [value, setValue] = useState('');

  const white = {
    width: '130px'
  }




  return (
    // <div>
    //   {post.map(post =>{
    //     console.log(post)
    //   })}
    // </div>

    <div className='contain-bk'>

      {!isSubmitted &&

        <div className='square'>

          <div className="container-text">
            <div className='star d-flex'>
              <Stars />
            </div>
            <div className='row text-container'>
              <h2>How did we do?</h2>
              <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
            </div>

          </div>

          <div className="container-second">
            <div className='circle-container d-flex justify-content-between'>
              {numbers.map((number, id) => (
                <Circles key={id} number={number.number} setValue={setValue} />
              ))}
            </div>

            <Button text='Submit' setSubmitted={setSubmitted} />
          </div>
        </div>

      }

      {isSubmitted &&

        <div className="thanks-page">
          <div className="image">
            <img src={iconPhone} style={white} alt="" />
          </div>
          <div className="shape-info">
            You selected {value} out of 5
          </div>
          <div className="container-info d-flex flex-column text-center align-items-center">
            <div className="thankyou">
              <h2>Thank you!</h2>
              <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
            </div>
          </div>
        </div>

      }


    </div>
  );



};

export default App;
