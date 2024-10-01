import React from 'react';
import styled from 'styled-components';
import Wrapper from '../assets/wrappers/LandingPage';
import logo from '../assets/images/logo.svg';
import main from '../assets/images/main.svg';
import { Link } from 'react-router-dom';
import Logo from '../components/logo';


const Landing = (props) => {
  return (
    <Wrapper>
      <nav>
           <Logo/>
      </nav>
      <div className='container page'>
        <div className='info'>
          <h1>
            Moj <span>Home</span> Page
          </h1>
          <p>
            Prvi Home page, ki sem ga ustvaril za tečaj. 
          </p>
          <p>
              {props.ime} {props.priimek }
          </p>

          <Link to='/register' className='btn register-link'>
            Register
          </Link>
          <Link to='/login' className='btn'>
            Login / Demo User
          </Link>
        </div>
        <img src={main} alt='job hunt' className='img main-img' />
      </div>
    </Wrapper>
  );
};

export default Landing
