import React from "react";
import styles from "./index.module.css";
import classNames from "classnames/bind";

const cx = classNames.bind(styles);

interface Props {
    size?: 's' | 'm' | 'l' | string
}

const Avatar: React.FC<Props> = ({ size = 's' }) => {
    return (
        <div>
            <img className={ cx("avatar", size) } src={require("../../../assets/images/img01.png")} alt="avatar"/>
        </div>
    )
}

export default Avatar;
