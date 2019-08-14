import React from 'react';
import PropTypes from 'prop-types';
import { classNames } from 'src/utils/classNames'

export const Button = (props) => {
    const classes = classNames({
        'bx-btn': true,
        'bx-btn-primary': props.primary,
        'bx-btn-secondary': props.secondary,
    });
    return (
        <button className={`${props.className} ${classes}`} >
            {props.children}
        </button>
    );
};

Button.propTypes = {
    className: PropTypes.string.isRequired,
    children: PropTypes.node.isRequired,
};
