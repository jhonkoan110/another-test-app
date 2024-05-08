import React from 'react';
import cn from 'classnames';
import { CrossIcon } from 'components/svg-icons/cross-icon';
import { TagProps } from './tag.types';

import styles from './tag.module.css';

const colorStyles = {
    green: styles.tag_green,
    purple: styles.tag_purple,
};

export const Tag = ({ color, text }: TagProps) => {
    return (
        <div className={cn(styles.tag, colorStyles[color])}>
            <span>{text}</span>
            <CrossIcon />
        </div>
    );
};
