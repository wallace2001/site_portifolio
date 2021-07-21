import React from 'react';
import styles from './styles.module.scss';

interface Props{
    title: string;
    description: string;
    name: string;
    reverse: boolean;
}

export const Products = ({title, description, name, reverse}: Props) => {
    return (
        <div className={styles.container}>
            <div className={!reverse ? styles.boxProduct : styles.boxProductReverse}>
                <h2>{title}</h2>
                <div className={styles.line} />

                <div className={styles.box}>
                    <img src="/sonhoveg.png" alt="" />
                    <label>
                        <h4>{name}</h4>
                        <p>{description}</p>
                    </label>
                </div>
            </div>
        </div>
    )
}
