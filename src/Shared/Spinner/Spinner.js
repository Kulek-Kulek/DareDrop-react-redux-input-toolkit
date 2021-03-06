import React from 'react';

import './Spinner.css';

const Spinner = props => {
    return (
        <div className={`spinner ${props.classSpinner}`}>
            <div className="lds-roller"><div></div><div></div><div></div><div></div><div></div><div></div><div></div><div></div></div>
        </div>
    );
};

export default Spinner;
