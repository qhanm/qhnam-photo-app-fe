import React from "react";
import styles from "./index.module.css";
import classNames from "classnames/bind";
import Avatar from "../Avatar";

const cx = classNames.bind(styles);

interface Props {
    color?: 'dark' | 'light' | string
}

const Profile: React.FC<Props> = ({ color }) => {
    return (
        <div className={cx('item-avatar', color)}>
            <Avatar />
            <div>
                <div>Ridhwan Nordin</div>
                <div className={cx('hashtag')}>@ridzjcob</div>
            </div>
        </div>
    )
}

export default Profile;
