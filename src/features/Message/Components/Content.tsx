import React from "react";
import styles from "../index.module.css";
import classNames from "classnames/bind";
import Avatar from "../../../components/composite/Avatar";

const cx = classNames.bind(styles);

interface Props {
    item: any,
}

const Content: React.FC<Props> = ({ item }) => {
    return (
        <div className={cx('content-item', `content-item-${item.position}`)}>
            <Avatar />
            <div className={cx('content-item-message')}>
                { item?.content }
            </div>
        </div>
    )
}

export default Content;
