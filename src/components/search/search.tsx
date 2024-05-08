import React from 'react';
import cn from 'classnames';

import styles from './search.module.css';
import { SearchIcon } from 'components/svg-icons/search-icon';
import { TriangleIcon } from 'components/svg-icons/triangle-icon';

export const Search = () => {
    return (
        <div className={styles.root}>
            <div className={cn(styles.input, styles['search-container'])}>
                <SearchIcon />
                <input className={styles['search-input']} type="text" placeholder="Search" />
            </div>
            <div className={cn(styles.input, styles['select-input'])}>
                <div>Release Da asd</div>
                <TriangleIcon />
            </div>
            <div className={cn(styles.input, styles['select-input'])}>
                <div>Descending Select</div>
                <TriangleIcon />
            </div>
        </div>
    );
};
