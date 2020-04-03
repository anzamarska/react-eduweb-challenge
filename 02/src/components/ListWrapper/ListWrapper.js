
import React from 'react';
import ListItem from './ListItem/ListItem';
import styles from "./ListWrapper.module.scss";
import Title from '../Title/Title';

const ListWrapper = props => (
    <ul className={styles.wrapper}>
        <Title>Hej Duży Niedźwiedź, czy u Ciebie działa? U mnie działa... </Title>
        {props.items.map(item => (
            <ListItem
            key={item.name}
            {...item}
            />
         ))}
    </ul>
);

export default ListWrapper;

