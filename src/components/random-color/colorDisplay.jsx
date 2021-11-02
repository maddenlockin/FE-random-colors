import React from 'react';
import PropTypes from 'prop-types';

const ColorDisplay = ({ color }) => {
    return (
        <div
            style={{
                background: color,
                height: '1000px',
                width: '1000px',
                margin: '20px',
            }}
        ></div>
    );
};

ColorDisplay.propTypes = {
    color: PropTypes.string.isRequired
};

export default ColorDisplay;