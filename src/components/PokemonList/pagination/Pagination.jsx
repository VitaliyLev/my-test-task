import React from 'react';

export default function Pagination({ setPage }) {
  return (
    <div>
      <button
        style={{ marginRight: 200 }}
        onClick={() => setPage(prev => prev - 1)}
      >
        Prev
      </button>
      <button onClick={() => setPage(prev => prev + 1)}>Next</button>
    </div>
  );
}
