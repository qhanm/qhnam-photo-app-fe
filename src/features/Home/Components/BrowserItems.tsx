import React from "react";
import BrowserItem from "./BrowserItem";
import classNames from "classnames/bind";
import styles from "../index.module.css";
const cx = classNames.bind(styles);

const arrItems: Array<any> = [
    {
        id: 1,
        url: "../../../assets/images/browseItem2.png",
    },
    {
        id: 1,
        url: "../../../assets/images/browseItem2.png",
    },
    {
        id: 1,
        url: "../../../assets/images/browseItem2.png",
    },
    {
        id: 1,
        url: "../../../assets/images/browseItem2.png",
    },
    {
        id: 1,
        url: "../../../assets/images/browseItem2.png",
    },
    {
        id: 1,
        url: "../../../assets/images/browseItem2.png",
    },
    {
        id: 1,
        url: "../../../assets/images/browseItem2.png",
    },
    {
        id: 1,
        url: "../../../assets/images/browseItem2.png",
    },
    {
        id: 1,
        url: "../../../assets/images/browseItem2.png",
    },
    {
        id: 1,
        url: "../../../assets/images/browseItem2.png",
    },
]

const BrowserItems = ({  }) => {
    return (
        <div className={cx('browser-items')}>
            {
                arrItems?.map((item: any, index: number) => {

                    let rule: string = 'event';
                    if(( index + 1 ) % 5 === 0 || ( index + 1 ) % 5 === 1){
                        rule = 'odd';
                    }

                    return (
                        <BrowserItem key={index} item={item} rule={rule} />
                    )
                })
            }
        </div>
    )
}

export default BrowserItems;
