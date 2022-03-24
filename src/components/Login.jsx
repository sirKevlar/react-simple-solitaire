import React, { useState } from 'react';

export default function Login({ setCurrentUser }) {
  const [loginInput, setLoginInput] = useState();
  const [isInvalidUserName, setIsInvalidUserName] = useState(true);
  const userNames = [
    'k3vM0r3l',
    'p4m3l4M0r3l',
    'v1ckyM0r3l',
    'ph1lM0r3l',
    'amb3rM0r3l',
    'r2byM0r3l',
    'alysMJ',
    'islaPJ',
    'kyl3H2gg1ns',
    'v1s1tor0n3',
  ];

  return (
    <section className='login'>
      <div className='login-contents'>
        <h2 id='login-title'>Morel Family Solitaire</h2>
        <form
          onSubmit={(e) => {
            e.preventDefault();
            if (!isInvalidUserName) {
              setCurrentUser(loginInput);
            }
          }}
        >
          <label htmlFor='login-form'>Input Username </label>
          <input
            className={isInvalidUserName ? 'red-bg' : 'green-bg'}
            name='login-form'
            type='text'
            value={loginInput}
            onChange={(e) => {
              setLoginInput(e.target.value);
              const validName = userNames.filter((userName) => {
                return userName === e.target.value;
              });
              if (validName.length > 0) {
                setIsInvalidUserName(false);
              } else {
                setIsInvalidUserName(true);
              }
            }}
          />
          <button disabled={isInvalidUserName} className='login-button'>
            PLAY
          </button>
        </form>
      </div>
    </section>
  );
}
