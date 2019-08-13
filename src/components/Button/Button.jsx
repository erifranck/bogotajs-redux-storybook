import React from 'react';
import PropTypes from 'prop-types';
import { classNames } from 'src/utils/classNames'

export const Button = (props) => {
    const classes = classNames('');
    return (
        <button className={`${props.className} ${classes}`} >
        </button>
    );
};

Button.propTypes = {
    className: PropTypes.string.isRequired,
    children: PropTypes.node.isRequired,
};
