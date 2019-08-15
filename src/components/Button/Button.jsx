import React from 'react';
import PropTypes from 'prop-types';
import { classNames } from '../../utils/classNames'

export const Button = (props) => {
    const classes = classNames({
        'bx-btn': true,
        'bx-btn-primary': props.primary && !props.secondary,
        'bx-btn-secondary': props.secondary && !props.primary,
    });
    return (
        <button
            onClick={props.onClick}
            className={`${props.className} ${classes}`} >
            {props.children}
        </button>
    );
};

Button.propTypes = {
    className: PropTypes.string.isRequired,
    children: PropTypes.node.isRequired,
    onClick: PropTypes.func.isRequired,
};
