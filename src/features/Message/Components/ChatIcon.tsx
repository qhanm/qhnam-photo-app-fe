import React, {useState} from "react";
import styles from "../index.module.css";
import classNames from "classnames/bind";
import { SiIconify } from "react-icons/si";

const cx = classNames.bind(styles);

const ChatIcon = () => {
    // @ts-ignore
    const data : any= [...Array(150).keys()];

    const [openBoxIcon, setOpenBoxIcon] = useState(false);


    return (
        <div className={cx('chat-box-btn-parent')}>
            {
                openBoxIcon && (
                    <div className={cx('chat-box-icon')}>
                        <div className={cx('chat-box-icon-item')}>
                            {
                                data.map((item: any, index: number) => {

                                    return (
                                        <div key={index}>❤</div>
                                    )
                                })
                            }
                        </div>
                    </div>
                )
            }
            <div
                className={cx(
                    'chat-box-btn',
                    openBoxIcon && 'chat-box-active'
                )}
                onClick={() => { setOpenBoxIcon(!openBoxIcon) }}
            >

                <SiIconify
                    size={20}
                    className={"pointer"}
                />
            </div>
        </div>
    )
}

export default ChatIcon;
