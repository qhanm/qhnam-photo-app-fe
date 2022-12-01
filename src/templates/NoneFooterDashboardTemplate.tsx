import React from "react";
import styles from "./index.module.css";
import classNames from "classnames/bind";
import useAuth from "../hooks/useAuth";

const cx = classNames.bind(styles)

const NoneFooterDashboardTemplate = ({children } : any) => {

    useAuth();

    return (
        <div className={cx('wrapper-home-layout')}>
            {
                children
            }
        </div>
    )
}


export default NoneFooterDashboardTemplate;
