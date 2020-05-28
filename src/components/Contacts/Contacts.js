import React from 'react';
import styles from './Contacts.module.css';

export default class Contacts extends React.Component {
    render () {
        return (
            <div className={styles.wrap}>
                Напиши мне в телеграме: @nikakr
            </div>
        )
    }
}