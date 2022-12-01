import React from "react";
import styles from "./index.module.css";
import classNames from "classnames/bind";
import Heading2 from "../../components/composite/Heading/Heading2";
import { IoIosArrowBack } from "react-icons/io";
import ChatBox from "./Components/ChatBox";
import Contents from "./Components/Contents";
const cx = classNames.bind(styles);

const Message = () => {

    return (
        <div className={cx('wrapper')}>
            <div className={cx('heading')}>
                <div className={'p'}>
                    <Heading2>
                        <IoIosArrowBack className={'pr pointer'} />
                        Message
                    </Heading2>
                </div>
            </div>

            <div className={cx('body')}>
                <Contents />
                <ChatBox />
            </div>

        </div>
    )
}

export default Message;
