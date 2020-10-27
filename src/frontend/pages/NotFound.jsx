import React from 'react';
import { Link } from 'react-router-dom';
import Background from '../components/Background';

import '../styles/pages/NotFound.scss';

const NotFound = () => {
  return (
    <>
    <Background />
    <div className='notFound'>
        <h1>404</h1>
        <h3>Sorry the page that you're looking for is not currently available</h3>
        <Link to="/">
            <button>
                ⬅ Go home
            </button>
        </Link>
    </div>
    </>
  );
};

export default NotFound;