import React from 'react';

const App = () => {
  return (
    <>
      {/* BOILERPLATE - TIMMYBYTES HEADER */}
      <div
        style={{
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'center',
          fontSize: '20px',
          marginTop: '60px',
        }}>
        <h1>
          <span
            style={{
              backgroundColor: '#1d1d1d',
              color: '#ee6868',
              fontWeight: '700',
              padding: '20px',
              borderRadius: '3px 0 0 3px',
              fontStyle: 'italic',
            }}>
            timmybytes
          </span>
          <span
            style={{
              display: 'inline',
              backgroundColor: '#ee6868',
              color: '#1d1d1d',
              marginBottom: '10px',
              padding: '20px',
              borderRadius: '0 3px 3px 0',
              fontWeight: '700',
            }}>
            template
          </span>
        </h1>
      </div>
    </>
  );
};

export default App;
