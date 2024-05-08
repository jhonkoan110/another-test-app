import React from 'react';
import cn from 'classnames';
import { InsallStateButtonProps } from './install-state-button.types';

import styles from './install-state-button.module.css';

export const InstallStateButton = ({ state }: InsallStateButtonProps) => {
    return (
        <div
            className={cn(styles['install-state-button'], {
                [styles['install-state-button_true']]: state === true,
                [styles['install-state-button_false']]: state === false,
            })}>
            {state ? 'install' : 'installed'}
        </div>
    );
};
