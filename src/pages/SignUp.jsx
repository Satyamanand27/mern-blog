import { Link } from 'react-router-dom';
import { Label, TextInput } from 'flowbite-react';

export default function SignUp() {
  return (
    <div className='min-h-screen mt-20'>
      <div className='flex p-3 max-w-3xl mx-auto flex-col md:flex-row md:items-center gap-5'>
        
        <div className='flex-1'>
          <Link to='/' className='font-bold dark:text-white text-4xl'>
            <span className='px-2 py-1 bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 rounded-lg text-white'>
              The Write Spot
            </span>
          </Link>
          <p className='text-sm mt-5 italic'>
          Your thoughts, your stories, your topics — anything goes.
          </p>
        </div>

        
        <div className='flex-1'>
          <form className='flex flex-col gap-4'>
            <div>
              <p className='font-semibold'>Your Username</p>
              <Label value='Your username' />
              <TextInput type='text' placeholder='Username' id='username' />
            </div>
            <div>
            <p className='font-semibold'>Your Email</p>
              <Label value='Your email' />
              <TextInput type='email' placeholder='name@company.com' id='email' />
            </div>
            <div>
            <p className='font-semibold'>Your Password</p>
              <Label value='Your password' />
              <TextInput type='password' placeholder='Password' id='password' />
            </div>

            {/* Custom Styled Submit Button */}
            <button
              type='submit'
              className='px-4 py-2 bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 text-white rounded-lg text-lg font-semibold transition duration-200 hover:opacity-90'
            >
              Sign Up
            </button>
          </form>

          <div className='flex gap-2 text-sm mt-5'>
            <span>Have an account?</span>
            <Link to='/sign-in' className='text-blue-500'>
              Sign In
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
