import React from 'react';
import cn from 'classnames';
import { GlassBlockProps } from './glass-block.types';

import styles from './glass-block.module.css';

export const GlassBlock = ({ children, className, ...divProps }: GlassBlockProps) => {
    return (
        <div className={cn(styles.root, className)} {...divProps}>
            {children}
        </div>
    );
};
