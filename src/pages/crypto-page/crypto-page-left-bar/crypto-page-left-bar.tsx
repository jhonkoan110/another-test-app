import React from 'react';
import { GlassBlock } from 'components/glass-block';
import { ArrowIcon } from 'components/svg-icons/arrow-icon';
import { DappletsLogoIcon } from 'components/svg-icons/dapplets-logo-icon';

import styles from './crypto-page-left-bar.module.css';

export const CryptoPageLeftBar = () => {
    return (
        <GlassBlock className={styles['crypto-page-left-bar']}>
            <header className={styles['crypto-page-left-bar__header']}>
                <DappletsLogoIcon />
                <h4>Dapplets Project.</h4>
                <div className={styles['crypto-page-left-bar__arrow']}>
                    <ArrowIcon />
                </div>
            </header>
        </GlassBlock>
    );
};
