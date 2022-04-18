import React from 'react';
import notfound from '../../../images/notfound.png';

const NotFound = () => {
    return (
        <div style={{ textAlign: 'center', marginBottom: '100px' }}>
            <h2>Mechanic not in Store</h2>
            <img src={notfound} alt="" width="360" />
        </div>
    );
};

export default NotFound;