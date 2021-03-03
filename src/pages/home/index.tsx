import React from 'react';
import history from '../../common/history';

const Home = () => {
  return <div onClick={() => history.push('/1')}>1</div>;
};

export default Home;
