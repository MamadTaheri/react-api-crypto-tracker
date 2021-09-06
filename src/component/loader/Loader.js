import React from 'react';
import loading from '../../asset/gif/loading.gif'
import './Loader.css'

const Loader = () => {
    return (
        <div className="loading">
            <img src={loading} alt="Loading" />
        </div>
    );
};

export default Loader;