import React from 'react';

export default function Container({ children }) {
  return (
    <div>
      {children}
      <style jsx>{`
        div {
          margin: 0 10px;
        }
        @media (min-width: 768px) {
          div {
            max-width: 768px;
            width: 100%;
            padding-right: 1.25rem;
            padding-left: 1.25rem;
            margin-right: auto;
            margin-left: auto;
          }
        }
      `}</style>
    </div>
  );
}
