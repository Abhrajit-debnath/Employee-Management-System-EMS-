import React, { useState, useEffect } from 'react';

const Header = (props) => {
  const [username, setusername] = useState('');

  useEffect(() => {
    if (!props.data) {
      setusername('admin');
    } else {
      setusername(props.data.firstName);
    }
  }, [props.data]); 


  const handelLogout=() => {
    localStorage.setItem('loggedInUser','')
    props.changeUser('')
  }

  return (
    <div className='flex items-end justify-between'>
      <h1 className='text-2xl font-medium'>
        Hello <br />
        <span className='text-3xl font-semibold'>{username}</span>
      </h1>
      <button className='bg-red-500 py-3 px-8 rounded-full text-lg font-medium' onClick={handelLogout}>
        Log Out
      </button>
    </div>
  );
};

export default Header;
