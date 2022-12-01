import React, {useState} from "react";
import styles from "../index.module.css";
import classNames from "classnames/bind";
import { AiOutlineSend } from "react-icons/ai";
import ChatIcon from "./ChatIcon";

const cx = classNames.bind(styles);

const ChatBox = () => {
    return (
        <div className={cx('chat-box')}>
            <input
                type="text"
                className={cx("chat-input")}
                placeholder={"Enter message"}
            />
            <ChatIcon />
            <div className={cx('chat-box-btn')}>
                <AiOutlineSend size={20} className={"pointer"} />
            </div>
        </div>
    )
}

export default ChatBox;
