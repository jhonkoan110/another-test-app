import React from 'react';

import styles from './crypto-page.module.css';
import { GlassBlock } from 'components/glass-block';
import { CloudIcon } from 'components/svg-icons/cloud-icon';
import { CarbonSettingsIcon } from 'components/svg-icons/carbon-settings-icon';
import { Search } from 'components/search';
import { CryptoListItem } from 'components/crypto-list-item';
import { CryptoPageLeftBar } from './crypto-page-left-bar';

export const CryptoPage = () => {
    return (
        <div style={{display: 'flex', justifyContent: 'center'}}>
            <div className={styles.root}>
                <CryptoPageLeftBar />
                <div>
                    <header className={styles.header}>
                        <div className={styles.header__left}>
                            <CloudIcon />
                            <span className={styles.header__left_state}>
                                Extension state: <span className={styles.header__left_active}>Active</span>
                            </span>
                        </div>
                        <div className={styles.header__right}>
                            <CarbonSettingsIcon />
                            <span>Settings</span>
                        </div>
                    </header>
                    <main className={styles.main}>
                        <GlassBlock className={styles['main-glass']}>
                            <Search />
                            <div className={styles['crypto-list']}>
                                <CryptoListItem />
                                <CryptoListItem />
                                <CryptoListItem />
                                <CryptoListItem />
                                <CryptoListItem />
                                <CryptoListItem />
                                <CryptoListItem />
                                <CryptoListItem />
                                <CryptoListItem />
                                <CryptoListItem />
                                <CryptoListItem />
                                <CryptoListItem />
                                <CryptoListItem />
                                <CryptoListItem />
                                <CryptoListItem />
                                <CryptoListItem />
                                <CryptoListItem />
                                <CryptoListItem />
                                <CryptoListItem />
                                <CryptoListItem />
                            </div>
                        </GlassBlock>
                    </main>
                </div>
                <GlassBlock>right</GlassBlock>
            </div>
        </div>
    );
};
