import React from 'react';

export default function ErrorMessage({ error }) {
  return (
    <pre>
      Bad:{' '}
      {error.graphQLErrors.map(({ message }, i) => (
        <span key={i}>{message}</span>
      ))}
      <style jsx>{`
        pre {
          color: red;
        }
      `}</style>
    </pre>
  );
}
