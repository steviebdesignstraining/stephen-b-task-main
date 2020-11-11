import React, { useContext } from 'react';
import { useRouter } from 'next/router';
import Link from 'next/link';

import { UserContext } from '../lib/userContext';

export default function Header() {
  const { pathname } = useRouter();
  const { user } = useContext(UserContext);

  return (
    <header>
      <img src="assets/LEGO-Logo.gif" alt="Lego" />
      <Link href="/">
        <a className={pathname === '/' ? 'active' : ''}>Home</a>
      </Link>
      <Link href="/about">
        <a className={pathname === '/about' ? 'active' : ''}>About</a>
      </Link>
      {user ? (
        <Link href="/logout">
          <a className={pathname === '/logout' ? 'active last' : 'last'}>
            Logout
          </a>
        </Link>
      ) : (
        <Link href="/login">
          <a className={pathname === '/login' ? 'active last' : 'last'}>
            Login
          </a>
        </Link>
      )}
      <style jsx>{`
        header {
          margin-bottom: 25px;
          padding: 10px;
          background-color: #ffcf00;
          display: flex;
          align-items: center;
        }
        img {
          margin-right: 20px;
        }
        a {
          font-size: 14px;
          margin-right: 20px;
          padding: 6px 20px;
          border-radius: 20px;
          text-decoration: none;
          color: #006db7;
          background-color: #ffffff;
          border: 2px solid #ffffff;
        }
        .active {
          background-color: #fef6d2;
          border-color: #006db7;
          font-weight: bold;
        }
        .last {
          margin-left: auto;
        }
      `}</style>
    </header>
  );
}
