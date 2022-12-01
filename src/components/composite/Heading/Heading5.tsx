import React from "react";
import classNames from "classnames/bind";
import styles from "./index.module.css";

const cx = classNames.bind(styles);

interface Props {
    children?: any,
}

const Heading5: React.FC<Props> = ({ children }) => {
    return (
        <h5 className={cx('h5')}>{ children }</h5>
    )
}

export default Heading5;
