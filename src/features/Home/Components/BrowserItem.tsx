import React from "react";
import classNames from "classnames/bind";
import styles from "../index.module.css";
import {PhotoInterface} from "../../../interfaces/Models/PhotoInterface";
const cx = classNames.bind(styles);

interface Props {
    item: PhotoInterface,
    rule: 'odd' | 'even' | string,
}
const BrowserItem : React.FC<Props> = ({ item, rule }) => {
    return (
        <img className={cx('browser-item')} src={item.image.path} alt="item"/>
    )
}

export default BrowserItem;
