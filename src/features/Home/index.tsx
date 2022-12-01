import React, {useEffect, useState} from "react";
import styles from "./index.module.css";
import classNames from "classnames/bind";
import Heading2 from "../../components/composite/Heading/Heading2";
import Heading5 from "../../components/composite/Heading/Heading5";
import Discover from "./Components/Discover";
import BrowserItems from "./Components/BrowserItems";
import Button from "../../components/base/Button";
import {loadDiscover} from "./api";
import {PhotoInterface} from "../../interfaces/Models/PhotoInterface";

const cx = classNames.bind(styles);

const Home = () => {

    return (
        <div className={cx('wrapper')}>
            <Heading2>Discover</Heading2>
            <div className={cx('spacing-x2')}>
                <Heading5>What’s new today</Heading5>
            </div>
            <Discover />

            <div className={cx('spacing-x2')}>
                <Heading5>Browse all</Heading5>
            </div>
            <BrowserItems />

            <div className={cx('spacing')}>
                <Button type={'btn-dark-outline'} content={'See more'}/>
            </div>
        </div>
    )
}

export default Home;
