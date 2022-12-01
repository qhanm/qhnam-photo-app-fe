import React from "react";
import styles from "../index.module.css";
import classNames from "classnames/bind";
import Content from "./Content";

const cx = classNames.bind(styles);

const Contents = () => {
    return (
        <div className={cx('content')}>
            {
                arrContent?.map((item: any, index: number) => {
                    return (
                        <Content item={item} key={index} />
                    )
                })
            }
        </div>
    )
}

export default Contents;


const arrContent : any = [
    {
        content: "Really love your most recent photo. I’ve been trying to capture the same thing for a few months and would love some tips!",
        position: "left",
    },
    {
        content: "A fast 50mm like f1.8 would help with the bokeh. I’ve been using primes as they tend to get a bit sharper images.",
        position: "right",
    },
    {
        content: "To display an automatic slideshow is even simpler.",
        position: "right",
    },
    {
        content: "Really love your most recent photo. I’ve been trying to capture the same thing for a few months and would love some tips!",
        position: "left",
    },
    {
        content: "You only need a little different JavaScript:",
        position: "left",
    },
    {
        content: "Really love your most recent photo. I’ve been trying to capture the same thing for a few months and would love some tips!",
        position: "left",
    },
    {
        content: "To display an automatic slideshow is even simpler.",
        position: "right",
    },
    {
        content: "Really love your most recent photo. I’ve been trying to capture the same thing for a few months and would love some tips!",
        position: "left",
    },
]
