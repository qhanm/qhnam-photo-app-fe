import React from "react";
import classNames from "classnames/bind";
import styles from "./index.module.css";

const cx = classNames.bind(styles);

interface Props {
    children?: any,
}

const Heading2: React.FC<Props> = ({ children }) => {
    return (
        <h2 className={cx('h2')}>{ children }</h2>
    )
}

export default Heading2;
