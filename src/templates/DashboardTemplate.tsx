import React from "react";
import styles from "./index.module.css";
import classNames from "classnames/bind";
import { SlHome, SlUser, SlBubble } from "react-icons/sl";
import { BsSearch } from "react-icons/bs";
import { AiOutlinePlus } from "react-icons/ai";
import {Helpers} from "../helpers";
import {Constants} from "../constants";
import {setAuthorization} from "../api/base";
import {setAuth} from "../app/AppStore";
import {useDispatch} from "react-redux";
import {Redirect} from "react-router-dom";

const cx = classNames.bind(styles)

const DashboardTemplate = ({children} : any) => {
    const size = 24;

    const dispatch = useDispatch();

    //useAuth();

    const token = Helpers.getStorage(Constants.store.accessToken);

    const user = Helpers.getStorage(Constants.store.user, true);
    const refreshToken = Helpers.getStorage(Constants.store.refreshToken);

    if(token && user && refreshToken){
        setAuthorization(token);

        dispatch(setAuth({
            user: user,
            token: token,
            refreshToken: refreshToken,
        }))
    }

    if(token) {
        setAuthorization(token);

        return (
            <div className={cx('relative')}>
                <div className={cx('wrapper-home-layout')} >
                    {
                        children
                    }
                </div>
                <div className={cx('footer-menu')}>
                    <div>
                        <SlHome size={size} />
                    </div>
                    <div>
                        <BsSearch size={size} />
                    </div>
                    <div>
                        <div className={cx('btn-add')}>
                            <AiOutlinePlus size={20} />
                        </div>
                    </div>
                    <div>
                        <SlBubble size={size} />
                    </div>
                    <div>
                        <SlUser size={size} />
                    </div>
                </div>
            </div>
        )
    }else{
        return <Redirect to={Constants.Route.login} />
    }

    return null;
}


export default DashboardTemplate;
