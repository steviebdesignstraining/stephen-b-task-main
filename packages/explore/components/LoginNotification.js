import React, { useContext, useEffect, useState } from 'react';
import { UserContext } from '../lib/userContext';

export default function LoginNotification() {
  const [visible, setVisibility] = useState(false);
  const { user } = useContext(UserContext);

  const duration = 4000;

  useEffect(() => {
    let timer;
    if (user) {
      timer = setTimeout(() => setVisibility(false), duration);
      setVisibility(true);
    }
    return () => {
      if (timer) clearTimeout(timer);
    };
  }, [user]);

  return (
    <>
      {visible ? (
        <div className="notification">
          <p>Welcome, {user.user.username}!</p>
          <div className="progress progressing"></div>
        </div>
      ) : null}
      <style jsx>{`
        .notification {
          position: fixed;
          top: 10px;
          right: 10px;
          width: 300px;
          padding: 20px;
          background-color: #00c33b;
          border: 2px solid #009d2f;
          border-radius: 10px;
          overflow: hidden;
        }
        p {
          text-align: center;
          font-weight: bold;
          color: #ffffff;
        }
        .progress {
          position: absolute;
          bottom: 0;
          left: 0;
          width: 100%;
          height: 10px;
          background-color: hsla(138, 100%, 31%, 0.7);
          animation: grow ${duration}ms ease-in-out;
        }
        @keyframes grow {
          0% {
            transform: scaleX(0);
          }
          100% {
            transform: scaleX(1);
          }
        }
      `}</style>
    </>
  );
}
