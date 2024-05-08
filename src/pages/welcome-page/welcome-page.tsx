import React from 'react';
import cn from 'classnames';
import { GlassBlock } from 'components/glass-block';

import styles from './welcome-page.module.css';

export const WelcomePage = () => {
    return (
        <div className={styles.root}>
            <GlassBlock className={styles.glass}>
                <div className={styles.dapplets}>
                    dapplets<span className={styles.dapplets__dot}>.</span>
                </div>
                <h1 className={styles.title}>
                    Добро
                    <br />
                    пожаловать
                </h1>
                <p>в тестовое задание на должность Frontend Developer</p>
                <p>
                    Мы строим платформу Аугментированного веба, состоящую из браузерного плагина и децентрализованных
                    приложений (дапплетов), основанных на крипто-технологиях.
                </p>
                <p>Наша платформа создается по принципу open-source и доступна для разработчиков со всего мира.</p>
                <div className={styles['bottom-actions']}>
                    <button className={cn(styles.button, styles.button__desktop)}>desktop</button>
                    <button className={cn(styles.button, styles.button__mobile)}>mobile</button>
                </div>
            </GlassBlock>
        </div>
    );
};
