import React from "react";
import styles from "./index.module.css";
import classNames from "classnames/bind";
import useAuth from "../hooks/useAuth";

const cx = classNames.bind(styles)

const AuthTemplate = ({children} : any) => {

    return (
       <div className={cx('wrapper-auth-layout')}>
           {
               children
           }
       </div>
    )
}


export default AuthTemplate;
