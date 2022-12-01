import React from "react";
import styles from "./index.module.css";
import classNames from "classnames/bind";
import Profile from "../../components/composite/Profile";
import Grid from "../../components/composite/Grid";
import { IoCloseOutline } from "react-icons/io5";

const cx = classNames.bind(styles);

const Photo = ({}) => {
    return (
        <div className={cx('wrapper')} style={{ backgroundImage: "url(https://www.w3schools.com/w3css/img_forest.jpg)" }}>
            <Grid col={2}>
                <Profile color={'light'} />
                <div className={cx('close')}>
                    <IoCloseOutline size={24} />
                </div>
            </Grid>
        </div>
    )
}

export default Photo;
