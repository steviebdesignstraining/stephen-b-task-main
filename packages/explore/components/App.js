import React from 'react';

export default function App({ children }) {
  return (
    <main>
      {children}
      <style jsx global>{`
        html,
        body {
          padding: 0;
          margin: 0;
          font-family: -apple-system, BlinkMacSystemFont, Segoe UI, Roboto,
            Oxygen, Ubuntu, Cantarell, Fira Sans, Droid Sans, Helvetica Neue,
            sans-serif;
          font-weight: 200;
        }

        html {
          font-size: 100%/1.75;
        }

        body {
          line-height: 1.85;
        }

        * {
          box-sizing: border-box;
        }

        .full-width {
          width: 100%;
        }
      `}</style>
    </main>
  );
}
