import React from 'react';
import styles from './Button.module.css';

export default function Button({children, disabled, onClick, variant = 'default', ...props})
{
    return (
        <button
            disabled={disabled} 
            {...props} 
            onClick={onClick} 
            className={
                [
                    styles.button,
                    (variant == 'default') ? styles.default : '',
                    (variant == 'soft') ? styles.soft : ''
                ].join(' ')
            }
        >
            {children}
        </button>
    );
}