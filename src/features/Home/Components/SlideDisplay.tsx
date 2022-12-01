import React from "react";
import styles from "../index.module.css";
import classNames from "classnames/bind";
import { IoIosArrowBack, IoIosArrowForward } from "react-icons/io";
const cx = classNames.bind(styles);

interface Props {
    position: 'left' | 'right',
    onClick: Function|any,
}

const SlideDisplay : React.FC<Props> = ({ position, onClick }) => {
    return (
        <div
            onClick={onClick}
            className={
                cx(
                    'slide-display',
                    position === 'left' ? 'slide-display-left' : 'slide-display-right'
                )
            }
        >
            {
                position === 'left'
                    ? <IoIosArrowBack color="white" size={40} />
                    : <IoIosArrowForward color="white" size={40} />
            }
        </div>
    )
}

export default SlideDisplay;
