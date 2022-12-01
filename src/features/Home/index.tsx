import React, {useEffect} from "react";
import styles from "./index.module.css";
import classNames from "classnames/bind";
import Heading2 from "../../components/composite/Heading/Heading2";
import Heading5 from "../../components/composite/Heading/Heading5";
import Item from "./Components/Item";
import BrowserItems from "./Components/BrowserItems";
import Button from "../../components/base/Button";
import {loadDiscover} from "./api";

const cx = classNames.bind(styles);

const Home = () => {

    useEffect(() => {
        fetchData().then();
    }, [])

    const fetchData = async () => {
        const res: any = await loadDiscover();
        console.log('res', res)
    }

    return (
        <div className={cx('wrapper')}>
            <Heading2>Discover</Heading2>
            <div className={cx('spacing-x2')}>
                <Heading5>What’s new today</Heading5>
            </div>
            <Item />

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
