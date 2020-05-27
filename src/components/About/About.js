import React from 'react';
import styles from './About.module.css';

export default class About extends React.Component {
    render () {
        return (
            <div className={styles.wrap}>
                Привет! Я Ника :)
            </div>
        )
    }
}