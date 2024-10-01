import  {Logo}  from '../components';
import Wrapper from '../assets/wrappers/RegisterAndLoginPage';
import { Link } from 'react-router-dom';


const Register = () => {
  return (
    <Wrapper>
      <form className='form'>
        <Logo />
        <h4>Register</h4>
        <div className='form-row'>
          <label htmlFor='Name' className='form-label'>
            Ime
          </label>
          <input
            type='text'
            id='name'
            name='name'
            className='form-input'
            defaultValue='Peter'
            required
          />
        </div>

        <button type='submit' className='btn btn-block'>
          potrdi
        </button>
        <p>
          Ste ze registrerani?
          <Link to='/login' className='member-btn'>
            Login
          </Link>
        </p>
      </form>
    </Wrapper>
  );
};


export default Register;