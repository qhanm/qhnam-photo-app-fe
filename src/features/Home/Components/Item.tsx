import React, {useEffect} from "react";
import styles from "../index.module.css";
import classNames from "classnames/bind";
import Avatar from "../../../components/composite/Avatar";
import SlideDisplay from "./SlideDisplay";

const cx = classNames.bind(styles);
const Item = () => {

    useEffect(() => {

    }, [])


    return (
        <div>
            <div className={cx('item', 'transition')}>
                <SlideDisplay position={'left'} />
                <img src={require("../../../assets/images/img01.png")} alt="item" />
                <SlideDisplay position={'right'} />
            </div>
            <div className={cx('item-avatar')}>
                <Avatar />
                <div>
                    <div>Ridhwan Nordin</div>
                    <div className={cx('hashtag')}>@ridzjcob</div>
                </div>
            </div>
        </div>
    )
}

export default Item;
