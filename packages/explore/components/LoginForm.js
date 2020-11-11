import React, { useRef } from 'react';

export default function LoginForm({ submitLogin }) {
  const usernameEl = useRef(null);
  const passwordEl = useRef(null);
  function handleClick() {
    submitLogin({
      username: usernameEl.current.value,
      password: passwordEl.current.value,
    });
  }
  return (
    <div>
      <h1>Login</h1>
      <label>
        <input ref={usernameEl} type="text" placeholder="Username" />
      </label>
      <label>
        <input ref={passwordEl} type="password" placeholder="Password" />
      </label>
      <button type="button" onClick={() => handleClick()}>
        Login
      </button>
      <style jsx>{`
        label {
          font-weight: bold;
          margin: 0;
          padding: 6px 10px;
        }
        input {
          width: 100%;
          margin: 0;
          padding: 6px 8px;
          display: block;
        }
        input:hover {
          color: #006db7;
        }
        input:focus {
          color: #006db7;
        }

        button {
          background-color: #006db7;
          color: #ffffff;
          border: none;
          width: 100%;
          border-radius: 3px;
          padding: 10px 15px;
          margin: 0 auto 10px auto;
          text-align: center;
          font-size: 18px;
          text-decoration: none;
          cursor: pointer;
          display: block;
        }
      `}</style>
    </div>
  );
}
