import React from 'react';
import { BurgerIcon } from 'components/svg-icons/burger-icon';

import dysonLogo from 'assets/images/dyson-logo.png';

import styles from './crypto-list-item.module.css';
import { Tag } from 'components/tag';
import { InstallStateButton } from 'components/install-state-button';

export const CryptoListItem = () => {
    return (
        <div className={styles['crypto-list-item']}>
            <div>
                <BurgerIcon />
            </div>
            <div>
                <img src={dysonLogo} alt="dyson-logo" />
            </div>
            <div>
                <h5 className={styles['crypto-list-item__title']}>Ethereum Contracts Example</h5>
                <p className={styles['crypto-list-item__wallet-id']}>0xC12......E3836</p>
            </div>
            <div className={styles['crypto-list-item__description']}>Feature adds tweets to Ethereum contract</div>
            <div className={styles['crypto-list-item__username']}>debra.holt</div>
            <div className={styles['crypto-list-item__tags']}>
                <Tag color="purple" text="Social Media" />
                <Tag color="purple" text="Finances" />
                <Tag color="purple" text="Twitter" />
                <Tag color="green" text="Top 100" />
            </div>
            <div>
                <InstallStateButton state={true} />
            </div>
        </div>
    );
};
