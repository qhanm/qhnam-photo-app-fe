import React from "react";
import styles from "../index.module.css";
import classNames from "classnames/bind";
import Avatar from "../../../components/composite/Avatar";

const cx = classNames.bind(styles);

const Item = () => {
    return (
        <div className={cx('item')}>
            <Avatar size={'m'} />
            <div>
                <div className={cx('author')}>Quách hoài nam</div>
                <div>
                    I’m looking for tips around capturing the milky way. I have a 6D with a...
                </div>
            </div>
        </div>
    )
}

export default Item;
