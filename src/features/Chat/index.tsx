import React from "react";
import styles from "./index.module.css";
import classNames from "classnames/bind";
import Heading2 from "../../components/composite/Heading/Heading2";
import Items from "./Components/Items";

const cx = classNames.bind(styles);

const Chat = () => {

    return (
        <div className={cx('wrapper')}>
            <div className={cx('heading')}>
                <div className={'p'}>
                    <Heading2>Chats</Heading2>
                </div>
            </div>
            <Items />
        </div>
    )
}

export default Chat
