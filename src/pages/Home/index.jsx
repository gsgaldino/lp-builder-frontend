import React from 'react';

import api from 'services/api';

function Home() {
  const onClick = async () => {
    const response = await api.post('/page', {
      user: '630ffcc6447352866895f9d5',
    });
    console.log('RES', response);
  };

  return (
    <div>
      <button onClick={onClick} type="button">Click me</button>
    </div>
  );
}

export default Home;
