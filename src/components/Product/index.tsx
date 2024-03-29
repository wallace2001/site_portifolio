import React from 'react';
import styles from './styles.module.scss';

interface Props{
    item: {
        title: string;
        description: string;
        name: string;
        reverse: boolean;
        image: string;
        link: string;
    };
}

export const Product = ({item}: Props) => {
    return (
        <div className={styles.container}>
            <div className={!item.reverse ? styles.boxProduct : styles.boxProductReverse}>
                <h2>{item.title}</h2>
                <div className={styles.line} />

                <div className={styles.box}>
                    <img src={item.image}alt="" />
                    <label>
                        <h4>{item.name}</h4>
                        <p>{item.description}</p>
                        <a target="_blank" href={item.link}>{item.link === "#" ? "#" : "Ver o site"}</a>
                    </label>
                </div>
            </div>
        </div>
    )
}
