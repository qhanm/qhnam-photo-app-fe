import React from "react";
import classNames from "classnames/bind";
import styles from "../index.module.css";
const cx = classNames.bind(styles);

interface Props {
    item: any,
    rule: 'odd' | 'even' | string,
}
const BrowserItem : React.FC<Props> = ({ item, rule }) => {
    return (
        <img className={cx('browser-item', rule)} src={require("../../../assets/images/browseItem2.png")} alt="item"/>
    )
}

export default BrowserItem;
